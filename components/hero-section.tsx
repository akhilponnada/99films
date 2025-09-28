"use client"

import { Button } from "@/components/ui/button"
import { Play, Film, Sparkles } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/cinematic-film-studio-with-dramatic-lighting-and-c.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Animated Elements */}
      <div className="absolute left-10 top-1/2 transform -translate-y-1/2">
        <div className="film-reel-spin">
          <Film size={120} className="text-[#FFD700] opacity-30" />
        </div>
      </div>

      <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
        <div className="float-animation">
          <Play size={80} className="text-[#FFD700] opacity-50" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-6">
          <Sparkles className="text-[#FFD700] mx-auto mb-4" size={40} />
        </div>

        <h1 className="text-cinematic text-6xl md:text-8xl text-[#FFD700] text-glow mb-6">
          Empowering Independent Filmmakers
        </h1>

        <p className="text-xl md:text-2xl text-[#C0C0C0] font-open-sans mb-12 leading-relaxed">
          From idea to global audience — one platform for creation, marketing, and distribution.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            size="lg"
            className="bg-[#FFD700] text-black hover:bg-[#FFA500] text-lg font-bold px-8 py-4 glow-gold"
          >
            GET STARTED
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4 bg-transparent"
            onClick={() => window.open('https://moveon.buzz', '_blank')}
          >
            WATCH ON MOVEON
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#FFD700] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#FFD700] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
