import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Events from '@/components/Events'
import Members from '@/components/Members'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Events />
        <Members />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
