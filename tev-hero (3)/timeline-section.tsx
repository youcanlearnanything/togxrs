"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Target, Building2, FileText, Palette, BarChart3 } from "lucide-react"

interface TimelineItem {
  id: number
  title: string
  date: string
  description: string
  icon: React.ReactNode
  tag: string
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "İş Birliği Sözleşmesi İmzalanması",
    date: "1 Ağustos 2025",
    description: "Yasal çerçevenin belirlenmesi ve resmi ortaklığın başlatılması",
    icon: <FileText className="w-5 h-5" />,
    tag: "Hukuki altyapı ve ortaklık koşulları",
  },
  {
    id: 2,
    title: "Stratejik Planlama Workshop'u",
    date: "5 Ağustos 2025",
    description:
      "Tüm gün sürecek workshop ile kurumsal koleksiyon yaklaşımları, ürün grupları ve B2B stratejilerinin netleştirilmesi",
    icon: <Target className="w-5 h-5" />,
    tag: "Strateji belirleme ve hedef koyma",
  },
  {
    id: 3,
    title: "Kurumsal Satış Toplantıları",
    date: "16 Ağustos 2025",
    description:
      "Yılbaşı paketleri için TOG'un kurumsal destekçilerine ve gençlik alanında çalışan kurumlara toplantı talebi için ulaşılması. Hedef: 100+ kuruma ulaşmak ve B2B satış sürecini başlatmak",
    icon: <Building2 className="w-5 h-5" />,
    tag: "Kurumsal müşteri geliştirme",
  },
  {
    id: 4,
    title: "Kurumsal Koleksiyon Sipariş Yönetimi, Tasarım ve Üretim Süreci",
    date: "Ağustos 2025 - Kasım 2025",
    description:
      "Kurumsal koleksiyonun tasarım sürecinden başlayarak, feedback alınması, finalize edilmesi, üretim planlaması ve resmi lansmanına kadar olan tüm süreçlerin yönetimi",
    icon: <Palette className="w-5 h-5" />,
    tag: "Tasarım, üretim ve lansman süreci",
  },
  {
    id: 5,
    title: "Kurumsal Yılbaşı Paketlerinin Teslimi",
    date: "1 Aralık 2025",
    description: "Kurumsal müşterilere yılbaşı hediye paketlerinin zamanında teslimi ve müşteri memnuniyeti takibi",
    icon: <Building2 className="w-5 h-5" />,
    tag: "Kurumsal teslimat ve memnuniyet",
  },
  {
    id: 6,
    title: "Performans Değerlendirmesi & 2026 Yılı Planlaması",
    date: "Ocak-Şubat 2026",
    description: "Genel satış verilerinin analizi, süreç optimizasyonu ve 2026 yılı planlaması",
    icon: <BarChart3 className="w-5 h-5" />,
    tag: "Analiz ve gelecek planlama",
  },
]

export default function TimelineSection() {
  return (
    <section
      data-section="timeline"
      className="w-full py-16 lg:py-24 bg-gradient-to-br from-red-50 via-blue-50 to-orange-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-100 via-blue-100 to-orange-100 text-red-800 px-6 py-3 rounded-full text-sm font-semibold border border-red-200">
            <Calendar className="w-5 h-5" />
            <span>Timeline & Gelecek Adımlar</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-red-600">Ortaklık Yol Haritası</span> ve{" "}
              <span className="text-blue-600">Zaman Çizelgesi</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              İş birliğimizin başarılı bir şekilde hayata geçirilmesi için planlanan adımlar ve zaman çizelgesi
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-200 via-blue-200 to-orange-200"></div>

          {/* Timeline Items */}
          <div className="space-y-8">
            {timelineData.map((item, index) => {
              return (
                <div key={item.id} className="relative flex items-start gap-8">
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                    >
                      {item.id}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 pb-8">
                    <Card
                      className={`border-red-200 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group`}
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <div
                                className={`w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-700`}
                              >
                                {item.icon}
                              </div>
                              <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-200">
                                {item.title}
                              </h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-3">{item.description}</p>
                            <Badge className={`bg-red-100 text-red-800 hover:bg-red-100 text-red-800`}>
                              {item.tag}
                            </Badge>
                          </div>

                          <div className="flex-shrink-0">
                            <div className="bg-gradient-to-r from-red-50 via-blue-50 to-orange-50 px-4 py-2 rounded-lg border border-red-200">
                              <div className="flex items-center gap-2 text-red-700">
                                <Calendar className="w-4 h-4" />
                                <span className="font-semibold text-sm">{item.date}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
