'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { mixes, dj } from '@/lib/constants'
import { AudioCard } from './audio-card'

export function Mixes() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="mixes" className="py-16 sm:py-24 md:py-32 px-4 md:px-6 bg-[#f7f4ed] text-[#090909] overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-16"
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end mb-5">
            <div className="w-full">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#090909] uppercase tracking-tight mb-2">
                Latest Mixes
              </h2>
              <p className="max-w-2xl text-xs sm:text-base md:text-lg text-[#3d3a33]">All tracks available exclusively on Audiomack. Click any mix to listen and stream.</p>
            </div>
            
            {/* Audiomack Official Logo */}
            <motion.a
              href="https://audiomack.com/djkeshafrica"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
            >
              <Image
                src={dj.audiomackLogo}
                alt="Audiomack"
                width={100}
                height={70}
                className="h-auto w-auto sm:w-auto"
                quality={95}
                sizes="(max-width: 640px) 100px, 120px"
              />
            </motion.a>
          </div>
          <div className="w-20 h-1 bg-[#c8a24a]" />
        </motion.div>

        {/* Mixes Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {mixes.map((mix) => (
            <motion.div key={mix.id} variants={itemVariants}>
              <AudioCard {...mix} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
