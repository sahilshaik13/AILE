import Link from "next/link"
import { Code } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">
                <span className="text-cyan-400">App</span>
                <span className="text-white">Ignite</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-4">
              Empowering students with practical tech skills through free training and internship programs.
            </p>
            <p className="text-slate-500 text-sm">MSME Registration: UDYAM-KA-12345</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#programs" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#programs" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="#programs" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Data Science
                </Link>
              </li>
              <li>
                <Link href="#programs" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link href="#programs" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  DevOps & Cloud
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Student Portal
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Learning Materials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} AppIgnite Learning. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

