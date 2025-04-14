import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import MobileMenu from "@/components/mobile-menu"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "LUNAR Lab - Brown University",
  description: "Learning, Understanding, Networking, Algorithms, and Reasoning Lab at Brown University",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <header className="bg-white shadow-sm sticky top-0 z-10">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center py-4">
                <div className="flex items-center">
                  <a href="/" className="text-2xl font-bold text-purple-900">
                    LUNAR Lab
                  </a>
                </div>
                <nav className="hidden md:flex space-x-8">
                  <a href="#join-us" className="text-gray-700 hover:text-purple-900 transition">
                    Join Us
                  </a>
                  <a href="#about" className="text-gray-700 hover:text-purple-900 transition">
                    About
                  </a>
                  <a href="#videos" className="text-gray-700 hover:text-purple-900 transition">
                    Videos
                  </a>
                  <a href="#publications" className="text-gray-700 hover:text-purple-900 transition">
                    Publications
                  </a>
                  <a href="#team" className="text-gray-700 hover:text-purple-900 transition">
                    Team
                  </a>
                  <a href="#contact" className="text-gray-700 hover:text-purple-900 transition">
                    Contact
                  </a>
                </nav>
                <MobileMenu />
              </div>
            </div>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'