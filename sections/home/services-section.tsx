"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { FileText, MapPin, Stethoscope, Plane, Building, CreditCard } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations"

// Configuración de servicios principales
const mainServices = [
  {
    icon: FileText,
    title: "Asesoría en Documentación",
    description: "Te ayudamos con todos los trámites necesarios en Colombia y EE.UU., sin complicaciones.",
    features: ["Pasaportes", "Creación de LLC para extranjeros", "Licencia de conducción", "Gestión de visas"],
    color: "from-blue-500 to-purple-600",
  },
  {
    icon: MapPin,
    title: "Turismo Social",
    description: "Te recomendamos destinos y conseguimos vuelos económicos para que viajes sin preocupaciones.",
    features: ["Destinos imperdibles", "Ofertas en vuelos", "Planeación de viaje", "Consejos locales"],
    color: "from-green-500 to-teal-600",
  },
  {
    icon: Stethoscope,
    title: "Turismo Médico",
    description: "Organizamos tus citas médicas virtuales con especialistas en Colombia de forma rápida y segura.",
    features: [
      "Consultas en línea",
      "Referencias médicas",
      "Planificación de tratamientos",
      "Acompañamiento post-consulta",
    ],
    color: "from-red-500 to-pink-600",
  },
]

// Configuración de servicios adicionales
const additionalServices = [
  {
    icon: Plane,
    title: "Coordinación de Viajes",
    description: "Nos encargamos de planear tu viaje de principio a fin. Tú solo empaca.",
  },
  {
    icon: Building,
    title: "Asesoría en Inversión",
    description: "Te guiamos para invertir en Colombia desde el exterior con total confianza.",
  },
  {
    icon: CreditCard,
    title: "Servicios Financieros",
    description: "Te ayudamos a abrir cuentas, acceder a medios de pago y organizar tu vida financiera.",
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-20 bg-blue-50">
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
              Nuestros{" "}
              <span className="bg-gradient-to-r from-[#ab2b49] to-[#22194f] bg-clip-text text-transparent">
                Servicios
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Soluciones integrales pensadas para que tu proceso internacional sea simple, rápido y exitoso.
            </p>
          </motion.div>

          {/* Grid de servicios principales responsivo */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
            variants={staggerContainer}
          >
            {mainServices.map((service, index) => (
              <motion.div key={index} variants={scaleIn} className="h-full">
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                  {/* Encabezado de tarjeta */}
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${service.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <CardTitle className="font-title text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-sm sm:text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  {/* Contenido de tarjeta */}
                  <CardContent>
                    <ul className="space-y-2 sm:space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#ab2b49] rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Sección de servicios adicionales */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-title text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
              Servicios{" "}
              <span className="bg-gradient-to-r from-[#ab2b49] to-[#22194f] bg-clip-text text-transparent">
                Adicionales
              </span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {additionalServices.map((service, index) => (
                <motion.div key={index} variants={scaleIn} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm h-full">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#ab2b49] rounded-lg flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-title font-bold text-gray-900 mb-1 text-base sm:text-lg">
                          {service.title}
                        </h4>
                        <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Imagen de servicios */}
          <motion.div className="mt-12 sm:mt-16" variants={fadeInUp}>
            <div className="w-full h-48 sm:h-64 relative">
              <Image
                src="/airplane.svg"
                alt="Imagen de servicios"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 60vw"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
