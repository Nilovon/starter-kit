# Nilovon Starterkit

A modern, full-stack starter kit built with [Turborepo](https://turbo.build/repo), [Next.js](https://nextjs.org/), and [TypeScript](https://www.typescriptlang.org/). This monorepo provides everything you need to build scalable applications with best practices and modern tooling.

## 🚀 Features

- **Monorepo Architecture**: Built with Turborepo for efficient development and builds
- **Full-Stack Ready**: Includes authentication, database, email, and Redis packages
- **Modern Tech Stack**: Next.js 15, React 19, TypeScript 5, Tailwind CSS 4
- **Developer Experience**: Biome for linting/formatting, Drizzle for database management
- **Authentication**: Built-in auth system with multiple providers
- **Database**: Drizzle ORM with SQLite/PostgreSQL support
- **Email Templates**: React-based email templates with TypeScript
- **Caching**: Redis integration for performance optimization

## 📦 What's Inside?

This Turborepo includes the following packages and applications:

### Apps

- **`dashboard`**: A Next.js dashboard application with authentication and modern UI

### Packages

- **`@nilovon-starterkit/auth`**: Authentication system with Drizzle integration
- **`@nilovon-starterkit/db`**: Database client and schema definitions
- **`@nilovon-starterkit/email`**: React-based email templates
- **`@nilovon-starterkit/redis`**: Redis client and caching utilities
- **`@nilovon-starterkit/shared`**: Shared utilities and types
- **`@nilovon-starterkit/typescript-config`**: TypeScript configurations

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Database**: Drizzle ORM
- **Authentication**: Custom auth system
- **Caching**: Redis
- **Build Tool**: Turborepo
- **Package Manager**: Bun
- **Linting/Formatting**: Biome
- **Testing**: Vitest

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ or Bun 1.2+
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/nilovon/nilovon-starterkit.git
   cd nilovon-starterkit
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Set up the database**

   ```bash
   bun run db:generate
   bun run db:push
   ```

5. **Start development**
   ```bash
   bun run dev
   ```

## 📚 Available Scripts

### Root Level

- `bun run dev` - Start all applications in development mode
- `bun run build` - Build all applications and packages
- `bun run lint` - Lint all code
- `bun run format` - Format all code
- `bun run check-types` - Type check all packages

### Database

- `bun run db:generate` - Generate database migrations
- `bun run db:push` - Push schema changes to database
- `bun run db:migrate` - Run database migrations
- `bun run db:studio` - Open Drizzle Studio

### Development

- `bun run email:dev` - Start email development server
- `bun run auth:db:generate` - Generate auth database migrations

## 🏗️ Project Structure

```
nilovon-starterkit/
├── apps/
│   └── dashboard/          # Next.js dashboard application
├── packages/
│   ├── auth/              # Authentication system
│   ├── db/                # Database client and schema
│   ├── email/             # Email templates
│   ├── redis/             # Redis utilities
│   ├── shared/            # Shared utilities
│   └── typescript-config/ # TypeScript configurations
├── turbo.json             # Turborepo configuration
└── package.json           # Root package configuration
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="file:./dev.db"
DIRECT_URL="file:./dev.db"

# Authentication
AUTH_SECRET="your-secret-key"
AUTH_URL="http://localhost:3000"

# Redis
REDIS_URL="redis://localhost:6379"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Database

The starter kit uses Drizzle ORM with SQLite by default. To use PostgreSQL:

1. Update your `DATABASE_URL` in `.env.local`
2. Install PostgreSQL adapter: `bun add postgres`
3. Update database configuration in `packages/db/drizzle.config.ts`

## 🧪 Development

### Adding New Packages

1. Create a new directory in `packages/`
2. Initialize with `bun init`
3. Add to workspace in root `package.json`
4. Configure in `turbo.json`

### Adding New Apps

1. Create a new directory in `apps/`
2. Initialize with `bun create next-app` or similar
3. Add to workspace in root `package.json`
4. Configure in `turbo.json`

## 📖 Learn More

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Drizzle Documentation](https://orm.drizzle.team/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Turborepo](https://turbo.build/repo)
- Powered by [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Database management with [Drizzle](https://orm.drizzle.team/)
