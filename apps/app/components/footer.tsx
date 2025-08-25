import { Button } from "@/components/ui/button";
import { Github, Twitter, Globe } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const links = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Tech Stack", href: "#tech-stack" },
      { name: "Getting Started", href: "#getting-started" },
      { name: "Documentation", href: "#docs" },
    ],
    resources: [
      { name: "GitHub", href: "https://github.com/nilovon/starter-kit" },
      { name: "Examples", href: "https://github.com/nilovon/starter-kit" },
      { name: "Community", href: "https://github.com/nilovon/starter-kit" },
      { name: "Support", href: "https://github.com/nilovon/starter-kit" },
    ],
    legal: [
      {
        name: "Privacy Policy",
        href: "https://github.com/nilovon/starter-kit",
      },
      {
        name: "Terms of Service",
        href: "https://github.com/nilovon/starter-kit",
      },
      { name: "License", href: "https://github.com/nilovon/starter-kit" },
    ],
  };

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Nilovon</h3>
            <p className="text-muted-foreground max-w-xs">
              A modern starter kit for building full-stack applications with
              confidence.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com/nilovon">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://x.com/nilovon_tech">
                <Button variant="ghost" size="icon">
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://nilovon.com">
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Nilovon Starter Kit. Built with ❤️ for developers.
          </p>
        </div>
      </div>
    </footer>
  );
}
