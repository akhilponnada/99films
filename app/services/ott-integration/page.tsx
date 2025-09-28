import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Monitor, IndianRupee, Star, Award, TrendingUp, Globe, Zap, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function OTTIntegrationPage() {
  const projects = [
    {
      title: "Digital Nomads",
      genre: "Web Series",
      language: "English/Hindi",
      budget: "₹6.0 Crores",
      expectedRevenue: "₹20-30 Crores",
      status: "OTT Ready",
      fundingRequired: "₹4.0 Crores",
      revenueShare: "20% to investors + OTT revenue",
      director: "Web series veteran",
      producer: "OTT specialist",
      cast: "Popular digital stars",
      crew: "35+ digital content experts",
      timeline: "12 months (8 episodes)",
      roi: "333-500%",
      platforms: ["Netflix", "Amazon Prime", "Disney+ Hotstar", "SonyLIV"],
      episodes: 8,
      duration: "45 mins each",
    },
    {
      title: "Cyber Detectives",
      genre: "Crime Thriller Series",
      language: "Hindi/English",
      budget: "₹8.5 Crores",
      expectedRevenue: "₹25-40 Crores",
      status: "Platform Negotiations",
      fundingRequired: "₹5.5 Crores",
      revenueShare: "25% to investors + OTT revenue",
      director: "Anurag Kashyap",
      producer: "Phantom Digital",
      cast: "Nawazuddin Siddiqui, Radhika Apte, Pankaj Tripathi",
      crew: "45+ including cybersecurity consultants",
      timeline: "15 months (10 episodes)",
      roi: "294-455%",
      platforms: ["Netflix", "Amazon Prime", "Zee5", "Voot"],
      episodes: 10,
      duration: "50 mins each",
    },
  ]

  const ottServices = [
    {
      icon: Globe,
      title: "Multi-Platform Distribution",
      description:
        "Strategic distribution across Netflix, Amazon Prime, Disney+ Hotstar, and other major OTT platforms.",
    },
    {
      icon: Zap,
      title: "Technical Optimization",
      description:
        "Content optimization for different platforms including encoding, subtitles, and metadata management.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Comprehensive viewership analytics, engagement metrics, and revenue tracking across platforms.",
    },
    {
      icon: TrendingUp,
      title: "Revenue Optimization",
      description: "Strategic pricing, licensing deals, and revenue maximization across different markets and regions.",
    },
    {
      icon: Star,
      title: "Content Strategy",
      description: "Platform-specific content strategies to maximize visibility and audience engagement.",
    },
    {
      icon: Award,
      title: "Global Reach",
      description: "International distribution capabilities with localization and regional marketing support.",
    },
  ]

  const ottPlatforms = [
    {
      name: "Netflix",
      logo: "https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
      reach: "230M+ subscribers",
    },
    {
      name: "Amazon Prime",
      logo: "https://images.pexels.com/photos/4009401/pexels-photo-4009401.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
      reach: "200M+ subscribers",
    },
    {
      name: "Disney+ Hotstar",
      logo: "https://images.pexels.com/photos/4009400/pexels-photo-4009400.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
      reach: "50M+ subscribers",
    },
    {
      name: "SonyLIV",
      logo: "https://images.pexels.com/photos/4009399/pexels-photo-4009399.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
      reach: "25M+ subscribers",
    },
    {
      name: "Zee5",
      logo: "https://images.pexels.com/photos/4009398/pexels-photo-4009398.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
      reach: "20M+ subscribers",
    },
    {
      name: "Voot",
      logo: "https://images.pexels.com/photos/4009397/pexels-photo-4009397.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
      reach: "15M+ subscribers",
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
              "url('https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')",
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
            <Monitor className="text-[#FFD700] mr-4" size={64} />
            <h1 className="text-cinematic text-6xl text-[#FFD700]">OTT Integration</h1>
          </div>

          <p className="text-2xl text-gray-300 max-w-4xl leading-relaxed">
            Seamless streaming platform distribution for maximum reach. We handle the technical and business aspects of
            OTT distribution, ensuring your content reaches the widest possible audience across multiple platforms with
            optimized revenue streams.
          </p>
        </div>
      </div>

      {/* OTT Services */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-12 text-center">Our OTT Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ottServices.map((service, index) => (
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

      {/* Platform Partners */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-12 text-center">Our Platform Partners</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ottPlatforms.map((platform, index) => (
              <Card
                key={index}
                className="bg-gradient-to-b from-gray-800 to-gray-900 border-[#FFD700]/30 text-center hover:border-[#FFD700]/60 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-full h-20 bg-gray-700 rounded mb-4 flex items-center justify-center">
                    <span className="text-[#FFD700] font-bold text-lg">{platform.name}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{platform.name}</h3>
                  <p className="text-gray-300">{platform.reach}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current OTT Projects */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-12 text-center">Current OTT Projects</h2>

          <div className="grid gap-12">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gradient-to-r from-gray-900 to-gray-800 border-[#FFD700]/30 overflow-hidden"
              >
                <div className="md:flex">
                  {/* Series Poster */}
                  <div className="md:w-1/3 relative">
                    <img
                      src={`https://images.pexels.com/photos/${index === 0 ? "2599244" : "5380664"}/pexels-photo-${index === 0 ? "2599244" : "5380664"}.jpeg?auto=compress&cs=tinysrgb&w=400&h=600`}
                      alt={`${project.title} poster`}
                      className="w-full h-64 md:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-[#8B0000] text-white">
                        {project.genre}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="border-purple-500 text-purple-400 bg-black/70">
                        {project.status}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-black/80 p-3 rounded">
                      <div className="text-center">
                        <div className="text-[#FFD700] font-bold">{project.episodes} Episodes</div>
                        <div className="text-gray-300 text-sm">{project.duration}</div>
                      </div>
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
                            Investment Details
                          </h4>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-gray-400">Total Budget:</span>
                              <span className="text-white font-semibold">{project.budget}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Investment Required:</span>
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

                        {/* Production Details */}
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

                      {/* Platform Distribution */}
                      <div className="mb-8">
                        <h4 className="font-bold text-[#FFD700] flex items-center text-lg mb-4">
                          <Monitor className="mr-2" size={24} />
                          Target Platforms
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {project.platforms.map((platform, idx) => (
                            <div key={idx} className="flex items-center bg-gray-800/30 p-3 rounded">
                              <Star className="text-[#FFD700] mr-3" size={16} />
                              <span className="text-white">{platform}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button className="flex-1 bg-[#FFD700] text-black hover:bg-[#FFA500] font-bold py-3">
                          Invest in Series
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black bg-transparent py-3"
                        >
                          View Series Bible
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
          <h2 className="text-4xl font-bold text-[#FFD700] mb-6">Ready to Stream Your Content?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Contact our OTT integration team to discuss distribution strategies and maximize your content's reach across
            streaming platforms.
          </p>
          <div className="flex gap-6 justify-center">
            <Button className="bg-[#FFD700] text-black hover:bg-[#FFA500] font-bold px-10 py-4 text-lg">
              Contact OTT Team
            </Button>
            <Button
              variant="outline"
              className="border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black px-10 py-4 text-lg bg-transparent"
            >
              Schedule Distribution Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
