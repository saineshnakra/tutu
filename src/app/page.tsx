import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <HeroSection />
      <Footer />
      <Analytics />
    </main>
  )
}