'use client'

import { motion } from 'framer-motion'
import { dj } from '@/lib/constants'
import Image from 'next/image'

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="about" className="px-4 py-16 sm:px-6 sm:py-20 md:py-24 bg-dj-black-primary overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center"
        >
          {/* Left - Image */}
          <motion.div
            variants={itemVariants}
            className="relative aspect-[4/5] overflow-hidden border border-dj-gold/35 bg-[#111111]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-dj-gold/15 via-transparent to-black/40 z-10" />
            <Image
              src={dj.profileImage}
              alt={dj.name}
              fill
              className="object-cover object-top grayscale contrast-110"
              quality={95}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-dj-cyan uppercase mb-3 sm:mb-4 tracking-tight"
              >
                About
              </motion.h2>
              <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-dj-gold" />
            </div>

            <p className="text-base md:text-lg text-dj-cyan/75 leading-8">
              {dj.bio}
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-6">
              <div className="border border-dj-gold/20 bg-white/[0.04] p-4 md:p-6">
                <p className="text-2xl md:text-4xl font-black text-dj-gold mb-1">500+</p>
                <p className="text-xs sm:text-sm text-dj-cyan/60 uppercase tracking-wider">Events Performed</p>
              </div>
              <div className="border border-dj-gold/20 bg-white/[0.04] p-4 md:p-6">
                <p className="text-2xl md:text-4xl font-black text-dj-gold mb-1">2M+</p>
                <p className="text-xs sm:text-sm text-dj-cyan/60 uppercase tracking-wider">Listeners Worldwide</p>
              </div>
              <div className="border border-dj-gold/20 bg-white/[0.04] p-4 md:p-6">
                <p className="text-2xl md:text-4xl font-black text-dj-gold mb-1">15</p>
                <p className="text-xs sm:text-sm text-dj-cyan/60 uppercase tracking-wider">Awards Won</p>
              </div>
              <div className="border border-dj-gold/20 bg-white/[0.04] p-4 md:p-6">
                <p className="text-2xl md:text-4xl font-black text-dj-gold mb-1">6+</p>
                <p className="text-xs sm:text-sm text-dj-cyan/60 uppercase tracking-wider">Countries</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
