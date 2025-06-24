"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "@/lib/animations";

// Configuración de características
const features = [
  {
    title: "Asesoría Experta:",
    description: "Nuestro equipo conoce a profundidad los sistemas migratorios, financieros y de salud en Colombia y EE.UU. para brindarte orientación clara y precisa."
  },
  {
    title: "Atención Personalizada:",
    description: "Nos adaptamos a ti. Ya sea que viajes por placer, negocio o salud, diseñamos soluciones a tu medida."
  },
  {
    title: "Acompañamiento Completo:",
    description: "Te apoyamos en cada paso: desde la documentación inicial hasta el seguimiento después de llegar a tu destino."
  }
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-30 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
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
              Sobre{" "}
              <span className="bg-gradient-to-r from-[#ab2b49] to-[#22194f] bg-clip-text text-transparent">
                Nosotros
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Conectamos Colombia y Estados Unidos a través de servicios de
              asesoría diseñados para viajeros, inversionistas y personas que
              buscan atención médica en el exterior.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Sección de contenido */}
            <motion.div variants={fadeInLeft}>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Tu Aliado de Confianza en Asesoría Internacional
                </h3>

                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-[#ab2b49] rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-600 leading-relaxed">
                        <strong className="text-gray-900">
                          {feature.title}
                        </strong>{" "}
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sección de imagen */}
            <motion.div variants={fadeInRight}>
              <div className="relative w-full h-96">
                <Image
                  src="/travel2.svg"
                  alt="Imagen SVG"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}