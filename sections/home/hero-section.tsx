"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Globe, Heart, Stethoscope } from "lucide-react"

import { Button } from "@/components/ui/button"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import Link from "next/link"

// Configuración de características
const features = [
  {
    Icon: Globe,
    title: "Asesoría de Viajes",
  },
  {
    Icon: Heart,
    title: "Turismo Social",
  },
  {
    Icon: Stethoscope,
    title: "Consultas Médicas",
  },
]

export default function HeroSection() {
  return (
    <section className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Contenido principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-24 relative z-10">
        <motion.div className="max-w-8xl mx-auto" variants={staggerContainer} initial="initial" animate="animate">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Sección de contenido de texto */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              {/* Título principal */}
              <motion.h1
                className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                variants={fadeInUp}
              >
                Viaja con
                <span className="block bg-gradient-to-r from-[#ab2b49] to-[#22194f] bg-clip-text text-transparent">
                  Confianza
                </span>
              </motion.h1>

              {/* Descripción */}
              <motion.p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed" variants={fadeInUp}>
                <strong>Expertos certificados</strong> te acompañan en cada paso. Turismo social, inversiones seguras y
                consultas médicas con <strong>garantía de calidad</strong>
              </motion.p>

              {/* Características principales */}
              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8"
                variants={fadeInUp}
              >
                {features.map(({ Icon, title }, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#ab2b49] rounded-full flex items-center justify-center mb-2">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-600 max-w-[80px] sm:max-w-none leading-tight">
                      {title}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Botón de acción */}
              <motion.div className="flex justify-center lg:justify-start" variants={fadeInUp}>
                <Link href="/agendar-cita">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 hover:border-[#ab2b49] text-gray-700 hover:text-[#ab2b49] px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 bg-white hover:bg-white w-full sm:w-auto"
                  >
                    Solicitar Asesoría
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Sección de imagen */}
            <motion.div className="relative order-1 lg:order-2" variants={fadeInUp}>
              <div className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden">
                <Image
                  src="/travel.svg"
                  alt="Servicios Internacionales"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
