'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface AudioCardProps {
  id: number
  title: string
  artist: string
  cover: string
  url: string
}

export function AudioCard({ title, artist, cover, url }: AudioCardProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5, boxShadow: '0 0 30px rgba(147, 51, 234, 0.6)' }}
      className="glass p-6 rounded-lg overflow-hidden group cursor-pointer h-full flex flex-col hover:shadow-glow-purple transition-all duration-300"
    >
      {/* Album Art */}
      <div className="relative aspect-square rounded-lg overflow-hidden mb-4 bg-dj-black-secondary">
        <Image
          src={cover}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Audiomack Badge Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-center"
          >
            <svg
              className="w-12 h-12 text-dj-gold mb-2 mx-auto"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <p className="text-sm font-bold text-dj-cyan">Listen on</p>
            <p className="text-xs text-dj-gold font-bold mt-1">AUDIOMACK</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-dj-cyan mb-1 line-clamp-2">{title}</h3>
        <p className="text-sm text-dj-cyan/60 mb-4">{artist}</p>
        
        <div className="flex items-center justify-between text-xs text-dj-cyan/60 mt-auto">
          <span className="px-3 py-1 bg-dj-gold/20 rounded-full text-dj-gold font-semibold">Audiomack</span>
          <span className="text-dj-blue">→ Listen</span>
        </div>
      </div>
    </motion.a>
  )
}
