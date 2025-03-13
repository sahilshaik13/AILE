import { CheckCircle, Target, Users, Award, Briefcase, BookOpen } from "lucide-react"

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Practical Learning",
      description: "Learn by building real-world projects using the latest programming languages and frameworks.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Networking Events",
      description: "Get invited to exclusive meetups and social events to connect with industry professionals.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "MSME Certification",
      description: "Receive a verified certificate from our MSME-registered company upon program completion.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Personalized Mentorship",
      description: "Get guidance from experienced mentors who will help you navigate your learning journey.",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Interview Preparation",
      description: "Comprehensive interview prep including mock interviews, resume reviews, and technical assessments.",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Career Support",
      description: "Ongoing career guidance and job placement assistance to help you land your dream role.",
    },
  ]

  return (
    <section id="benefits" className="py-16 md:py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Program <span className="text-cyan-400">Benefits</span>
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Our comprehensive program offers numerous advantages to help you succeed in your tech career journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-slate-800/30 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-colors"
            >
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-slate-300">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 md:p-8 border border-slate-700">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-2xl font-bold">Your Path to Success</h3>
            <p className="text-slate-300 mt-2">
              Our structured approach ensures you gain the skills and confidence needed to succeed in the tech industry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 relative">
              <div className="absolute -top-3 -left-3 bg-gradient-to-r from-cyan-500 to-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <h4 className="text-lg font-semibold mb-2 mt-2">Application</h4>
              <p className="text-slate-300 text-sm">
                Apply to our program and complete a simple assessment to determine your current skill level.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 relative">
              <div className="absolute -top-3 -left-3 bg-gradient-to-r from-cyan-500 to-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <h4 className="text-lg font-semibold mb-2 mt-2">Training</h4>
              <p className="text-slate-300 text-sm">
                Participate in structured learning sessions and build projects with guidance from mentors.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 relative">
              <div className="absolute -top-3 -left-3 bg-gradient-to-r from-cyan-500 to-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <h4 className="text-lg font-semibold mb-2 mt-2">Certification</h4>
              <p className="text-slate-300 text-sm">
                Complete the program and receive your MSME-verified certificate of achievement.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 relative">
              <div className="absolute -top-3 -left-3 bg-gradient-to-r from-cyan-500 to-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <h4 className="text-lg font-semibold mb-2 mt-2">Career Launch</h4>
              <p className="text-slate-300 text-sm">
                Receive interview preparation, job placement assistance, and ongoing career support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

