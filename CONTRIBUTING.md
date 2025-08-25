# 🚀 Contributing Guide

> **Welcome! We're excited that you want to contribute to our project. This guide will help you get started quickly and efficiently.**

---

## ⚡ Quick Setup

Follow these steps to get your development environment up and running:

### 1. 📦 Install Dependencies

```bash
bun install
```

### 2. 🔧 Environment Configuration

```bash
cp .env.example .env
```

### 3. 🐳 Start Services

Make sure you have Docker running, then:

```bash
docker-compose up -d
```

### 4. 🗄️ Initialize Databases

```bash
bun run db:push        # Apply database schema
bun run clickhouse:init # Initialize ClickHouse for basket
```

### 5. 🛠️ Build SDK

```bash
bun run sdk:build
```

### 6. 🎯 Start Development

```bash
bun run dev
```

---

## 🎮 Essential Commands

Here are the most important commands you'll use during development:

| Command                   | Description                         |
| ------------------------- | ----------------------------------- |
| `bun run dev`             | 🚀 Start all applications           |
| `bun run db:push`         | 🗄️ Apply database changes           |
| `bun run sdk:build`       | 🛠️ Build the SDK                    |
| `bun run clickhouse:init` | 🔍 Initialize ClickHouse for basket |
| `bun run lint`            | ✅ Run linting checks               |
| `bun run format`          | ✨ Format code automatically        |

---

## 🤝 How to Contribute

### Step-by-Step Process

1. **🍴 Fork the Repository**
   - Click the "Fork" button on GitHub
   - Clone your forked repository locally

2. **🌿 Create a Feature Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **💻 Make Your Changes**
   - Write clean, well-documented code
   - Add tests if applicable
   - Follow the project's coding standards

4. **🔍 Quality Checks**

   ```bash
   bun run lint      # Check for code quality issues
   bun run format    # Format your code automatically
   ```

5. **📤 Commit and Push**

   ```bash
   git add .
   git commit -m "feat: add your feature description"
   git push origin feature/your-feature-name
   ```

6. **🔀 Open a Pull Request**
   - Create a PR to the **STAGING** branch
   - Provide a clear description of your changes
   - Reference any related issues

---

## 📋 Code Style Guidelines

### 🎯 General Principles

- **Keep it simple** - Write clear, readable code
- **Type safety first** - Use TypeScript effectively
- **Documentation matters** - Comment complex logic
- **Test your code** - Ensure it works as expected

### 🛠️ Tools We Use

- **Biome** - For linting and code formatting
- **TypeScript** - For type safety and better DX
- **Prettier** - For consistent code formatting

### 📝 Commit Message Format

```
type(scope): description

feat(auth): add OAuth2 authentication
fix(api): resolve user creation bug
docs(readme): update installation instructions
```

---

## 🆘 Need Help?

### 📚 Resources

- **Documentation** - Check the README for detailed information
- **Issues** - Search existing issues for similar problems
- **Discussions** - Join our community discussions

### 🆘 Getting Support

- Create an issue for bugs or feature requests
- Ask questions in our community channels
- Reach out to maintainers for guidance

---

## 🎉 Ready to Start?

You're all set! Pick an issue, create a branch, and start coding. We can't wait to see what you'll build!

**Happy coding! 💻✨**
