import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Target, IndianRupee, Star, Award, TrendingUp, Eye, Zap } from "lucide-react"
import Link from "next/link"

export default function InFilmBrandingPage() {
  const projects = [
    {
      title: "Startup Story",
      genre: "Drama/Comedy",
      language: "Hindi/English",
      budget: "₹3.5 Crores",
      expectedRevenue: "₹12-18 Crores",
      status: "Brand Partnership Phase",
      fundingRequired: "₹2.2 Crores",
      revenueShare: "30% to investors + brand revenue",
      director: "Rohit Shetty Jr.",
      producer: "Karan Malhotra",
      cast: "Popular web series actors + cameos",
      crew: "30+ professionals",
      timeline: "7 months production + 2 months marketing",
      roi: "343-514%",
      brandingOpportunities: [
        "Tech startup office setup",
        "Laptop and mobile device placements",
        "Coffee shop and restaurant scenes",
        "Transportation and delivery services",
      ],
    },
    {
      title: "Fashion Week Chronicles",
      genre: "Drama/Romance",
      language: "Hindi/English",
      budget: "₹4.2 Crores",
      expectedRevenue: "₹15-22 Crores",
      status: "Seeking Brand Partners",
      fundingRequired: "₹2.8 Crores",
      revenueShare: "25% to investors + brand revenue",
      director: "Madhur Bhandarkar",
      producer: "Dharma Productions",
      cast: "Sonam Kapoor, Ranveer Singh, Priyanka Chopra",
      crew: "40+ professionals including fashion consultants",
      timeline: "8 months production + 3 months marketing",
      roi: "357-524%",
      brandingOpportunities: [
        "Fashion brand showcases",
        "Jewelry and accessories",
        "Beauty and cosmetics",
        "Luxury lifestyle products",
      ],
    },
  ]

  const brandingServices = [
    {
      icon: Target,
      title: "Strategic Product Placement",
      description:
        "Natural integration of products into storylines that enhance rather than interrupt the narrative flow.",
    },
    {
      icon: Eye,
      title: "Brand Story Integration",
      description:
        "Weave your brand's values and messaging seamlessly into character development and plot progression.",
    },
    {
      icon: TrendingUp,
      title: "Multi-Platform Campaigns",
      description: "Extend brand visibility across theatrical, OTT, social media, and digital marketing channels.",
    },
    {
      icon: Star,
      title: "Celebrity Endorsements",
      description: "Leverage star power with natural endorsements and brand associations within the film context.",
    },
    {
      icon: Zap,
      title: "Performance Analytics",
      description: "Detailed metrics on brand visibility, audience engagement, and conversion tracking.",
    },
    {
      icon: Award,
      title: "Award-Winning Creative",
      description: "Our team has won multiple awards for seamless brand integrations that audiences love.",
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
              "url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')",
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
            <Target className="text-[#FFD700] mr-4" size={64} />
            <h1 className="text-cinematic text-6xl text-[#FFD700]">In-Film Branding</h1>
          </div>

          <p className="text-2xl text-gray-300 max-w-4xl leading-relaxed">
            Seamless product placement and brand integration that enhances storytelling while maximizing brand
            visibility. We specialize in natural, story-driven brand integrations that enhance rather than interrupt the
            viewing experience.
          </p>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-12 text-center">Our Branding Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandingServices.map((service, index) => (
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

      {/* Brand Integration Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-12 text-center">Our Integration Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Script Analysis",
                desc: "We analyze your script to identify natural brand integration opportunities",
              },
              {
                step: "02",
                title: "Brand Matching",
                desc: "Match your brand with the right scenes, characters, and story moments",
              },
              {
                step: "03",
                title: "Creative Development",
                desc: "Develop creative concepts that serve both story and brand objectives",
              },
              {
                step: "04",
                title: "Performance Tracking",
                desc: "Monitor and measure brand visibility and audience engagement",
              },
            ].map((process, index) => (
              <Card key={index} className="bg-gradient-to-b from-gray-800 to-gray-900 border-[#FFD700]/30 text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-[#FFD700] mb-4">{process.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{process.title}</h3>
                  <p className="text-gray-300">{process.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-12 text-center">
            Current Brand Partnership Opportunities
          </h2>

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
                      src={`https://images.pexels.com/photos/${index === 0 ? "3184465" : "1040945"}/pexels-photo-${index === 0 ? "3184465" : "1040945"}.jpeg?auto=compress&cs=tinysrgb&w=400&h=600`}
                      alt={`${project.title} poster`}
                      className="w-full h-64 md:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-[#8B0000] text-white">
                        {project.genre}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="border-orange-500 text-orange-400 bg-black/70">
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
                            Investment Details
                          </h4>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-gray-400">Total Budget:</span>
                              <span className="text-white font-semibold">{project.budget}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Brand Investment:</span>
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

                      {/* Branding Opportunities */}
                      <div className="mb-8">
                        <h4 className="font-bold text-[#FFD700] flex items-center text-lg mb-4">
                          <Target className="mr-2" size={24} />
                          Brand Integration Opportunities
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {project.brandingOpportunities.map((opportunity, idx) => (
                            <div key={idx} className="flex items-center bg-gray-800/30 p-3 rounded">
                              <Star className="text-[#FFD700] mr-3" size={16} />
                              <span className="text-white">{opportunity}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button className="flex-1 bg-[#FFD700] text-black hover:bg-[#FFA500] font-bold py-3">
                          Partner With Us
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black bg-transparent py-3"
                        >
                          View Brand Deck
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
          <h2 className="text-4xl font-bold text-[#FFD700] mb-6">Ready to Integrate Your Brand?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Contact our brand integration team to explore partnership opportunities and create memorable brand
            experiences through cinema.
          </p>
          <div className="flex gap-6 justify-center">
            <Button className="bg-[#FFD700] text-black hover:bg-[#FFA500] font-bold px-10 py-4 text-lg">
              Contact Brand Team
            </Button>
            <Button
              variant="outline"
              className="border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black px-10 py-4 text-lg bg-transparent"
            >
              Schedule Partnership Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
