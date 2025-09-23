import { Metadata } from "next"
import { JustJournalHero } from "@/components/justjournal/hero"
import { FeaturesSection } from "@/components/justjournal/features"
import { PrivacySection } from "@/components/justjournal/privacy"
import { SupportSection } from "@/components/justjournal/support"

export const metadata: Metadata = {
  title: "Just Journal - Private AI-Powered Journal | Ben Pust",
  description: "A secure, intelligent journaling companion that helps you capture thoughts, track patterns, and gain insights from your daily reflections—all while keeping your data completely private.",
}

export default function JustJournalPage() {
  return (
    <>
      <JustJournalHero />
      <FeaturesSection />
      <PrivacySection />
      <SupportSection />
    </>
  )
}