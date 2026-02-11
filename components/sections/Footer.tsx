'use client'

export function Footer() {
    return (
        <footer className="py-8 border-t border-border/50 bg-background text-center">
            <div className="container px-6 mx-auto">
                <p className="text-sm text-muted-foreground font-mono">
                    Designed & Built by Parv Modi.
                </p>
                <p className="text-xs text-muted-foreground/50 mt-2">
                    © {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    )
}
