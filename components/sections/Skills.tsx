'use client'

import { motion } from 'framer-motion'
import Marquee from '@/components/ui/marquee'
import { cn } from '@/lib/utils'

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
    // Duplicates for fuller rows if needed, or splitting
]

// Split skills for rows
const row1 = skills.slice(0, 6)
const row2 = skills.slice(6, 12)

const SkillCard = ({ skill }: { skill: typeof skills[0] }) => {
    return (
        <div className="flex items-center gap-4 p-4 pr-8 bg-secondary/10 border border-white/5 rounded-xl backdrop-blur-sm hover:bg-secondary/20 transition-colors mx-4 w-[250px] group cursor-default">
            <div className="relative w-12 h-12 flex items-center justify-center bg-background/50 rounded-lg p-2 border border-white/5 group-hover:border-primary/50 transition-colors">
                <img
                    src={skill.icon}
                    alt={skill.name}
                    className={cn("w-full h-full object-contain transition-transform duration-300 group-hover:scale-110", skill.invert ? 'dark:invert' : '')}
                />
            </div>
            <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{skill.name}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Expertise</span>
            </div>
            <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: skill.color }}
            />
        </div>
    )
}

export function Skills() {
    return (
        <section id="skills" className="py-24 bg-background relative overflow-hidden flex flex-col items-center justify-center">

            <div className="container px-6 mx-auto relative z-10 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Technical <span className="text-primary">Arsenal</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        The tools and technologies I use to bring ideas to life.
                    </p>
                </motion.div>
            </div>

            <div className="w-full max-w-[100vw] relative flex flex-col gap-8">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

                <Marquee pauseOnHover className="[--duration:20s]">
                    {row1.map((skill, index) => (
                        <SkillCard key={index} skill={skill} />
                    ))}
                </Marquee>

                <Marquee pauseOnHover reverse className="[--duration:20s]">
                    {row2.map((skill, index) => (
                        <SkillCard key={index} skill={skill} />
                    ))}
                </Marquee>
            </div>
        </section>
    )
}
