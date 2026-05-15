'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { dj } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dj-black-primary border-t border-dj-gold/20 py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12"
        >
          {/* Brand */}
          <div>
            <Image
              src={dj.logo}
              alt={dj.name}
              width={180}
              height={80}
              className="h-auto w-auto mb-4"
              quality={95}
            />
            <p className="text-dj-cyan/60 text-sm leading-relaxed">
              STU•P•I•D MUZIK. Authentic, boundary-pushing music from Africa to the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-dj-cyan uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Mixes', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-dj-cyan/60 hover:text-dj-cyan transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-sm font-bold text-dj-cyan uppercase tracking-widest mb-4">Follow</h4>
            <div className="flex flex-wrap gap-3">
              <motion.a
                href={dj.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#E4405F' }}
                className="w-10 h-10 rounded-full border border-dj-gold/30 flex items-center justify-center text-dj-cyan/60 hover:text-dj-gold transition-colors"
                title="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12c0-3.403 2.759-6.162 6.162-6.162 3.403 0 6.162 2.759 6.162 6.162 0 3.403-2.759 6.162-6.162 6.162-3.403 0-6.162-2.759-6.162-6.162zm2.4 0c0 2.07 1.693 3.762 3.762 3.762 2.07 0 3.762-1.693 3.762-3.762 0-2.07-1.693-3.762-3.762-3.762-2.07 0-3.762 1.693-3.762 3.762zm9.923-11.03c-.794 0-1.437.645-1.437 1.437 0 .794.645 1.437 1.437 1.437.794 0 1.437-.645 1.437-1.437-.001-.792-.644-1.437-1.437-1.437z" />
                </svg>
              </motion.a>
              <motion.a
                href={dj.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#1877F2' }}
                className="w-10 h-10 rounded-full border border-dj-gold/30 flex items-center justify-center text-dj-cyan/60 hover:text-dj-gold transition-colors"
                title="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </motion.a>
              <motion.a
                href={dj.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#000000' }}
                className="w-10 h-10 rounded-full border border-dj-gold/30 flex items-center justify-center text-dj-cyan/60 hover:text-dj-gold transition-colors"
                title="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.498 3h-3.996c.228 2.159.869 4.246 1.999 6v5.981c0 2.209-1.791 4-4 4s-4-1.791-4-4V9.52c-1.165 1.412-2.949 2.48-5.005 2.48-.828 0-1.623-.154-2.389-.44v3.237c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5V14c2.209 0 4 1.791 4 4v2c0 2.209-1.791 4-4 4s-4-1.791-4-4v-8.981C2.992 6.626 1.5 4.519 1.5 2c0-1.379 1.121-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 .552.448 1 1 1h2c.552 0 1-.448 1-1C11 1.121 12.121 0 13.5 0S16 1.121 16 2.5V3h3.498z" />
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-dj-cyan uppercase tracking-widest mb-4">Contact</h4>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-dj-cyan/50 uppercase tracking-wider mb-1">Email</p>
                <a href={`mailto:${dj.email}`} className="text-dj-cyan/80 hover:text-dj-gold transition-colors text-sm break-all">
                  {dj.email}
                </a>
              </div>
              <div>
                <p className="text-xs text-dj-cyan/50 uppercase tracking-wider mb-1">Phone</p>
                <div className="space-y-1">
                  {dj.phone.map((number, index) => (
                    <a
                      key={index}
                      href={`tel:${number.replace(/\s/g, '')}`}
                      className="text-dj-cyan/80 hover:text-dj-gold transition-colors text-sm block"
                    >
                      {number}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-dj-cyan/50 uppercase tracking-wider mb-1">Location</p>
                <p className="text-dj-cyan/80 text-sm">{dj.location}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-dj-gold/20 mb-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-dj-cyan/40 text-sm"
        >
          <p>&copy; {currentYear} {dj.name} - STU•P•I•D MUZIK. All rights reserved. Crafted with precision and passion.</p>
        </motion.div>
      </div>
    </footer>
  )
}
