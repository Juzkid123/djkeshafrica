import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Mixes } from '@/components/mixes'
import { AudiomackBanner } from '@/components/audiomack-banner'
import { Gallery } from '@/components/gallery'
import { BookingForm } from '@/components/booking-form'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-dj-black-primary">
      <Navbar />
      <Hero />
      <About />
      <Mixes />
      <AudiomackBanner />
      <Gallery />
      <BookingForm />
      <Footer />
    </main>
  )
}
