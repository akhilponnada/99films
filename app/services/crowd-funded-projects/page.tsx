import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, IndianRupee, Star, Award, TrendingUp, Heart, Shield, Gift } from "lucide-react"
import Link from "next/link"

export default function CrowdFundedProjectsPage() {
  const projects = [
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
      fundingProgress: 65,
      backers: 1247,
      daysLeft: 18,
      rewards: [
        "₹500 - Digital copy + credits",
        "₹2,000 - Signed poster + merchandise",
        "₹10,000 - Set visit + meet cast",
        "₹50,000 - Producer credit + premiere invite",
      ],
    },
    {
      title: "The Street Musician",
      genre: "Musical/Drama",
      language: "Hindi/English",
      budget: "₹2.5 Crores",
      expectedRevenue: "₹8-12 Crores",
      status: "Funding Goal Reached",
      fundingRequired: "₹1.8 Crores",
      revenueShare: "55% to community investors",
      director: "Imtiaz Ali",
      producer: "Community + Window Seat Films",
      cast: "Ranbir Kapoor, Alia Bhatt, AR Rahman",
      crew: "30+ including musicians and sound engineers",
      timeline: "6 months production + 3 months post",
      roi: "320-480%",
      fundingProgress: 100,
      backers: 2156,
      daysLeft: 0,
      rewards: [
        "₹1,000 - Soundtrack album + credits",
        "₹5,000 - Concert tickets + backstage pass",
        "₹25,000 - Music session attendance",
        "₹1,00,000 - Executive producer credit",
      ],
    },
  ]

  const crowdfundingFeatures = [
    {
      icon: Shield,
      title: "Transparent Funding",
      description: "Complete transparency in fund usage with regular updates and financial reports to all backers.",
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Direct interaction with filmmakers, exclusive content, and behind-the-scenes access for backers.",
    },
    {
      icon: Gift,
      title: "Investor Rewards",
      description: "Exclusive perks, merchandise, credits, and revenue sharing based on contribution levels.",
    },
    {
      icon: TrendingUp,
      title: "Revenue Sharing",
      description: "Fair revenue distribution system ensuring community investors get their share of profits.",
    },
    {
      icon: Heart,
      title: "Creative Freedom",
      description: "Support independent filmmakers with creative control and authentic storytelling.",
    },
    {
      icon: Award,
      title: "Legal Compliance",
      description: "Full legal framework ensuring investor protection and regulatory compliance.",
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
              "url('https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')",
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
            <Users className="text-[#FFD700] mr-4" size={64} />
            <h1 className="text-cinematic text-6xl text-[#FFD700]">Crowd-Funded Projects</h1>
          </div>

          <p className="text-2xl text-gray-300 max-w-4xl leading-relaxed">
            Community-backed filmmaking with transparent returns. Our crowdfunding platform allows audiences to directly
            invest in films they want to see, creating a community of stakeholders who share in the success of the
            project.
          </p>
        </div>
      </div>

      {/* Features Overview */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-12 text-center">Why Choose Crowdfunding?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crowdfundingFeatures.map((feature, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-[#FFD700]/20 hover:border-[#FFD700]/50 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <feature.icon className="text-[#FFD700] mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-12 text-center">How Crowdfunding Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discover Projects",
                desc: "Browse and select films that align with your interests and values",
              },
              {
                step: "02",
                title: "Choose Investment",
                desc: "Select your contribution level and associated rewards and benefits",
              },
              {
                step: "03",
                title: "Track Progress",
                desc: "Follow production updates, behind-the-scenes content, and milestones",
              },
              {
                step: "04",
                title: "Share Profits",
                desc: "Receive your share of revenue once the film starts generating income",
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

      {/* Active Crowdfunding Projects */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-12 text-center">Active Crowdfunding Campaigns</h2>

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
                      src={`https://images.pexels.com/photos/${index === 0 ? "1072179" : "958545"}/pexels-photo-${index === 0 ? "1072179" : "958545"}.jpeg?auto=compress&cs=tinysrgb&w=400&h=600`}
                      alt={`${project.title} poster`}
                      className="w-full h-64 md:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-[#8B0000] text-white">
                        {project.genre}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant="outline"
                        className={`${project.status === "Funding Goal Reached" ? "border-green-500 text-green-400" : "border-orange-500 text-orange-400"} bg-black/70`}
                      >
                        {project.status}
                      </Badge>
                    </div>

                    {/* Funding Progress */}
                    <div className="absolute bottom-4 left-4 right-4 bg-black/80 p-3 rounded">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-[#FFD700]">{project.fundingProgress}% Funded</span>
                        <span className="text-gray-300">{project.backers} Backers</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-[#FFD700] h-2 rounded-full transition-all duration-300"
                          style={{ width: `${Math.min(project.fundingProgress, 100)}%` }}
                        />
                      </div>
                      {project.daysLeft > 0 && (
                        <div className="text-center text-sm text-gray-300 mt-2">{project.daysLeft} days left</div>
                      )}
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
                            Funding Details
                          </h4>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-gray-400">Total Budget:</span>
                              <span className="text-white font-semibold">{project.budget}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Funding Goal:</span>
                              <span className="text-[#FFD700] font-semibold">{project.fundingRequired}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Expected Revenue:</span>
                              <span className="text-green-400 font-semibold">{project.expectedRevenue}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Community Share:</span>
                              <span className="text-[#FFD700] font-semibold">{project.revenueShare}</span>
                            </div>
                          </div>
                        </div>

                        {/* Team Details */}
                        <div className="space-y-4">
                          <h4 className="font-bold text-[#FFD700] flex items-center text-lg">
                            <Award className="mr-2" size={24} />
                            Project Team
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

                      {/* Reward Tiers */}
                      <div className="mb-8">
                        <h4 className="font-bold text-[#FFD700] flex items-center text-lg mb-4">
                          <Gift className="mr-2" size={24} />
                          Reward Tiers
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {project.rewards.map((reward, idx) => (
                            <div key={idx} className="flex items-center bg-gray-800/30 p-3 rounded">
                              <Star className="text-[#FFD700] mr-3" size={16} />
                              <span className="text-white">{reward}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button className="flex-1 bg-[#FFD700] text-black hover:bg-[#FFA500] font-bold py-3">
                          {project.status === "Funding Goal Reached" ? "View Project Updates" : "Back This Project"}
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black bg-transparent py-3"
                        >
                          View Full Campaign
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
          <h2 className="text-4xl font-bold text-[#FFD700] mb-6">Ready to Fund Your Next Favorite Film?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Join our community of film investors and be part of bringing amazing stories to life while earning returns
            on your investment.
          </p>
          <div className="flex gap-6 justify-center">
            <Button className="bg-[#FFD700] text-black hover:bg-[#FFA500] font-bold px-10 py-4 text-lg">
              Explore Projects
            </Button>
            <Button
              variant="outline"
              className="border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black px-10 py-4 text-lg bg-transparent"
            >
              Learn About Investing
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
