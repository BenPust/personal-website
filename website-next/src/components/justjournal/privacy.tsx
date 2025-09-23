"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Ban, Database, Cpu, Mic, FileOutput } from "lucide-react"

export function PrivacySection() {
  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Your <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Privacy</span> Matters
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Journal is designed with your privacy at its core. We believe your personal thoughts
            and reflections should remain completely private.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="mb-8 border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-pink-500/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Ban className="h-6 w-6 text-pink-600" />
                Data Collection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">We don&apos;t collect any data.</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-600 rounded-full mr-3" />
                  No personal information
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-600 rounded-full mr-3" />
                  No journal entries
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-600 rounded-full mr-3" />
                  No usage analytics
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-600 rounded-full mr-3" />
                  No tracking
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-600 rounded-full mr-3" />
                  No advertisements
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-purple-600" />
                  Data Storage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All your journal entries are stored locally on your device. If you have iCloud
                  enabled, your data may sync across your devices using Apple&apos;s encrypted iCloud
                  sync, but this data never passes through our servers because we don&apos;t have any.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-purple-600" />
                  AI Processing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The app uses on-device AI processing for features like summarization. This
                  processing happens entirely on your device - no data is sent to external AI
                  services.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mic className="h-5 w-5 text-purple-600" />
                  Microphone Access
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If you choose to use voice dictation, the app requests microphone access. Voice
                  processing happens on-device using Apple&apos;s Speech framework. Audio is never
                  recorded or stored.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileOutput className="h-5 w-5 text-purple-600" />
                  Data Export
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You can export your journal entries at any time through the Settings menu. This
                  creates a local file that you control completely.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8"
        >
          <Card className="border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-pink-500/5">
            <CardContent className="p-8 text-center">
              <Shield className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <p className="text-lg font-semibold">
                Summary: Your journal is yours alone. We can&apos;t read it, we don&apos;t want to read it,
                and we&apos;ve built the app to ensure it stays that way.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}