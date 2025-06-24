"use client"

import { useState } from "react"

export function useCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState<string>("")

  const isDateDisabled = (date: Date) => date < new Date() || date.getDay() === 0

  const getTimeSlotButtonClass = (time: string) => {
    return selectedTime === time
      ? "bg-gradient-to-r from-[#ab2b49] to-[#22194f] text-white shadow-lg scale-105"
      : "hover:bg-gradient-to-r hover:from-[#ab2b49]/10 hover:to-[#22194f]/10 hover:border-[#ab2b49] hover:scale-105"
  }

  const isSelectionComplete = () => selectedDate && selectedTime

  const resetSelection = () => {
    setSelectedDate(undefined)
    setSelectedTime("")
  }

  return {
    selectedDate,
    selectedTime,
    setSelectedDate,
    setSelectedTime,
    isDateDisabled,
    getTimeSlotButtonClass,
    isSelectionComplete,
    resetSelection,
  }
}
