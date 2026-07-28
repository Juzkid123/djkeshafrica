'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { dj } from '@/lib/constants'

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventDate: '',
    eventType: 'private-event',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Booking inquiry: ${formData.eventType} on ${formData.eventDate}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nEvent date: ${formData.eventDate}\nEvent type: ${formData.eventType}\n\nDetails:\n${formData.message || 'No additional details provided.'}`,
    )
    window.location.href = `mailto:${dj.email}?subject=${subject}&body=${body}`
  }

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
    <section id="contact" className="px-4 py-16 sm:px-6 sm:py-20 md:py-24 bg-dj-black-secondary overflow-x-hidden">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 md:mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-dj-cyan uppercase mb-2 sm:mb-4 tracking-tight">
            Book Now
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-dj-cyan/60">Get in touch for bookings, collaborations, or inquiries</p>
        </motion.div>

        {/* Form */}
        <motion.form
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-4 sm:space-y-6"
        >
          {/* Name */}
          <motion.div variants={itemVariants}>
            <label htmlFor="name" className="block text-xs sm:text-sm font-bold text-dj-cyan uppercase tracking-wider mb-2 sm:mb-3">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
              className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-dj-black-primary border border-dj-gold/30 text-dj-cyan placeholder-dj-cyan/40 rounded-lg focus:outline-none focus:border-dj-gold focus:shadow-glow-gold transition-all duration-300 text-sm"
              placeholder="Your name"
            />
          </motion.div>

          {/* Email */}
          <motion.div variants={itemVariants}>
            <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-dj-cyan uppercase tracking-wider mb-2 sm:mb-3">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
              className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-dj-black-primary border border-dj-gold/30 text-dj-cyan placeholder-dj-cyan/40 rounded-lg focus:outline-none focus:border-dj-gold focus:shadow-glow-gold transition-all duration-300 text-sm"
              placeholder="your@email.com"
            />
          </motion.div>

          {/* Event Date */}
          <motion.div variants={itemVariants}>
            <label htmlFor="eventDate" className="block text-xs sm:text-sm font-bold text-dj-cyan uppercase tracking-wider mb-2 sm:mb-3">
              Event Date
            </label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-dj-black-primary border border-dj-gold/30 text-dj-cyan placeholder-dj-cyan/40 rounded-lg focus:outline-none focus:border-dj-gold focus:shadow-glow-gold transition-all duration-300 text-sm"
            />
          </motion.div>

          {/* Event Type */}
          <motion.div variants={itemVariants}>
            <label htmlFor="eventType" className="block text-xs sm:text-sm font-bold text-dj-cyan uppercase tracking-wider mb-2 sm:mb-3">
              Event Type
            </label>
            <select
              id="eventType"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-dj-black-primary border border-dj-gold/30 text-dj-cyan rounded-lg focus:outline-none focus:border-dj-gold focus:shadow-glow-gold transition-all duration-300 text-sm"
            >
              <option value="private-event">Private Event</option>
              <option value="club">Club Night</option>
              <option value="festival">Festival</option>
              <option value="corporate">Corporate Event</option>
              <option value="wedding">Wedding</option>
              <option value="other">Other</option>
            </select>
          </motion.div>

          {/* Message */}
          <motion.div variants={itemVariants}>
            <label htmlFor="message" className="block text-xs sm:text-sm font-bold text-dj-cyan uppercase tracking-wider mb-2 sm:mb-3">
              Special Requests
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-dj-black-primary border border-dj-gold/30 text-dj-cyan placeholder-dj-cyan/40 rounded-lg focus:outline-none focus:border-dj-gold focus:shadow-glow-gold transition-all duration-300 resize-none text-sm"
              placeholder="Tell us about your event..."
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={itemVariants}>
            <button
              type="submit"
              className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-dj-gold to-dj-pink text-dj-black-primary font-bold uppercase tracking-wider rounded-lg hover:shadow-glow-gold transition-all duration-300 hover:scale-105 relative overflow-hidden group disabled:opacity-50 text-sm sm:text-base"
            >
              <span className="relative z-10">Prepare Booking Email</span>
              <div className="absolute inset-0 bg-gradient-to-r from-dj-pink to-dj-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </motion.div>

          <p className="text-center text-xs leading-5 text-dj-cyan/60">
            Submitting opens your email app with the booking details addressed to {dj.email}.
          </p>
        </motion.form>
      </div>
    </section>
  )
}
