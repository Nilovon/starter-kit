"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function TechStackSection() {
  const techStack = [
    {
      category: "Frontend",
      technologies: [
        { name: "Next.js 15", description: "React framework with App Router" },
        { name: "TypeScript", description: "Type-safe JavaScript" },
        { name: "Tailwind CSS", description: "Utility-first CSS framework" },
        { name: "Framer Motion", description: "Animation library" },
      ],
    },
    {
      category: "Backend",
      technologies: [
        { name: "ElysiaJS", description: "Fast and type-safe web framework" },
        { name: "Better Auth", description: "Modern authentication solution" },
        { name: "Drizzle ORM", description: "Type-safe database toolkit" },
        { name: "PostgreSQL", description: "Reliable relational database" },
      ],
    },
    {
      category: "Development",
      technologies: [
        { name: "Turbo Repo", description: "High-performance monorepo" },
        { name: "Biome", description: "Code linting and formatting" },
        { name: "Husky", description: "Git hooks for quality control" },
      ],
    },
  ];

  return (
    <section id="tech-stack" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Modern Tech Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Built with the latest and most reliable technologies to ensure your
            applications are fast, secure, and maintainable.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {techStack.map((stack, stackIndex) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: stackIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    {stack.category}
                    <Badge variant="secondary" className="text-xs">
                      {stack.technologies.length}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {stack.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: stackIndex * 0.1 + techIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                      className="border-l-2 border-primary/20 pl-4 py-2"
                    >
                      <h4 className="font-semibold text-foreground">
                        {tech.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {tech.description}
                      </p>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
