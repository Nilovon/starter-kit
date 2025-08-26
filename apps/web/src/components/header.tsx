'use client';

import { Button } from '@starter/ui/components/button';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import ModeToggle from './mode-toggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navigation = [
    { name: 'Features', href: '#features' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Getting Started', href: '#getting-started' },
    { name: 'Documentation', href: '#docs' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="font-bold text-2xl text-primary">Nilovon</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <a
                  className="font-medium text-foreground text-sm transition-colors duration-200 hover:text-primary"
                  href={item.href}
                  key={item.name}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>

          <div className="hidden items-center space-x-4 md:flex">
            <ModeToggle />
            <Button>Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-2 md:hidden">
            <Button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              size="icon"
              variant="ghost"
            >
              <Sun className="dark:-rotate-90 h-5 w-5 rotate-0 scale-100 transition-all dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              size="icon"
              variant="ghost"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 border-t px-2 pt-2 pb-3 sm:px-3">
              {navigation.map((item) => (
                <a
                  className="block px-3 py-2 font-medium text-base text-foreground transition-colors duration-200 hover:text-primary"
                  href={item.href}
                  key={item.name}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
