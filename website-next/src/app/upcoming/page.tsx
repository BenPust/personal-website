import { Metadata } from "next"
import { UpcomingHero } from "@/components/upcoming/hero"
import { CountdownDemo } from "@/components/upcoming/countdown-demo"
import { FeaturesSection } from "@/components/upcoming/features"

export const metadata: Metadata = {
  title: "Upcoming - Beautiful Countdown Timer | Ben Pust",
  description: "Track and celebrate your important moments with stunning countdown timers and customizable widgets.",
}

export default function UpcomingPage() {
  return (
    <>
      <UpcomingHero />
      <CountdownDemo />
      <FeaturesSection />
    </>
  )
}