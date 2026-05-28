'use client'

import { motion } from 'framer-motion'
import { events } from '@/lib/constants'

export function Events() {
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
    <section id="events" className="py-12 sm:py-20 md:py-32 px-3 sm:px-4 md:px-6 bg-dj-black-secondary overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dj-cyan uppercase mb-4 tracking-tight">
            Upcoming Events
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-dj-pink to-dj-blue" />
        </motion.div>

        {/* Events Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="glass p-8 rounded-lg border border-dj-pink/20 hover:border-dj-pink/50 transition-all group cursor-pointer"
            >
              {/* Date */}
              <div className="mb-6">
                <p className="text-sm text-dj-pink uppercase tracking-widest font-bold mb-2">
                  {event.date}
                </p>
              </div>

              {/* Venue */}
              <h3 className="text-2xl font-bold text-dj-cyan mb-3 group-hover:text-dj-pink transition-colors">
                {event.venue}
              </h3>

              {/* Location */}
              <div className="flex items-center gap-2 mb-6 text-dj-cyan/60">
                <svg className="w-5 h-5 text-dj-pink" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                </svg>
                <span>{event.city}</span>
              </div>

              {/* CTA Button */}
              <motion.a
                href={event.tickets}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-6 py-2 border-2 border-dj-pink text-dj-cyan font-bold uppercase tracking-wider hover:shadow-glow-pink transition-all text-sm"
              >
                Get Tickets
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
