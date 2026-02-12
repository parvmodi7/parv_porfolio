'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink, FolderGit2 } from 'lucide-react'

const projects = [
    {
        id: 1,
        title: 'AI-Powered Resume Analyzer',
        description: 'ATS scoring tool with AI-driven feedback mechanisms for optimized job-resume matching. Features real-time analysis and suggestions.',
        tags: ['React', 'TypeScript', 'Zustand', 'Tailwind CSS', 'OpenAI'],
        github: '#',
        live: '#',
        icon: '📄'
    },
    {
        id: 2,
        title: 'Mechvistas – Petrol Pump Management',
        description: 'Comprehensive web application with role-based dashboards, blog management, and contact forms for seamless operations.',
        tags: ['Node.js', 'Express.js', 'MongoDB', 'EJS'],
        github: '#',
        live: '#',
        icon: '⛽'
    },
    {
        id: 3,
        title: 'Library Management System',
        description: 'Full-stack app with role-based auth, book search, borrowing, and real-time tracking for efficient library administration.',
        tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
        github: '#',
        live: '#',
        icon: '📚'
    },
    {
        id: 4,
        title: 'MediMind – Healthcare Platform',
        description: 'AI-powered healthcare platform with secure communication and personalized health insights using WebRTC.',
        tags: ['React', 'WebSockets', 'WebRTC', 'AI/ML'],
        github: '#',
        live: '#',
        icon: '🏥'
    },
]

import Marquee from '@/components/ui/marquee'

export function Projects() {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null)

    return (
        <section id="projects" className="py-24 bg-secondary/5 relative overflow-hidden">
            <div className="container px-0 max-w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-16 text-center px-6"
                >
                    <Badge variant="outline" className="mb-4">Portfolio</Badge>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-muted-foreground max-w-2xl">
                        A collection of projects that showcase my skills in full-stack development, from AI integrations to management systems.
                    </p>
                </motion.div>

                <div className="relative w-full">
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                    <Marquee pauseOnHover className="[--duration:40s]">
                        {projects.map((project) => (
                            <div key={project.id} className="p-4">
                                <Card
                                    className="w-[350px] md:w-[450px] h-[450px] bg-card border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden group relative flex flex-col"
                                    onMouseEnter={() => setHoveredProject(project.id)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <FolderGit2 className="w-32 h-32" />
                                    </div>

                                    <div className="p-8 flex-1 flex flex-col z-10 glass-card h-full">
                                        <div className="mb-6 flex justify-between items-start">
                                            <div className="p-3 rounded-lg bg-primary/10 text-2xl">
                                                {project.icon}
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                        <p className="text-muted-foreground mb-6 flex-1 line-clamp-3 leading-relaxed">{project.description}</p>

                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.tags.map(tag => (
                                                <Badge key={tag} variant="secondary" className="font-normal bg-secondary/50">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>

                                        <div className="flex gap-4 mt-auto">
                                            <Button variant="outline" size="sm" className="w-full gap-2 border-border" onClick={() => window.open(project.github, '_blank')}>
                                                <Github className="w-4 h-4" /> Code
                                            </Button>
                                            <Button size="sm" className="w-full gap-2" onClick={() => window.open(project.live, '_blank')}>
                                                <ExternalLink className="w-4 h-4" /> Live Demo
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    )
}
