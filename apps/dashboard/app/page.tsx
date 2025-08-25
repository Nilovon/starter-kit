export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-6xl">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Nilovon Starterkit
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600">
            A modern, full-stack starter kit built with Turborepo, Next.js,
            TypeScript, and more. Get started quickly with authentication,
            database, email, and Redis.
          </p>

          <div className="mx-auto mb-12 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-white p-6 shadow-lg">
              <div className="mb-3 text-2xl text-blue-600">🚀</div>
              <h3 className="mb-2 text-lg font-semibold">
                Monorepo Architecture
              </h3>
              <p className="text-gray-600">
                Built with Turborepo for efficient development and builds
              </p>
            </div>

            <div className="rounded-lg border bg-white p-6 shadow-lg">
              <div className="mb-3 text-2xl text-green-600">🔐</div>
              <h3 className="mb-2 text-lg font-semibold">
                Authentication Ready
              </h3>
              <p className="text-gray-600">
                Built-in auth system with multiple providers
              </p>
            </div>

            <div className="rounded-lg border bg-white p-6 shadow-lg">
              <div className="mb-3 text-2xl text-purple-600">🗄️</div>
              <h3 className="mb-2 text-lg font-semibold">Database & Caching</h3>
              <p className="text-gray-600">
                Drizzle ORM with Redis for performance
              </p>
            </div>

            <div className="rounded-lg border bg-white p-6 shadow-lg">
              <div className="mb-3 text-2xl text-orange-600">📧</div>
              <h3 className="mb-2 text-lg font-semibold">Email Templates</h3>
              <p className="text-gray-600">
                React-based email templates with TypeScript
              </p>
            </div>

            <div className="rounded-lg border bg-white p-6 shadow-lg">
              <div className="mb-3 text-2xl text-red-600">⚡</div>
              <h3 className="mb-2 text-lg font-semibold">Modern Stack</h3>
              <p className="text-gray-600">
                Next.js 15, React 19, TypeScript 5, Tailwind CSS 4
              </p>
            </div>

            <div className="rounded-lg border bg-white p-6 shadow-lg">
              <div className="mb-3 text-2xl text-indigo-600">🛠️</div>
              <h3 className="mb-2 text-lg font-semibold">
                Developer Experience
              </h3>
              <p className="text-gray-600">
                Biome for linting/formatting, optimized workflows
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="mb-4 text-2xl font-semibold">Quick Start</h2>
            <div className="mx-auto max-w-2xl rounded-lg bg-gray-900 p-4 font-mono text-sm text-green-400">
              <div># Clone the repository</div>
              <div>
                git clone https://github.com/nilovon/nilovon-starterkit.git
              </div>
              <div>cd nilovon-starterkit</div>
              <div className="mt-2"># Install dependencies</div>
              <div>bun install</div>
              <div className="mt-2"># Start development</div>
              <div>bun run dev</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
