'use client'

import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { OrbitingCircles } from '@/components/ui/orbiting-circles'
import { Code, Database, Globe, Server } from 'lucide-react'

const experience = [
    {
        role: 'Full Stack MERN Developer',
        company: 'Eulogik',
        period: 'Oct 2025 – Present',
        location: 'Bhopal, Madhya Pradesh',
        description: [
            'Develop and maintain full-stack web applications using MERN stack',
            'Design and implement RESTful APIs with third-party integrations',
            'Collaborate with cross-functional teams to architect scalable solutions',
        ],
        skills: ['React', 'Node.js', 'MongoDB', 'REST APIs']
    },
]

function SpotlightCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    return (
        <div
            className={cn(
                "group relative border border-white/10 bg-gray-900/50 overflow-hidden rounded-xl",
                "hover:border-white/20 transition-colors duration-500",
                className
            )}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
                }}
            />
            <div className="relative h-full">
                {children}
            </div>
        </div>
    )
}

export function Experience() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            <div className="container px-6 max-w-6xl mx-auto" ref={containerRef}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold flex items-center gap-4">
                        <span className="text-primary font-mono text-4xl">02.</span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">
                            Experience
                        </span>
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Animated Timeline Line */}
                    <div className="absolute left-0 md:left-[50%] top-0 bottom-0 w-px bg-border md:-translate-x-1/2 hidden md:block">
                        <motion.div
                            style={{ scaleY, transformOrigin: "top" }}
                            className="absolute top-0 left-0 w-full h-full bg-primary"
                        />
                    </div>

                    <div className="space-y-12 md:space-y-24">
                        {experience.map((job, index) => (
                            <div key={index} className={cn(
                                "relative flex flex-col md:flex-row gap-8 md:gap-0",
                                index % 2 === 0 ? "md:flex-row-reverse" : ""
                            )}>
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full border-2 border-primary bg-background translate-y-1.5 md:-translate-x-1/2 z-10 hidden md:block">
                                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                                </div>

                                {/* Content Side */}
                                <div className="w-full md:w-1/2 md:px-12">
                                    <SpotlightCard className="p-6 md:p-8 backdrop-blur-sm bg-card/30">
                                        <div className="flex flex-col gap-4">
                                            <div className="flex justify-between items-start flex-wrap gap-2">
                                                <div>
                                                    <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                                                    <p className="text-primary font-medium text-lg">{job.company}</p>
                                                </div>
                                                <Badge variant="outline" className="font-mono text-xs py-1">
                                                    {job.period}
                                                </Badge>
                                            </div>

                                            <div className="text-sm text-muted-foreground flex items-center gap-2 mb-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                                {job.location}
                                            </div>

                                            <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground text-sm/relaxed">
                                                {job.description.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>

                                            <div className="flex flex-wrap gap-2 pt-4 mt-auto">
                                                {job.skills.map(skill => (
                                                    <Badge key={skill} variant="secondary" className="text-xs font-mono bg-primary/10 hover:bg-primary/20 text-primary border-transparent">
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </SpotlightCard>
                                </div>

                                {/* Empty Side for alignment / Visuals */}
                                <div className="w-full md:w-1/2 relative h-[350px] hidden md:flex items-center justify-center overflow-hidden">
                                    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-background">
                                        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                                            Full Stack
                                        </span>
                                        <OrbitingCircles
                                            className="size-[30px] border-none bg-transparent"
                                            duration={20}
                                            delay={20}
                                            radius={80}
                                        >
                                            <Code className="text-primary size-8" />
                                        </OrbitingCircles>
                                        <OrbitingCircles
                                            className="size-[30px] border-none bg-transparent"
                                            duration={20}
                                            delay={10}
                                            radius={80}
                                        >
                                            <Globe className="text-primary size-8" />
                                        </OrbitingCircles>

                                        {/* Outer Circles (Reverse) */}
                                        <OrbitingCircles
                                            className="size-[50px] border-none bg-transparent"
                                            radius={150}
                                            duration={20}
                                            reverse
                                        >
                                            <Database className="text-secondary-foreground size-10" />
                                        </OrbitingCircles>
                                        <OrbitingCircles
                                            className="size-[50px] border-none bg-transparent"
                                            radius={150}
                                            duration={20}
                                            delay={20}
                                            reverse
                                        >
                                            <Server className="text-secondary-foreground size-10" />
                                        </OrbitingCircles>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
