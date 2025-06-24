"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, Heart, Stethoscope } from "lucide-react";

import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Link from "next/link";

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
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Overlay de fondo */}
      <div className="absolute inset-0 overflow-hidden" />

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-24 relative z-10">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Sección de contenido de texto */}
            <div className="space-y-6">
              {/* Título principal */}
              <motion.h1
                className="font-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                variants={fadeInUp}
              >
                Viaja con
                <span className="block bg-gradient-to-r from-[#ab2b49] to-[#22194f] bg-clip-text text-transparent">
                  Confianza
                </span>
              </motion.h1>

              {/* Descripción */}
              <motion.p
                className="text-lg md:text-xl text-gray-600 leading-relaxed"
                variants={fadeInUp}
              >
                <strong>Expertos certificados</strong> te acompañan en cada
                paso. Turismo social, inversiones seguras y consultas médicas
                con <strong>garantía de calidad</strong>
              </motion.p>

              {/* Características principales */}
              <motion.div
                className="flex flex-wrap gap-6 lg:gap-8"
                variants={fadeInUp}
              >
                {features.map(({ Icon, title }, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-[#ab2b49] rounded-full flex items-center justify-center mb-2">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-600 text-center">
                      {title}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Botón de acción */}
              <motion.div className="sm:flex-row gap-4" variants={fadeInUp}>
                <Link href="/agendar-cita">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 hover:border-[#ab2b49] text-gray-700 hover:text-[#ab2b49] px-30 py-6 text-lg font-semibold rounded-full transition-all duration-300 bg-white hover:bg-white"
                  >
                    Solicitar Asesoría
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Sección de imagen */}
            <motion.div
              className="relative order-first lg:order-last"
              variants={fadeInUp}
            >
              <div className="relative w-full h-80 lg:h-96 overflow-hidden">
                <Image
                  src="/travel.svg"
                  alt="Servicios Internacionales"
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
