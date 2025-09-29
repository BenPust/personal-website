// Static metadata for Open Graph - will be overridden by dynamic tags where possible
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Upcoming Countdown',
  description: 'Track special events and countdowns with Upcoming',
  openGraph: {
    title: 'Upcoming Countdown',
    description: 'Track special events and countdowns with Upcoming',
    type: 'website',
    url: 'https://benpust.com/upcoming/e',
    images: [{
      url: 'https://benpust.com/upcoming-icon.png',
      width: 1024,
      height: 1024,
      alt: 'Upcoming - Countdown Event App',
    }],
    siteName: 'Upcoming',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Upcoming Countdown',
    description: 'Track special events and countdowns with Upcoming',
    images: ['https://benpust.com/upcoming-icon.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
};

// Minimal footer component for countdown pages
function MinimalFooter() {
  return (
    <footer className="minimal-footer absolute bottom-0 left-0 right-0 z-20 py-6 text-center text-white/80 text-sm">
      <div className="space-y-2">
        <p>
          <a href="mailto:contact@benpust.com" className="hover:text-white transition-colors">
            contact@benpust.com
          </a>
        </p>
        <p>© {new Date().getFullYear()} Ben Pust. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function CountdownLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <MinimalFooter />
    </>
  );
}