"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, X, Menu, Send } from "lucide-react"

export default function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    employeeCount: "",
    budget: "",
  })

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You can add form submission logic here
    alert("Form başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.")
    setIsModalOpen(false)
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      employeeCount: "",
      budget: "",
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-white shadow-sm">
                  <img src="/images/tog-logo.png" alt="TOG Logo" className="w-full h-full object-contain" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-900 text-lg">TOG</span>
                  <span className="text-gray-400">×</span>
                  <span className="font-semibold text-gray-700">Reflect Studio</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#business-model"
                className="text-gray-600 hover:text-red-600 font-medium transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault()
                  const section = document.querySelector('[data-section="business-model"]')
                  section?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                İş Modeli
              </a>
              <a
                href="#calculator"
                className="text-gray-600 hover:text-red-600 font-medium transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault()
                  const section = document.querySelector('[data-section="calculator"]')
                  section?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Hesaplayıcı
              </a>
              <a
                href="#products"
                className="text-gray-600 hover:text-red-600 font-medium transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault()
                  const section = document.querySelector('[data-section="products"]')
                  section?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Ürünler
              </a>
              <a
                href="#timeline"
                className="text-gray-600 hover:text-red-600 font-medium transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault()
                  const section = document.querySelector('[data-section="timeline"]')
                  section?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Timeline
              </a>
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* AÇEV Corporate Products Button */}
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <Building2 className="w-4 h-4" />
                <span className="hidden sm:inline">TOG Kurumsal Ürünler</span>
                <span className="sm:hidden">Kurumsal</span>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="#business-model"
                  className="block px-3 py-2 text-gray-600 hover:text-red-600 font-medium transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault()
                    const section = document.querySelector('[data-section="business-model"]')
                    section?.scrollIntoView({ behavior: "smooth" })
                    setIsMobileMenuOpen(false)
                  }}
                >
                  İş Modeli
                </a>
                <a
                  href="#calculator"
                  className="block px-3 py-2 text-gray-600 hover:text-red-600 font-medium transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault()
                    const section = document.querySelector('[data-section="calculator"]')
                    section?.scrollIntoView({ behavior: "smooth" })
                    setIsMobileMenuOpen(false)
                  }}
                >
                  Hesaplayıcı
                </a>
                <a
                  href="#products"
                  className="block px-3 py-2 text-gray-600 hover:text-red-600 font-medium transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault()
                    const section = document.querySelector('[data-section="products"]')
                    section?.scrollIntoView({ behavior: "smooth" })
                    setIsMobileMenuOpen(false)
                  }}
                >
                  Ürünler
                </a>
                <a
                  href="#timeline"
                  className="block px-3 py-2 text-gray-600 hover:text-red-600 font-medium transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault()
                    const section = document.querySelector('[data-section="timeline"]')
                    section?.scrollIntoView({ behavior: "smooth" })
                    setIsMobileMenuOpen(false)
                  }}
                >
                  Timeline
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Modal - B2B Only */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
          <div className="relative">
            {/* Header */}
            <DialogHeader className="p-6 pb-4 bg-gradient-to-r from-red-50 via-blue-50 to-orange-50 border-b border-red-100">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <DialogTitle className="text-2xl font-bold text-gray-900 leading-tight">
                    TOG Kurumsal Ürünler
                  </DialogTitle>
                  <p className="text-lg text-red-700 font-medium">
                    Gençlerin sosyal sorumluluk projelerine destek verin.
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </DialogHeader>

            <div className="p-6">
              <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Kurumsal Avantajlar</h3>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      TOG x Reflect Studio iş birliğinde kurumlara özel avantajlı sipariş imkanları sunuyoruz. Kurumsal
                      hediyelerinizle TOG'a destek olun.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Özel indirim oranları</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Kişiye özel tasarım seçenekleri</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Hızlı teslimat garantisi</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Özel ambalaj seçenekleri</span>
                      </div>
                    </div>

                    {/* Form */}
                    <div className="space-y-6">
                      <div className="text-center space-y-2">
                        <h3 className="text-xl font-bold text-gray-900">Kurumsal Sipariş Formu</h3>
                        <p className="text-gray-600">Bilgilerinizi doldurun, size özel teklifimizi hazırlayalım.</p>
                      </div>

                      <form onSubmit={handleFormSubmit} className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                              İsim Soyisim *
                            </Label>
                            <Input
                              id="name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => handleInputChange("name", e.target.value)}
                              className="mt-1"
                              placeholder="Adınız ve soyadınız"
                            />
                          </div>
                          <div>
                            <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                              Kurum Adı *
                            </Label>
                            <Input
                              id="company"
                              type="text"
                              required
                              value={formData.company}
                              onChange={(e) => handleInputChange("company", e.target.value)}
                              className="mt-1"
                              placeholder="Şirket/kurum adı"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                              E-posta *
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => handleInputChange("email", e.target.value)}
                              className="mt-1"
                              placeholder="ornek@sirket.com"
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                              Telefon *
                            </Label>
                            <Input
                              id="phone"
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => handleInputChange("phone", e.target.value)}
                              className="mt-1"
                              placeholder="+90 5XX XXX XX XX"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="employeeCount" className="text-sm font-medium text-gray-700">
                              Çalışan Sayısı *
                            </Label>
                            <Input
                              id="employeeCount"
                              type="number"
                              required
                              value={formData.employeeCount}
                              onChange={(e) => handleInputChange("employeeCount", e.target.value)}
                              className="mt-1"
                              placeholder="Örn: 50"
                            />
                          </div>
                          <div>
                            <Label htmlFor="budget" className="text-sm font-medium text-gray-700">
                              Tahmini Toplam Satın Alım Bütçesi
                            </Label>
                            <Input
                              id="budget"
                              type="text"
                              value={formData.budget}
                              onChange={(e) => handleInputChange("budget", e.target.value)}
                              className="mt-1"
                              placeholder="Örn: ₺50.000 (opsiyonel)"
                            />
                          </div>
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <Send className="w-4 h-4" />
                          Formu Gönder
                        </Button>
                      </form>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
