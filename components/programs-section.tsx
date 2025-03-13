"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, Globe, Smartphone, Cpu, Layers } from "lucide-react"

export default function ProgramsSection() {
  const [activeTab, setActiveTab] = useState("web-dev")

  const programs = [
    {
      id: "web-dev",
      title: "Web Development",
      icon: <Globe className="h-6 w-6" />,
      description: "Learn to build modern, responsive websites and web applications using the latest technologies.",
      duration: "12 weeks",
      technologies: ["HTML/CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"],
      projects: ["E-commerce platform", "Social media dashboard", "Portfolio website"],
    },
    {
      id: "mobile-dev",
      title: "Mobile App Development",
      icon: <Smartphone className="h-6 w-6" />,
      description: "Create native and cross-platform mobile applications for iOS and Android devices.",
      duration: "14 weeks",
      technologies: ["React Native", "Flutter", "Firebase", "Redux", "GraphQL", "REST APIs"],
      projects: ["Food delivery app", "Fitness tracker", "Chat application"],
    },
    {
      id: "data-science",
      title: "Data Science",
      icon: <Database className="h-6 w-6" />,
      description: "Analyze and interpret complex data to help organizations make better decisions.",
      duration: "16 weeks",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "TensorFlow"],
      projects: ["Predictive analytics model", "Data visualization dashboard", "Recommendation system"],
    },
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      icon: <Cpu className="h-6 w-6" />,
      description: "Build intelligent systems that can learn from data and make predictions or decisions.",
      duration: "16 weeks",
      technologies: ["Python", "TensorFlow", "PyTorch", "Keras", "OpenCV", "Natural Language Processing"],
      projects: ["Image recognition system", "Chatbot", "Predictive model"],
    },
    {
      id: "devops",
      title: "DevOps & Cloud",
      icon: <Layers className="h-6 w-6" />,
      description: "Learn to automate and optimize the software development lifecycle using cloud technologies.",
      duration: "10 weeks",
      technologies: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", "Monitoring tools"],
      projects: ["Automated deployment pipeline", "Microservices architecture", "Cloud infrastructure setup"],
    },
    {
      id: "fullstack",
      title: "Full Stack Development",
      icon: <Code className="h-6 w-6" />,
      description: "Master both frontend and backend development to build complete web applications.",
      duration: "16 weeks",
      technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "GraphQL", "Redux"],
      projects: ["Social network", "Project management tool", "E-learning platform"],
    },
  ]

  return (
    <section id="programs" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-cyan-400">Training</span> Programs
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Choose from our diverse range of free training programs designed to equip you with in-demand skills and
            practical experience through real-world projects.
          </p>
        </div>

        <Tabs defaultValue="web-dev" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8 overflow-x-auto pb-2">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-slate-800/50 p-1">
              {programs.map((program) => (
                <TabsTrigger
                  key={program.id}
                  value={program.id}
                  className={`data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-500 data-[state=active]:text-white`}
                >
                  <div className="flex flex-col items-center">
                    {program.icon}
                    <span className="mt-1 text-sm whitespace-nowrap">{program.title}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {programs.map((program) => (
            <TabsContent key={program.id} value={program.id} className="mt-0">
              <div className="bg-slate-800/30 rounded-2xl p-6 md:p-8 border border-slate-700">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                        {program.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{program.title}</h3>
                    </div>
                    <p className="text-slate-300 mb-6">{program.description}</p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-cyan-400">Program Details</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <span className="bg-slate-700 rounded-full w-2 h-2 mr-3"></span>
                          <span className="text-slate-300">
                            <strong>Duration:</strong> {program.duration}
                          </span>
                        </li>
                        <li className="flex items-center">
                          <span className="bg-slate-700 rounded-full w-2 h-2 mr-3"></span>
                          <span className="text-slate-300">
                            <strong>Format:</strong> Online & In-person sessions
                          </span>
                        </li>
                        <li className="flex items-center">
                          <span className="bg-slate-700 rounded-full w-2 h-2 mr-3"></span>
                          <span className="text-slate-300">
                            <strong>Certificate:</strong> MSME-verified upon completion
                          </span>
                        </li>
                        <li className="flex items-center">
                          <span className="bg-slate-700 rounded-full w-2 h-2 mr-3"></span>
                          <span className="text-slate-300">
                            <strong>Mentorship:</strong> 1-on-1 guidance from industry experts
                          </span>
                        </li>
                      </ul>
                    </div>

                    <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
                      Apply for {program.title}
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-900/80 rounded-xl p-6 border border-slate-700">
                      <h4 className="text-lg font-semibold mb-3 text-cyan-400">Technologies Covered</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.technologies.map((tech, index) => (
                          <span key={index} className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-slate-900/80 rounded-xl p-6 border border-slate-700">
                      <h4 className="text-lg font-semibold mb-3 text-cyan-400">Sample Projects</h4>
                      <ul className="space-y-2">
                        {program.projects.map((project, index) => (
                          <li key={index} className="flex items-start">
                            <div className="bg-cyan-500/20 p-1 rounded mr-3 mt-1">
                              <svg
                                className="h-3 w-3 text-cyan-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-slate-300">{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="md:col-span-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-slate-700">
                      <h4 className="text-lg font-semibold mb-3">What You'll Learn</h4>
                      <p className="text-slate-300 mb-4">
                        Our {program.title} program is designed to take you from beginner to job-ready. You'll build
                        real-world projects, receive personalized feedback, and develop a portfolio that showcases your
                        skills to potential employers.
                      </p>
                      <p className="text-slate-300">
                        Upon completion, you'll receive an MSME-verified certificate and ongoing support for job
                        placement and interview preparation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

