"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          <a
            href="#join-us"
            className="text-lg px-4 py-2 hover:bg-gray-100 rounded-md transition"
            onClick={handleLinkClick}
          >
            Join Us
          </a>
          <a
            href="#about"
            className="text-lg px-4 py-2 hover:bg-gray-100 rounded-md transition"
            onClick={handleLinkClick}
          >
            About
          </a>
          <a
            href="#videos"
            className="text-lg px-4 py-2 hover:bg-gray-100 rounded-md transition"
            onClick={handleLinkClick}
          >
            Videos
          </a>
          <a
            href="#publications"
            className="text-lg px-4 py-2 hover:bg-gray-100 rounded-md transition"
            onClick={handleLinkClick}
          >
            Publications
          </a>
          <a
            href="#team"
            className="text-lg px-4 py-2 hover:bg-gray-100 rounded-md transition"
            onClick={handleLinkClick}
          >
            Team
          </a>
          <a
            href="#contact"
            className="text-lg px-4 py-2 hover:bg-gray-100 rounded-md transition"
            onClick={handleLinkClick}
          >
            Contact
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
