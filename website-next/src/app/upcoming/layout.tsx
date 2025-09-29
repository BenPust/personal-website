'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function UpcomingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isCountdownPage = pathname?.includes('/upcoming/e');

  useEffect(() => {
    if (isCountdownPage) {
      // Hide header
      const header = document.querySelector('header');
      if (header) header.style.display = 'none';

      // Hide main footer
      const footers = document.querySelectorAll('footer');
      footers.forEach(footer => {
        if (!footer.classList.contains('minimal-footer')) {
          footer.style.display = 'none';
        }
      });

      // Cleanup function to restore when leaving the page
      return () => {
        if (header) header.style.display = '';
        footers.forEach(footer => {
          if (!footer.classList.contains('minimal-footer')) {
            footer.style.display = '';
          }
        });
      };
    }
  }, [isCountdownPage]);

  return (
    <div className={inter.className}>
      {children}
    </div>
  );
}