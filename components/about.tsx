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
    <section id="about" className="py-12 sm:py-20 md:py-32 px-3 sm:px-4 md:px-6 bg-dj-black-primary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center"
        >
          {/* Left - Image */}
          <motion.div
            variants={itemVariants}
            className="relative aspect-square rounded-lg overflow-hidden border border-dj-gold/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-dj-gold/10 to-dj-blue/10 z-10" />
            <Image
              src={dj.profileImage}
              alt={dj.name}
              fill
              className="object-cover object-top"
              priority
              quality={95}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 shadow-glow-gold z-0" />
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
              <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-gradient-to-r from-dj-gold to-dj-blue rounded-full" />
            </div>

            <p className="text-sm sm:text-base md:text-lg text-dj-cyan/80 leading-relaxed">
              {dj.bio}
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 pt-4 sm:pt-6">
              <div className="glass p-3 sm:p-4 md:p-6 rounded-lg">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-dj-gold mb-1 sm:mb-2">500+</p>
                <p className="text-xs sm:text-sm text-dj-cyan/60 uppercase tracking-wider">Events Performed</p>
              </div>
              <div className="glass p-3 sm:p-4 md:p-6 rounded-lg">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-dj-blue mb-1 sm:mb-2">2M+</p>
                <p className="text-xs sm:text-sm text-dj-cyan/60 uppercase tracking-wider">Listeners Worldwide</p>
              </div>
              <div className="glass p-3 sm:p-4 md:p-6 rounded-lg">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-dj-pink mb-1 sm:mb-2">15</p>
                <p className="text-xs sm:text-sm text-dj-cyan/60 uppercase tracking-wider">Awards Won</p>
              </div>
              <div className="glass p-3 sm:p-4 md:p-6 rounded-lg">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-dj-cyan mb-1 sm:mb-2">6+</p>
                <p className="text-xs sm:text-sm text-dj-cyan/60 uppercase tracking-wider">Countries</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
