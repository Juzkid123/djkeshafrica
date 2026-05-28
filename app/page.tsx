import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Mixes } from '@/components/mixes'
import { AudiomackBanner } from '@/components/audiomack-banner'
import { Gallery } from '@/components/gallery'
import { Merchandise } from '@/components/merchandise'
import { BookingForm } from '@/components/booking-form'
import { Footer } from '@/components/footer'
import { SiteLoader } from '@/components/site-loader'

export default function Home() {
  return (
    <main className="bg-dj-black-primary overflow-x-hidden w-full max-w-full">
      <SiteLoader />
      <Navbar />
      <Hero />
      <About />
      <Mixes />
      <AudiomackBanner />
      <Gallery />
      <Merchandise />
      <BookingForm />
      <Footer />
    </main>
  )
}
