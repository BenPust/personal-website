"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Download } from "lucide-react"
import Image from "next/image"

export function JustJournalHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20 dark:from-purple-900/40 dark:to-pink-900/40" />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
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
              className="w-32 h-32 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-purple-600 to-pink-600 p-1"
            >
              <div className="w-full h-full bg-background rounded-3xl flex items-center justify-center">
                <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  JJ
                </span>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Just Journal
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Your Private AI-Powered Digital Journal
            </p>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              A secure, intelligent journaling companion that helps you capture thoughts,
              track patterns, and gain insights from your daily reflections—all while
              keeping your data completely private.
            </p>

            <Badge variant="secondary" className="mb-8 py-2 px-4">
              <Shield className="mr-2 h-4 w-4" />
              End-to-End Privacy with On-Device AI
            </Badge>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="group">
                <Download className="mr-2 h-5 w-5" />
                Download on App Store
              </Button>
              <Button size="lg" variant="outline">
                View on GitHub
              </Button>
            </div>
          </motion.div>

          {/* Phone mockups */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center gap-8 flex-wrap"
          >
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="relative w-72 h-[600px] rounded-[3rem] bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-2"
              >
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden">
                  <div className="p-6">
                    <div className="h-12 bg-muted rounded-lg mb-4" />
                    <div className="space-y-3">
                      <div className="h-20 bg-muted/50 rounded-lg" />
                      <div className="h-16 bg-muted/30 rounded-lg" />
                      <div className="h-24 bg-muted/50 rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}