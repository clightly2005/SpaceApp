
import Link from 'next/link'
import {db} from '@/db'
import { sections} from '@/db/schema'


export default async function EducationLayout({ children }: { children: React.ReactNode }) {
  const articles = await db.select({slug: sections.slug, name: sections.name}).from(sections);

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 mt-15 border-r border-white/10 p-6 flex flex-col gap-2">
        <p className="text-xs uppercase text-white/40 mb-4">Discover Articles </p>
        {articles.map((a) => (
          <Link key={a.slug} href={`/education/${a.slug}`} className="hover-rocket text-sm text-white/70 hover:text-white transition-colors py-1">
            {a.name}
          </Link>
        ))}
      </aside>
      <main className="flex-1 p-10">
        {children}
      </main>
    </div>
  )
}