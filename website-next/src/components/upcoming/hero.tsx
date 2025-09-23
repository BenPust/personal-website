"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Download } from "lucide-react"

export function UpcomingHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-cyan-900/20 dark:from-blue-900/40 dark:to-cyan-900/40" />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            {/* App icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="w-32 h-32 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-600 p-1"
            >
              <div className="w-full h-full bg-background rounded-3xl flex items-center justify-center">
                <Calendar className="h-16 w-16 text-blue-600" />
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Upcoming
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Beautiful Countdown Timer for Your Events
            </p>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Track and celebrate your important moments with stunning countdown timers,
              customizable widgets, and smart notifications.
            </p>

            <Badge variant="secondary" className="mb-8 py-2 px-4">
              <Calendar className="mr-2 h-4 w-4" />
              Never Miss an Important Date
            </Badge>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="group">
                <Download className="mr-2 h-5 w-5" />
                Download on App Store
              </Button>
              <Button size="lg" variant="outline">
                View Demo
              </Button>
            </div>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/10 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold mb-2">Track Events</h3>
              <p className="text-sm text-muted-foreground">
                Count down to birthdays, holidays, and special occasions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-semibold mb-2">Custom Widgets</h3>
              <p className="text-sm text-muted-foreground">
                Beautiful widgets for your home screen
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-500/10 flex items-center justify-center">
                <span className="text-2xl">🔔</span>
              </div>
              <h3 className="font-semibold mb-2">Smart Alerts</h3>
              <p className="text-sm text-muted-foreground">
                Get notified before important dates arrive
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}