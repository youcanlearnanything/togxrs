"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Quote, TrendingUp, Heart, ExternalLink } from "lucide-react"

export default function WWFCaseStudySection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-br from-red-50 via-blue-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-100 via-blue-100 to-orange-100 text-red-800 px-6 py-3 rounded-full text-sm font-semibold border border-red-200">
            <img src="/images/wwf-logo.png" alt="WWF Logo" className="w-5 h-5" />
            <span>Kanıtlanmış Başarı Hikayesi</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-green-600">WWF-Türkiye</span> ile 6 Yıllık{" "}
              <span className="text-red-600">Başarı Ortaklığı</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              2018'den bu yana süren stratejik ortaklığımız, sivil toplum dünyası için örnek teşkil eden kanıtlanmış
              sonuçlar üretti.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Key Metrics */}
          <div className="lg:col-span-1 space-y-6">
            {/* WWF Logo Card */}
            <Card className="bg-gradient-to-br from-red-50 via-blue-50 to-orange-50 border-red-200 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md p-3">
                  <img src="/images/wwf-logo.png" alt="WWF Logo" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">WWF-Türkiye</h3>
                <p className="text-sm text-red-700 font-medium">Doğal Hayatı Koruma Vakfı</p>
              </CardContent>
            </Card>

            {/* Key Metrics */}
            <div className="space-y-4">
              <Card className="bg-gradient-to-br from-red-600 to-orange-600 text-white shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold mb-2">$2.5M+</div>
                  <div className="text-red-100 font-medium mb-1">Toplam Kaynak Aktarımı</div>
                  <div className="text-sm text-red-200">6 yıllık iş birliği sonucu</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold mb-2">30.000</div>
                  <div className="text-blue-100 font-medium mb-1">Yeni Potansiyel Bağışçı</div>
                  <div className="text-sm text-blue-200">Ürün alım iletişim izni veren müşteri sayısı</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold mb-2">1M+</div>
                  <div className="text-purple-100 font-medium mb-1">Satılan Ürün Adedi</div>
                  <div className="text-sm text-purple-200">B2B + B2C toplam</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Impact Story & Testimonial */}
          <div className="lg:col-span-2 space-y-8">
            {/* Impact Story */}
            <Card className="border-2 border-emerald-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-red-50 via-blue-50 to-orange-50">
                <CardTitle className="flex items-center gap-2 text-red-800">
                  <TrendingUp className="w-6 h-6" />
                  Etki Hikayesi
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {[
                    {
                      number: "1",
                      title: "Marka Bilinirliği Artışı",
                      description:
                        "Her WWF ürünü, doğa koruma mesajını günlük hayata taşıdı. WWF marka bilinirliği Google Trends raporlarına göre 4 katına çıktı.",
                      color: "red",
                    },
                    {
                      number: "2",
                      title: "Bağışçı Dönüşümü",
                      description:
                        "Merch alan müşterilerin önemli bir kısmı düzenli bağışçıya dönüştü. Genç bağışçı oranında kayda değer artış sağlandı.",
                      color: "blue",
                    },
                    {
                      number: "3",
                      title: "Kurumsal Etki",
                      description:
                        "50+ şirket WWF ile sürdürülebilirlik ortaklığı kurdu. B2B satışlar yıllık %180 büyüdü.",
                      color: "purple",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div
                        className={`w-8 h-8 rounded-full bg-${item.color}-100 flex items-center justify-center flex-shrink-0 mt-1`}
                      >
                        <span className={`text-${item.color}-600 font-bold text-sm`}>{item.number}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Testimonial */}
            <Card className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <Quote className="w-8 h-8 text-green-600" />
                  <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed italic">
                    "Reflect Studio ile kurduğumuz ortaklık, sadece gelir yaratmakla kalmadı - doğa koruma bilincini
                    milyonlarca kişiye ulaştırdı. Bu model, tüm sivil toplum kuruluşları için örnek teşkil ediyor.
                    Özellikle genç nesille kurduğumuz bağ ve sürdürülebilir ürünler aracılığıyla yaydığımız farkındalık,
                    WWF'in misyonunu günlük hayata taşımanın en etkili yollarından biri oldu."
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div>
                      <div className="font-bold text-gray-900">Aslı Pasinli</div>
                      <div className="text-sm text-gray-600">2017-2024 WWF-Türkiye Genel Müdürü</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-[#c72b33] via-[#4a90d9] to-[#f3b138] text-white shadow-2xl">
            <CardContent className="p-8 lg:p-12">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-bold">TOG için de Aynı Başarıyı Yaratmaya Hazırız</h3>
                  <p className="text-lg lg:text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
                    WWF ile kanıtladığımız bu model, TOG'un gençlik misyonu için de aynı etkiyi yaratabilir.
                    Deneyimimiz, altyapımız ve vizyonumuzla TOG'a değer katmaya hazırız.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                  <Button
                    className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => window.open("https://reflectstudio.com/collections/wwfmarket", "_blank")}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    WWF Ürünlerini İncele
                  </Button>

                  <Button
                    variant="outline"
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm"
                    onClick={() => {
                      const calculatorSection = document.querySelector('[data-section="calculator"]')
                      calculatorSection?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    TOG İçin Hesapla
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
