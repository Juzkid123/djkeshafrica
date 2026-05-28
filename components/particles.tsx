'use client'

import { useEffect, useRef } from 'react'

export function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = Math.min(window.innerWidth, document.documentElement.clientWidth)
      canvas.height = window.innerHeight
    }
    setCanvasSize()

    // Particle class
    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string

      constructor(width: number, height: number) {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.size = Math.random() * 2
        this.opacity = Math.random() * 0.5 + 0.3
        const colors = [
          'rgba(147, 51, 234, ',  // purple
          'rgba(59, 130, 246, ',  // blue
          'rgba(236, 72, 153, ',  // pink
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update(width: number, height: number) {
        this.x += this.vx
        this.y += this.vy

        // Wrap around edges
        if (this.x < 0) this.x = width
        if (this.x > width) this.x = 0
        if (this.y < 0) this.y = height
        if (this.y > height) this.y = 0
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color + this.opacity + ')'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const particles: Particle[] = []
    const particleCount = 100

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas.width, canvas.height))
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(13, 13, 13, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        particle.update(canvas.width, canvas.height)
        particle.draw(ctx)
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      setCanvasSize()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}
