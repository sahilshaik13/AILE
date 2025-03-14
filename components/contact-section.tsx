"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const telegramBotToken = "7669570716:AAEcPDr0eNSyFp8zeV54ROajCayPhNXMQ84"
    const chatId = "7578492787" // Replace with your actual chat ID

    const messageText = `New Contact Form Submission:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: messageText,
          }),
        }
      )

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      alert("Thank you for your inquiry! We'll contact you soon.")
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch (error) {
      console.error("Error sending message:", error)
      alert("There was an error submitting your form. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get <span className="text-cyan-400">Started</span> Today
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Ready to begin your tech journey? Reach out to us for more information or to apply for our programs.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-slate-800/30 rounded-2xl p-6 md:p-8 border border-slate-700">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div>
              <br></br>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email Us</h4>
                  <p className="text-slate-300">appignitelearning@outlook.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">WhatsApp Us</h4>
                  <p className="text-slate-300">+91 93471 51331</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Visit Us</h4>
                  <p className="text-slate-300">
                    AppIgnite Hyderabad Hub
                    <br />
                    Nawab Shah Alam Khan College of Engineering and Technology.
                    <br />
                    New Malakpet, Hyderabad, Telangana 500024
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/30 rounded-2xl p-6 md:p-8 border border-slate-700">
            <h3 className="text-2xl font-bold mb-6">Any Questions?</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="bg-slate-900/50 border-slate-700 focus-visible:ring-cyan-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  className="bg-slate-900/50 border-slate-700 focus-visible:ring-cyan-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="bg-slate-900/50 border-slate-700 focus-visible:ring-cyan-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your background and goals"
                  className="bg-slate-900/50 border-slate-700 focus-visible:ring-cyan-500 min-h-[120px]"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
              >
                {loading ? "Sending..." : "Submit Application"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}