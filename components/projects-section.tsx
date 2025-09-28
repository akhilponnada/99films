"use client"

import { Badge } from "@/components/ui/badge"

const featuredProjects = [
  {
    title: "The Last Stand",
    language: "English",
    genre: "Action Thriller",
    status: "Streaming Now",
    image: "https://images.pexels.com/photos/5380792/pexels-photo-5380792.jpeg?auto=compress&cs=tinysrgb&w=400&h=600",
  },
  {
    title: "Mumbai Dreams",
    language: "Hindi",
    genre: "Drama",
    status: "Upcoming",
    image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400&h=600",
  },
  {
    title: "Silent Echoes",
    language: "Tamil",
    genre: "Mystery",
    status: "Streaming Now",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=600",
  },
  {
    title: "Digital Hearts",
    language: "Telugu",
    genre: "Romance",
    status: "Upcoming",
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400&h=600",
  },
  {
    title: "The Heist",
    language: "English",
    genre: "Crime",
    status: "Streaming Now",
    image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400&h=600",
  },
  {
    title: "Monsoon Tales",
    language: "Bengali",
    genre: "Family Drama",
    status: "Upcoming",
    image: "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=400&h=600",
  },
  {
    title: "Cyber War",
    language: "English",
    genre: "Sci-Fi",
    status: "Streaming Now",
    image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400&h=600",
  },
  {
    title: "Village Stories",
    language: "Marathi",
    genre: "Comedy",
    status: "Upcoming",
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400&h=600",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-cinematic text-6xl text-[#FFD700] mb-6">Featured Films & Releases</h2>
          <p className="text-xl text-white font-open-sans max-w-3xl mx-auto">
            Discover our latest productions and upcoming releases across multiple languages and genres
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProjects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <div className="relative w-full h-80 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} poster`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                </div>

                {/* Overlay Info */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-white font-montserrat font-bold text-lg mb-2">{project.title}</h4>
                  <div className="space-y-1">
                    <Badge variant="secondary" className="bg-[#FFD700]/20 text-[#FFD700] text-xs">
                      {project.language}
                    </Badge>
                    <Badge variant="secondary" className="bg-[#8B0000]/20 text-white text-xs ml-2">
                      {project.genre}
                    </Badge>
                  </div>
                  <Badge
                    className={`mt-2 text-xs ${
                      project.status === "Streaming Now" ? "bg-green-600 text-white" : "bg-orange-600 text-white"
                    }`}
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
