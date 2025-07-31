"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Calculator, Building2, Settings } from "lucide-react"
import WWFCaseStudySection from "./wwf-case-study-section"

interface B2BParams {
  hedefKurumSayisi: number
  hedefCalisanSayisi: number
  ortalamaKisiBasiFiyat: number
  togGelirOrani: number
}

const defaultB2B: B2BParams = {
  hedefKurumSayisi: 10,
  hedefCalisanSayisi: 2000,
  ortalamaKisiBasiFiyat: 2500,
  togGelirOrani: 12.5,
}

export default function TOGCalculator() {
  const [b2bParams, setB2BParams] = useState<B2BParams>(defaultB2B)
  const [showB2BSettings, setShowB2BSettings] = useState(false)

  // Calculations
  const b2bRevenue =
    (b2bParams.hedefKurumSayisi *
      b2bParams.hedefCalisanSayisi *
      b2bParams.ortalamaKisiBasiFiyat *
      b2bParams.togGelirOrani) /
    100

  return (
    <section
      data-section="calculator"
      className="w-full py-16 lg:py-24 bg-gradient-to-br from-red-50 via-blue-50 to-orange-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 space-y-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-100 via-blue-100 to-orange-100 text-red-800 px-6 py-3 rounded-full text-sm font-semibold border border-red-200">
            <Calculator className="w-5 h-5" />
            <span>TOG Gelir Hesaplayıcısı</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            <span className="text-red-600">Potansiyel Gelir</span> ve{" "}
            <span className="text-blue-600">Gençlik Etkisi</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">İş modelimizin TOG'a sağlayacağı geliri hesaplayın</p>
        </div>

        {/* Revenue Summary Card */}
        <div className="flex justify-center mb-12">
          <Card className="bg-gradient-to-br from-red-50 via-blue-50 to-orange-50 border-2 border-red-200 max-w-md w-full">
            <CardContent className="p-8 text-center">
              <Building2 className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Toplam TOG Geliri</h3>
              <p className="text-4xl font-bold text-red-600 mb-2">₺{b2bRevenue.toLocaleString("tr-TR")}</p>
              <p className="text-sm text-gray-600">Kurumsal satışlardan yıllık lisans geliri</p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          {/* B2B Parameters */}
          <Card className="border-2 border-red-200">
            <CardHeader className="bg-gradient-to-r from-red-50 via-blue-50 to-orange-50">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-red-600" />
                  B2B Model Parametreleri
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowB2BSettings(!showB2BSettings)}
                  className="border-red-200 text-red-600 hover:bg-red-50"
                >
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              {showB2BSettings ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="hedefKurum">Hedef Kurum Sayısı</Label>
                      <Input
                        id="hedefKurum"
                        type="number"
                        value={b2bParams.hedefKurumSayisi}
                        onChange={(e) => setB2BParams({ ...b2bParams, hedefKurumSayisi: Number(e.target.value) })}
                        onFocus={(e) => e.target.select()}
                      />
                    </div>
                    <div>
                      <Label htmlFor="hedefCalisan">Ortalama Çalışan Sayısı</Label>
                      <Input
                        id="hedefCalisan"
                        type="number"
                        value={b2bParams.hedefCalisanSayisi}
                        onChange={(e) => setB2BParams({ ...b2bParams, hedefCalisanSayisi: Number(e.target.value) })}
                        onFocus={(e) => e.target.select()}
                      />
                    </div>
                    <div>
                      <Label htmlFor="ortKisiBasiFiyat">Ortalama Kişi Başı Fiyat (₺)</Label>
                      <Input
                        id="ortKisiBasiFiyat"
                        type="number"
                        value={b2bParams.ortalamaKisiBasiFiyat}
                        onChange={(e) => setB2BParams({ ...b2bParams, ortalamaKisiBasiFiyat: Number(e.target.value) })}
                        onFocus={(e) => e.target.select()}
                      />
                    </div>
                    <div>
                      <Label htmlFor="togGelirOrani">TOG Gelir Oranı (%)</Label>
                      <Input
                        id="togGelirOrani"
                        type="number"
                        step="0.1"
                        value={b2bParams.togGelirOrani}
                        onChange={(e) => setB2BParams({ ...b2bParams, togGelirOrani: Number(e.target.value) })}
                        onFocus={(e) => e.target.select()}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Hedef Kurum:</span>
                    <span className="font-semibold">{b2bParams.hedefKurumSayisi}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ortalama Çalışan:</span>
                    <span className="font-semibold">{b2bParams.hedefCalisanSayisi.toLocaleString("tr-TR")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Kişi Başı Fiyat:</span>
                    <span className="font-semibold">₺{b2bParams.ortalamaKisiBasiFiyat.toLocaleString("tr-TR")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">TOG Gelir Oranı:</span>
                    <span className="font-semibold">%{b2bParams.togGelirOrani}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>B2B Toplam Gelir:</span>
                    <span className="text-red-600">₺{b2bRevenue.toLocaleString("tr-TR")}</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Programs and Projects */}
        <Card className="bg-gradient-to-r from-gray-900 to-gray-800 text-white mb-8">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Bu Gelirle Desteklenebilecek Gençlik Programları ve Projeleri
              </h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                TOG'un gençlik ve sosyal sorumluluk alanındaki köklü programları, bu gelir modeliyle daha geniş
                kitlelere ulaşabilir
              </p>
            </div>

            {/* Education Programs Section */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-yellow-400 mb-4 text-center">📚 Eğitim Programları</h4>
              <p className="text-gray-300 text-sm text-center mb-6 max-w-4xl mx-auto">
                Formel olmayan eğitim teknikleri ve akran eğitimi metodolojisi ile gençlerin yaşıtlarından öğrenmelerini
                destekleyen programlar
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {[
                  {
                    name: "Anahtar Eğitimleri",
                    desc: "Temel sosyal sorumluluk bilinci geliştirme eğitimleri",
                    color: "#c72b33",
                  },
                  {
                    name: "Çocuklarla Hak Temelli Çalışma",
                    desc: "Çocuk hakları konusunda farkındalık ve uygulama eğitimleri",
                    color: "#4a90d9",
                  },
                  {
                    name: "Toplumsal Cinsiyet Eşitliği",
                    desc: "Cinsiyet eşitliği bilinci geliştirme programları",
                    color: "#f3b138",
                  },
                  {
                    name: "Ekolojik Okuryazarlık",
                    desc: "Doğal olarak Genciz projesi kapsamında çevre bilinci eğitimleri",
                    color: "#868c3c",
                  },
                  {
                    name: "İnsan Hakları Eğitimleri",
                    desc: "Temel insan hakları konusunda bilinçlendirme programları",
                    color: "#c72b33",
                  },
                  {
                    name: "Eğitsel Kutu Oyunları",
                    desc: "Oyunlaştırılmış öğrenme metodolojileri ile eğitim programları",
                    color: "#4a90d9",
                  },
                ].map((program, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 h-full flex flex-col"
                  >
                    <div
                      className="w-3 h-3 rounded-full mb-3 flex-shrink-0"
                      style={{ backgroundColor: program.color }}
                    ></div>
                    <h5 className="font-bold text-white mb-2 text-sm">{program.name}</h5>
                    <p className="text-xs text-gray-300 leading-relaxed flex-grow">{program.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Field Projects Section */}
            <div>
              <h4 className="text-xl font-bold text-green-400 mb-4 text-center">🌍 Saha Projeleri</h4>
              <p className="text-gray-300 text-sm text-center mb-6 max-w-4xl mx-auto">
                Gençlerin çocuk haklarından kültür sanata, ekolojiden sağlığa kadar birçok temada hayata geçirdiği
                sosyal sorumluluk projeleri
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    name: "Ekoloji Projeleri",
                    desc: "Çevre koruma ve sürdürülebilirlik odaklı projeler",
                    color: "#22c55e",
                  },
                  {
                    name: "Çocuk Çalışmaları",
                    desc: "Çocuk hakları ve refahı için gerçekleştirilen projeler",
                    color: "#3b82f6",
                  },
                  {
                    name: "Sokak Hayvanları",
                    desc: "Hayvan hakları ve sokak hayvanları koruma projeleri",
                    color: "#f59e0b",
                  },
                  {
                    name: "Eğitim Projeleri",
                    desc: "Eğitim erişimi ve kalitesini artıran projeler",
                    color: "#8b5cf6",
                  },
                  {
                    name: "Toplumsal Cinsiyet Eşitliği",
                    desc: "Cinsiyet eşitliği için farkındalık projeleri",
                    color: "#ec4899",
                  },
                  {
                    name: "Toplumsal Dayanışma",
                    desc: "Sosyal uyum ve dayanışmayı güçlendiren projeler",
                    color: "#06b6d4",
                  },
                  {
                    name: "Kültür & Sanat",
                    desc: "Kültürel miras ve sanat erişimi projeleri",
                    color: "#f97316",
                  },
                  {
                    name: "İnsan Hakları",
                    desc: "İnsan hakları savunuculuğu ve farkındalık projeleri",
                    color: "#ef4444",
                  },
                  {
                    name: "Engellilik",
                    desc: "Engelli bireylerin toplumsal katılımını destekleyen projeler",
                    color: "#84cc16",
                  },
                  {
                    name: "İstihdam",
                    desc: "Gençlerin iş hayatına hazırlanması ve istihdam projeleri",
                    color: "#6366f1",
                  },
                  {
                    name: "Yaşlılık",
                    desc: "Yaşlı bireylerin yaşam kalitesini artıran projeler",
                    color: "#a855f7",
                  },
                  {
                    name: "Sağlık",
                    desc: "Toplum sağlığı ve sağlık erişimi projeleri",
                    color: "#10b981",
                  },
                ].map((program, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 h-full flex flex-col"
                  >
                    <div
                      className="w-3 h-3 rounded-full mb-3 flex-shrink-0"
                      style={{ backgroundColor: program.color }}
                    ></div>
                    <h5 className="font-bold text-white mb-2 text-sm">{program.name}</h5>
                    <p className="text-xs text-gray-300 leading-relaxed flex-grow">{program.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 px-6 py-3 rounded-full">
                <span className="text-yellow-400 font-bold">💡</span>
                <span className="text-white font-medium">
                  Her program, sürdürülebilir gelir modeliyle daha fazla gence ulaşabilir
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
        <WWFCaseStudySection />
      </div>
    </section>
  )
}
