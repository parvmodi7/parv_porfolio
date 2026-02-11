'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Send, Github, Linkedin, Twitter } from 'lucide-react'

export function Contact() {
    return (
        <section id="contact" className="py-32 relative overflow-hidden bg-[#020817] min-h-screen flex items-center justify-center">

            {/* Moon/Planet Horizon Glow */}
            <div className="absolute top-[-50%] left-[-50%] right-[-50%] h-[100%] rounded-[100%] bg-gradient-to-b from-blue-600/20 via-blue-900/10 to-transparent blur-3xl opacity-50 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent blur-sm" />

            {/* Deep Space Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-background pointer-events-none" />

            <div className="container px-6 max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <span className="text-blue-400 font-mono text-sm tracking-wider uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                        Contact
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold mt-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        Get in Touch
                    </h2>
                    <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
                        Have a project in mind or just want to chat? I'm always open to new opportunities and interesting conversations.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-5 gap-8 bg-card/30 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">

                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Left Column - Contact Info */}
                    <div className="md:col-span-2 space-y-8 flex flex-col justify-between relative z-10">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Let's talk</h3>
                            <p className="text-muted-foreground text-sm">
                                Fill out the form or shoot me an email directly.
                            </p>
                            <a href="mailto:parvmodi11@gmail.com" className="text-blue-400 hover:text-blue-300 mt-4 block transition-colors font-mono text-sm">
                                parvmodi11@gmail.com
                            </a>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Connect</h4>
                            <div className="flex gap-4">
                                <a href="https://github.com" target="_blank" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors text-muted-foreground">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors text-muted-foreground">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="https://twitter.com" target="_blank" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors text-muted-foreground">
                                    <Twitter className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="md:col-span-3 relative z-10">
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-muted-foreground ml-1">First Name</label>
                                    <Input
                                        placeholder="John"
                                        className="bg-white/5 border-white/10 focus:border-blue-500/50 text-white placeholder:text-white/20 h-10"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-muted-foreground ml-1">Last Name</label>
                                    <Input
                                        placeholder="Doe"
                                        className="bg-white/5 border-white/10 focus:border-blue-500/50 text-white placeholder:text-white/20 h-10"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-medium text-muted-foreground ml-1">Email</label>
                                <Input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="bg-white/5 border-white/10 focus:border-blue-500/50 text-white placeholder:text-white/20 h-10"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-medium text-muted-foreground ml-1">Message</label>
                                <Textarea
                                    placeholder="Tell me about your project..."
                                    className="h-32 bg-white/5 border-white/10 focus:border-blue-500/50 text-white placeholder:text-white/20 resize-none"
                                />
                            </div>

                            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                Send Message <Send className="w-4 h-4 ml-2" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
