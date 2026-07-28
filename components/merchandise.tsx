'use client'

import { motion } from 'framer-motion'
import { merchandise } from '@/lib/constants'
import Image from 'next/image'

export function Merchandise() {
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
    <section id="merch" className="border-t border-dj-gold/15 bg-dj-black-primary px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-dj-cyan uppercase mb-3 sm:mb-4 tracking-tight">
            Merch
          </h2>
          <div className="h-1 w-16 bg-dj-gold sm:w-20" />
          <p className="mt-4 max-w-xl text-sm leading-6 text-dj-cyan/70 sm:text-base">A focused selection of official DJ KESHAFRICA essentials.</p>
        </motion.div>

        {/* Merchandise Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6"
        >
          {merchandise.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group flex flex-col overflow-hidden border border-dj-gold/20 bg-dj-black-secondary transition-colors duration-300 hover:border-dj-gold/60"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-dj-black-primary sm:h-72">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={95}
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Product Info */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="mb-2 text-base font-bold text-dj-cyan transition-colors group-hover:text-dj-gold sm:text-lg">
                  {item.name}
                </h3>
                <p className="mb-5 flex-1 text-sm leading-6 text-dj-blue">
                  {item.description}
                </p>

                {/* Sizes */}
                <div className="mb-5">
                  <p className="text-dj-gold text-xs font-bold mb-2 uppercase">Sizes:</p>
                  <div className="flex flex-wrap gap-2">
                    {item.sizes.map((size) => (
                      <span
                        key={size}
                        className="px-2 py-1 text-xs border border-dj-cyan/50 text-dj-cyan rounded hover:bg-dj-cyan/10 transition-all"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and enquiry */}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xl font-bold text-dj-gold">
                    ${item.price}
                  </span>
                  <a href="#contact" className="border border-dj-gold px-4 py-2 text-xs font-bold uppercase tracking-wider text-dj-gold transition-colors hover:bg-dj-gold hover:text-dj-black-primary">
                    Enquire
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Coming Soon Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 border-t border-dj-gold/30 pt-6 text-center sm:mt-10"
        >
          <p className="font-bold uppercase tracking-wider text-dj-gold">Online checkout is coming soon</p>
          <p className="mt-2 text-sm text-dj-cyan/70 sm:text-base">
            Contact us directly for availability, sizing, and bulk orders.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
