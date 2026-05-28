'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { merchandise } from '@/lib/constants'
import Image from 'next/image'
import { ShoppingCart, Rocket } from 'lucide-react'

export function Merchandise() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [cart, setCart] = useState<{ [key: number]: number }>({})

  const categories = ['all', ...new Set(merchandise.map(item => item.category))]
  
  const filteredMerchandise = selectedCategory === 'all' 
    ? merchandise 
    : merchandise.filter(item => item.category === selectedCategory)

  const handleAddToCart = (id: number) => {
    setCart(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }))
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

  const cartCount = Object.values(cart).reduce((sum, count) => sum + count, 0)

  return (
    <section id="merch" className="py-12 sm:py-20 md:py-32 px-3 sm:px-4 md:px-6 bg-dj-black-primary overflow-x-hidden">
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
            Merch
          </h2>
          <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-gradient-to-r from-dj-gold to-dj-pink rounded-full" />
          <p className="text-dj-gold mt-4 text-sm sm:text-base">Rock the Official DJ KESHAFRICA Collection</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 flex flex-wrap gap-2 sm:gap-4"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded uppercase text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-dj-gold to-dj-pink text-dj-black shadow-glow-gold'
                  : 'border-2 border-dj-cyan text-dj-cyan hover:border-dj-gold hover:text-dj-gold'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Cart Badge */}
        {cartCount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="mb-6 sm:mb-8 inline-block px-4 py-2 bg-dj-gold text-dj-black rounded-full text-sm font-bold"
          >
            Cart Items: {cartCount}
          </motion.div>
        )}

        {/* Merchandise Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          {filteredMerchandise.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="bg-dj-black-secondary rounded-lg overflow-hidden group border border-dj-cyan/20 hover:border-dj-gold/50 transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-56 overflow-hidden bg-dj-black-primary">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Product Info */}
              <div className="flex-1 p-4 sm:p-6 flex flex-col">
                <h3 className="text-dj-cyan font-bold text-sm sm:text-base mb-2 group-hover:text-dj-gold transition-colors">
                  {item.name}
                </h3>
                <p className="text-dj-blue text-xs sm:text-sm mb-3 flex-1">
                  {item.description}
                </p>

                {/* Sizes */}
                <div className="mb-3">
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

                {/* Price and Add to Cart */}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-lg sm:text-xl font-bold text-dj-gold">
                    ${item.price}
                  </span>
                  <motion.button
                    whileHover={{ boxShadow: '0 0 20px rgba(212, 175, 55, 0.6)' }}
                    onClick={() => handleAddToCart(item.id)}
                    className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-gradient-to-r from-dj-gold to-dj-pink text-dj-black font-bold rounded text-xs sm:text-sm uppercase tracking-wider hover:scale-105 transition-transform flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={16} />
                    <span className="hidden sm:inline">Add</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredMerchandise.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-dj-cyan text-lg">No items in this category yet.</p>
          </motion.div>
        )}

        {/* Coming Soon Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 p-6 sm:p-8 border-2 border-dj-gold rounded-lg bg-dj-black-secondary/50 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Rocket className="w-5 h-5 text-dj-gold" />
            <p className="text-dj-gold font-bold uppercase">Checkout Coming Soon</p>
          </div>
          <p className="text-dj-cyan text-sm sm:text-base">
            Full e-commerce functionality and payment integration coming soon. Contact us for bulk orders!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
