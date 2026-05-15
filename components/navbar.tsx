'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { dj } from '@/lib/constants'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Mixes', href: '#mixes' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-dj-black-primary/60 backdrop-blur-md border-b border-dj-gold/10 py-2' 
          : 'py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 flex items-center justify-between h-12 sm:h-14">
        {/* Mobile Menu Button - Left Side on Mobile */}
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-2"
          whileHover={{ scale: 1.1 }}
        >
          <motion.span
            animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 8 : 0 }}
            className="w-6 h-0.5 bg-dj-gold block"
          />
          <motion.span
            animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
            className="w-6 h-0.5 bg-dj-gold block"
          />
          <motion.span
            animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -8 : 0 }}
            className="w-6 h-0.5 bg-dj-gold block"
          />
        </motion.button>

        {/* Logo - Center on Mobile, Left on Desktop */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="flex items-center flex-shrink-0 md:flex-1"
        >
          <Image
            src={dj.logo}
            alt={dj.name}
            width={80}
            height={36}
            className="h-auto w-auto sm:w-auto sm:h-auto"
            priority
            sizes="(max-width: 640px) 80px, 100px"
          />
        </motion.a>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center justify-center gap-4 lg:gap-6 flex-1">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ color: '#d4af37' }}
              className="text-dj-cyan text-xs lg:text-sm uppercase tracking-wider lg:tracking-widest hover:text-dj-gold transition-colors whitespace-nowrap cursor-pointer"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Spacer for Desktop */}
        <div className="hidden md:flex flex-1" />
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
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
    </motion.nav>
  )
}
