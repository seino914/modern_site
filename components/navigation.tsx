"use client"

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ThemeToggle } from './theme-toggle'
import { Code2, Home, Palette, Send, User } from 'lucide-react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const NavLink = ({ href, icon: Icon, label }: { href: string; icon: typeof Home; label: string }) => (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-md transition-colors",
        "text-muted-foreground hover:text-primary hover:bg-muted/50",
        isActive(href) && "text-primary bg-muted"
      )}
    >
      <Icon className="h-5 w-5" />
      <span className="sm:hidden">{label}</span>
    </Link>
  )

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
              <Code2 className="h-6 w-6" />
              <span className="text-lg font-medium">Portfolio</span>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:items-center sm:gap-1">
            <NavLink href="/" icon={Home} label="Home" />
            <NavLink href="/about" icon={User} label="About" />
            <NavLink href="/projects" icon={Palette} label="Projects" />
            <NavLink href="/contact" icon={Send} label="Contact" />
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center sm:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-muted/50"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="sm:hidden border-t"
        >
          <div className="px-4 py-3 space-y-1">
            <NavLink href="/" icon={Home} label="Home" />
            <NavLink href="/about" icon={User} label="About" />
            <NavLink href="/projects" icon={Palette} label="Projects" />
            <NavLink href="/contact" icon={Send} label="Contact" />
          </div>
        </motion.div>
      )}
    </nav>
  )
}