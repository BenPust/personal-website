"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Lock, Brain, Mic, Cloud, Palette, Download } from "lucide-react"

const features = [
  {
    icon: Lock,
    title: "PIN Protection",
    description: "Secure your journal with a 4-digit PIN. Your thoughts remain private with authentication required on every app launch.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Local LLM generates smart summaries, extracts tags, and provides weekly digests analyzing patterns across your entries.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Mic,
    title: "Voice Dictation",
    description: "Capture thoughts instantly with voice recording. Real-time transcription with visual feedback makes journaling effortless.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Cloud,
    title: "iCloud Sync",
    description: "Seamlessly sync across all your Apple devices. Your journal entries are always up-to-date, whether on iPhone or iPad.",
    color: "from-cyan-500 to-cyan-600"
  },
  {
    icon: Palette,
    title: "Adaptive Interface",
    description: "Beautiful, responsive design that adapts to any screen size. Supports both light and dark modes with customizable text sizing.",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: Download,
    title: "Data Portability",
    description: "Export your journal entries anytime. Import from other apps. Your data remains yours with full backup capabilities.",
    color: "from-orange-500 to-orange-600"
  }
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
            Powerful <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need for a complete journaling experience
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
      </div>
    </section>
  )
}