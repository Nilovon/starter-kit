'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@starter/ui/components/card';
import { motion } from 'framer-motion';
import { Code2, Layers, Lock, Rocket, Settings, Zap } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Rocket,
      title: 'Ready to Deploy',
      description:
        'Pre-configured with Vercel deployment settings and optimized build processes.',
    },
    {
      icon: Code2,
      title: 'Modern Tech Stack',
      description:
        'Built with the latest versions of NextJS, TypeScript, and cutting-edge tools.',
    },
    {
      icon: Lock,
      title: 'Authentication Ready',
      description:
        'Better Auth integration with multiple providers and session management.',
    },
    {
      icon: Layers,
      title: 'Monorepo Structure',
      description:
        'Organized Turborepo setup for scalable multi-package development.',
    },
    {
      icon: Settings,
      title: 'Developer Experience',
      description:
        ', Prettier, and TypeScript configured for optimal development workflow.',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description:
        'Optimized for speed with ElysiaJS backend and efficient database queries.',
    },
  ];

  return (
    <section className="bg-muted/30 py-20 sm:py-32" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <motion.h2
            className="mb-4 font-bold text-3xl text-foreground sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Everything You Need
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-muted-foreground text-xl"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            A comprehensive starter kit that includes all the tools and
            configurations you need to build modern full-stack applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              key={feature.title}
              // biome-ignore lint/style/noMagicNumbers: TODO: fix this
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Card className="h-full border-border/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
