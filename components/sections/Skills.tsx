'use client'

import { motion } from 'framer-motion'

const skills = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#ffffff", invert: true },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", color: "#38B2AC" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#336791" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", color: "#FFCA28" },
    { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", color: "#764ABC" },
    { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg", color: "#ffffff", invert: true },
]

export function Skills() {
    return (
        <section id="skills" className="py-24 bg-[#020817] relative overflow-hidden flex items-center justify-center">

            {/* Background Accents similar to reference if needed, but keeping clean for now */}

            <div className="container px-6 mx-auto relative z-10 flex flex-col md:flex-row gap-12">

                {/* Vertical Text Label */}
                <div className="hidden md:flex flex-col justify-center items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="writing-mode-vertical rotate-180"
                    >
                        <h2 className="text-6xl font-bold text-muted-foreground/20 tracking-widest uppercase" style={{ writingMode: 'vertical-rl' }}>
                            Skills
                        </h2>
                    </motion.div>
                    {/* Yellow/Primary accent line next to text */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '100px' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="w-1 bg-primary mt-4"
                    />
                </div>

                {/* Mobile Heading */}
                <div className="md:hidden text-center mb-8">
                    <h2 className="text-3xl font-bold text-foreground uppercase tracking-widest">Skills</h2>
                    <div className="w-12 h-1 bg-primary mx-auto mt-2" />
                </div>

                {/* Skills Grid */}
                <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="group relative aspect-square"
                        >
                            <div className="absolute inset-0 bg-[#020800] rounded-xl border border-[#222] shadow-xl transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-primary/10 flex flex-col items-center justify-center gap-4 p-4">

                                {/* Icon Container */}
                                <div className="relative w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100">
                                    {/* Using img tag for SVGs from devicon for reliability and "beauty" matching original logos */}
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className={`w-full h-full object-contain ${skill.invert ? 'dark:invert' : ''}`}
                                    />
                                </div>

                                {/* Skill Name */}
                                <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider group-hover:text-primary transition-colors">
                                    {skill.name}cha
                                </span>

                                {/* Hover Glow */}
                                <div
                                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-md pointer-events-none"
                                    style={{ backgroundColor: skill.color }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
