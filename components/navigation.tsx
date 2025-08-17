"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#accueil", label: "Accueil" },
    { href: "#a-propos", label: "À propos" },
    { href: "#services", label: "Services" },
    { href: "#livres", label: "Mes Livres" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-xl border-b border-purple-200"
          : "bg-white/90 backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <div className="absolute -inset-3 bg-gradient-to-r from-purple-500 via-orange-500 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300 animate-pulse"></div>
              <div className="relative w-16 h-16 bg-gradient-to-br from-purple-50 to-orange-50 rounded-2xl p-2 border-2 border-purple-300/50 hover:border-purple-400 transition-all duration-300 hover:scale-105 shadow-lg">
                <Image
                  src="/onohilosophe-logo.jpg"
                  alt="Logo Onphilosophe"
                  fill
                  className="object-contain rounded-xl"
                  priority
                />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-orange-500 to-emerald-600 bg-clip-text text-transparent">
                Onphilosophe
                      </h1>
                      <p className="text-sm text-gray-600 font-medium">Philosophe & Créateur de contenu</p>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-800 hover:text-purple-600 transition-all duration-300 font-semibold hover:scale-105 relative group px-3 py-2"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-orange-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 border border-purple-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-xl border border-purple-200">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-gray-800 hover:text-purple-600 transition-colors duration-200 hover:bg-purple-100 rounded-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
