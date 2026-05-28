'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { mixes, dj } from '@/lib/constants'

export function AudiomackBanner() {
  return (
    <section className="py-12 sm:py-20 md:py-32 px-3 sm:px-4 md:px-6 bg-gradient-to-br from-dj-gold/10 to-dj-blue/10 border-y border-dj-gold/30 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          {/* Audiomack Official Logo */}
          <motion.a
            href="https://audiomack.com/djkeshafrica"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="inline-block mb-4 sm:mb-6 md:mb-8"
          >
            <Image
              src={dj.audiomackLogo}
              alt="Audiomack"
              width={140}
              height={98}
              className="h-auto w-auto sm:w-auto"
              quality={95}
              sizes="(max-width: 640px) 140px, 200px"
            />
          </motion.a>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-dj-cyan uppercase mb-3 sm:mb-4 tracking-tight">
            Stream All Tracks
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-dj-cyan/70 mb-6 sm:mb-8 max-w-2xl mx-auto">
            DJ KESHAFRICA&apos;s complete collection of STU•P•I•D MUZIK exclusively on Audiomack. Stream, download, and share your favorite mixes.
          </p>

          <motion.a
            href="https://audiomack.com/djkeshafrica"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.8)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-dj-gold text-dj-black-primary font-bold uppercase tracking-wider rounded hover:shadow-glow-gold transition-all duration-300 text-sm sm:text-base"
          >
            Visit Audiomack Profile
          </motion.a>
        </motion.div>

        {/* Quick Links Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {mixes.map((mix, index) => (
            <motion.a
              key={mix.id}
              href={mix.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ x: 5 }}
              className="group flex items-center gap-4 p-4 bg-dj-black-primary/50 border border-dj-gold/30 rounded-lg hover:border-dj-gold/60 hover:bg-dj-black-primary/80 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-dj-gold/20 rounded-lg flex items-center justify-center group-hover:bg-dj-gold/40 transition-colors">
                <svg className="w-6 h-6 text-dj-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-dj-cyan truncate">{mix.title}</h3>
                <p className="text-sm text-dj-cyan/50">Listen on Audiomack →</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
