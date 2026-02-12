'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navItems = [
    { name: 'About', href: '#about', label: 'Who I am' },
    { name: 'Experience', href: '#experience', label: 'My Journey' },
    { name: 'Projects', href: '#projects', label: 'What I built' },
    { name: 'Contact', href: '#contact', label: 'Say Hello' },
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] z-50 transition-all duration-300">
            <motion.div
                ref={containerRef}
                layout
                initial={{ height: 60 }}
                animate={{ height: isOpen ? 'auto' : 60 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={cn(
                    "block bg-background/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-lg relative overflow-hidden",
                    isOpen ? "rounded-[24px]" : "rounded-xl" // Slightly rounder when open for aesthetics
                )}
            >
                {/* Top Bar */}
                <div className="relative h-[60px] flex items-center justify-between px-4 z-20 w-full bg-background/50">
                    {/* Hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="h-full flex flex-col items-center justify-center cursor-pointer gap-[6px] w-[50px] group"
                    >
                        <motion.div
                            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            className="w-[30px] h-[2px] bg-foreground transition-all origin-center"
                        />
                        <motion.div
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-[30px] h-[2px] bg-foreground transition-all origin-center"
                        />
                        <motion.div
                            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            className="w-[30px] h-[2px] bg-foreground transition-all origin-center"
                        />
                    </button>

                    {/* Logo - Centered Absolutely */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <span className="font-bold text-xl tracking-tighter">_parv<span className="text-primary">.dev</span></span>
                    </div>

                    {/* CTA Button */}
                    <div className="h-full flex items-center py-2">
                        <Button
                            className="hidden md:flex bg-foreground text-background hover:bg-foreground/80 rounded-lg font-medium px-4 h-full items-center gap-2"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Let's Talk
                        </Button>
                    </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                            className="p-2 pt-0 grid grid-cols-1 md:grid-cols-4 gap-2 pb-2"
                        >
                            {navItems.map((item, i) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + (i * 0.05) }}
                                    onClick={() => setIsOpen(false)}
                                    className="group relative flex flex-col justify-between p-4 h-[120px] rounded-lg bg-secondary/10 hover:bg-secondary/20 border border-transparent hover:border-border/50 transition-all cursor-pointer"
                                >
                                    <div className="flex justify-between items-start">
                                        <span className="text-4xl font-light text-muted-foreground/20 font-mono">0{i + 1}</span>
                                        <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-primary" />
                                    </div>

                                    <div>
                                        <span className="block text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</span>
                                        <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">{item.name}</span>
                                    </div>
                                </motion.a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

            </motion.div>
        </div>
    )
}
