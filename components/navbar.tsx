'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { dj } from '@/lib/constants'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Mixes', href: '#mixes' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Merch', href: '#merch' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navIsDark = scrolled || mobileMenuOpen

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!mobileMenuOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-x-hidden ${
        navIsDark
          ? 'bg-dj-black-primary/85 backdrop-blur-md border-b border-dj-gold/15 py-2'
          : 'bg-[#f7f4ed]/92 backdrop-blur-md border-b border-[#c8a24a]/25 py-3 shadow-[0_12px_30px_rgba(9,9,9,0.06)]'
      }`}
    >
      <div className="w-full flex items-center justify-between h-12 sm:h-14 px-3 sm:px-4 md:px-6">
        {/* Logo - Top Left */}
        <motion.a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          whileHover={{ scale: 1.05 }}
          className="flex items-center flex-shrink-0"
        >
          <Image
            src={dj.logo}
            alt={dj.name}
            width={100}
            height={45}
            className="h-auto w-auto"
            priority
            sizes="(max-width: 640px) 80px, 100px"
          />
        </motion.a>

        {/* Spacer for Desktop */}
        <div className="hidden md:flex flex-1" />

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center justify-end gap-4 lg:gap-6">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ color: '#d4af37' }}
              className={`text-sm lg:text-base font-extrabold uppercase tracking-widest lg:tracking-[0.15em] transition-colors whitespace-nowrap cursor-pointer pb-1 border-b-2 border-b-transparent hover:border-b-dj-gold ${
                navIsDark ? 'text-dj-cyan hover:text-dj-gold' : 'text-[#090909] hover:text-[#9b741d]'
              }`}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button - Right Side on Mobile */}
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-2"
          whileHover={{ scale: 1.1 }}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <motion.span
            animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 8 : 0 }}
            className={`w-6 h-0.5 block ${navIsDark ? 'bg-white' : 'bg-[#090909]'}`}
          />
          <motion.span
            animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
            className={`w-6 h-0.5 block ${navIsDark ? 'bg-white' : 'bg-[#090909]'}`}
          />
          <motion.span
            animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -8 : 0 }}
            className={`w-6 h-0.5 block ${navIsDark ? 'bg-white' : 'bg-[#090909]'}`}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          id="mobile-navigation"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden mt-2 px-3 sm:px-4 space-y-1 pb-3 bg-dj-black-primary backdrop-blur-md border-b border-dj-gold/10"
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              whileHover={{ x: 5, color: '#d4af37' }}
              className="block text-dj-cyan text-xs sm:text-sm uppercase tracking-wider hover:text-dj-gold transition-colors py-3 px-3 rounded cursor-pointer"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      )}
      </AnimatePresence>
    </motion.nav>
  )
}
