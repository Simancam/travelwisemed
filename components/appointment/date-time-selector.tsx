"use client"

import type React from "react"
import { es } from "date-fns/locale"
import { useCalendar } from "@/hooks/use-calendar"

// UI Components
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Icons
import { CalendarIcon, Clock, Sun, Moon } from "lucide-react"

// Constants
const TIME_SLOTS = {
  am: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30"],
  pm: ["12:00", "12:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"],
}

interface DateTimeSelectorProps {
  onConfirm: (date: Date, time: string) => void
}

export function DateTimeSelector({ onConfirm }: DateTimeSelectorProps) {
  const {
    selectedDate,
    selectedTime,
    setSelectedDate,
    setSelectedTime,
    isDateDisabled,
    getTimeSlotButtonClass,
    isSelectionComplete,
  } = useCalendar()

  const handleConfirm = () => {
    if (selectedDate && selectedTime) {
      onConfirm(selectedDate, selectedTime)
    }
  }

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Agenda tu{" "}
            <span className="bg-gradient-to-r from-[#ab2b49] to-[#22194f] bg-clip-text text-transparent">
              Asesoría Médica
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Selecciona la fecha y hora que mejor se adapte a tu horario
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Calendar Card */}
          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm h-full">
            <CardHeader className="text-center pb-6 pt-8">
              <CardTitle className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
                <CalendarIcon className="w-6 h-6 text-[#ab2b49]" />
                Selecciona una Fecha
              </CardTitle>
              <p className="text-gray-600 mt-2">Elige el día de tu cita</p>
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

          {/* Time Slots Card */}
          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm h-full">
            <CardHeader className="text-center pb-6 pt-8">
              <CardTitle className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
                <Clock className="w-6 h-6 text-[#ab2b49]" />
                Horarios Disponibles
              </CardTitle>
              <p className="text-gray-600 mt-2">Selecciona tu horario preferido</p>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {renderTimeSlotSection("am", <Sun className="w-5 h-5 text-amber-500" />, "Mañana (AM)")}
              {renderTimeSlotSection("pm", <Moon className="w-5 h-5 text-blue-500" />, "Tarde (PM)")}
            </CardContent>
          </Card>
        </div>

        {/* Continue Button */}
        {isSelectionComplete() && (
          <div className="text-center">
            <Button
              onClick={handleConfirm}
              size="lg"
              className="bg-gradient-to-r from-[#ab2b49] to-[#22194f] px-12 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Continuar con mis Datos
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
