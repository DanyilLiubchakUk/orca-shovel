import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-10 text-zinc-50">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl flex-col justify-between">
        <div className="flex items-center justify-between text-sm text-zinc-400">
          <span>OrcaShovel</span>
          <span>Private memory assistant</span>
        </div>

        <div className="max-w-2xl py-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
            Foundation
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            A clean TanStack Start base for OrcaShovel.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">
            The first app commit keeps the web foundation small: routing,
            server-ready rendering, TypeScript, Bun, and Tailwind.
          </p>
        </div>

        <div className="grid gap-3 text-sm text-zinc-400 sm:grid-cols-3">
          <div className="border-t border-zinc-800 pt-4">TanStack Start</div>
          <div className="border-t border-zinc-800 pt-4">Bun</div>
          <div className="border-t border-zinc-800 pt-4">Tailwind CSS</div>
        </div>
      </section>
    </main>
  )
}
