"use client"

import { useState, useEffect } from "react"
import { FileText, Clapperboard, Scissors, Megaphone, Play, Coins } from "lucide-react"

const ecosystemSteps = [
  { icon: FileText, title: "Script", description: "Story Development" },
  { icon: Clapperboard, title: "Production", description: "Filming & Direction" },
  { icon: Scissors, title: "Post-Production", description: "Editing & VFX" },
  { icon: Megaphone, title: "Marketing", description: "Promotion & Buzz" },
  { icon: Play, title: "OTT Release", description: "Global Distribution" },
  { icon: Coins, title: "Revenue Sharing", description: "Profit Distribution" },
]

export default function EcosystemSection() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % ecosystemSteps.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="ecosystem" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-cinematic text-6xl text-[#FFD700] mb-6">The 99Films + MoveOn Ecosystem</h2>
          <p className="text-xl text-white font-open-sans max-w-3xl mx-auto">
            A seamless journey from concept to revenue, connecting every stakeholder in the filmmaking process
          </p>
        </div>

        {/* Interactive Flowchart */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          {ecosystemSteps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`relative p-6 rounded-full border-2 transition-all duration-500 ${
                  activeStep === index
                    ? "bg-[#FFD700] border-[#FFD700] text-black glow-gold"
                    : "bg-gray-900/50 border-[#FFD700]/30 text-[#FFD700]"
                }`}
              >
                <step.icon size={32} />

                {/* Step Info */}
                <div
                  className={`absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center transition-opacity duration-300 ${
                    activeStep === index ? "opacity-100" : "opacity-60"
                  }`}
                >
                  <h4 className="text-[#FFD700] font-montserrat font-bold text-sm">{step.title}</h4>
                  <p className="text-white text-xs font-open-sans">{step.description}</p>
                </div>
              </div>

              {/* Arrow */}
              {index < ecosystemSteps.length - 1 && (
                <div className="hidden lg:block mx-4">
                  <div className="w-8 h-0.5 bg-[#FFD700]/50"></div>
                  <div className="w-0 h-0 border-l-4 border-l-[#FFD700]/50 border-t-2 border-t-transparent border-b-2 border-b-transparent ml-6 -mt-1"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-2xl mx-auto">
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-gold transition-all duration-500 ease-out"
              style={{ width: `${((activeStep + 1) / ecosystemSteps.length) * 100}%` }}
            ></div>
          </div>
          <p className="text-center text-white text-sm mt-2 font-open-sans">
            Step {activeStep + 1} of {ecosystemSteps.length}: {ecosystemSteps[activeStep].title}
          </p>
        </div>
      </div>
    </section>
  )
}
