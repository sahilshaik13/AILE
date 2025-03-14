import Link from "next/link"
import { Code } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-lg">
            <img src="/logo/appignite logo.png" alt="Logo" className="h-12 w-12" />
            </div>
            <span className="font-bold text-xl tracking-tight">
              <span className="text-cyan-400">App</span>
              <span className="text-white">Ignite</span>
            </span>
          </div>
            <p className="text-slate-400 mb-4">
              Empowering students with practical tech skills through free training and internship programs.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
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
            <Link href="https://www.linkedin.com/in/mdshaiksahil" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11.75 19h-2.5v-8h2.5v8zm-1.25-9.307c-.828 0-1.5-.674-1.5-1.5s.672-1.5 1.5-1.5c.828 0 1.5.674 1.5 1.5s-.672 1.5-1.5 1.5zm12.25 9.307h-2.5v-4c0-2.22-3-2.032-3 0v4h-2.5v-8h2.5v1.14c1.16-2.144 5-2.31 5 2.048v4.812z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
