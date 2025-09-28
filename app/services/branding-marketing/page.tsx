import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Megaphone, IndianRupee, Star, Award, TrendingUp, Users, Zap, Share2 } from "lucide-react"
import Link from "next/link"

export default function BrandingMarketingPage() {
  const projects = [
    {
      title: "The Last Stand",
      genre: "Action",
      language: "Hindi",
      budget: "₹5.0 Crores",
      expectedRevenue: "₹18-25 Crores",
      status: "Marketing Phase",
      fundingRequired: "₹3.5 Crores",
      revenueShare: "25% to investors",
      director: "Action Kumar",
      producer: "Blockbuster Films",
      cast: "A-list action star + supporting cast",
      crew: "50+ including stunt coordinators",
      timeline: "10 months total (including marketing)",
      roi: "360-500%",
      marketingStrategy: [
        "Multi-platform digital campaign",
        "Celebrity endorsements and interviews",
        "Action sequence teasers and trailers",
        "Fan engagement and contests",
      ],
    },
    {
      title: "Bollywood Dreams",
      genre: "Musical/Drama",
      language: "Hindi/English",
      budget: "₹6.2 Crores",
      expectedRevenue: "₹22-30 Crores",
      status: "Pre-Marketing",
      fundingRequired: "₹4.0 Crores",
      revenueShare: "30% to investors",
      director: "Sanjay Leela Bhansali",
      producer: "Eros Entertainment",
      cast: "Deepika Padukone, Ranveer Singh, Alia Bhatt",
      crew: "60+ including choreographers and musicians",
      timeline: "12 months production + 4 months marketing",
      roi: "355-484%",
      marketingStrategy: [
        "Music launch events and concerts",
        "Fashion and costume showcases",
        "Behind-the-scenes documentaries",
        "International film festival circuit",
      ],
    },
  ]

  const marketingServices = [
    {
      icon: Share2,
      title: "Social Media Campaigns",
      description:
        "Comprehensive social media strategy across all platforms with viral content creation and influencer partnerships.",
    },
    {
      icon: Users,
      title: "Influencer Partnerships",
      description:
        "Strategic collaborations with top influencers and celebrities to amplify your film's reach and engagement.",
    },
    {
      icon: TrendingUp,
      title: "PR & Media Relations",
      description:
        "Professional media outreach, press conferences, interviews, and coverage across traditional and digital media.",
    },
    {
      icon: Zap,
      title: "Digital Advertising",
      description: "Targeted digital ad campaigns across Google, Facebook, Instagram, YouTube, and OTT platforms.",
    },
    {
      icon: Star,
      title: "Event Marketing",
      description: "Grand premieres, music launches, promotional events, and fan meet-and-greets for maximum buzz.",
    },
    {
      icon: Award,
      title: "OTT Platform Optimization",
      description: "Strategic positioning and promotion on streaming platforms for maximum visibility and engagement.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-black via-gray-900 to-black py-20">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/7991471/pexels-photo-7991471.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <Link href="/">
            <Button variant="ghost" className="text-[#FFD700] hover:text-white mb-6">
              <ArrowLeft className="mr-2" size={16} />
              Back to Home
            </Button>
          </Link>

          <div className="flex items-center mb-6">
            <Megaphone className="text-[#FFD700] mr-4" size={64} />
            <h1 className="text-cinematic text-6xl text-[#FFD700]">Branding & Marketing</h1>
          </div>

          <p className="text-2xl text-gray-300 max-w-4xl leading-relaxed">
            360-degree marketing campaigns for maximum reach and impact. Our marketing team creates comprehensive
            campaigns that build buzz from pre-production through OTT release, leveraging traditional and digital
            channels for maximum audience engagement.
          </p>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-12 text-center">Our Marketing Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-[#FFD700]/20 hover:border-[#FFD700]/50 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <service.icon className="text-[#FFD700] mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-12 text-center">Our Marketing Process</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { phase: "Pre-Production", desc: "Brand building and anticipation creation", duration: "2-3 months" },
              { phase: "Production", desc: "Behind-the-scenes content and teasers", duration: "6-8 months" },
              { phase: "Post-Production", desc: "Trailer launches and media campaigns", duration: "3-4 months" },
              { phase: "Release", desc: "Premiere events and opening weekend push", duration: "1 month" },
              { phase: "Post-Release", desc: "OTT promotion and awards campaigns", duration: "2-3 months" },
            ].map((phase, index) => (
              <Card key={index} className="bg-gradient-to-b from-gray-800 to-gray-900 border-[#FFD700]/30 text-center">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-[#FFD700] mb-3">{phase.phase}</div>
                  <p className="text-white mb-2">{phase.desc}</p>
                  <p className="text-gray-400 text-sm">{phase.duration}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Marketing Projects */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-12 text-center">Current Marketing Campaigns</h2>

          <div className="grid gap-12">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gradient-to-r from-gray-900 to-gray-800 border-[#FFD700]/30 overflow-hidden"
              >
                <div className="md:flex">
                  {/* Movie Poster */}
                  <div className="md:w-1/3 relative">
                    <img
                      src={`https://images.pexels.com/photos/${index === 0 ? "5380792" : "1040945"}/pexels-photo-${index === 0 ? "5380792" : "1040945"}.jpeg?auto=compress&cs=tinysrgb&w=400&h=600`}
                      alt={`${project.title} poster`}
                      className="w-full h-64 md:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-[#8B0000] text-white">
                        {project.genre}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="border-blue-500 text-blue-400 bg-black/70">
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="md:w-2/3 p-8">
                    <CardHeader className="p-0 mb-8">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-3xl text-[#FFD700] mb-3">{project.title}</CardTitle>
                          <div className="flex gap-2 mb-4">
                            <Badge variant="outline" className="border-[#FFD700] text-[#FFD700]">
                              {project.language}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-[#FFD700]">{project.roi}</div>
                          <div className="text-sm text-gray-400">Expected ROI</div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {/* Financial Details */}
                        <div className="space-y-4">
                          <h4 className="font-bold text-[#FFD700] flex items-center text-lg">
                            <IndianRupee className="mr-2" size={24} />
                            Marketing Investment
                          </h4>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-gray-400">Total Budget:</span>
                              <span className="text-white font-semibold">{project.budget}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Marketing Budget:</span>
                              <span className="text-[#FFD700] font-semibold">{project.fundingRequired}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Expected Revenue:</span>
                              <span className="text-green-400 font-semibold">{project.expectedRevenue}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Revenue Share:</span>
                              <span className="text-[#FFD700] font-semibold">{project.revenueShare}</span>
                            </div>
                          </div>
                        </div>

                        {/* Team Details */}
                        <div className="space-y-4">
                          <h4 className="font-bold text-[#FFD700] flex items-center text-lg">
                            <Award className="mr-2" size={24} />
                            Production Team
                          </h4>
                          <div className="space-y-3">
                            <div>
                              <span className="text-gray-400">Director:</span>
                              <span className="text-white ml-2 font-medium">{project.director}</span>
                            </div>
                            <div>
                              <span className="text-gray-400">Producer:</span>
                              <span className="text-white ml-2 font-medium">{project.producer}</span>
                            </div>
                            <div>
                              <span className="text-gray-400">Cast:</span>
                              <span className="text-white ml-2 font-medium">{project.cast}</span>
                            </div>
                            <div>
                              <span className="text-gray-400">Timeline:</span>
                              <span className="text-white ml-2">{project.timeline}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Marketing Strategy */}
                      <div className="mb-8">
                        <h4 className="font-bold text-[#FFD700] flex items-center text-lg mb-4">
                          <Megaphone className="mr-2" size={24} />
                          Marketing Strategy
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {project.marketingStrategy.map((strategy, idx) => (
                            <div key={idx} className="flex items-center bg-gray-800/30 p-3 rounded">
                              <Star className="text-[#FFD700] mr-3" size={16} />
                              <span className="text-white">{strategy}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button className="flex-1 bg-[#FFD700] text-black hover:bg-[#FFA500] font-bold py-3">
                          Join Marketing Campaign
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black bg-transparent py-3"
                        >
                          View Marketing Plan
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-[#FFD700]/10 to-[#8B0000]/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-6">Ready to Launch Your Campaign?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Contact our marketing team to create a comprehensive campaign strategy that maximizes your film's reach and
            revenue potential.
          </p>
          <div className="flex gap-6 justify-center">
            <Button className="bg-[#FFD700] text-black hover:bg-[#FFA500] font-bold px-10 py-4 text-lg">
              Contact Marketing Team
            </Button>
            <Button
              variant="outline"
              className="border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black px-10 py-4 text-lg bg-transparent"
            >
              Schedule Strategy Session
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
