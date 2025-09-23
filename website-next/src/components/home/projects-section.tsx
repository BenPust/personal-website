"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Lock, Smartphone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Just Journal",
    description: "Your private AI-powered digital journal",
    longDescription: "A secure, intelligent journaling companion that helps you capture thoughts, track patterns, and gain insights from your daily reflections.",
    icon: Lock,
    color: "from-purple-500 to-pink-500",
    link: "/justjournal",
    appStoreLink: "https://apps.apple.com/app/just-journal",
    technologies: ["SwiftUI", "SwiftData", "Core ML", "CloudKit"],
    features: ["PIN Protection", "AI Insights", "Voice Dictation", "iCloud Sync"]
  },
  {
    id: 2,
    title: "Upcoming",
    description: "Beautiful countdown timer for your events",
    longDescription: "Track and celebrate your important moments with stunning countdown timers and customizable widgets.",
    icon: Calendar,
    color: "from-blue-500 to-cyan-500",
    link: "/upcoming",
    appStoreLink: "https://apps.apple.com/app/upcoming",
    technologies: ["SwiftUI", "WidgetKit", "Core Data", "StoreKit"],
    features: ["Custom Widgets", "Event Sharing", "Notifications", "Dark Mode"]
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my latest iOS applications, crafted with attention to detail and user experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color} text-white`}>
                        <project.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{project.title}</CardTitle>
                        <CardDescription className="mt-1">{project.description}</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {project.longDescription}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm font-semibold mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold mb-2">Key Features:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1" asChild>
                      <Link href={project.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" className="flex-1" asChild>
                      <a href={project.appStoreLink} target="_blank" rel="noopener noreferrer">
                        <Smartphone className="mr-2 h-4 w-4" />
                        App Store
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}