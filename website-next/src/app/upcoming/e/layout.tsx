import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upcoming - Countdown",
  description: "View and track this countdown",
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