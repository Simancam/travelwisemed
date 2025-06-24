"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  FileText,
  MapPin,
  Stethoscope,
  Plane,
  Building,
  CreditCard,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

// Configuración de servicios principales
const mainServices = [
  {
    icon: FileText,
    title: "Asesoría en Documentación",
    description: "Te ayudamos con todos los trámites necesarios en Colombia y EE.UU., sin complicaciones.",
    features: [
      "Pasaportes",
      "Creación de LLC para extranjeros",
      "Licencia de conducción",
      "Gestión de visas",
    ],
    color: "from-blue-500 to-purple-600",
  },
  {
    icon: MapPin,
    title: "Turismo Social",
    description: "Te recomendamos destinos y conseguimos vuelos económicos para que viajes sin preocupaciones.",
    features: [
      "Destinos imperdibles",
      "Ofertas en vuelos",
      "Planeación de viaje",
      "Consejos locales",
    ],
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
];

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
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          
          {/* Encabezado de sección */}
          <motion.div 
            className="text-center mb-16" 
            variants={fadeInUp}
          >
            <h2 className="font-title text-4xl md:text-5xl font-bold mb-6">
              Nuestros{" "}
              <span className="bg-gradient-to-r from-[#ab2b49] to-[#22194f] bg-clip-text text-transparent">
                Servicios
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Soluciones integrales pensadas para que tu proceso internacional
              sea simple, rápido y exitoso.
            </p>
          </motion.div>

          {/* Grid de servicios principales */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-16"
            variants={staggerContainer}
          >
            {mainServices.map((service, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                  
                  {/* Encabezado de tarjeta */}
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="font-title text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  {/* Contenido de tarjeta */}
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-2 h-2 bg-[#ab2b49] rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
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
            <h3 className="font-title text-3xl font-bold text-center mb-12 text-gray-900">
              Servicios{" "}
              <span className="bg-gradient-to-r from-[#ab2b49] to-[#22194f] bg-clip-text text-transparent">
                Adicionales
              </span>
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#ab2b49] rounded-lg flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-title font-bold text-gray-900 mb-1">
                          {service.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Imagen de servicios */}
          <motion.div 
            className="mt-16" 
            variants={fadeInUp}
          >
            <div className="w-full h-64 relative">
              <Image
                src="/airplane.svg"
                alt="Imagen de servicios"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
}