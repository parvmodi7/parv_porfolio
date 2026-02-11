'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

export function MouseFollower() {
    const [cursorVariant, setCursorVariant] = useState<'default' | 'text'>('default')

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 }
    const cursorX = useSpring(mouseX, springConfig)
    const cursorY = useSpring(mouseY, springConfig)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }

        const checkHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if the target is a text element or interactive
            const isText =
                target.tagName === 'P' ||
                target.tagName === 'H1' ||
                target.tagName === 'H2' ||
                target.tagName === 'H3' ||
                target.tagName === 'SPAN' ||
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button');

            setCursorVariant(isText ? 'text' : 'default')
        }

        window.addEventListener('mousemove', moveCursor)
        window.addEventListener('mouseover', checkHover)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            window.removeEventListener('mouseover', checkHover)
        }
    }, [mouseX, mouseY])

    const variants = {
        default: {
            height: 12,
            width: 12,
            backgroundColor: "#fff",
            x: "-50%",
            y: "-50%",
            mixBlendMode: "difference" as const,
        },
        text: {
            height: 80,
            width: 80,
            backgroundColor: "#fff",
            x: "-50%",
            y: "-50%",
            mixBlendMode: "difference" as const,
        }
    }

    return (
        <motion.div
            className="fixed top-0 left-0 z-[9999] rounded-full pointer-events-none"
            style={{
                left: cursorX,
                top: cursorY,
            }}
            variants={variants}
            animate={cursorVariant}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 28,
                mass: 0.5
            }}
        />
    )
}
