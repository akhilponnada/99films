"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, Palette, Target, Megaphone, Users, Monitor, ExternalLink } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Camera,
    title: "Film Production Support",
    description:
      "Complete technical assistance: cameras, editing, dubbing, VFX, music production and post-production services.",
    slug: "film-production-support",
  },
  {
    icon: Palette,
    title: "White Label Projects",
    description: "Pre-produced films that can be customized and rebranded for your specific audience and market needs.",
    slug: "white-label-projects",
  },
  {
    icon: Target,
    title: "In-Film Branding",
    description:
      "Seamless product placements and advertisements integrated naturally into movie storylines and scenes.",
    slug: "in-film-branding",
  },
  {
    icon: Megaphone,
    title: "Branding & Marketing",
    description:
      "Comprehensive campaigns from pre-release buzz to OTT launch, including social media and digital marketing.",
    slug: "branding-marketing",
  },
  {
    icon: Users,
    title: "Crowd-Funded Projects",
    description: "Enable audience-backed film financing with transparent revenue sharing and community engagement.",
    slug: "crowd-funded-projects",
  },
  {
    icon: Monitor,
    title: "OTT Integration",
    description: "Stream directly on MoveOn or distribute to other top OTT platforms with seamless integration.",
    slug: "ott-integration",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-cinematic text-6xl text-[#FFD700] mb-6">What We Offer</h2>
          <p className="text-xl text-white font-open-sans max-w-3xl mx-auto">
            Comprehensive services covering every aspect of filmmaking, from initial concept to global distribution
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-900/50 border-[#FFD700]/20 card-hover group cursor-pointer">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-[#FFD700]/10 rounded-full group-hover:bg-[#FFD700]/20 transition-colors">
                  <service.icon className="text-[#FFD700]" size={32} />
                </div>
                <CardTitle className="text-[#FFD700] font-montserrat font-bold text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white font-open-sans leading-relaxed mb-4">{service.description}</p>
                <Link href={`/services/${service.slug}`} target="_blank">
                  <Button
                    variant="outline"
                    className="border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black bg-transparent"
                  >
                    Learn More <ExternalLink className="ml-2" size={16} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
