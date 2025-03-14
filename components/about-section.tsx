import { GraduationCap, Award, Users, Calendar } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-cyan-400">AppIgnite</span> Learning
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto">
            We are an MSME-registered enterprise dedicated to empowering students with practical skills through free
            training and internship programs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-colors">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">MSME Registered</h3>
            <p className="text-slate-300">
              Officially registered under the Ministry of Micro, Small & Medium Enterprises, ensuring credibility and
              quality.
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-colors">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Verified Certification</h3>
            <p className="text-slate-300">
              Receive industry-recognized certificates upon program completion, verified by our MSME registration.
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-colors">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Free Mentorship</h3>
            <p className="text-slate-300">
              "Of the students, by the students, for the students" is our tagline.
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-colors">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Regular Events</h3>
            <p className="text-slate-300">
              Participate in tech meetups, workshops, and networking events to expand your professional connections.
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-16 bg-slate-800/30 rounded-2xl p-6 md:p-8 border border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-slate-300 mb-6">
                At AppIgnite Learning, we believe that quality tech education should be accessible to everyone. Our
                mission is to bridge the gap between theoretical knowledge and practical industry requirements by
                providing hands-on training, real-world projects, and mentorship completely free of charge.
              </p>
              <p className="text-slate-300">
                We are committed to nurturing the next generation of tech professionals by equipping them with the
                skills, confidence, and connections needed to thrive in today's competitive job market.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl border border-slate-700">
              <h4 className="text-xl font-semibold mb-4 text-cyan-400">Why Choose AppIgnite?</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-cyan-500/20 p-1 rounded mr-3 mt-1">
                    <svg className="h-4 w-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-300">Free, comprehensive training programs</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-cyan-500/20 p-1 rounded mr-3 mt-1">
                    <svg className="h-4 w-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-300">MSME-verified certification</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-cyan-500/20 p-1 rounded mr-3 mt-1">
                    <svg className="h-4 w-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-300">Hands-on project experience</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-cyan-500/20 p-1 rounded mr-3 mt-1">
                    <svg className="h-4 w-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-300">Interview preparation and career guidance</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-cyan-500/20 p-1 rounded mr-3 mt-1">
                    <svg className="h-4 w-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-300">Networking opportunities with industry professionals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

