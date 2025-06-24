"use client"

import { useAppointmentBooking } from "@/hooks/use-appointment-booking"
import { DateTimeSelector } from "@/components/appointment/date-time-selector"
import { ContactForm } from "@/components/appointment/contact-form"
import { ConfirmationModal } from "@/components/appointment/confirmation-modal"

export default function AppointmentBooking() {
  const {
    step,
    appointmentData,
    isModalOpen,
    isLoading,
    handleDateTimeConfirm,
    handleContactSubmit,
    handleBack,
    handleModalClose,
  } = useAppointmentBooking()

  return (
    <>
      {step === "datetime" ? (
        <DateTimeSelector onConfirm={handleDateTimeConfirm} />
      ) : (
        appointmentData && (
          <ContactForm
            appointmentData={{ date: appointmentData.date, time: appointmentData.time }}
            onBack={handleBack}
            onSubmit={handleContactSubmit}
          />
        )
      )}

      <ConfirmationModal
        isOpen={isModalOpen}
        isLoading={isLoading}
        appointmentData={appointmentData}
        onClose={handleModalClose}
      />
    </>
  )
}
