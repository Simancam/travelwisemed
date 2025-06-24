"use client"

import { useState } from "react"
import { format } from "date-fns"
import { es } from "date-fns/locale"

// UI Components
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

// Icons
import { 
  User, 
  MessageSquare, 
  Calendar as CalendarIcon, 
  Clock, 
  ArrowLeft, 
  CheckCircle, 
  Sun, 
  Moon 
} from "lucide-react"

// Types
interface UserInfo {
  name: string
  phone: string
  email: string
  notes: string
}

type Step = "datetime" | "userinfo"

// Constants
const TIME_SLOTS = {
  am: [
    "09:00", "09:30", "10:00", 
    "10:30", "11:00", "11:30"
  ],
  pm: [
    "12:00", "12:30", "14:00", "14:30", 
    "15:00", "15:30", "16:00", "16:30", 
    "17:00", "17:30", "18:00"
  ]
}

const WHATSAPP_NUMBER = "573003568920"

// Main Component
export default function AppointmentBooking() {
  // State Management
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [step, setStep] = useState<Step>("datetime")
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    phone: "",
    email: "",
    notes: "",
  })

  // Event Handlers
  const handleDateTimeConfirm = () => {
    if (selectedDate && selectedTime) {
      setStep("userinfo")
    }
  }

  const handleUserInfoChange = (field: keyof UserInfo, value: string) => {
    setUserInfo((prev) => ({ ...prev, [field]: value }))
  }

  const sendToWhatsApp = () => {
    if (!selectedDate || !selectedTime || !userInfo.name || !userInfo.phone) return

    const formattedDate = format(selectedDate, "EEEE, d 'de' MMMM 'de' yyyy", { locale: es })
    const message = `🗓️ *NUEVA CITA AGENDADA - TravelWiseMed*

📅 *Fecha:* ${formattedDate}
🕐 *Hora:* ${selectedTime}

👤 *Información del Cliente:*
• *Nombre:* ${userInfo.name}
• *Teléfono:* ${userInfo.phone}
• *Email:* ${userInfo.email}
${userInfo.notes ? `• *Notas:* ${userInfo.notes}` : ""}

✅ *Cita confirmada exitosamente*
Nos pondremos en contacto contigo pronto.`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  const resetForm = () => {
    setSelectedDate(undefined)
    setSelectedTime("")
    setStep("datetime")
    setUserInfo({ name: "", phone: "", email: "", notes: "" })
  }

  // Helper Functions
  const isDateDisabled = (date: Date) => date < new Date() || date.getDay() === 0

  const getTimeSlotButtonClass = (time: string) => {
    return selectedTime === time
      ? "bg-gradient-to-r from-[#ab2b49] to-[#22194f] shadow-lg scale-105"
      : "hover:bg-gradient-to-r hover:from-[#ab2b49]/10 hover:to-[#22194f]/10 hover:border-[#ab2b49] hover:scale-105"
  }

  const isFormValid = () => userInfo.name && userInfo.phone

  // Render Methods
  const renderPageHeader = (title: string, subtitle: string) => (
    <div className="text-center mb-16">
      <h1 className="text-5xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
        {title}{" "}
        <span className="bg-gradient-to-r from-[#ab2b49] to-[#22194f] bg-clip-text text-transparent">
          {subtitle}
        </span>
      </h1>
    </div>
  )

  const renderCalendarCard = () => (
    <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm h-full">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
          <CalendarIcon className="w-6 h-6 text-[#ab2b49]" />
          Selecciona una Fecha
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center p-8">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          disabled={isDateDisabled}
          locale={es}
          className="rounded-xl border-2 border-gray-100 p-6 scale-110"
        />
      </CardContent>
    </Card>
  )

  const renderTimeSlotSection = (period: "am" | "pm", icon: React.ReactNode, title: string) => (
    <div>
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="text-lg font-bold text-gray-700">{title}</h3>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {TIME_SLOTS[period].map((time) => (
          <Button
            key={time}
            variant={selectedTime === time ? "default" : "outline"}
            className={`h-12 text-base font-semibold rounded-xl transition-all duration-300 ${getTimeSlotButtonClass(time)}`}
            onClick={() => setSelectedTime(time)}
          >
            {time}
          </Button>
        ))}
      </div>
    </div>
  )

  const renderTimeSlotsCard = () => (
    <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm h-full">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
          <Clock className="w-6 h-6 text-[#ab2b49]" />
          Horarios Disponibles
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        {renderTimeSlotSection("am", <Sun className="w-5 h-5 text-amber-500" />, "Mañana (AM)")}
        {renderTimeSlotSection("pm", <Moon className="w-5 h-5 text-blue-500" />, "Tarde (PM)")}
      </CardContent>
    </Card>
  )

  const renderContinueButton = () => (
    selectedDate && selectedTime && (
      <div className="text-center">
        <Button
          onClick={handleDateTimeConfirm}
          size="lg"
          className="bg-gradient-to-r from-[#ab2b49] to-[#22194f] px-12 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          Continuar con mis Datos
        </Button>
      </div>
    )
  )

  const renderAppointmentSummary = () => (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-8 border border-green-200">
      <h3 className="font-bold text-green-800 mb-4 text-xl flex items-center gap-2">
        <CheckCircle className="w-5 h-5" />
        Cita Seleccionada
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex items-center space-x-3">
          <CalendarIcon className="w-5 h-5 text-green-600" />
          <span className="text-green-700 font-semibold">
            {selectedDate && format(selectedDate, "EEEE, d 'de' MMMM", { locale: es })}
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <Clock className="w-5 h-5 text-green-600" />
          <span className="text-green-700 font-semibold">{selectedTime}</span>
        </div>
      </div>
    </div>
  )

  const renderFormField = (
    id: keyof UserInfo,
    label: string,
    placeholder: string,
    type: "input" | "textarea" = "input",
    required = false
  ) => (
    <div>
      <Label htmlFor={id} className="text-lg font-semibold text-gray-700">
        {label} {required && "*"}
      </Label>
      {type === "input" ? (
        <Input
          id={id}
          type={id === "email" ? "email" : "text"}
          value={userInfo[id]}
          onChange={(e) => handleUserInfoChange(id, e.target.value)}
          placeholder={placeholder}
          className="mt-2 h-14 text-lg rounded-xl border-2 border-gray-200 focus:border-[#ab2b49] transition-colors duration-200"
        />
      ) : (
        <Textarea
          id={id}
          value={userInfo[id]}
          onChange={(e) => handleUserInfoChange(id, e.target.value)}
          placeholder={placeholder}
          className="mt-2 text-lg rounded-xl border-2 border-gray-200 focus:border-[#ab2b49] transition-colors duration-200"
          rows={4}
        />
      )}
    </div>
  )

  const renderUserInfoForm = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {renderFormField("name", "Nombre Completo", "Ingresa tu nombre completo", "input", true)}
        {renderFormField("phone", "Teléfono", "Ingresa tu número de teléfono", "input", true)}
      </div>
      {renderFormField("email", "Correo Electrónico", "Ingresa tu correo electrónico")}
      {renderFormField("notes", "Notas Adicionales", "Cuéntanos sobre tu consulta o necesidades específicas (opcional)", "textarea")}
    </div>
  )

  const renderActionButtons = () => (
    <div className="flex flex-col sm:flex-row gap-4 pt-8">
      <Button
        variant="outline"
        onClick={resetForm}
        className="flex-1 h-14 text-lg font-semibold rounded-xl border-2 border-gray-300 hover:border-gray-400 transition-colors duration-200"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Volver Atrás
      </Button>
      <Button
        onClick={sendToWhatsApp}
        disabled={!isFormValid()}
        className="flex-1 h-14 text-lg font-semibold rounded-xl bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        <MessageSquare className="w-5 h-5 mr-2" />
        Confirmar por WhatsApp
      </Button>
    </div>
  )

  // Main Render Logic
  if (step === "datetime") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderPageHeader("Agenda tu", "Asesoría")}
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>{renderCalendarCard()}</div>
            <div>{renderTimeSlotsCard()}</div>
          </div>

          {renderContinueButton()}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {renderPageHeader("Información", "Personal")}

        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
          <CardContent className="p-8">
            {renderAppointmentSummary()}
            {renderUserInfoForm()}
            {renderActionButtons()}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}