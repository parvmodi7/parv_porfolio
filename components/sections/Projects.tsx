'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, ExternalLink, FolderGit2, Github } from 'lucide-react'

const projects = [
    {
        id: 1,
        title: 'AI-Powered Resume Analyzer',
        description: 'ATS scoring tool with AI-driven feedback mechanisms for optimized job-resume matching. Features real-time analysis and suggestions.',
        tags: ['React', 'TypeScript', 'Zustand', 'Tailwind CSS', 'OpenAI'],
        github: '#',
        live: '#',
        icon: '📄',
        accent: 'from-cyan-500/25 via-primary/20 to-blue-500/25'
    },
    {
        id: 2,
        title: 'Mechvistas – Petrol Pump Management',
        description: 'Comprehensive web application with role-based dashboards, blog management, and contact forms for seamless operations.',
        tags: ['Node.js', 'Express.js', 'MongoDB', 'EJS'],
        github: '#',
        live: '#',
        icon: '⛽',
        accent: 'from-amber-500/30 via-orange-500/15 to-yellow-500/25'
    },
    {
        id: 3,
        title: 'Library Management System',
        description: 'Full-stack app with role-based auth, book search, borrowing, and real-time tracking for efficient library administration.',
        tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
        github: '#',
        live: '#',
        icon: '📚',
        accent: 'from-emerald-500/25 via-green-500/10 to-teal-500/20'
    },
    {
        id: 4,
        title: 'MediMind – Healthcare Platform',
        description: 'AI-powered healthcare platform with secure communication and personalized health insights using WebRTC.',
        tags: ['React', 'WebSockets', 'WebRTC', 'AI/ML'],
        github: '#',
        live: '#',
        icon: '🏥',
        accent: 'from-rose-500/25 via-red-500/10 to-pink-500/20'
    },
]

const headingAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } }
}

const gridAnimation = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.12
        }
    }
}

const cardAnimation = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}

export function Projects() {
    const featuredProject = projects[0]
    const secondaryProjects = projects.slice(1)

    return (
        <section id="projects" className="relative overflow-hidden py-24 bg-background">
            <div className="absolute inset-0 -z-10">
                <div className="absolute -top-24 left-0 h-64 w-64 rounded-full bg-primary/20 blur-[100px]" />
                <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-sky-500/10 blur-[120px]" />
                <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />
                <div className="h-full w-full bg-[linear-gradient(to_right,#94a3b810_1px,transparent_1px),linear-gradient(to_bottom,#94a3b810_1px,transparent_1px)] bg-[size:30px_30px]" />
            </div>

            <div className="container px-6 max-w-6xl mx-auto">
                <motion.div
                    variants={headingAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-14 text-center"
                >
                    <Badge variant="outline" className="mb-4 bg-background/60 backdrop-blur-sm">Portfolio</Badge>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Projects Built With Intent</h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Selected work across AI tooling and full-stack platforms, designed with strong architecture and user-focused execution.
                    </p>
                </motion.div>

                <motion.div
                    variants={gridAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="grid grid-cols-1 gap-6 lg:grid-cols-2"
                >
                    <motion.div variants={cardAnimation} className="lg:col-span-2">
                        <Card className="group relative overflow-hidden border-border/70 bg-card/70 backdrop-blur-sm transition-all duration-300 hover:border-primary/40">
                            <div className={`absolute inset-0 bg-gradient-to-br ${featuredProject.accent} opacity-70 transition-opacity duration-500 group-hover:opacity-100`} />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#ffffff22,transparent_45%)]" />
                            <div className="absolute right-6 top-6 opacity-10 transition-opacity group-hover:opacity-20">
                                <FolderGit2 className="h-32 w-32" />
                            </div>

                            <div className="relative z-10 grid grid-cols-1 gap-8 p-6 md:p-8 lg:grid-cols-[1.25fr_1fr]">
                                <div>
                                    <div className="mb-4 flex items-center justify-between gap-3">
                                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-background/70 text-2xl backdrop-blur">
                                            {featuredProject.icon}
                                        </span>
                                        <Badge className="border-border/70 bg-background/50 font-mono text-xs text-foreground" variant="outline">
                                            Featured
                                        </Badge>
                                    </div>
                                    <h3 className="mb-3 text-2xl font-semibold tracking-tight md:text-3xl">
                                        {featuredProject.title}
                                    </h3>
                                    <p className="max-w-xl text-muted-foreground leading-relaxed">
                                        {featuredProject.description}
                                    </p>
                                </div>

                                <div className="flex flex-col justify-between gap-6">
                                    <div className="flex flex-wrap gap-2">
                                        {featuredProject.tags.map((tag) => (
                                            <Badge key={tag} variant="secondary" className="bg-secondary/60 text-secondary-foreground">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                        <Button
                                            variant="outline"
                                            className="justify-between border-border/80 bg-background/40"
                                            onClick={() => window.open(featuredProject.github, '_blank')}
                                        >
                                            <span className="inline-flex items-center gap-2">
                                                <Github className="h-4 w-4" /> Source
                                            </span>
                                            <ArrowUpRight className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            className="justify-between"
                                            onClick={() => window.open(featuredProject.live, '_blank')}
                                        >
                                            <span className="inline-flex items-center gap-2">
                                                <ExternalLink className="h-4 w-4" /> Live Demo
                                            </span>
                                            <ArrowUpRight className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    {secondaryProjects.map((project, index) => (
                        <motion.div key={project.id} variants={cardAnimation}>
                            <Card className="group relative h-full overflow-hidden border-border/70 bg-card/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-45 transition-opacity duration-300 group-hover:opacity-70`} />
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#ffffff14,transparent_55%)]" />
                                <div className="absolute right-4 top-4 opacity-10">
                                    <FolderGit2 className="h-20 w-20" />
                                </div>

                                <div className="relative z-10 flex h-full flex-col p-6">
                                    <div className="mb-4 flex items-start justify-between">
                                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-background/70 text-xl backdrop-blur">
                                            {project.icon}
                                        </span>
                                        <span className="font-mono text-xs text-muted-foreground">
                                            0{index + 2}
                                        </span>
                                    </div>

                                    <h3 className="mb-2 text-xl font-semibold leading-tight transition-colors group-hover:text-primary">
                                        {project.title}
                                    </h3>
                                    <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                                        {project.description}
                                    </p>

                                    <div className="mb-5 flex flex-wrap gap-2">
                                        {project.tags.slice(0, 4).map((tag) => (
                                            <Badge key={tag} variant="secondary" className="bg-secondary/55 text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>

                                    <div className="mt-auto flex gap-3">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="flex-1 gap-2 border-border/80 bg-background/40"
                                            onClick={() => window.open(project.github, '_blank')}
                                        >
                                            <Github className="h-4 w-4" /> Code
                                        </Button>
                                        <Button
                                            size="sm"
                                            className="flex-1 gap-2"
                                            onClick={() => window.open(project.live, '_blank')}
                                        >
                                            <ExternalLink className="h-4 w-4" /> Visit
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
