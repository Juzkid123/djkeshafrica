'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Particles } from './particles'
import { dj } from '@/lib/constants'

export function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const fullText = dj.name

  useEffect(() => {
    const typingSpeed = 100
    const pauseDuration = 3000
    const deletingSpeed = 50
    const cycleInterval = 5000

    let timeout: NodeJS.Timeout

    const handleTyping = () => {
      if (!isDeleting && displayedText.length < fullText.length) {
        setDisplayedText(fullText.slice(0, displayedText.length + 1))
        timeout = setTimeout(handleTyping, typingSpeed)
      } else if (!isDeleting && displayedText.length === fullText.length) {
        timeout = setTimeout(() => setIsDeleting(true), pauseDuration)
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(fullText.slice(0, displayedText.length - 1))
        timeout = setTimeout(handleTyping, deletingSpeed)
      } else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false)
        timeout = setTimeout(handleTyping, typingSpeed)
      }
    }

    timeout = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, fullText])

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-dj-black-primary">
      {/* Particles background */}
      <Particles />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dj-black-primary" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <div className="text-center">
          {/* DJ Name with Typing Animation */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-dj-cyan mb-4 sm:mb-6 uppercase tracking-tighter leading-none min-h-[1.2em]"
          >
            {displayedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
              className="inline-block ml-2 text-dj-gold"
            >
              |
            </motion.span>
          </motion.h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 sm:mb-12"
          >
            <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-dj-gold mb-2 sm:mb-4 font-bold tracking-wider">
              {dj.tagline}
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-dj-blue font-light tracking-widest mb-2 sm:mb-3">
              {dj.fullTagline}
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-dj-pink font-bold tracking-wider">
              {dj.subline}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.8)' }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-dj-gold text-dj-cyan font-bold uppercase tracking-wider hover:shadow-glow-gold transition-all duration-300 rounded relative overflow-hidden group text-sm sm:text-base"
            >
              <span className="relative z-10">Book DJ Kesh</span>
              <div className="absolute inset-0 bg-gradient-to-r from-dj-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
            <motion.a
              href="https://audiomack.com/djkeshafrica/song/we-outside?share-user-id=23213730"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)' }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-dj-blue text-dj-cyan font-bold uppercase tracking-wider hover:shadow-glow-blue transition-all duration-300 rounded relative overflow-hidden group inline-block text-center text-sm sm:text-base"
            >
              <span className="relative z-10">Listen Mixes</span>
              <div className="absolute inset-0 bg-gradient-to-r from-dj-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <p className="text-dj-cyan text-sm uppercase tracking-widest">Scroll</p>
            <svg className="w-6 h-6 text-dj-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
