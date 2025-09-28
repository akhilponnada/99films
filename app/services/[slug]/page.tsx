import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Camera,
  Palette,
  Target,
  Megaphone,
  Users,
  Monitor,
  IndianRupee,
  Clock,
  Star,
  Award,
} from "lucide-react"
import Link from "next/link"

const services = {
  "film-production-support": {
    icon: Camera,
    title: "Film Production Support",
    description: "Complete technical assistance for your film production needs",
    fullDescription:
      "Our comprehensive film production support covers every aspect of filmmaking from pre-production planning to post-production finishing. We provide state-of-the-art equipment, experienced crew, and technical expertise to bring your vision to life.",
    features: [
      "Professional camera equipment (RED, ARRI, Sony)",
      "Complete lighting and grip packages",
      "Sound recording and mixing facilities",
      "VFX and CGI production",
      "Color grading and post-production",
      "Music composition and sound design",
    ],
    projects: [
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
    ],
  },
  "white-label-projects": {
    icon: Palette,
    title: "White Label Projects",
    description: "Ready-to-customize film projects for your brand",
    fullDescription:
      "Our white label projects are pre-produced films that can be customized with your branding, messaging, and specific requirements. Perfect for brands looking to enter the entertainment space quickly.",
    features: [
      "Pre-produced content library",
      "Custom branding integration",
      "Flexible licensing options",
      "Quick turnaround time",
      "Multiple language dubbing",
      "Platform-specific optimization",
    ],
    projects: [
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
        poster: "/posters/love-in-the-city.jpg",
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
        poster: "/posters/startup-chronicles.jpg",
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
        poster: "/posters/digital-detox.jpg",
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
        poster: "/posters/green-revolution.jpg",
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
        poster: "/posters/cyber-warriors.jpg",
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
        poster: "/posters/food-trail.jpg",
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
        poster: "/posters/urban-legends.jpg",
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
        poster: "/posters/sports-academy.jpg",
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
        poster: "/posters/fashion-forward.jpg",
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
        poster: "/posters/smart-home.jpg",
      },
    ],
  },
  "in-film-branding": {
    icon: Target,
    title: "In-Film Branding",
    description: "Seamless product placement and brand integration",
    fullDescription:
      "We specialize in natural, story-driven brand integrations that enhance rather than interrupt the viewing experience. Our approach ensures maximum brand visibility while maintaining artistic integrity.",
    features: [
      "Strategic product placement",
      "Brand story integration",
      "Custom branded content",
      "Multi-platform campaigns",
      "Performance analytics",
      "Celebrity endorsements",
    ],
    projects: [
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
      },
    ],
  },
  "branding-marketing": {
    icon: Megaphone,
    title: "Branding & Marketing",
    description: "360-degree marketing campaigns for maximum reach",
    fullDescription:
      "Our marketing team creates comprehensive campaigns that build buzz from pre-production through OTT release. We leverage traditional and digital channels for maximum impact.",
    features: [
      "Social media campaigns",
      "Influencer partnerships",
      "PR and media relations",
      "Digital advertising",
      "Event marketing",
      "OTT platform optimization",
    ],
    projects: [
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
      },
    ],
  },
  "crowd-funded-projects": {
    icon: Users,
    title: "Crowd-Funded Projects",
    description: "Community-backed filmmaking with transparent returns",
    fullDescription:
      "Our crowdfunding platform allows audiences to directly invest in films they want to see, creating a community of stakeholders who share in the success of the project.",
    features: [
      "Transparent funding process",
      "Community engagement tools",
      "Regular project updates",
      "Investor perks and rewards",
      "Revenue sharing system",
      "Legal compliance support",
    ],
    projects: [
      {
        title: "Village Tales",
        genre: "Drama",
        language: "Regional + Hindi",
        budget: "₹1.2 Crores",
        expectedRevenue: "₹4-7 Crores",
        status: "Crowdfunding Active",
        fundingRequired: "₹90 Lakhs",
        revenueShare: "60% to community investors",
        director: "Independent filmmaker",
        producer: "Community backed",
        cast: "Local talent + guest appearances",
        crew: "15+ passionate filmmakers",
        timeline: "4 months production + 2 months post",
        roi: "333-583%",
      },
    ],
  },
  "ott-integration": {
    icon: Monitor,
    title: "OTT Integration",
    description: "Seamless streaming platform distribution",
    fullDescription:
      "We handle the technical and business aspects of OTT distribution, ensuring your content reaches the widest possible audience across multiple platforms.",
    features: [
      "Multi-platform distribution",
      "Technical optimization",
      "Metadata management",
      "Revenue optimization",
      "Analytics and reporting",
      "Global reach capabilities",
    ],
    projects: [
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
      },
    ],
  },
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services]

  if (!service) {
    notFound()
  }

  const ServiceIcon = service.icon

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-black to-gray-900 py-8">
        <div className="container mx-auto px-6">
          <Link href="/">
            <Button variant="ghost" className="text-[#FFD700] hover:text-white mb-4">
              <ArrowLeft className="mr-2" size={16} />
              Back to Home
            </Button>
          </Link>

          <div className="flex items-center mb-4">
            <ServiceIcon className="text-[#FFD700] mr-4" size={48} />
            <h1 className="text-cinematic text-5xl text-[#FFD700]">{service.title}</h1>
          </div>

          <p className="text-xl text-gray-300 max-w-3xl">{service.fullDescription}</p>
        </div>
      </div>

      {/* Features */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#FFD700] mb-8">Service Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <Card key={index} className="bg-gray-800/50 border-[#FFD700]/20">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <Star className="text-[#FFD700] mr-3" size={20} />
                    <span className="text-white">{feature}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Projects */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {service.title === "White Label Projects" ? (
            <>
              <h2 className="text-3xl font-bold text-[#FFD700] mb-8">White Label Project Portfolio</h2>
              <p className="text-gray-300 mb-12 text-lg">
                Choose from our collection of ready-to-customize films. Each project comes with complete production,
                post-production work done, and can be branded according to your requirements.
              </p>
            </>
          ) : (
            <h2 className="text-3xl font-bold text-[#FFD700] mb-8">Investment Opportunities</h2>
          )}

          <div className="grid gap-8">
            {service.projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gradient-to-r from-gray-900 to-gray-800 border-[#FFD700]/30 overflow-hidden"
              >
                <div className="md:flex">
                  {/* Movie Poster */}
                  <div className="md:w-1/3 relative">
                    <img
                      src={`/.jpg?key=0q2ub&height=400&width=300&query=${encodeURIComponent(`${project.title} movie poster ${project.genre} cinematic`)}`}
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

                  <div className="md:w-2/3 p-6">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-2xl text-[#FFD700] mb-2">{project.title}</CardTitle>
                          <div className="flex gap-2 mb-4">
                            <Badge variant="outline" className="border-[#FFD700] text-[#FFD700]">
                              {project.language}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-[#FFD700]">{project.roi}</div>
                          <div className="text-sm text-gray-400">Expected ROI</div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Financial Details */}
                        <div className="space-y-4">
                          <h4 className="font-bold text-[#FFD700] flex items-center">
                            <IndianRupee className="mr-2" size={20} />
                            Financial Overview
                          </h4>
                          <div className="space-y-2 text-sm">
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
                          <h4 className="font-bold text-[#FFD700] flex items-center">
                            <Award className="mr-2" size={20} />
                            Team & Cast
                          </h4>
                          <div className="space-y-2 text-sm">
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
                          <h4 className="font-bold text-[#FFD700] flex items-center">
                            <Clock className="mr-2" size={20} />
                            Project Timeline
                          </h4>
                          <div className="space-y-2 text-sm">
                            <div>
                              <span className="text-gray-400">Customization:</span>
                              <span className="text-white ml-2">{project.timeline}</span>
                            </div>
                            <div className="mt-4 space-y-2">
                              {service.title === "White Label Projects" ? (
                                <>
                                  <Button className="w-full bg-[#FFD700] text-black hover:bg-[#FFA500] font-bold">
                                    License This Project
                                  </Button>
                                  <Button
                                    variant="outline"
                                    className="w-full border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black bg-transparent"
                                  >
                                    View Full Details
                                  </Button>
                                </>
                              ) : (
                                <>
                                  <Button className="w-full bg-[#FFD700] text-black hover:bg-[#FFA500] font-bold">
                                    Invest Now
                                  </Button>
                                  <Button
                                    variant="outline"
                                    className="w-full border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black bg-transparent"
                                  >
                                    Download Pitch Deck
                                  </Button>
                                </>
                              )}
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
      <section className="py-16 bg-gradient-to-r from-[#FFD700]/10 to-[#8B0000]/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#FFD700] mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your project requirements and investment opportunities.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-[#FFD700] text-black hover:bg-[#FFA500] font-bold px-8 py-3">Contact Us</Button>
            <Button
              variant="outline"
              className="border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black px-8 py-3 bg-transparent"
            >
              Schedule Meeting
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
