'use client';

import { useEffect } from 'react';

interface MetaTagsProps {
  title: string;
  description: string;
  date: string;
  color?: string;
}

export default function MetaTags({ title, description, date, color }: MetaTagsProps) {
  useEffect(() => {
    // Update document title
    document.title = `${title} - Upcoming Countdown`;

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string, isProperty = true) => {
      const attrName = isProperty ? 'property' : 'name';
      let metaTag = document.querySelector(`meta[${attrName}="${property}"]`);

      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute(attrName, property);
        document.head.appendChild(metaTag);
      }

      metaTag.setAttribute('content', content);
    };

    // Update standard meta tags
    updateMetaTag('description', description, false);

    // Update Open Graph meta tags
    updateMetaTag('og:title', `${title} - Upcoming Countdown`);
    updateMetaTag('og:description', description);
    updateMetaTag('og:url', window.location.href);

    // Use static Upcoming icon for OG image (API routes not available with static export)
    const ogImageUrl = 'https://benpust.com/upcoming-icon.png';
    updateMetaTag('og:image', ogImageUrl);

    // Update Twitter Card meta tags
    updateMetaTag('twitter:title', `${title} - Upcoming Countdown`, false);
    updateMetaTag('twitter:description', description, false);
    updateMetaTag('twitter:image', ogImageUrl, false);

  }, [title, description, date, color]);

  return null;
}