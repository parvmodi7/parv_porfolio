'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { Code2, Globe, Sparkles } from 'lucide-react'

export function About() {
    return (
        <section id="about" className="py-24 bg-background relative overflow-hidden">
            <div className="container px-6 max-w-6xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8 order-2 md:order-1"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 flex items-center gap-4">
                            <span className="text-primary font-mono text-xl">01.</span> About Me
                        </h2>

                        <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-6">
                            <p className="leading-relaxed text-lg">
                                Hello! My name is <span className="text-foreground font-semibold">Parv Modi</span>. I'm a passionate developer who loves creating digital experiences that live on the internet. My journey in web development started with a curiosity for how things work, and it has evolved into a full-blown career path.
                            </p>
                            <p className="leading-relaxed text-lg">
                                Currently, I'm working as a <span className="text-primary font-medium">Full Stack Developer Intern</span> at <span className="text-foreground font-semibold">Eulogik</span>. I specialize in building accessible, human-centered products using modern technologies like React, Node.js, and TypeScript.
                            </p>
                            <p className="leading-relaxed text-lg">
                                When I'm not coding, you can find me exploring new tech stacks, contributing to open-source, or just enjoying a good cup of coffee while debugging life's mysteries.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground bg-secondary/30 px-3 py-1 rounded-full border border-secondary">
                                <Code2 className="w-4 h-4 text-primary" /> Full Stack Dev
                            </div>
                            <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground bg-secondary/30 px-3 py-1 rounded-full border border-secondary">
                                <Globe className="w-4 h-4 text-primary" /> Based in India
                            </div>
                            <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground bg-secondary/30 px-3 py-1 rounded-full border border-secondary">
                                <Sparkles className="w-4 h-4 text-primary" /> Problem Solver
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Image with Hover Effect */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative group order-1 md:order-2 flex justify-center md:justify-end"
                    >
                        <div className="relative w-72 h-96 sm:w-80 sm:h-[450px] rounded-2xl overflow-hidden cursor-pointer shadow-2xl transition-all duration-500 hover:shadow-primary/20">

                            {/* The Image */}
                            {/* Placeholder image for now as requested. Replace src with actual path if available */}
                            <Image
                                src="/images/parv.jpg"
                                alt="Parv Modi"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-[0.5]"
                                priority
                            />

                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileHover={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 space-y-3"
                                >
                                    <div className="space-y-1 border-l-2 border-primary pl-4 mb-4">
                                        <h3 className="text-2xl font-bold text-white">Parv Modi</h3>
                                        <p className="text-primary font-mono text-sm">@parvmodi</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 text-sm font-mono text-gray-300">
                                        <div className="bg-white/10 backdrop-blur-sm p-2 rounded border border-white/10">
                                            <span className="block text-xs text-gray-400 uppercase tracking-wider">Age</span>
                                            <span className="text-white font-medium">20</span>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-sm p-2 rounded border border-white/10">
                                            <span className="block text-xs text-gray-400 uppercase tracking-wider">Mood</span>
                                            <span className="text-white font-medium">Coding 🥔</span>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-sm p-2 rounded border border-white/10">
                                            <span className="block text-xs text-gray-400 uppercase tracking-wider">Height</span>
                                            <span className="text-white font-medium">5'7"</span>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-sm p-2 rounded border border-white/10">
                                            <span className="block text-xs text-gray-400 uppercase tracking-wider">Status</span>
                                            <span className="text-green-400 font-medium">Online</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Decorative Border Frame */}
                            <div className="absolute inset-3 border border-white/20 rounded-xl pointer-events-none group-hover:border-primary/50 transition-colors duration-500" />
                        </div>

                        {/* Background decorative blob */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
