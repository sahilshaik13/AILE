"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleProgramChange = (value) => {
    setFormData((prev) => ({ ...prev, program: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    alert("Thank you for your interest! We'll contact you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      program: "",
      message: "",
    })
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

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email Us</h4>
                  <p className="text-slate-300">info@appignite.edu</p>
                  <p className="text-slate-300">support@appignite.edu</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Call Us</h4>
                  <p className="text-slate-300">+91 98765 43210</p>
                  <p className="text-slate-300">+91 12345 67890</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Visit Us</h4>
                  <p className="text-slate-300">
                    AppIgnite Learning Center
                    <br />
                    123 Tech Park, Innovation Street
                    <br />
                    Bangalore, Karnataka 560001
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-slate-700 hover:bg-slate-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-slate-700 hover:bg-slate-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-slate-700 hover:bg-slate-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-slate-700 hover:bg-slate-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/30 rounded-2xl p-6 md:p-8 border border-slate-700">
            <h3 className="text-2xl font-bold mb-6">Apply Now</h3>

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
                <label htmlFor="program" className="block text-sm font-medium mb-2">
                  Program of Interest
                </label>
                <Select value={formData.program} onValueChange={handleProgramChange}>
                  <SelectTrigger className="bg-slate-900/50 border-slate-700 focus:ring-cyan-500">
                    <SelectValue placeholder="Select a program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web-dev">Web Development</SelectItem>
                    <SelectItem value="mobile-dev">Mobile App Development</SelectItem>
                    <SelectItem value="data-science">Data Science</SelectItem>
                    <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                    <SelectItem value="devops">DevOps & Cloud</SelectItem>
                    <SelectItem value="fullstack">Full Stack Development</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message (Optional)
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
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
              >
                Submit Application <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

