'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { dj } from '@/lib/constants'

const LOADER_DURATION_MS = 5000

export function SiteLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setVisible(false)
    }, LOADER_DURATION_MS)

    return () => window.clearTimeout(timeout)
  }, [])

  if (!visible) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-dj-black-primary"
      role="status"
      aria-live="polite"
      aria-label="Loading DJ Kesh Africa website"
    >
      <div className="flex flex-col items-center gap-6 px-6 text-center">
        <motion.div
          initial={{ scale: 0.94, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Image
            src={dj.logo}
            alt={dj.name}
            width={180}
            height={80}
            priority
            className="h-auto w-auto"
          />
        </motion.div>
        <div className="h-1 w-48 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{ duration: LOADER_DURATION_MS / 1000, ease: 'linear' }}
            className="h-full w-full bg-gradient-to-r from-dj-gold via-dj-blue to-dj-pink"
          />
        </div>
      </div>
    </motion.div>
  )
}
