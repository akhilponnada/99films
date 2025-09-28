"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Film, DollarSign, Wrench } from "lucide-react"

const joinOptions = [
  {
    icon: Film,
    title: "Independent Filmmakers",
    description:
      "Submit your scripts, get funding, and bring your vision to life with our complete production support.",
    cta: "Submit Scripts or Films",
  },
  {
    icon: DollarSign,
    title: "Investors / Producers",
    description:
      "Discover promising projects, connect with talented filmmakers, and be part of the next big success story.",
    cta: "Partner & Invest",
  },
  {
    icon: Wrench,
    title: "Technicians / Creative Talent",
    description:
      "Join our network of skilled professionals and work on exciting projects with cutting-edge technology.",
    cta: "Join the Network",
  },
]

export default function JoinSection() {
  return (
    <section id="join" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-cinematic text-6xl text-[#FFD700] mb-6">Be Part of the Revolution</h2>
          <p className="text-xl text-[#C0C0C0] font-open-sans max-w-3xl mx-auto">
            Join thousands of filmmakers, investors, and creative professionals who are shaping the future of cinema
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {joinOptions.map((option, index) => (
            <Card key={index} className="bg-gray-900/50 border-[#FFD700]/20 card-hover group text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-6 bg-[#FFD700]/10 rounded-full group-hover:bg-[#FFD700]/20 transition-colors glow-gold">
                  <option.icon className="text-[#FFD700]" size={40} />
                </div>
                <CardTitle className="text-[#FFD700] font-montserrat font-bold text-2xl">{option.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-[#C0C0C0] font-open-sans leading-relaxed">{option.description}</p>
                <Button className="w-full bg-[#FFD700] text-black hover:bg-[#FFA500] font-bold">{option.cta}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
