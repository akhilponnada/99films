import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Camera, IndianRupee, Clock, Star, Award, Play, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function FilmProductionSupportPage() {
  const projects = [
    {
      title: "Urban Dreams",
      genre: "Drama",
      language: "Hindi",
      budget: "₹2.5 Crores",
      expectedRevenue: "₹8-12 Crores",
      status: "Seeking Investment",
      fundingRequired: "₹1.8 Crores",
      revenueShare: "40% to investors",
      director: "Rajesh Kumar",
      producer: "Priya Sharma",
      cast: "Established regional actors + 2 Bollywood stars",
      crew: "25+ experienced professionals",
      timeline: "6 months production + 3 months post-production",
      roi: "320-480%",
    },
    {
      title: "Tech Revolution",
      genre: "Thriller",
      language: "English/Hindi",
      budget: "₹4.2 Crores",
      expectedRevenue: "₹15-20 Crores",
      status: "Pre-Production",
      fundingRequired: "₹3.0 Crores",
      revenueShare: "35% to investors",
      director: "Anita Desai",
      producer: "Vikram Singh",
      cast: "International cast with Indian leads",
      crew: "40+ professionals including international VFX team",
      timeline: "8 months production + 4 months post-production",
      roi: "357-567%",
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
              "url('https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')",
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
            <Camera className="text-[#FFD700] mr-4" size={64} />
            <h1 className="text-cinematic text-6xl text-[#FFD700]">Film Production Support</h1>
          </div>

          <p className="text-2xl text-gray-300 max-w-4xl leading-relaxed">
            Complete technical assistance for your film production needs. From pre-production planning to
            post-production finishing, we provide state-of-the-art equipment, experienced crew, and technical expertise
            to bring your vision to life.
          </p>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-12 text-center">Our Production Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                title: "Professional Equipment",
                desc: "RED, ARRI, Sony cameras with complete lighting packages",
              },
              {
                icon: Users,
                title: "Expert Crew",
                desc: "Experienced cinematographers, sound engineers, and technicians",
              },
              {
                icon: Zap,
                title: "VFX & Post-Production",
                desc: "Complete CGI, color grading, and sound design facilities",
              },
              { icon: Star, title: "Music & Sound", desc: "Original composition and professional mixing studios" },
              { icon: Play, title: "Editing Suites", desc: "State-of-the-art editing facilities with latest software" },
              { icon: Award, title: "Quality Assurance", desc: "Industry-standard quality control and delivery" },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-[#FFD700]/20 hover:border-[#FFD700]/50 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <service.icon className="text-[#FFD700] mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-12 text-center">Current Investment Opportunities</h2>

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
                      src={`https://images.pexels.com/photos/${index === 0 ? "7991579" : "7991471"}/pexels-photo-${index === 0 ? "7991579" : "7991471"}.jpeg?auto=compress&cs=tinysrgb&w=400&h=600`}
                      alt={`${project.title} poster`}
                      className="w-full h-64 md:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-[#8B0000] text-white">
                        {project.genre}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="border-green-500 text-green-400 bg-black/70">
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
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Financial Details */}
                        <div className="space-y-4">
                          <h4 className="font-bold text-[#FFD700] flex items-center text-lg">
                            <IndianRupee className="mr-2" size={24} />
                            Financial Overview
                          </h4>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-gray-400">Total Budget:</span>
                              <span className="text-white font-semibold">{project.budget}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Funding Required:</span>
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
                            Team & Cast
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
                              <span className="text-gray-400">Crew Size:</span>
                              <span className="text-white ml-2">{project.crew}</span>
                            </div>
                          </div>
                        </div>

                        {/* Timeline & Actions */}
                        <div className="space-y-4">
                          <h4 className="font-bold text-[#FFD700] flex items-center text-lg">
                            <Clock className="mr-2" size={24} />
                            Project Timeline
                          </h4>
                          <div className="space-y-3">
                            <div>
                              <span className="text-gray-400">Duration:</span>
                              <span className="text-white ml-2">{project.timeline}</span>
                            </div>
                            <div className="mt-6 space-y-3">
                              <Button className="w-full bg-[#FFD700] text-black hover:bg-[#FFA500] font-bold py-3">
                                Invest Now
                              </Button>
                              <Button
                                variant="outline"
                                className="w-full border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black bg-transparent py-3"
                              >
                                Download Pitch Deck
                              </Button>
                            </div>
                          </div>
                        </div>
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
          <h2 className="text-4xl font-bold text-[#FFD700] mb-6">Ready to Start Your Film Project?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Contact our production team to discuss your project requirements and get a detailed quote for our
            comprehensive film production services.
          </p>
          <div className="flex gap-6 justify-center">
            <Button className="bg-[#FFD700] text-black hover:bg-[#FFA500] font-bold px-10 py-4 text-lg">
              Contact Production Team
            </Button>
            <Button
              variant="outline"
              className="border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black px-10 py-4 text-lg bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
