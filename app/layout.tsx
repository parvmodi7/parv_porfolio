import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Fira_Code } from 'next/font/google'

import './globals.css'
import { cn } from '@/lib/utils'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code' })

export const metadata: Metadata = {
  title: 'Parv Modi - Full Stack Developer',
  description: 'Full Stack MERN Developer | React, Node.js, Express, MongoDB | Portfolio',
  generator: 'v0.app',
  openGraph: {
    title: 'Parv Modi - Full Stack Developer',
    description: 'Full Stack MERN Developer passionate about building scalable web applications',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3B82F6',
  userScalable: true,
}

import { MouseFollower } from '@/components/ui/mouse-follower'
import { ScrollBird } from '@/components/ui/scroll-bird'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        _inter.variable,
        _firaCode.variable
      )}>
        <MouseFollower />
        <ScrollBird />
        {children}
      </body>
    </html>
  )
}
