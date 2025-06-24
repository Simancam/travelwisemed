"use client"

import { useState } from "react"
import { format } from "date-fns"
import { es } from "date-fns/locale"

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

const WHATSAPP_NUMBER = "14845463215"

export function useAppointmentBooking() {
  const [step, setStep] = useState<"datetime" | "contact">("datetime")
  const [appointmentData, setAppointmentData] = useState<AppointmentData | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleDateTimeConfirm = (date: Date, time: string) => {
    setAppointmentData({
      date,
      time,
      userInfo: { name: "", phone: "", email: "", notes: "" },
    })
    setStep("contact")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleContactSubmit = async (userInfo: UserInfo) => {
    if (!appointmentData) return

    const finalAppointmentData = {
      ...appointmentData,
      userInfo,
    }

    setAppointmentData(finalAppointmentData)
    setIsModalOpen(true)
    setIsLoading(true)

    // Simulate loading time
    setTimeout(() => {
      sendToWhatsApp(finalAppointmentData)
      setIsLoading(false)
    }, 2000)
  }

  const sendToWhatsApp = (data: AppointmentData) => {
    const formattedDate = format(data.date, "EEEE, d 'de' MMMM 'de' yyyy", { locale: es })
    const message = `🗓️ *NUEVA CITA AGENDADA - TravelWiseMed*

📅 *Fecha:* ${formattedDate}
🕐 *Hora:* ${data.time}

👤 *Información del Cliente:*
• *Nombre:* ${data.userInfo.name}
• *Teléfono:* ${data.userInfo.phone}
• *Email:* ${data.userInfo.email || "No proporcionado"}
${data.userInfo.notes ? `• *Notas:* ${data.userInfo.notes}` : ""}

✅ *Cita confirmada exitosamente*
Nos pondremos en contacto contigo pronto.`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  const handleBack = () => {
    setStep("datetime")
    setAppointmentData(null)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    // Reset the form
    setStep("datetime")
    setAppointmentData(null)
  }

  return {
    step,
    appointmentData,
    isModalOpen,
    isLoading,
    handleDateTimeConfirm,
    handleContactSubmit,
    handleBack,
    handleModalClose,
  }
}
