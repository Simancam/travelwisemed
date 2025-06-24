"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Facebook, Instagram, ArrowRight } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export default function Footer() {
  const services = [
    "Asesoría Documental",
    "Turismo Social",
    "Turismo Médico",
    "Asesoría de Inversión",
    "Coordinación de Viajes",
    "Servicios Financieros",
  ]

  const quickLinks = [
    { label: "Inicio", href: "/" },
    { label: "Sobre Nosotros", href: "#about" },
    { label: "Nuestros Servicios", href: "#services" },
    { label: "¿Por Qué Elegirnos?", href: "#features" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  const contactInfo = [
    {
      icon: Phone,
      title: "(484) 546-3215",
      subtitle: "Llámanos cuando quieras",
      href: "tel:+14845463215",
    },
    {
      icon: Mail,
      title: "Travelwisemed@gmail.com",
      subtitle: "Envíanos un correo",
      href: "mailto:Travelwisemed@gmail.com",
    },
    {
      icon: MapPin,
      title: "Colombia & EE.UU.",
      subtitle: "Zonas de cobertura",
      href: "#",
    },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Sección principal del footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12">
            {/* Información de la Empresa - Ocupa más espacio en móvil */}
            <motion.div variants={fadeInUp} className="md:col-span-2 xl:col-span-1">
              <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                <span className="font-company-name text-xl sm:text-2xl lg:text-3xl font-bold">TravelWiseMed</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base lg:text-lg">
                Tu aliado confiable en servicios de asesoría internacional. Unimos Colombia y EE.UU. para ayudarte en
                viajes, inversiones y turismo médico con respaldo experto.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-[#ab2b49] hover:to-[#22194f] transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Servicios */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-white">Nuestros Servicios</h3>
              <ul className="space-y-2 sm:space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#ab2b49] transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base group hover:translate-x-1"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      <span>{service}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Enlaces Rápidos */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-white">Enlaces Rápidos</h3>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-[#ab2b49] transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base group hover:translate-x-1"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Información de Contacto */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-white">Contáctanos</h3>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    className="flex items-start space-x-3 group cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#ab2b49] to-[#22194f] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <contact.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-white font-medium text-sm sm:text-base lg:text-lg break-words group-hover:text-[#ab2b49] transition-colors duration-300">
                        {contact.title}
                      </p>
                      <p className="text-gray-400 text-xs sm:text-sm">{contact.subtitle}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Barra Inferior */}
          <motion.div
            className="border-t border-gray-700 mt-12 sm:mt-16 pt-6 sm:pt-8"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-gray-400 text-xs sm:text-sm lg:text-base text-center sm:text-left">
                © 2025 TravelWiseMed. Todos los derechos reservados.
              </p>
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm lg:text-base">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline">
                  Política de Privacidad
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline">
                  Términos y Condiciones
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
