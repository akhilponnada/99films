"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Instagram, Youtube, Linkedin, Facebook } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-cinematic text-6xl text-[#FFD700] mb-6">Contact Us</h2>
          <p className="text-xl text-[#C0C0C0] font-open-sans max-w-3xl mx-auto">
            Ready to bring your vision to life? Get in touch with our team and let's create something extraordinary
            together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gray-900/50 border-[#FFD700]/20">
            <CardHeader>
              <CardTitle className="text-[#FFD700] font-montserrat font-bold text-2xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-800 border-[#FFD700]/30 text-white placeholder:text-gray-400"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-800 border-[#FFD700]/30 text-white placeholder:text-gray-400"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-gray-800 border-[#FFD700]/30 text-white placeholder:text-gray-400"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#FFD700] text-black hover:bg-[#FFA500] font-bold text-lg py-3 glow-gold"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-gray-900/50 border-[#FFD700]/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Mail className="text-[#FFD700]" size={24} />
                  <div>
                    <h4 className="text-[#FFD700] font-montserrat font-bold">Email</h4>
                    <p className="text-[#C0C0C0] font-open-sans">info@99films.in</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-[#FFD700]/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Phone className="text-[#FFD700]" size={24} />
                  <div>
                    <h4 className="text-[#FFD700] font-montserrat font-bold">Phone</h4>
                    <p className="text-[#C0C0C0] font-open-sans">9667660773</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-[#FFD700]/20">
              <CardHeader>
                <CardTitle className="text-[#FFD700] font-montserrat font-bold">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="p-3 bg-[#FFD700]/10 rounded-full hover:bg-[#FFD700]/20 transition-colors glow-gold"
                  >
                    <Instagram className="text-[#FFD700]" size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-[#FFD700]/10 rounded-full hover:bg-[#FFD700]/20 transition-colors glow-gold"
                  >
                    <Youtube className="text-[#FFD700]" size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-[#FFD700]/10 rounded-full hover:bg-[#FFD700]/20 transition-colors glow-gold"
                  >
                    <Linkedin className="text-[#FFD700]" size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-[#FFD700]/10 rounded-full hover:bg-[#FFD700]/20 transition-colors glow-gold"
                  >
                    <Facebook className="text-[#FFD700]" size={20} />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
