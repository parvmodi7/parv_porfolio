'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface DecryptTextProps {
    text: string
    className?: string
    animateOnView?: boolean
    revealDirection?: 'start' | 'end' | 'center'
    speed?: number
    maxIterations?: number
    sequential?: boolean
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+'

export function DecryptText({
    text,
    className,
    animateOnView = true,
    revealDirection = 'start',
    speed = 50,
    maxIterations = 10,
    sequential = false, // If true, reveal one by one. If false, all scramble then settle.
}: DecryptTextProps) {
    const [displayText, setDisplayText] = useState(text)
    const [isScrambling, setIsScrambling] = useState(false)
    const elementRef = useRef<HTMLSpanElement>(null)
    const isInView = useInView(elementRef, { once: true, margin: "-20%" })
    const hasAnimated = useRef(false)

    useEffect(() => {
        if (animateOnView && isInView && !hasAnimated.current) {
            startScramble()
            hasAnimated.current = true
        } else if (!animateOnView && !hasAnimated.current) {
            startScramble()
            hasAnimated.current = true
        }
    }, [isInView, animateOnView])

    const startScramble = () => {
        setIsScrambling(true)
        let iteration = 0
        const interval = setInterval(() => {
            setDisplayText((prev) =>
                text
                    .split('')
                    .map((char, index) => {
                        if (char === ' ') return ' '

                        // Logic for revealing characters
                        let shouldReveal = false
                        if (sequential) {
                            // Accessing index based on iteration
                            if (index < iteration) shouldReveal = true
                        } else {
                            if (iteration >= maxIterations) shouldReveal = true
                        }

                        if (shouldReveal) {
                            return char
                        }

                        return characters[Math.floor(Math.random() * characters.length)]
                    })
                    .join('')
            )

            if (sequential) {
                if (iteration >= text.length) {
                    clearInterval(interval)
                    setIsScrambling(false)
                    setDisplayText(text)
                }
                iteration += 1 / 3 // Slow down the sequential reveal
            } else {
                if (iteration >= maxIterations) {
                    clearInterval(interval)
                    setIsScrambling(false)
                    setDisplayText(text)
                }
                iteration += 1
            }

        }, speed)

        return () => clearInterval(interval)
    }

    return (
        <span ref={elementRef} className={cn("inline-block whitespace-pre-wrap", className)}>
            <span className="sr-only">{text}</span>
            <span aria-hidden="true">{displayText}</span>
        </span>
    )
}
