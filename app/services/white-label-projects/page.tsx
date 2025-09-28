import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Palette, IndianRupee, Clock, Star, Award, Play, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function WhiteLabelProjectsPage() {
  const projects = [
    {
      title: "Love in the City",
      genre: "Romance",
      language: "Multi-language ready",
      budget: "₹1.8 Crores",
      expectedRevenue: "₹6-9 Crores",
      status: "Ready for Customization",
      fundingRequired: "₹80 Lakhs",
      revenueShare: "50% to brand partners",
      director: "Meera Nair",
      producer: "Arjun Kapoor",
      cast: "Kriti Sanon, Kartik Aaryan, Rajkummar Rao",
      crew: "20+ professionals",
      timeline: "2 months customization + 1 month delivery",
      roi: "333-563%",
      imageUrl:
        "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400&h=600",
    },
    {
      title: "The Startup Chronicles",
      genre: "Drama/Comedy",
      language: "Hindi/English",
      budget: "₹2.2 Crores",
      expectedRevenue: "₹8-12 Crores",
      status: "Ready for Customization",
      fundingRequired: "₹1.5 Crores",
      revenueShare: "45% to brand partners",
      director: "Nitesh Tiwari",
      producer: "Guneet Monga",
      cast: "Ayushmann Khurrana, Bhumi Pednekar, Pankaj Tripathi",
      crew: "25+ professionals including tech consultants",
      timeline: "3 months customization + 2 months delivery",
      roi: "364-545%",
      imageUrl:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=600",
    },
    {
      title: "Digital Detox",
      genre: "Thriller/Drama",
      language: "Multi-language ready",
      budget: "₹3.0 Crores",
      expectedRevenue: "₹10-15 Crores",
      status: "Post-Production Complete",
      fundingRequired: "₹2.0 Crores",
      revenueShare: "40% to brand partners",
      director: "Anurag Kashyap",
      producer: "Phantom Films",
      cast: "Taapsee Pannu, Vikrant Massey, Tillotama Shome",
      crew: "30+ professionals including cybersecurity experts",
      timeline: "2 months customization + 1 month delivery",
      roi: "333-500%",
      imageUrl:
        "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400&h=600",
    },
    {
      title: "Green Revolution",
      genre: "Documentary/Drama",
      language: "Hindi/English/Regional",
      budget: "₹1.5 Crores",
      expectedRevenue: "₹5-8 Crores",
      status: "Ready for Customization",
      fundingRequired: "₹1.0 Crores",
      revenueShare: "55% to brand partners",
      director: "Shaunak Sen",
      producer: "Rishab Shetty Productions",
      cast: "Manoj Bajpayee, Geetika Vidya, Local farmers and activists",
      crew: "18+ professionals including environmental consultants",
      timeline: "2 months customization + 3 weeks delivery",
      roi: "333-533%",
      imageUrl:
        "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=400&h=600",
    },
    {
      title: "Cyber Warriors",
      genre: "Action/Thriller",
      language: "Hindi/English",
      budget: "₹4.5 Crores",
      expectedRevenue: "₹15-22 Crores",
      status: "Ready for Customization",
      fundingRequired: "₹3.2 Crores",
      revenueShare: "35% to brand partners",
      director: "Sriram Raghavan",
      producer: "Dinesh Vijan",
      cast: "John Abraham, Kiara Advani, Manoj Bajpayee",
      crew: "40+ professionals including action choreographers",
      timeline: "4 months customization + 2 months delivery",
      roi: "333-489%",
      imageUrl:
        "https://images.pexels.com/photos/5380792/pexels-photo-5380792.jpeg?auto=compress&cs=tinysrgb&w=400&h=600",
    },
    {
      title: "The Food Trail",
      genre: "Comedy/Drama",
      language: "Multi-language ready",
      budget: "₹2.8 Crores",
      expectedRevenue: "₹9-14 Crores",
      status: "Post-Production Complete",
      fundingRequired: "₹1.8 Crores",
      revenueShare: "42% to brand partners",
      director: "Anees Bazmee",
      producer: "Bhushan Kumar",
      cast: "Arjun Kapoor, Parineeti Chopra, Boman Irani",
      crew: "28+ professionals including celebrity chefs",
      timeline: "2.5 months customization + 1.5 months delivery",
      roi: "321-500%",
      imageUrl:
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400&h=600",
    },
    {
      title: "Urban Legends",
      genre: "Horror/Mystery",
      language: "Hindi/Tamil/Telugu",
      budget: "₹3.5 Crores",
      expectedRevenue: "₹12-18 Crores",
      status: "Ready for Customization",
      fundingRequired: "₹2.5 Crores",
      revenueShare: "38% to brand partners",
      director: "Vikram Bhatt",
      producer: "Ekta Kapoor",
      cast: "Rajkummar Rao, Shraddha Kapoor, Pankaj Tripathi",
      crew: "35+ professionals including VFX specialists",
      timeline: "3.5 months customization + 2 months delivery",
      roi: "343-514%",
      imageUrl:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=600",
    },
    {
      title: "Sports Academy",
      genre: "Sports/Drama",
      language: "Hindi/English",
      budget: "₹2.0 Crores",
      expectedRevenue: "₹7-11 Crores",
      status: "Ready for Customization",
      fundingRequired: "₹1.3 Crores",
      revenueShare: "48% to brand partners",
      director: "Nitesh Tiwari",
      producer: "Aamir Khan Productions",
      cast: "Sushant Singh Rajput, Shraddha Kapoor, Sports personalities",
      crew: "22+ professionals including sports consultants",
      timeline: "3 months customization + 1.5 months delivery",
      roi: "350-550%",
      imageUrl:
        "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=400&h=600",
    },
    {
      title: "Fashion Forward",
      genre: "Drama/Romance",
      language: "Hindi/English",
      budget: "₹2.5 Crores",
      expectedRevenue: "₹8-13 Crores",
      status: "Post-Production Complete",
      fundingRequired: "₹1.6 Crores",
      revenueShare: "44% to brand partners",
      director: "Madhur Bhandarkar",
      producer: "Karan Johar",
      cast: "Sonam Kapoor, Fawad Khan, Kirron Kher",
      crew: "26+ professionals including fashion designers",
      timeline: "2 months customization + 1 month delivery",
      roi: "320-520%",
      imageUrl:
        "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=600",
    },
    {
      title: "Smart Home",
      genre: "Sci-Fi/Comedy",
      language: "Multi-language ready",
      budget: "₹3.2 Crores",
      expectedRevenue: "₹11-16 Crores",
      status: "Ready for Customization",
      fundingRequired: "₹2.2 Crores",
      revenueShare: "40% to brand partners",
      director: "Raj & DK",
      producer: "Shah Rukh Khan Productions",
      cast: "Rajkummar Rao, Kriti Sanon, Johnny Lever",
      crew: "32+ professionals including tech consultants",
      timeline: "3 months customization + 2 months delivery",
      roi: "344-500%",
      imageUrl:
        "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400&h=600",
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
              "url('https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')",
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
            <Palette className="text-[#FFD700] mr-4" size={64} />
            <h1 className="text-cinematic text-6xl text-[#FFD700]">White Label Projects</h1>
          </div>

          <p className="text-2xl text-gray-300 max-w-4xl leading-relaxed">
            Ready-to-customize film projects for your brand. Our white label projects are pre-produced films that can be
            customized with your branding, messaging, and specific requirements. Perfect for brands looking to enter the
            entertainment space quickly.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-12 text-center">Why Choose White Label Projects?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Quick Turnaround",
                desc: "Get your branded content ready in 2-4 months instead of 12+ months",
              },
              {
                icon: Star,
                title: "Pre-Produced Quality",
                desc: "Professional films with established cast and crew already completed",
              },
              {
                icon: Users,
                title: "Custom Branding",
                desc: "Seamlessly integrate your brand message and visual identity",
              },
              {
                icon: Play,
                title: "Multi-Platform Ready",
                desc: "Optimized for theatrical, OTT, and digital distribution",
              },
              { icon: Award, title: "Proven ROI", desc: "Track record of 300-500% returns on white label investments" },
              {
                icon: Clock,
                title: "Flexible Licensing",
                desc: "Choose from various licensing models to fit your budget",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-[#FFD700]/20 hover:border-[#FFD700]/50 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <feature.icon className="text-[#FFD700] mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Portfolio */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-6 text-center">White Label Project Portfolio</h2>
          <p className="text-xl text-gray-300 mb-16 text-center max-w-4xl mx-auto">
            Choose from our collection of ready-to-customize films. Each project comes with complete production and
            post-production work done, and can be branded according to your requirements.
          </p>

          <div className="grid gap-12">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gradient-to-r from-gray-900 to-gray-800 border-[#FFD700]/30 overflow-hidden hover:border-[#FFD700]/60 transition-all duration-300"
              >
                <div className="md:flex">
                  {/* Movie Poster */}
                  <div className="md:w-1/3 relative">
                    <img
                      src={project.imageUrl || "/placeholder.svg"}
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
                              <span className="text-gray-400">Licensing Cost:</span>
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
                            Customization Timeline
                          </h4>
                          <div className="space-y-3">
                            <div>
                              <span className="text-gray-400">Duration:</span>
                              <span className="text-white ml-2">{project.timeline}</span>
                            </div>
                            <div className="mt-6 space-y-3">
                              <Button className="w-full bg-[#FFD700] text-black hover:bg-[#FFA500] font-bold py-3">
                                License This Project
                              </Button>
                              <Button
                                variant="outline"
                                className="w-full border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black bg-transparent py-3"
                              >
                                View Full Details
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
          <h2 className="text-4xl font-bold text-[#FFD700] mb-6">Ready to License a Project?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Contact our licensing team to discuss customization options and get started with your white label film
            project today.
          </p>
          <div className="flex gap-6 justify-center">
            <Button className="bg-[#FFD700] text-black hover:bg-[#FFA500] font-bold px-10 py-4 text-lg">
              Contact Licensing Team
            </Button>
            <Button
              variant="outline"
              className="border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black px-10 py-4 text-lg bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
