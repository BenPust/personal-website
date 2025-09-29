'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import MetaTags from './MetaTags';

interface EventData {
  t: string;  // title
  d: string;  // date
  c?: string; // color (hex)
  a?: boolean; // allDay
  r?: boolean; // recurring
}

function decodeEventData(encodedString: string): EventData | null {
  try {
    const decoded = decodeURIComponent(encodedString);
    const json = atob(decoded);
    return JSON.parse(json);
  } catch (error) {
    console.error('Failed to decode event data:', error);
    return null;
  }
}

function calculateTimeRemaining(targetDate: Date) {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds, isPast: false };
}

export default function CountdownPage() {
  const pathname = usePathname();
  const [event, setEvent] = useState<EventData | null>(null);
  const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: false });
  const [isIOS, setIsIOS] = useState(false);
  const [attemptedAppOpen, setAttemptedAppOpen] = useState(false);
  const [idString, setIdString] = useState<string>('');

  useEffect(() => {
    // Extract ID from hash or pathname
    // Try hash first (e.g., /upcoming/e#ABC123)
    let extractedId = window.location.hash.substring(1);

    // If no hash, try pathname (e.g., /upcoming/e/ABC123)
    if (!extractedId) {
      const pathParts = pathname.split('/');
      extractedId = pathParts[pathParts.length - 1];
    }

    if (extractedId && extractedId !== 'e') {
      setIdString(extractedId);
      const decoded = decodeEventData(extractedId);
      setEvent(decoded);
    }

    // Check if iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(iOS);

    // Track page view with Firebase Analytics (if available)
    if (typeof window !== 'undefined' && (window as any).gtag && extractedId) {
      (window as any).gtag('event', 'countdown_viewed', {
        event_category: 'engagement',
        event_label: extractedId,
      });
    }
  }, [pathname]);

  useEffect(() => {
    if (!event) return;

    // Update countdown every second
    const timer = setInterval(() => {
      const targetDate = new Date(event.d);
      setTimeRemaining(calculateTimeRemaining(targetDate));
    }, 1000);

    // Initial calculation
    const targetDate = new Date(event.d);
    setTimeRemaining(calculateTimeRemaining(targetDate));

    return () => clearInterval(timer);
  }, [event]);

  useEffect(() => {
    // Try to open in app on iOS devices
    if (isIOS && event && !attemptedAppOpen && idString) {
      setAttemptedAppOpen(true);
      const appUrl = `upcoming://add-event?data=${idString}`;

      // Try to open the app
      window.location.href = appUrl;

      // If we're still here after 2.5 seconds, app didn't open
      setTimeout(() => {
        if (!document.hidden) {
          // App didn't open, user will see the web view
          console.log('App not installed or failed to open');
        }
      }, 2500);
    }
  }, [isIOS, event, attemptedAppOpen, idString]);

  const handleOpenInApp = () => {
    const appUrl = `upcoming://add-event?data=${idString}`;
    window.location.href = appUrl;

    // Track action
    if ((window as any).gtag) {
      (window as any).gtag('event', 'open_app_clicked', {
        event_category: 'engagement',
        event_label: idString,
      });
    }

    setTimeout(() => {
      if (!document.hidden) {
        handleGetApp();
      }
    }, 2500);
  };

  const handleGetApp = () => {
    // Track action
    if ((window as any).gtag) {
      (window as any).gtag('event', 'get_app_clicked', {
        event_category: 'engagement',
        event_label: idString,
      });
    }

    // Replace with your actual App Store ID
    window.location.href = 'https://apps.apple.com/app/upcoming-countdown-event/id1355138863';
  };

  const handleAddToCalendar = () => {
    if (!event) return;

    const date = new Date(event.d);
    const endDate = new Date(date.getTime() + (event.a ? 24 * 60 * 60 * 1000 : 60 * 60 * 1000));

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${event.t}
DTSTART:${date.toISOString().replace(/[-:]/g, '').replace('.000', '')}
DTEND:${endDate.toISOString().replace(/[-:]/g, '').replace('.000', '')}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${event.t.replace(/\s+/g, '_')}.ics`;
    link.click();
    URL.revokeObjectURL(url);

    // Track action
    if ((window as any).gtag) {
      (window as any).gtag('event', 'add_to_calendar', {
        event_category: 'engagement',
        event_label: idString,
      });
    }
  };

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white text-center">
          <h1 className="text-2xl mb-4">Loading countdown...</h1>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string, isAllDay: boolean = false) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = isAllDay
      ? { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      : { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit' };
    return date.toLocaleDateString('en-US', options);
  };

  const backgroundColor = event.c || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  const isGradient = backgroundColor.includes('gradient');

  return (
    <>
      {/* Dynamic meta tags */}
      {event && (
        <MetaTags
          title={event.t}
          description={`Counting down to ${event.t} on ${formatDate(event.d, event.a)}`}
          date={event.d}
          color={event.c}
        />
      )}

      <div
        className="min-h-screen relative flex items-center justify-center"
        style={{
          background: isGradient ? backgroundColor : undefined,
          backgroundColor: !isGradient ? backgroundColor : undefined
        }}
      >
        {/* Content */}
        <div className="relative z-10 text-white p-8 text-center max-w-2xl mx-auto">
        {/* Countdown Display */}
        <div className="mb-12">
          {timeRemaining.isPast ? (
            <div>
              <div className="text-6xl md:text-8xl font-bold mb-2">Complete!</div>
              <div className="text-xl opacity-90">This event has ended</div>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl md:text-4xl font-bold">{timeRemaining.days}</div>
                <div className="text-sm opacity-90">days</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl md:text-4xl font-bold">{timeRemaining.hours}</div>
                <div className="text-sm opacity-90">hours</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl md:text-4xl font-bold">{timeRemaining.minutes}</div>
                <div className="text-sm opacity-90">minutes</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl md:text-4xl font-bold">{timeRemaining.seconds}</div>
                <div className="text-sm opacity-90">seconds</div>
              </div>
            </div>
          )}
        </div>

        {/* Event Details */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{event.t}</h1>
        <p className="text-lg md:text-xl opacity-90 mb-12">
          {formatDate(event.d, event.a)}
        </p>

        {/* Action Buttons */}
        <div className="space-y-4">
          {isIOS && (
            <button
              onClick={handleOpenInApp}
              className="w-full md:w-auto px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg hover:bg-gray-100 transition"
            >
              Open in Upcoming
            </button>
          )}

          {isIOS && (
            <button
              onClick={handleGetApp}
              className="block w-full md:inline-block md:w-auto px-8 py-4 border-2 border-white rounded-full font-semibold text-lg hover:bg-white/10 transition"
            >
              Get the App
            </button>
          )}

          <button
            onClick={handleAddToCalendar}
            className="block w-full md:inline-block md:w-auto px-8 py-4 border-2 border-white/50 rounded-full text-lg hover:bg-white/10 transition"
          >
            Add to Calendar
          </button>

          {!isIOS && (
            <div className="mt-8 text-sm opacity-75">
              Upcoming is available for iPhone and iPad
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
}