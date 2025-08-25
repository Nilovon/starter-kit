"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, GitBranch, Play } from "lucide-react";
import { motion } from "framer-motion";

export function GettingStartedSection() {
  const steps = [
    {
      step: "01",
      title: "Clone the Repository",
      description:
        "Get started by cloning the Nilovon Starter Kit repository to your local machine.",
      code: "git clone https://github.com/nilovon/starter-kit.git",
      icon: GitBranch,
    },
    {
      step: "02",
      title: "Install Dependencies",
      description:
        "Install all required dependencies using your preferred package manager.",
      code: "bun install && bun run dev",
      icon: Download,
    },
    {
      step: "03",
      title: "Start Building",
      description:
        "Your development server is ready. Start building your amazing application!",
      code: "Open http://localhost:3000",
      icon: Play,
    },
  ];

  return (
    <section id="getting-started" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Get Started in Minutes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Follow these simple steps to get your development environment up and
            running.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <step.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge
                            variant="outline"
                            className="font-mono text-xs"
                          >
                            {step.step}
                          </Badge>
                          <CardTitle className="text-xl">
                            {step.title}
                          </CardTitle>
                        </div>
                        <CardDescription className="text-base">
                          {step.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                      <code className="text-foreground">{step.code}</code>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg" className="text-lg px-8 py-6">
              View Full Documentation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
