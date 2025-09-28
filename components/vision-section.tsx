"use client"

import { Button } from "@/components/ui/button"
import { Eye, ArrowRight, Play } from "lucide-react"

export default function VisionSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div>
            <div className="flex items-center mb-6">
              <Eye className="text-[#FFD700] mr-4" size={40} />
              <h2 className="text-cinematic text-5xl text-[#FFD700]">Our Vision</h2>
            </div>

            <p className="text-lg text-white font-open-sans leading-relaxed mb-8">
              To create a complete ecosystem where filmmakers, producers, brands, and investors collaborate to bring
              powerful stories to life with seamless production, marketing, and global distribution.
            </p>

            <p className="text-base text-gray-300 font-open-sans leading-relaxed mb-8">
              We believe every story deserves to be told and every filmmaker deserves the tools and platform to reach
              their audience. Through innovation, collaboration, and cutting-edge technology, we're revolutionizing how
              films are made, marketed, and monetized.
            </p>

            <Button className="bg-[#FFD700] text-black hover:bg-[#FFA500] font-bold">
              Learn More <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>

          {/* Right Side - Animation */}
          <div className="relative">
            <div
              className="w-full h-80 bg-cover bg-center rounded-lg shadow-2xl"
              style={{
                backgroundImage: `url('/cinematic-film-production-studio-with-cameras-and-.jpg')`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 to-[#8B0000]/20 rounded-lg"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 float-animation">
              <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center glow-gold">
                <Play className="text-black" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
