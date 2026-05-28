'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventDate: '',
    eventType: 'private-event',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        eventDate: '',
        eventType: 'private-event',
        message: '',
      })
    }, 3000)
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
    <section id="contact" className="py-12 sm:py-20 md:py-32 px-3 sm:px-4 md:px-6 bg-dj-black-secondary overflow-x-hidden">
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
              disabled={submitted}
            >
              <span className="relative z-10">{submitted ? 'Booking Received!' : 'Send Booking Request'}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-dj-pink to-dj-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </motion.div>

          {/* Success Message */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-dj-gold/20 border border-dj-gold/50 rounded-lg text-center text-dj-cyan"
            >
              Thank you! We&apos;ll get back to you soon.
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  )
}
