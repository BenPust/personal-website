"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Shield } from "lucide-react"
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
              className="w-32 h-32 mx-auto mb-8 rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/justjournal/app-icon.png"
                alt="Just Journal App Icon"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
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

            <div className="flex justify-center mb-12">
              <a
                href="https://apps.apple.com/app/just-journal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-90 transition-opacity"
              >
                <Image
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
                  alt="Download on the App Store"
                  width={200}
                  height={67}
                  className="h-14 w-auto"
                />
              </a>
            </div>
          </motion.div>

          {/* Phone mockups */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center gap-8 flex-wrap"
          >
            {[
              { src: "/justjournal/screenshot1.png", alt: "Just Journal Home Screen" },
              { src: "/justjournal/screenshot2.png", alt: "Just Journal Entry View" },
              { src: "/justjournal/screenshot3.png", alt: "Just Journal Analytics" }
            ].map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative"
              >
                <div className="relative w-72 h-[620px] rounded-[3rem] bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-[3px]">
                  <div className="relative w-full h-full bg-black rounded-[3rem] overflow-hidden">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      width={360}
                      height={780}
                      className="w-full h-full object-cover"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}