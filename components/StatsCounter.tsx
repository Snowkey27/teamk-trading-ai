'use client'

import { useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

interface StatsCounterProps {
  value: number
  suffix?: string
  duration?: number
}

export default function StatsCounter({ value, suffix = '', duration = 2 }: StatsCounterProps) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => {
    if (value > 1000) {
      return (latest / 1000).toFixed(1) + 'K'
    }
    return Math.round(latest).toString()
  })

  useEffect(() => {
    const controls = animate(count, value, {
      duration,
      ease: 'easeOut',
    })
    return controls.stop
  }, [count, value, duration])

  return (
    <div className="text-center">
      <motion.div 
        className="text-3xl md:text-4xl font-bold text-gradient"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.span>
          {value > 1000 ? rounded : Math.round(count.get())}
        </motion.span>
        <span>{suffix}</span>
      </motion.div>
    </div>
  )
}