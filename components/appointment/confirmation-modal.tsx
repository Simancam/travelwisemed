"use client"

import { format } from "date-fns"
import { es } from "date-fns/locale"

// UI Components
import { Button } from "@/components/ui/button"

// Icons
import { CheckCircle, X, Loader2 } from "lucide-react"

interface UserInfo {
  name: string
  phone: string
  email: string
  notes: string
}

interface AppointmentData {
  date: Date
  time: string
  userInfo: UserInfo
}

interface ConfirmationModalProps {
  isOpen: boolean
  isLoading: boolean
  appointmentData: AppointmentData | null
  onClose: () => void
}

export function ConfirmationModal({ isOpen, isLoading, appointmentData, onClose }: ConfirmationModalProps) {
  if (!appointmentData || !isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">{isLoading ? "Procesando..." : "¡Cita Confirmada!"}</h2>
            {!isLoading && (
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                <X className="w-6 h-6" />
              </button>
            )}
          </div>

          <div className="text-center py-6">
            {isLoading ? (
              <div className="space-y-4">
                <Loader2 className="w-12 h-12 animate-spin text-[#ab2b49] mx-auto" />
                <p className="text-gray-600">Enviando información por WhatsApp...</p>
              </div>
            ) : (
              <div className="space-y-4">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">Tu cita ha sido agendada</h3>
                  <p className="text-gray-600">
                    {format(appointmentData.date, "EEEE, d 'de' MMMM", { locale: es })} a las {appointmentData.time}
                  </p>
                  <p className="text-sm text-gray-500 mt-4">
                    Hemos abierto WhatsApp para confirmar tu cita. Nos pondremos en contacto contigo pronto.
                  </p>
                </div>
              </div>
            )}
          </div>

          {!isLoading && (
            <div className="flex justify-center">
              <Button
                onClick={onClose}
                className="bg-gradient-to-r from-[#ab2b49] to-[#22194f] hover:from-[#ab2b49]/90 hover:to-[#22194f]/90"
              >
                Entendido
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
