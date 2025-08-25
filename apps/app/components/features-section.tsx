"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code2, Layers, Lock, Rocket, Settings, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function FeaturesSection() {
  const features = [
    {
      icon: Rocket,
      title: "Ready to Deploy",
      description:
        "Pre-configured with Vercel deployment settings and optimized build processes.",
    },
    {
      icon: Code2,
      title: "Modern Tech Stack",
      description:
        "Built with the latest versions of NextJS, TypeScript, and cutting-edge tools.",
    },
    {
      icon: Lock,
      title: "Authentication Ready",
      description:
        "Better Auth integration with multiple providers and session management.",
    },
    {
      icon: Layers,
      title: "Monorepo Structure",
      description:
        "Organized Turbo Repo setup for scalable multi-package development.",
    },
    {
      icon: Settings,
      title: "Developer Experience",
      description:
        "ESLint, Prettier, and TypeScript configured for optimal development workflow.",
    },
    {
      icon: Zap,
      title: "High Performance",
      description:
        "Optimized for speed with ElysiaJS backend and efficient database queries.",
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Everything You Need
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            A comprehensive starter kit that includes all the tools and
            configurations you need to build modern full-stack applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
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
