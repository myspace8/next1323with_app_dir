import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Link href={'/blog'}>Blog</Link>
      <h1>Creating safe artificial general intelligence that benefits all humanity</h1>
    </main>
  )
}
