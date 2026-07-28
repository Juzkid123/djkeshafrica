import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Mixes } from '@/components/mixes'
import { Gallery } from '@/components/gallery'
import { Merchandise } from '@/components/merchandise'
import { BookingForm } from '@/components/booking-form'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main id="main-content" className="bg-dj-black-primary overflow-x-hidden w-full max-w-full">
      <Navbar />
      <Hero />
      <About />
      <Mixes />
      <Gallery />
      <Merchandise />
      <BookingForm />
      <Footer />
    </main>
  )
}
