"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Web Developer at TechCorp",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The web development program at AppIgnite completely transformed my career. I went from knowing basic HTML to building full-stack applications in just a few months. The mentorship was invaluable, and the MSME certification helped me land my dream job.",
      program: "Web Development",
    },
    {
      name: "Rahul Patel",
      role: "Mobile App Developer",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "I joined AppIgnite with zero programming knowledge. The structured curriculum and hands-on projects helped me learn React Native quickly. The interview preparation sessions were particularly helpful, and I received multiple job offers after completing the program.",
      program: "Mobile App Development",
    },
    {
      name: "Ananya Gupta",
      role: "Data Scientist at AnalyticsPro",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The data science program exceeded my expectations. The instructors were knowledgeable and supportive, and the projects were challenging yet achievable. The networking events introduced me to industry professionals who later became my colleagues.",
      program: "Data Science",
    },
    {
      name: "Vikram Singh",
      role: "Full Stack Developer",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "AppIgnite's full stack program provided me with a solid foundation in both frontend and backend technologies. The mentorship and career guidance were exceptional, and the MSME certification added credibility to my resume.",
      program: "Full Stack Development",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Student <span className="text-cyan-400">Success</span> Stories
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Hear from our graduates who have successfully transitioned into rewarding tech careers after completing our
            programs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-slate-800/30 rounded-2xl p-6 md:p-8 border border-slate-700">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 p-1">
                    <img
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex mb-4 justify-center md:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-6 italic text-center md:text-left">
                    "{testimonials[currentIndex].content}"
                  </p>
                  <div className="text-center md:text-left">
                    <h4 className="text-xl font-semibold">{testimonials[currentIndex].name}</h4>
                    <p className="text-cyan-400">{testimonials[currentIndex].role}</p>
                    <p className="text-slate-400 text-sm mt-1">Program: {testimonials[currentIndex].program}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="border-slate-700 text-white hover:bg-slate-800"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-cyan-500" : "bg-slate-700"}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="border-slate-700 text-white hover:bg-slate-800"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <p className="text-slate-300">Students Trained</p>
            </div>
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
              <div className="text-4xl font-bold text-cyan-400 mb-2">92%</div>
              <p className="text-slate-300">Job Placement Rate</p>
            </div>
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <p className="text-slate-300">Partner Companies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

