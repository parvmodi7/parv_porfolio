'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

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

// Simple Walking Man SVG Component - Removed as per user request for global bird
// const WalkingMan = () => {
//     return (
//         <svg width="40" height="60" viewBox="0 0 50 80" fill="none" xmlns="http://www.w3.org/2000/svg">
//             {/* Head */}
//             <circle cx="25" cy="10" r="8" fill="currentColor" className="text-primary" />
//             {/* Body */}
//             <line x1="25" y1="18" x2="25" y2="45" stroke="currentColor" strokeWidth="4" className="text-foreground" />
//             {/* Arms - Animated */}
//             <motion.g
//                 animate={{ rotate: [-20, 20, -20] }}
//                 transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                 style={{ originX: "25px", originY: "20px" }}
//             >
//                 <line x1="25" y1="20" x2="40" y2="35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-foreground" />
//                 <line x1="25" y1="20" x2="10" y2="35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-foreground" />
//             </motion.g>

//             {/* Legs - Walking Cycle */}
//             <motion.g
//                 animate={{ rotate: [20, -20, 20] }}
//                 transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
//                 style={{ originX: "25px", originY: "45px" }}
//             >
//                 <line x1="25" y1="45" x2="35" y2="75" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-primary" />
//             </motion.g>
//             <motion.g
//                 animate={{ rotate: [-20, 20, -20] }}
//                 transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
//                 style={{ originX: "25px", originY: "45px" }}
//             >
//                 <line x1="25" y1="45" x2="15" y2="75" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-primary" />
//             </motion.g>
//         </svg>
//     )
// }

export function Experience() {
    return (
        <section id="experience" className="py-24 bg-background">
            <div className="container px-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 flex items-center gap-4">
                        <span className="text-primary font-mono text-4xl">02.</span> Experience
                    </h2>

                    <div className="relative border-l border-border ml-3 md:ml-6 space-y-12 pl-8 md:pl-12">
                        {experience.map((job, index) => (
                            <div key={index} className="relative">
                                {/* Timeline dot */}
                                <span className="absolute -left-[37px] md:-left-[53px] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background" />

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                                        <p className="text-primary font-medium text-lg">{job.company}</p>
                                    </div>
                                    <span className="text-sm font-mono text-muted-foreground mt-2 sm:mt-0 bg-secondary/30 px-3 py-1 rounded">
                                        {job.period}
                                    </span>
                                </div>

                                <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground mb-6">
                                    {job.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {job.skills.map(skill => (
                                        <Badge key={skill} variant="secondary" className="text-xs font-mono">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
