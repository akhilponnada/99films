"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Camera, Palette, Target, Megaphone, Users, Monitor } from "lucide-react"
import Link from "next/link"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    { icon: Camera, title: "Film Production Support", href: "/services/film-production-support" },
    { icon: Palette, title: "White Label Projects", href: "/services/white-label-projects" },
    { icon: Target, title: "In-Film Branding", href: "/services/in-film-branding" },
    { icon: Megaphone, title: "Branding & Marketing", href: "/services/branding-marketing" },
    { icon: Users, title: "Crowd-Funded Projects", href: "/services/crowd-funded-projects" },
    { icon: Monitor, title: "OTT Integration", href: "/services/ott-integration" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/logo-99films.png"
              alt="99Films"
              width={60}
              height={60}
              className="brightness-0 invert"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-[#C0C0C0] hover:text-[#FFD700] transition-colors">
              Home
            </a>
            <a href="#about" className="text-[#C0C0C0] hover:text-[#FFD700] transition-colors">
              About
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger className="text-[#C0C0C0] hover:text-[#FFD700] transition-colors flex items-center">
                Services <ChevronDown className="ml-1" size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-900 border-[#FFD700]/20 min-w-[280px]">
                {services.map((service, index) => (
                  <DropdownMenuItem key={index} className="text-white hover:bg-[#FFD700]/10 focus:bg-[#FFD700]/10">
                    <Link href={service.href} target="_blank" className="flex items-center w-full">
                      <service.icon className="text-[#FFD700] mr-3" size={18} />
                      <span>{service.title}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#ecosystem" className="text-[#C0C0C0] hover:text-[#FFD700] transition-colors">
              Ecosystem
            </a>
            <a href="#projects" className="text-[#C0C0C0] hover:text-[#FFD700] transition-colors">
              Projects
            </a>
            <a href="#join" className="text-[#C0C0C0] hover:text-[#FFD700] transition-colors">
              Join Us
            </a>
            <a href="#contact" className="text-[#C0C0C0] hover:text-[#FFD700] transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black bg-transparent"
            >
              Sign In
            </Button>
            <Button 
              className="bg-[#FFD700] text-black hover:bg-[#FFA500] glow-gold font-bold"
              onClick={() => window.open('https://moveon.buzz', '_blank')}
            >
              WATCH ON MOVEON
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
