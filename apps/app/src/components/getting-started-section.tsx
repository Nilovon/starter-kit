'use client';

import { Badge } from '@starter/ui/components/badge';
import { Button } from '@starter/ui/components/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@starter/ui/components/card';
import { motion } from 'framer-motion';
import { ArrowRight, Download, GitBranch, Play } from 'lucide-react';

export function GettingStartedSection() {
  const steps = [
    {
      step: '01',
      title: 'Clone the Repository',
      description:
        'Get started by cloning the Nilovon Starter Kit repository to your local machine.',
      code: 'git clone https://github.com/nilovon/starter-kit.git',
      icon: GitBranch,
    },
    {
      step: '02',
      title: 'Install Dependencies',
      description:
        'Install all required dependencies using your preferred package manager.',
      code: 'bun install && bun run dev',
      icon: Download,
    },
    {
      step: '03',
      title: 'Start Building',
      description:
        'Your development server is ready. Start building your amazing application!',
      code: 'Open http://localhost:3000',
      icon: Play,
    },
  ];

  return (
    <section className="bg-muted/30 py-20 sm:py-32" id="getting-started">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <motion.h2
            className="mb-4 font-bold text-3xl text-foreground sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Get Started in Minutes
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-muted-foreground text-xl"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Follow these simple steps to get your development environment up and
            running.
          </motion.p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                // biome-ignore lint/style/noMagicNumbers: TODO: fix this
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                key={step.step}
                // biome-ignore lint/style/noMagicNumbers: TODO: fix this
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <Card className="overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                        <step.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-3">
                          <Badge
                            className="font-mono text-xs"
                            variant="outline"
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
                    <div className="rounded-lg bg-muted p-4 font-mono text-sm">
                      <code className="text-foreground">{step.code}</code>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Button className="px-8 py-6 text-lg" size="lg">
              View Full Documentation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
