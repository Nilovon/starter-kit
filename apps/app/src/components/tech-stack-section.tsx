'use client';

import { Badge } from '@starter/ui/components/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@starter/ui/components/card';
import { motion } from 'framer-motion';

export function TechStackSection() {
  const techStack = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'Next.js 15', description: 'React framework with App Router' },
        { name: 'TypeScript', description: 'Type-safe JavaScript' },
        { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
        { name: 'Framer Motion', description: 'Animation library' },
      ],
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'ElysiaJS', description: 'Fast and type-safe web framework' },
        { name: 'Better Auth', description: 'Modern authentication solution' },
        { name: 'Drizzle ORM', description: 'Type-safe database toolkit' },
        { name: 'PostgreSQL', description: 'Reliable relational database' },
      ],
    },
    {
      category: 'Development',
      technologies: [
        { name: 'Turbo Repo', description: 'High-performance monorepo' },
        { name: 'Biome', description: 'Code linting and formatting' },
        { name: 'Husky', description: 'Git hooks for quality control' },
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-32" id="tech-stack">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <motion.h2
            className="mb-4 font-bold text-3xl text-foreground sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Modern Tech Stack
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-muted-foreground text-xl"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Built with the latest and most reliable technologies to ensure your
            applications are fast, secure, and maintainable.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {techStack.map((stack, stackIndex) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              key={stack.category}
              // biome-ignore lint/style/noMagicNumbers: TODO: fix this
              transition={{ duration: 0.6, delay: stackIndex * 0.1 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    {stack.category}
                    <Badge className="text-xs" variant="secondary">
                      {stack.technologies.length}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {stack.technologies.map((tech, techIndex) => (
                    <motion.div
                      className="border-primary/20 border-l-2 py-2 pl-4"
                      initial={{ opacity: 0, x: -20 }}
                      key={tech.name}
                      transition={{
                        duration: 0.4,
                        // biome-ignore lint/style/noMagicNumbers: TODO: fix this
                        delay: stackIndex * 0.1 + techIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                      whileInView={{ opacity: 1, x: 0 }}
                    >
                      <h4 className="font-semibold text-foreground">
                        {tech.name}
                      </h4>
                      <p className="text-muted-foreground text-sm">
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
