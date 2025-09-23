"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = [
  { name: "Swift & SwiftUI", level: 95, category: "iOS" },
  { name: "UIKit", level: 90, category: "iOS" },
  { name: "Core Data", level: 85, category: "iOS" },
  { name: "React & Next.js", level: 88, category: "Web" },
  { name: "TypeScript", level: 85, category: "Web" },
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "Python", level: 75, category: "Backend" },
  { name: "PostgreSQL", level: 70, category: "Database" },
]

const categories = {
  iOS: "bg-gradient-to-r from-blue-500 to-cyan-500",
  Web: "bg-gradient-to-r from-purple-500 to-pink-500",
  Backend: "bg-gradient-to-r from-green-500 to-emerald-500",
  Database: "bg-gradient-to-r from-orange-500 to-red-500",
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications across platforms
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold">{skill.name}</h3>
                      <Badge
                        variant="secondary"
                        className={`text-white ${categories[skill.category as keyof typeof categories]}`}
                      >
                        {skill.category}
                      </Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
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
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold mb-4">Other Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {["Git", "Docker", "AWS", "Firebase", "GraphQL", "REST APIs", "CI/CD", "Agile", "Figma", "Xcode", "VS Code", "Jira"].map((tool) => (
              <Badge key={tool} variant="outline" className="px-3 py-1">
                {tool}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}