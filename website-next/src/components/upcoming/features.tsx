"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Palette, Bell, Share2, Moon, Globe } from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "Event Management",
    description: "Create and organize all your important dates in one place. Add photos, notes, and categories.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Palette,
    title: "Custom Widgets",
    description: "Beautiful, customizable widgets for your home screen. Choose from multiple styles and sizes.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Never miss an important date with intelligent reminders. Set multiple alerts for each event.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Share2,
    title: "Share Events",
    description: "Share countdowns with friends and family. Create collaborative countdown groups.",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: Moon,
    title: "Dark Mode",
    description: "Beautiful dark and light themes that adapt to your system preferences.",
    color: "from-gray-500 to-gray-600"
  },
  {
    icon: Globe,
    title: "Time Zones",
    description: "Support for multiple time zones. Perfect for international events and travel.",
    color: "from-cyan-500 to-cyan-600"
  }
]

const techStack = [
  "SwiftUI",
  "WidgetKit",
  "Core Data",
  "StoreKit",
  "UserNotifications",
  "CloudKit"
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Feature <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Rich</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to track and celebrate your special moments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16"
        >
          <Card className="border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-cyan-500/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-center mb-6">
                Built with Modern Technology
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-4 py-2">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm">
            App Version 2.0 | Compatible with iOS 16+
          </p>
        </motion.div>
      </div>
    </section>
  )
}