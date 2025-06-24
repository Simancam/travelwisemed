"use client"

import { useState } from "react"

interface UserInfo {
  name: string
  phone: string
  email: string
  notes: string
}

export function useContactForm() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    phone: "",
    email: "",
    notes: "",
  })

  const handleUserInfoChange = (field: keyof UserInfo, value: string) => {
    setUserInfo((prev) => ({ ...prev, [field]: value }))
  }

  const isFormValid = () => userInfo.name.trim() && userInfo.phone.trim()

  const resetForm = () => {
    setUserInfo({
      name: "",
      phone: "",
      email: "",
      notes: "",
    })
  }

  return {
    userInfo,
    handleUserInfoChange,
    isFormValid,
    resetForm,
  }
}
