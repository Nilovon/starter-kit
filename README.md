# 🚀 Nilovon Starterkit

> **The ultimate developer's playground** - A battle-tested, production-ready monorepo that transforms your development workflow from "it works on my machine" to "it works everywhere, every time" ✨

Built with cutting-edge technologies and battle-tested patterns, this starter kit is your golden ticket to building scalable applications that don't just work—they thrive. Say goodbye to boilerplate setup and hello to rapid development with enterprise-grade architecture.

## 🌟 Why This Starterkit?

- **⚡ Zero-Config Magic**: Jump straight into coding without wrestling with configuration
- **🏗️ Battle-Tested Architecture**: Production patterns that scale from MVP to enterprise
- **🔄 Developer Velocity**: Hot reloads, instant builds, and seamless debugging
- **🔒 Security-First**: Built-in authentication, authorization, and best practices
- **📱 Full-Stack Excellence**: From database to UI, everything just works together

## 🎯 What You're Getting

This isn't just another starter kit—it's a complete development ecosystem that grows with your project:

### 🎨 **Dashboard App** (`apps/dashboard`)

A Next.js 15 powerhouse with App Router, featuring:

- Modern React 19 with concurrent features
- Tailwind CSS 4 for lightning-fast styling
- Built-in authentication and user management
- Responsive design that works on every device

### 🔐 **Authentication Package** (`packages/auth`)

Enterprise-grade auth system that handles:

- Multiple authentication providers
- Role-based access control
- Session management with Redis
- Secure password policies

### 🗄️ **Database Package** (`packages/db`)

Drizzle ORM integration with:

- Type-safe database operations
- Automatic migrations
- SQLite and PostgreSQL support
- Real-time schema validation

### 📧 **Email Package** (`packages/email`)

React-based email templates featuring:

- TypeScript-powered templates
- Responsive email layouts
- Multiple email types (welcome, reset, etc.)
- Easy customization and branding

### ⚡ **Redis Package** (`packages/redis`)

High-performance caching with:

- Intelligent cache invalidation
- Database query caching
- Session storage
- Real-time data synchronization

### 🛠️ **Shared Utilities** (`packages/shared`)

Common tools and helpers:

- Date utilities and formatting
- Discord webhook integration
- ID generation and validation
- Country code mappings

## 🏗️ Complete Project Architecture

```
nilovon-starterkit/
├── 📁 apps/                          # Application layer
│   ├── 🎯 dashboard/                 # Main Next.js application
│   │   ├── app/                      # App Router structure
│   │   │   ├── globals.css          # Global styles
│   │   │   ├── layout.tsx           # Root layout
│   │   │   └── page.tsx             # Homepage
│   │   ├── next.config.ts           # Next.js configuration
│   │   ├── package.json             # App dependencies
│   │   ├── postcss.config.mjs       # PostCSS setup
│   │   └── tsconfig.json            # TypeScript config
│   │
│   └── 🔌 api/                      # API server (if needed)
│       ├── src/
│       │   ├── index.ts             # Server entry point
│       │   ├── lib/                 # API utilities
│       │   │   ├── api-key.ts       # API key management
│       │   │   └── export/          # Data export utilities
│       │   │       ├── data-fetcher.ts
│       │   │       ├── file-generator.ts
│       │   │       ├── formatters.ts
│       │   │       ├── index.ts
│       │   │       ├── queries.ts
│       │   │       └── types.ts
│       │   └── routes/              # API endpoints
│       │       └── health.ts        # Health check
│       ├── package.json
│       └── tsconfig.json
│
├── 📦 packages/                      # Shared packages
│   ├── 🔐 auth/                     # Authentication system
│   │   ├── src/
│   │   │   ├── auth.ts              # Core auth logic
│   │   │   ├── client/              # Client-side auth
│   │   │   │   ├── auth-client.ts
│   │   │   │   ├── auth-helpers.ts
│   │   │   │   └── index.ts
│   │   │   ├── permissions.ts       # Permission system
│   │   │   └── types.ts             # Auth types
│   │   ├── drizzle.config.ts        # Auth database config
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── 🗄️ db/                       # Database layer
│   │   ├── src/
│   │   │   ├── client.ts            # Database client
│   │   │   └── drizzle/             # Drizzle configuration
│   │   │       ├── 0000_short_black_tom.sql  # Migration
│   │   │       ├── auth.ts          # Auth schema
│   │   │       ├── meta/            # Migration metadata
│   │   │       │   ├── _journal.json
│   │   │       │   └── 0000_snapshot.json
│   │   │       └── schema.ts        # Main schema
│   │   ├── drizzle.config.ts        # Database config
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── 📧 email/                     # Email system
│   │   ├── src/
│   │   │   └── emails/              # Email templates
│   │   │       ├── email-layout.tsx # Base email layout
│   │   │       ├── index.ts         # Template exports
│   │   │       ├── invitation-email.tsx
│   │   │       ├── magic-link-email.tsx
│   │   │       ├── otp-email.tsx
│   │   │       ├── reset-password-email.tsx
│   │   │       ├── verification-email.tsx
│   │   │       └── welcome-email.tsx
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── ⚡ redis/                     # Redis utilities
│   │   ├── cacheable.ts              # Cache decorators
│   │   ├── drizzle-cache.ts          # Database caching
│   │   ├── drizzle-cache.test.ts     # Cache tests
│   │   ├── index.ts                  # Main exports
│   │   ├── redis.ts                  # Redis client
│   │   └── package.json
│   │
│   ├── 🛠️ shared/                    # Common utilities
│   │   ├── src/
│   │   │   ├── country-codes.ts      # Country data
│   │   │   ├── index.ts              # Main exports
│   │   │   └── utils/                # Utility functions
│   │   │       ├── date-utils.ts     # Date helpers
│   │   │       ├── discord-webhook.ts # Discord integration
│   │   │       ├── ids.ts            # ID utilities
│   │   │       └── index.ts          # Utils exports
│   │   └── package.json
│   │
│   └── ⚙️ typescript-config/          # TypeScript configs
│       ├── base.json                 # Base configuration
│       ├── nextjs.json               # Next.js specific
│       ├── react-library.json        # React library config
│       └── package.json
│
├── 🐳 docker-compose.yaml            # Development environment
├── 📋 package.json                   # Root dependencies
├── 🚀 turbo.json                     # Turborepo configuration
├── ⚡ bun.lock                       # Lock file (Bun)
├── 🎨 biome.jsonc                    # Linting & formatting
├── 📚 tsconfig.json                  # Root TypeScript config
├── 📖 README.md                      # This file
├── 📄 LICENSE                        # License information
├── 🛡️ SECURITY.md                    # Security policy
└── 🤝 CONTRIBUTING.md                # Contribution guidelines
```

## 🚀 Getting Started in 60 Seconds

### 1️⃣ **Clone & Install**

```bash
git clone https://github.com/nilovon/nilovon-starterkit.git
cd nilovon-starterkit
bun install
```

### 2️⃣ **Environment Setup**

```bash
cp .env.example .env.local
# Edit with your secrets 🔐
```

### 3️⃣ **Database & Go!**

```bash
bun run db:generate
bun run db:push
bun run dev
```

**That's it!** Your app is running at `http://localhost:3000` 🎉

## 🎮 Available Commands

### 🚀 **Development**

```bash
bun run dev          # Start everything in dev mode
bun run build        # Build all packages and apps
bun run lint         # Lint with Biome
bun run format       # Format with Biome
bun run check-types  # TypeScript validation
```

### 🗄️ **Database Operations**

```bash
bun run db:generate  # Generate new migrations
bun run db:push      # Push schema changes
bun run db:migrate   # Run migrations
bun run db:studio    # Open Drizzle Studio
```

### 🔧 **Specialized Development**

```bash
bun run email:dev    # Email template preview
bun run auth:db:generate  # Auth migrations
```

## ⚙️ Configuration Guide

### 🔐 **Environment Variables**

Create `.env.local` in the root:

```env
# Database
DATABASE_URL="file:./dev.db"
DIRECT_URL="file:./dev.db"

# Authentication
AUTH_SECRET="your-super-secret-key-here"
AUTH_URL="http://localhost:3000"

# Redis
REDIS_URL="redis://localhost:6379"

# Application
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 🗄️ **Database Setup**

**Default**: SQLite (perfect for development)
**Production**: PostgreSQL (scales infinitely)

To switch to PostgreSQL:

1. Update `DATABASE_URL` in `.env.local`
2. Install: `bun add postgres`
3. Update `packages/db/drizzle.config.ts`

## 🧪 Development Workflow

### ➕ **Adding New Packages**

```bash
mkdir packages/my-awesome-package
cd packages/my-awesome-package
bun init
# Add to root package.json workspaces
# Configure in turbo.json
```

### ➕ **Adding New Apps**

```bash
mkdir apps/my-awesome-app
cd apps/my-awesome-app
bun create next-app .
# Add to root package.json workspaces
# Configure in turbo.json
```

## 🎯 Tech Stack Deep Dive

| Layer               | Technology   | Version | Purpose                         |
| ------------------- | ------------ | ------- | ------------------------------- |
| **Framework**       | Next.js      | 15.x    | React framework with App Router |
| **Language**        | TypeScript   | 5.x     | Type-safe JavaScript            |
| **Styling**         | Tailwind CSS | 4.x     | Utility-first CSS framework     |
| **Database**        | Drizzle ORM  | Latest  | Type-safe database operations   |
| **Authentication**  | Custom Auth  | -       | Secure user management          |
| **Caching**         | Redis        | -       | High-performance caching        |
| **Build System**    | Turborepo    | Latest  | Monorepo build orchestration    |
| **Package Manager** | Bun          | 1.2+    | Fast JavaScript runtime         |
| **Code Quality**    | Biome        | Latest  | Linting & formatting            |
| **Testing**         | Vitest       | Latest  | Unit testing framework          |

## 🤝 Contributing

We love contributors! Here's how to join the party:

1. 🍴 Fork the repository
2. 🌿 Create a feature branch (`git checkout -b feature/amazing-feature`)
3. 💾 Commit your changes (`git commit -m 'Add amazing feature'`)
4. 📤 Push to the branch (`git push origin feature/amazing-feature`)
5. 🔄 Open a Pull Request

### 🧪 **Before Contributing**

- Run `bun run lint` to check code quality
- Run `bun run check-types` to validate types
- Add tests for new functionality
- Update documentation as needed

## 📚 Learning Resources

- **[Turborepo Docs](https://turbo.build/repo/docs)** - Monorepo mastery
- **[Next.js Docs](https://nextjs.org/docs)** - React framework guide
- **[Drizzle Docs](https://orm.drizzle.team/)** - Database ORM
- **[Tailwind CSS](https://tailwindcss.com/docs)** - Utility-first CSS

## 📄 License

MIT License - see [LICENSE](LICENSE) for details. Use it, modify it, make it yours! 🎉

## 🙏 Acknowledgments

This starter kit wouldn't exist without the amazing open-source community:

- **[Turborepo](https://turbo.build/repo)** - For making monorepos a joy
- **[Next.js](https://nextjs.org/)** - For the incredible React framework
- **[Tailwind CSS](https://tailwindcss.com/)** - For beautiful, fast styling
- **[Drizzle](https://orm.drizzle.team/)** - For type-safe database operations
- **[Vercel](https://vercel.com/)** - For the amazing developer experience

---

**Ready to build something amazing?** 🚀

Star this repo if it helps you, and don't forget to share your creations with the community!
