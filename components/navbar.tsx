"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Code, Zap } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "hero" },
    { name: "About", href: "about" },
    { name: "Programs", href: "programs" },
    { name: "Benefits", href: "benefits" },
    { name: "Contact", href: "contact" },
  ];

  const handleScroll = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-lg">
          <img src="/logo/appignite logo.png" alt="Logo" className="h-12 w-12" />
        </div>
          <span className="font-bold text-xl tracking-tight">
            <span className="text-cyan-400">App</span>
            <span className="text-white">Ignite</span>
          </span>
        </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                className="text-slate-300 hover:text-white transition-colors font-medium"
                onClick={() => handleScroll(link.href)}
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="hidden md:block z-10">
          <Link href="https://forms.office.com/r/k5qyftFgKa" className="w-full">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
              Apply Now <Zap className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden z-10">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-900 text-white border-slate-800">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-lg">
                    <img src="/path-to-your-logo.png" alt="Logo" className="h-6 w-6" />
                  </div>
                  <span className="font-bold text-xl tracking-tight">
                    <span className="text-cyan-400">App</span>
                    <span className="text-white">Ignite</span>
                  </span>
                </div>
                </div>
                <nav className="flex flex-col space-y-6">
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      className="text-slate-300 hover:text-white transition-colors text-lg font-medium"
                      onClick={() => {
                        handleScroll(link.href);
                        setIsOpen(false); // Close the mobile menu
                      }}
                    >
                      {link.name}
                    </button>
                  ))}
                </nav>
                <div className="mt-auto pt-8">
                  <Link href="https://forms.office.com/r/k5qyftFgKa" className="w-full">
                    <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
                      Apply Now <Zap className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}