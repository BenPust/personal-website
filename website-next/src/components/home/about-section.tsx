"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square relative bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold">BP</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                I&apos;m a passionate iOS developer based in San Francisco, specializing in creating
                intuitive and powerful mobile applications that enhance users&apos; daily lives.
              </p>
              <p className="text-lg text-muted-foreground">
                With over 5 years of experience in mobile development, I&apos;ve shipped multiple
                successful apps to the App Store, focusing on clean design, performance, and user privacy.
              </p>
              <p className="text-lg text-muted-foreground">
                When I&apos;m not coding, you&apos;ll find me exploring the latest tech trends,
                contributing to open-source projects, or hiking in the beautiful California outdoors.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  GitHub Profile
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-primary">2018</div>
                  <div className="text-sm text-muted-foreground">Started iOS Journey</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-primary">SF</div>
                  <div className="text-sm text-muted-foreground">Based in San Francisco</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}