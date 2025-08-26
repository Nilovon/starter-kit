import { Button } from '@starter/ui/components/button';
import { Github, Globe, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const links = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Tech Stack', href: '#tech-stack' },
      { name: 'Getting Started', href: '#getting-started' },
      { name: 'Documentation', href: '#docs' },
    ],
    resources: [
      { name: 'GitHub', href: 'https://github.com/nilovon/starter-kit' },
      { name: 'Examples', href: 'https://github.com/nilovon/starter-kit' },
      { name: 'Community', href: 'https://github.com/nilovon/starter-kit' },
      { name: 'Support', href: 'https://github.com/nilovon/starter-kit' },
    ],
    legal: [
      {
        name: 'Privacy Policy',
        href: 'https://github.com/nilovon/starter-kit',
      },
      {
        name: 'Terms of Service',
        href: 'https://github.com/nilovon/starter-kit',
      },
      { name: 'License', href: 'https://github.com/nilovon/starter-kit' },
    ],
  };

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="font-bold text-2xl text-primary">Nilovon</h3>
            <p className="max-w-xs text-muted-foreground">
              A modern starter kit for building full-stack applications with
              confidence.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com/nilovon">
                <Button size="icon" variant="ghost">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://x.com/nilovon_tech">
                <Button size="icon" variant="ghost">
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://nilovon.com">
                <Button size="icon" variant="ghost">
                  <Globe className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">Product</h4>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.name}>
                  <a
                    className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
                    href={link.href}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">Resources</h4>
            <ul className="space-y-2">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <a
                    className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
                    href={link.href}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <a
                    className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
                    href={link.href}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Nilovon Starter Kit. Built with ❤️ for developers.
          </p>
        </div>
      </div>
    </footer>
  );
}
