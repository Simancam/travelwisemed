import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Calendar from "@/sections/appointment-booking"

export default function AgendarCita() {
  return (
    <>
      <Navbar />
      <div className="h-15" />
      <Calendar />
      <Footer />
    </>
  )
}
