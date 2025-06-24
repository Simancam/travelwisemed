"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Footer() {
  const services = [
    "Asesoría Documental",
    "Turismo Social",
    "Turismo Médico",
    "Asesoría de Inversión",
    "Coordinación de Viajes",
    "Servicios Financieros",
  ];

  const quickLinks = [
    { label: "Inicio", href: "/" },
    { label: "Sobre Nosotros", href: "#about" },
    { label: "Nuestros Servicios", href: "#services" },
    { label: "¿Por Qué Elegirnos?", href: "#features" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Información de la Empresa */}
          <motion.div variants={fadeInUp}>
            <div className="flex items-center space-x-2 mb-6">
              <span className="font-company-name text-2xl font-bold">
                TravelWiseMed
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Tu aliado confiable en servicios de asesoría internacional. Unimos
              Colombia y EE.UU. para ayudarte en viajes, inversiones y turismo
              médico con respaldo experto.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Servicios */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold mb-6">Nuestros Servicios</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#ab2b49] transition-colors duration-300 flex items-center space-x-2"
                  >
                    <div className="w-1 h-1 bg-[#ab2b49] rounded-full"></div>
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Enlaces Rápidos */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#ab2b49] transition-colors duration-300 flex items-center space-x-2"
                  >
                    <div className="w-1 h-1 bg-[#ab2b49] rounded-full"></div>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Información de Contacto */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold mb-6">Información de Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-[#ab2b49] to-[#22194f] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-white font-medium">(484) 546-3215</p>
                  <p className="text-gray-400 text-sm">
                    Llámanos cuando quieras
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-[#ab2b49] to-[#22194f] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-white font-medium">
                    Travelwisemed@gmail.com
                  </p>
                  <p className="text-gray-400 text-sm">Envíanos un correo</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-[#ab2b49] to-[#22194f] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-white font-medium">Colombia & EE.UU.</p>
                  <p className="text-gray-400 text-sm">Zonas de cobertura</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Barra Inferior */}
        <motion.div
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 TravelWiseMed. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Política de Privacidad
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Términos y Condiciones
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
