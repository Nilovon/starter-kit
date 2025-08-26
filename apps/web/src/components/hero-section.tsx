'use client';

import { Button } from '@starter/ui/components/button';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Shield, Zap } from 'lucide-react';

export function HeroSection() {
  const techIcons = [
    { icon: Code, label: 'NextJS', delay: 0.1 },
    { icon: Zap, label: 'ElysiaJS', delay: 0.2 },
    { icon: Shield, label: 'Better Auth', delay: 0.3 },
    { icon: Database, label: 'Drizzle', delay: 0.4 },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 sm:py-32">
      {/* Background geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="-top-40 -right-32 absolute h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="-bottom-40 -left-32 absolute h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6 font-bold text-4xl text-foreground sm:text-6xl lg:text-7xl">
              Full-Stack Development
              <span className="block text-primary">Made Simple</span>
            </h1>
          </motion.div>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mb-8 max-w-3xl text-muted-foreground text-xl leading-relaxed sm:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A modern Turborepo starter kit with NextJS, ElysiaJS, Better Auth,
            and Drizzle. Bootstrap your applications with confidence and ship
            faster.
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 flex flex-col justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button className="px-8 py-6 text-lg" size="lg">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              className="bg-transparent px-8 py-6 text-lg"
              size="lg"
              variant="outline"
            >
              View Documentation
            </Button>
          </motion.div>

          {/* Tech Stack Icons */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto grid max-w-2xl grid-cols-2 gap-8 sm:grid-cols-4"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {techIcons.map(({ icon: Icon, label, delay }) => (
              <motion.div
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center space-y-3 rounded-lg border bg-card p-6 transition-all duration-300 hover:shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                key={label}
                transition={{ duration: 0.5, delay: delay + 0.3 }}
              >
                <Icon className="h-8 w-8 text-primary" />
                <span className="font-medium text-card-foreground text-sm">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
