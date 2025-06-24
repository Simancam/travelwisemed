"use client"

import type React from "react"

import { format } from "date-fns"
import { es } from "date-fns/locale"
import { useContactForm } from "@/hooks/use-contact-form"

// UI Components
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

// Icons
import { User, MessageSquare, CalendarIcon, Clock, ArrowLeft, CheckCircle, Phone, Mail, FileText } from "lucide-react"

interface UserInfo {
  name: string
  phone: string
  email: string
  notes: string
}

interface ContactFormProps {
  appointmentData: { date: Date; time: string }
  onBack: () => void
  onSubmit: (userInfo: UserInfo) => void
}

export function ContactForm({ appointmentData, onBack, onSubmit }: ContactFormProps) {
  const { userInfo, handleUserInfoChange, isFormValid } = useContactForm()

  const handleSubmit = () => {
    if (isFormValid()) {
      onSubmit(userInfo)
    }
  }

  const renderFormField = (
    id: keyof UserInfo,
    label: string,
    placeholder: string,
    icon: React.ReactNode,
    type: "input" | "textarea" = "input",
    required = false,
  ) => (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-lg font-semibold text-gray-700 flex items-center gap-2">
        {icon}
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      {type === "input" ? (
        <Input
          id={id}
          type={id === "email" ? "email" : "text"}
          value={userInfo[id]}
          onChange={(e) => handleUserInfoChange(id, e.target.value)}
          placeholder={placeholder}
          className="h-14 text-lg rounded-xl border-2 border-gray-200 focus:border-[#ab2b49] transition-colors duration-200"
          required={required}
        />
      ) : (
        <Textarea
          id={id}
          value={userInfo[id]}
          onChange={(e) => handleUserInfoChange(id, e.target.value)}
          placeholder={placeholder}
          className="text-lg rounded-xl border-2 border-gray-200 focus:border-[#ab2b49] transition-colors duration-200"
          rows={4}
        />
      )}
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Información{" "}
            <span className="bg-gradient-to-r from-[#ab2b49] to-[#22194f] bg-clip-text text-transparent">Personal</span>
          </h1>
          <p className="text-xl text-gray-600">Completa tus datos para confirmar la cita</p>
        </div>

        <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
          <CardContent className="p-8">
            {/* Appointment Summary */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-8 border border-green-200">
              <h3 className="font-bold text-green-800 mb-4 text-xl flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Cita Seleccionada
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CalendarIcon className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 font-semibold">
                    {format(appointmentData.date, "EEEE, d 'de' MMMM 'de' yyyy", { locale: es })}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 font-semibold">{appointmentData.time}</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {renderFormField(
                  "name",
                  "Nombre Completo",
                  "Ingresa tu nombre completo",
                  <User className="w-4 h-4" />,
                  "input",
                  true,
                )}
                {renderFormField(
                  "phone",
                  "Teléfono",
                  "Ingresa tu número de teléfono",
                  <Phone className="w-4 h-4" />,
                  "input",
                  true,
                )}
              </div>
              {renderFormField(
                "email",
                "Correo Electrónico",
                "Ingresa tu correo electrónico (opcional)",
                <Mail className="w-4 h-4" />,
              )}
              {renderFormField(
                "notes",
                "Notas Adicionales",
                "Cuéntanos sobre tu consulta o necesidades específicas (opcional)",
                <FileText className="w-4 h-4" />,
                "textarea",
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onBack}
                  className="flex-1 h-14 text-lg font-semibold rounded-xl border-2 border-gray-300 hover:border-gray-400 transition-colors duration-200"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Cambiar Fecha/Hora
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={!isFormValid()}
                  className="flex-1 h-14 text-lg font-semibold rounded-xl bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Confirmar por WhatsApp
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
