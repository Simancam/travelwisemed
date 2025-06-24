"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "#about" },
    { name: "Servicios", href: "#services" },
    { name: "Ventajas", href: "#features" },
  ];

  return (
    <nav className="sticky w-full z-20 top-0 start-0 bg-white border-b border-gray-200 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <span className="font-company-name self-center text-2xl font-bold whitespace-nowrap bg-gradient-to-r from-[#ab2b49] to-[#22194f] bg-clip-text text-transparent">
            TravelWiseMed
          </span>
        </Link>

        {/* Button and Mobile Menu Toggle */}
        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <Link href="/agendar-cita" className="hidden md:block">
            <Button className="bg-gradient-to-r from-[#ab2b49] to-[#22194f] text-white font-medium rounded-lg text-sm px-4 py-2 text-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110">
              Agenda Asesoria
            </Button>
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="w-5 h-5 text-[#ab2b49]" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:w-auto md:order-1">
          <ul className="flex space-x-8 font-medium">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`font-bold block py-2 px-3 rounded-sm transition-colors duration-300 ${
                    index === 0
                      ? "text-[#ab2b49]"
                      : "text-gray-900 hover:text-[#ab2b49]"
                  }`}
                  aria-current={index === 0 ? "page" : undefined}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation with Framer Motion */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full md:hidden md:w-auto md:order-1 overflow-hidden"
              id="navbar-menu"
            >
              <motion.ul
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-white shadow-lg"
              >
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block py-2 px-3 rounded-sm transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}

                {/* Phone Number - Only visible on mobile */}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                  className="border-t border-gray-200 pt-4 mt-4"
                >
                  <Link
                    href="/agendar-cita"
                    className="flex items-center space-x-2 py-2 px-3 bg-[#ab2b49] text-white rounded-md hover:bg-[#22194f] transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Phone className="w-4 h-4" />
                    <span className="ml-3">
                      Agenda tu Asesoría
                    </span>
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
