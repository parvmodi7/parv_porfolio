'use client'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export function ScrollBird() {
    const { scrollYProgress } = useScroll()
    const [isVisible, setIsVisible] = useState(false)

    // Smooth scroll progress
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    // Map progress (0-1) to screen width percentage (0% to ~95%)
    // Using a transform to move the bird across the screen
    const xRange = useTransform(scaleX, [0, 1], ["0vw", "90vw"])

    // Ensure it only mounts on client to avoid hydration mismatch
    useEffect(() => {
        setIsVisible(true)
    }, [])

    if (!isVisible) return null

    return (
        <motion.div
            className="fixed bottom-8 z-40 pointer-events-none"
            style={{ x: xRange, left: '20px' }}
        >
            <BirdSVG />
        </motion.div>
    )
}

function BirdSVG() {
    return (
        <motion.svg
            width="40"
            height="40"
            viewBox="0 0 50 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // Add a slight bobbing motion
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
            {/* Body */}
            <path
                d="M10 20 Q 25 10, 40 20 Q 30 35, 10 20 Z"
                fill="currentColor"
                className="text-primary"
            />
            {/* Wing - Flapping animation */}
            <motion.path
                d="M15 18 Q 25 0, 35 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                className="text-foreground"
                animate={{ d: ["M15 18 Q 25 0, 35 18", "M15 18 Q 25 25, 35 18", "M15 18 Q 25 0, 35 18"] }}
                transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Eye */}
            <circle cx="35" cy="18" r="1.5" fill="black" />
            {/* Beak */}
            <path d="M40 20 L 48 22 L 40 24" fill="currentColor" className="text-yellow-500" />
        </motion.svg>
    )
}
