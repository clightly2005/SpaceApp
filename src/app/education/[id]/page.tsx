//renders any article that gets pressed on side nav 

import { notFound } from 'next/navigation'

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
    const {id} = await params;
  try {
    //dynamically import/render page chosen from list on side nav
    const Article = (await import(`../content/${id}.mdx`)).default
    return <Article />
  } catch {
    notFound();
  }
}