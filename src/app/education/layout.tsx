import React from 'react'
import Link from 'next/link'
import { identity } from '@tsparticles/engine'

const articles = [
  { id: 'artemis1', title: 'Artemis I' },
  { id: 'artemis2', title: 'Artemis II' },

]

export default function EducationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 mt-15 border-r border-white/10 p-6 flex flex-col gap-2">
        <p className="text-xs uppercase text-white/40 mb-4">Discover Articles </p>
        {articles.map((a) => (
          <Link key={a.id} href={`/education/${a.title}`} className="hover-rocket text-sm text-white/70 hover:text-white transition-colors py-1">
            {a.title}
          </Link>
        ))}
      </aside>
      <main className="flex-1 p-10">
        {children}
      </main>
    </div>
  )
}