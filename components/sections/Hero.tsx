'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { DecryptText } from '@/components/ui/decrypt-text'
import { Button } from '@/components/ui/button'
import { ArrowDown, Download, Terminal } from 'lucide-react'

export function Hero() {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 })
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 })

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect()
        const xPct = (clientX - left) / width - 0.5
        const yPct = (clientY - top) / height - 0.5
        x.set(xPct)
        y.set(yPct)
    }

    function handleMouseLeave() {
        x.set(0)
        y.set(0)
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"])
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"])
    const translateZ = useTransform(mouseY, [-0.5, 0.5], ["10px", "-10px"])

    return (
        <section className="relative min-h-screen flex items-center justify- sm:mt-0 mt-5 pt-20 overflow-hidden bg-background">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                {/* Glow Effects */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse delay-1000" />
            </div>

            <div className="container relative z-10 px-6 max-w-5xl mx-auto text-center md:text-left">
                <div className="flex flex-col md:flex-row gap-12 items-center">

                    <div className="flex-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                                <span className="text-muted-foreground block text-2xl sm:text-3xl lg:text-4xl mb-2 font-mono font-normal">Hi, I'm Parv Modi</span>
                                <DecryptText
                                    text="Full Stack Developer"
                                    className="text-foreground bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
                                    speed={70}
                                    maxIterations={15}
                                />
                            </h1>

                            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                                I build scalable web applications with <span className="text-foreground font-semibold">React</span>, <span className="text-foreground font-semibold">Node.js</span>, and modern web technologies. Passionate about solving complex problems and creating intuitive user experiences.
                            </p>
                        </motion.div>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05, x: [0, -3, 3, -3, 3, 0] }}
                                transition={{
                                    scale: { type: "spring", stiffness: 400, damping: 10 },
                                    x: { type: "tween", duration: 0.3 }
                                }}
                            >
                                <Button
                                    size="lg"
                                    className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg h-12 px-8 font-mono group"
                                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    View Work <Terminal className="ml-2 w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
                                </Button>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05, x: [0, -3, 3, -3, 3, 0] }}
                                transition={{
                                    scale: { type: "spring", stiffness: 400, damping: 10 },
                                    x: { type: "tween", duration: 0.3 }
                                }}
                            >
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-primary/20 hover:border-primary/50 text-lg h-12 px-8 font-mono group bg-background/50 backdrop-blur-sm"
                                    onClick={() => window.open('#', '_blank')}
                                >
                                    Resume <Download className="ml-2 w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Visual Element / Code Window */}
                    <motion.div
                        className="flex-1 w-full max-w-md perspective-1000"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        style={{
                            perspective: 1000
                        }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <motion.div
                            className="relative rounded-xl overflow-hidden border border-border bg-card/50 backdrop-blur-sm shadow-2xl"
                            style={{
                                rotateX,
                                rotateY,
                                transformStyle: "preserve-3d",
                                z: translateZ,
                            }}
                        >
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                <div className="ml-2 text-xs text-muted-foreground font-mono">developer.tsx</div>
                            </div>
                            <div className="p-6 font-mono text-sm overflow-x-auto">
                                <div className="space-y-2">
                                    <div className="flex">
                                        <span className="text-purple-400 mr-2">const</span>
                                        <span className="text-yellow-200 mr-2">developer</span>
                                        <span className="text-white mr-2">=</span>
                                        <span className="text-white">{`{`}</span>
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-blue-300 mr-2">name:</span>
                                        <span className="text-green-300">'Parv Modi'</span>,
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-blue-300 mr-2">role:</span>
                                        <span className="text-green-300">'Full Stack Developer'</span>,
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-blue-300 mr-2">skills:</span>
                                        <span className="text-white">[</span>
                                        <span className="text-green-300">'React'</span>,
                                        <span className="text-green-300">'Node.js'</span>,
                                        <span className="text-green-300">'TypeScript'</span>
                                        <span className="text-white">]</span>,
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-blue-300 mr-2">hardWorker:</span>
                                        <span className="text-orange-400">true</span>,
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-blue-300 mr-2">problemSolver:</span>
                                        <span className="text-orange-400">true</span>,
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-blue-300 mr-2">hireable:</span>
                                        <span className="text-orange-400">function</span>
                                        <span className="text-white">() {`{`}</span>
                                    </div>
                                    <div className="pl-8">
                                        <span className="text-purple-400">return</span>
                                        <span className="text-orange-400"> true</span>;
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-white">{`}`}</span>
                                    </div>
                                    <div>
                                        <span className="text-white">{`}`}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <ArrowDown className="w-6 h-6 text-muted-foreground/50" />
            </motion.div>
        </section>
    )
}
