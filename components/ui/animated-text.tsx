'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedTextProps {
    text: string
    className?: string
    delay?: number
    type?: 'words' | 'chars'
}

export function AnimatedText({ text, className = '', delay = 0, type = 'words' }: AnimatedTextProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: delay * i },
        }),
    }

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
    }

    if (type === 'chars') {
        return (
            <motion.div
                ref={ref}
                className={className}
                variants={container}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {Array.from(text).map((char, index) => (
                    <motion.span variants={child} key={index}>
                        {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                ))}
            </motion.div>
        )
    }

    return (
        <motion.div
            ref={ref}
            className={className}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {text.split(' ').map((word, index) => (
                <motion.span variants={child} key={index} className="inline-block mr-[0.25em]">
                    {word}
                </motion.span>
            ))}
        </motion.div>
    )
}
