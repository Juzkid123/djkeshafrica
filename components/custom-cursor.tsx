'use client'

import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current && cursorDotRef.current) {
        const x = e.clientX
        const y = e.clientY

        cursorDotRef.current.style.left = `${x}px`
        cursorDotRef.current.style.top = `${y}px`

        // Delayed follow effect for outer ring
        setTimeout(() => {
          if (cursorRef.current) {
            cursorRef.current.style.left = `${x}px`
            cursorRef.current.style.top = `${y}px`
          }
        }, 50)
      }
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target?.tagName === 'BUTTON' || target?.tagName === 'A') {
        if (cursorRef.current) cursorRef.current.classList.add('scale-150', 'opacity-100')
        if (cursorDotRef.current) cursorDotRef.current.classList.add('bg-dj-gold')
      }
    }

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target?.tagName === 'BUTTON' || target?.tagName === 'A') {
        if (cursorRef.current) cursorRef.current.classList.remove('scale-150', 'opacity-100')
        if (cursorDotRef.current) cursorDotRef.current.classList.remove('bg-dj-gold')
      }
    }

    document.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [])

  return (
    <>
      {/* Outer ring */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed w-8 h-8 border-2 border-dj-gold rounded-full -translate-x-1/2 -translate-y-1/2 z-[9999] flex items-center justify-center transition-all duration-200 ease-out opacity-60"
      />

      {/* Inner dot */}
      <div
        ref={cursorDotRef}
        className="pointer-events-none fixed w-2 h-2 bg-dj-cyan rounded-full -translate-x-1/2 -translate-y-1/2 z-[9999] block transition-all duration-75 ease-out"
      />
    </>
  )
}
