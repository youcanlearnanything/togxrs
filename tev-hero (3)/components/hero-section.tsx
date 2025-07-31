"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Rocket, BarChart3, Building2 } from "lucide-react"
import BusinessModelSection from "./business-model-section"
import ACEVCalculator from "./acev-calculator"
import ProductCollectionSection from "./product-collection-section"
import TimelineSection from "./timeline-section"
import Navigation from "./navigation"

export default function HeroSection() {
  return (
    <>
      <Navigation />
      <section className="w-full min-h-screen flex items-center py-4 lg:py-8 pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 via-blue-50 to-red-50 text-orange-700 px-4 py-2.5 rounded-full text-sm font-medium border border-orange-200">
                <span className="text-base">🚀</span>
                <span className="font-semibold">Türkiye'nin En Yenilikçi ve En Sürdürülebilir Merch Partneri</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-tight">
                  TOG'un gençlik vizyonu için
                  <br />
                  <span className="text-red-600 relative">
                    stratejik ortaklık
                    <div className="absolute -bottom-1 left-0 w-full h-1 bg-red-200 rounded-full"></div>
                  </span>{" "}
                  başlıyor.
                </h1>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxe max-w-2xl">
                  6 yıldır WWF-Türkiye ile sürdürdüğümüz başarılı ortaklığımızdan edindiğimiz deneyimi, TOG'un gençlik
                  ve sosyal sorumluluk misyonuna taşıyoruz. Kanıtlanmış başarı hikayemiz, sürdürülebilir iş modelimiz ve
                  profesyonel altyapımızla Türkiye'nin gençlik alanındaki öncü vakfına değer katmaya hazırız.
                </p>
              </div>

              {/* Feature Points */}
              <div className="grid gap-3 lg:gap-4">
                {[
                  {
                    icon: "⭐",
                    color: "yellow",
                    title: "Üst Düzey Müşteri Memnuniyeti:",
                    desc: "3M+ üretilen ürün, 4.97/5 müşteri memnuniyet puanı",
                  },
                  {
                    icon: "🏢",
                    color: "blue",
                    title: "Kurumsal Partner Deneyimi:",
                    desc: "Spotify, Google, Youtube, Vodafone, Allianz, Mercedes Benz çalıştığımız 500+ kurumdan bazıları",
                  },
                  {
                    icon: "🍃",
                    color: "green",
                    title: "Türkiye'nin İlk B-Corp Merch Partneri:",
                    desc: "Doğaya saygılı materyaller, adil ticari şartlarda üretim",
                  },
                  {
                    icon: "❤️",
                    color: "purple",
                    title: "Sivil Toplum Case Study:",
                    desc: "WWF-Türkiye işbirliği ile 6 yılda $2.5M kaynak aktarımı - sektörün örnek projesi",
                  },
                  {
                    icon: "💎",
                    color: "orange",
                    title: "Tam Operasyon Desteği:",
                    desc: "Tüm ürün üretim ve satış süreçlerinden sorumlu - hem marketing hem kaynak geliştirme ekibiniz",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div
                      className={`w-7 h-7 rounded-full bg-${item.color}-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200`}
                    >
                      <span className="text-xs">{item.icon}</span>
                    </div>
                    <div className="flex-1">
                      <span className="font-semibold text-gray-900 text-sm">{item.title}</span>
                      <span className="text-gray-600 ml-1 text-sm">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons - TOG Corporate Style */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  {/* First row - 2 primary buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      {
                        icon: Rocket,
                        title: "İş Modelini İncele",
                        desc: "Detaylı iş modeli açıklaması",
                        onClick: () => {
                          const businessModelSection = document.querySelector('[data-section="business-model"]')
                          businessModelSection?.scrollIntoView({ behavior: "smooth" })
                        },
                        primary: true,
                      },
                      {
                        icon: BarChart3,
                        title: "Gelir Hesapla",
                        desc: "Potansiyel TOG gelirini hesaplayın",
                        onClick: () => {
                          const calculatorSection = document.querySelector('[data-section="calculator"]')
                          calculatorSection?.scrollIntoView({ behavior: "smooth" })
                        },
                        primary: true,
                      },
                    ].map((button, index) => (
                      <Button
                        key={index}
                        variant={button.primary ? "default" : "outline"}
                        onClick={button.onClick}
                        className={`h-auto p-4 rounded-xl transition-all duration-300 group ${
                          button.primary
                            ? "bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl border-0"
                            : "border-2 border-red-200 hover:border-red-400 hover:bg-red-50 bg-white text-red-700"
                        }`}
                      >
                        <div className="flex items-center gap-3 w-full">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                              button.primary
                                ? "bg-white/20 group-hover:scale-110"
                                : "bg-red-100 group-hover:bg-red-200 transition-colors"
                            }`}
                          >
                            <button.icon
                              className={`w-5 h-5 ${
                                button.primary
                                  ? "text-white"
                                  : "text-red-600 group-hover:text-red-700 transition-colors"
                              }`}
                            />
                          </div>
                          <div className="text-left flex-1">
                            <div className={`font-bold text-sm ${button.primary ? "text-white" : "text-red-800"}`}>
                              {button.title}
                            </div>
                            <div
                              className={`text-xs leading-tight ${button.primary ? "text-red-100" : "text-red-600"}`}
                            >
                              {button.desc}
                            </div>
                          </div>
                        </div>
                      </Button>
                    ))}
                  </div>

                  {/* Second row - 1 secondary button */}
                  <Button
                    variant="outline"
                    onClick={() => window.open("https://merch.reflectstudio.com/", "_blank")}
                    className="h-auto p-4 rounded-xl transition-all duration-300 group border-2 border-red-200 hover:border-red-400 hover:bg-red-50 bg-white text-red-700"
                  >
                    <div className="flex items-center gap-3 w-full">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 bg-red-100 group-hover:bg-red-200 transition-colors">
                        <Building2 className="w-5 h-5 text-red-600 group-hover:text-red-700 transition-colors" />
                      </div>
                      <div className="text-left flex-1">
                        <div className="font-bold text-sm text-red-800">B2B Sitesini İncele</div>
                        <div className="text-xs leading-tight text-red-600">500+ kurumsal proje detayları</div>
                      </div>
                    </div>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Side Image - Moved Higher */}
            <div className="flex items-start justify-center lg:justify-end order-first lg:order-last lg:pt-0">
              <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-blue-100 to-orange-100 rounded-3xl transform rotate-3 scale-105 opacity-30"></div>
                <div className="relative bg-white rounded-2xl p-4 lg:p-6 shadow-2xl">
                  <Image
                    src="/images/tog-box.png"
                    width={400}
                    height={400}
                    alt="TOG Toplum Gönüllüleri Vakfı Box"
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
                {/* Floating elements for visual interest */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-orange-400 rounded-full opacity-15 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
          <BusinessModelSection />
          <ACEVCalculator />
          <ProductCollectionSection />
          <TimelineSection />
        </div>
      </section>
    </>
  )
}
