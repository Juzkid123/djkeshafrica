'use client'

import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { gallery } from '@/lib/constants'
import Image from 'next/image'

export function Gallery() {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="gallery" className="py-12 sm:py-20 md:py-32 px-3 sm:px-4 md:px-6 bg-dj-black-primary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-dj-cyan uppercase mb-3 sm:mb-4 tracking-tight">
            Gallery
          </h2>
          <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-gradient-to-r from-dj-gold to-dj-pink rounded-full" />
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 auto-rows-[150px] sm:auto-rows-[250px]"
        >
          {gallery.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`relative overflow-hidden rounded-lg group ${
                index === 0 || index === 5 ? 'sm:col-span-2 sm:row-span-2 auto-rows-[500px]' : ''
              }`}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.05}
                transitionSpeed={400}
                className="h-full w-full"
                disable={typeof window !== 'undefined' && window.innerWidth < 768}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <p className="text-dj-cyan text-sm font-bold uppercase tracking-wider">{item.title}</p>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 shadow-glow-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
