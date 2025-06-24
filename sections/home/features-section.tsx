"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, Clock, Users, Award, HeadphonesIcon, Globe } from "lucide-react"

import { fadeInUp, fadeInRight, staggerContainer } from "@/lib/animations"
import Link from "next/link"

// Configuración de características principales
const features = [
  {
    icon: Shield,
    title: "Confianza Garantizada",
    description:
      "Contamos con años de experiencia guiando a nuestros clientes en procesos internacionales de forma segura y confiable.",
  },
  {
    icon: Clock,
    title: "Procesos Ágiles",
    description:
      "Optimizamos cada paso para que obtengas resultados rápidos sin complicaciones ni demoras innecesarias.",
  },
  {
    icon: Users,
    title: "Atención 100% Personalizada",
    description: "Nos enfocamos en ti. Analizamos tu caso y creamos soluciones hechas a la medida de tus objetivos.",
  },
  {
    icon: Award,
    title: "Resultados Comprobados",
    description:
      "Nuestra trayectoria habla por nosotros: cientos de clientes satisfechos que hoy disfrutan de sus logros internacionales.",
  },
  {
    icon: HeadphonesIcon,
    title: "Soporte Disponible Siempre",
    description:
      "¿Tienes dudas o necesitas ayuda? Estamos disponibles 24/7 para acompañarte en cada etapa del proceso.",
  },
  {
    icon: Globe,
    title: "Comunicación Sin Barreras",
    description:
      "Hablamos tu idioma. Nuestro equipo bilingüe facilita cada paso para que te sientas cómodo y entendido.",
  },
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          {/* Encabezado de sección */}
          <motion.div className="text-center mb-12 sm:mb-16" variants={fadeInUp}>
            <h2 className="font-title text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              ¿Por qué{" "}
              <span className="bg-gradient-to-r from-[#ab2b49] to-[#22194f] bg-clip-text text-transparent">
                Elegirnos?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              No somos una opción más, somos tu aliado. Nuestra combinación de experiencia, atención cercana y
              resultados comprobados nos hace únicos.
            </p>
          </motion.div>

          {/* Grid de características responsivo */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20"
            variants={fadeInRight}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 p-4 sm:p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 group"
                variants={fadeInUp}
                whileHover={{ x: 10 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#ab2b49] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-title text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#ab2b49] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Sección CTA inferior responsiva */}
          <motion.div
            className="text-center bg-gradient-to-r from-[#ab2b49] to-[#22194f] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-white"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h3 className="font-title text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
              ¿Listo para dar el siguiente paso?
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed px-4">
              Únete a quienes ya confiaron en nosotros y lograron lo que buscaban. Hoy puede ser el comienzo de tu nueva
              historia.
            </p>
            <Link href="/agendar-cita">
              <motion.button
                className="bg-white text-[#ab2b49] px-6 sm:px-8 md:px-12 lg:px-16 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base md:text-lg w-full sm:w-auto max-w-sm mx-auto block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Agenda tu Asesoría Gratis
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
