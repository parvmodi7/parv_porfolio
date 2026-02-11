'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)

            // Determine active section
            const sections = navItems.map(item => item.href.substring(1))
            const currentSection = sections.find(section => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 100 && rect.bottom >= 100
                }
                return false
            })

            if (currentSection) {
                setActiveSection(currentSection)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b",
                scrolled ? "bg-background/80 border-border/50 py-4" : "bg-transparent border-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <motion.a
                    href="#"
                    className="text-2xl font-bold tracking-tighter hover:text-primary transition-colors cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    _parv<span className="text-primary">.dev</span>
                </motion.a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary relative group",
                                activeSection === item.href.substring(1) ? "text-primary" : "text-muted-foreground"
                            )}
                        >
                            {item.name}
                            <span className={cn(
                                "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                                activeSection === item.href.substring(1) && "w-full"
                            )} />
                        </a>
                    ))}

                    <div className="h-6 w-px bg-border mx-2" />

                    <div className="flex gap-4">
                        <a href="https://github.com" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-foreground p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="flex gap-4 pt-4 border-t border-border">
                                <a href="https://github.com" target="_blank" className="p-2 bg-secondary rounded-full">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" className="p-2 bg-secondary rounded-full">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="mailto:parvmodi11@gmail.com" className="p-2 bg-secondary rounded-full">
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
