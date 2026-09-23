import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Hero />
        <About />
        <Contact />
      </div>
    </main>
  )
}
