"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Calculator, TrendingUp, Users, Building2, GraduationCap, Settings } from "lucide-react"
import WWFCaseStudySection from "./wwf-case-study-section"

interface YouthProgramValues {
  spor: number
  sanat: number
  kultur: number
  teknoloji: number
  girisimcilik: number
  egitim: number
  kariyer: number
  sosyalSorumluluk: number
}

interface B2BParams {
  hedefKurumSayisi: number
  hedefCalisanSayisi: number
  ortalamaKisiBasiFiyat: number
  togGelirOrani: number
}

interface B2CParams {
  onlineSatisAdedi: number
  onlineOrtalamaFiyat: number
  onlineTogOrani: number
  etkinlikSatisAdedi: number
  etkinlikIskonto: number
}

const defaultYouthPrograms: YouthProgramValues = {
  spor: 5000,
  sanat: 6000,
  kultur: 7000,
  teknoloji: 8000,
  girisimcilik: 9000,
  egitim: 5500,
  kariyer: 6500,
  sosyalSorumluluk: 7500,
}

const defaultB2B: B2BParams = {
  hedefKurumSayisi: 10,
  hedefCalisanSayisi: 2000,
  ortalamaKisiBasiFiyat: 2500,
  togGelirOrani: 12.5,
}

const defaultB2C: B2CParams = {
  onlineSatisAdedi: 5000,
  onlineOrtalamaFiyat: 1000,
  onlineTogOrani: 11,
  etkinlikSatisAdedi: 2000,
  etkinlikIskonto: 60,
}

export default function TOGCalculator() {
  const [youthPrograms, setYouthPrograms] = useState<YouthProgramValues>(defaultYouthPrograms)
  const [b2bParams, setB2BParams] = useState<B2BParams>(defaultB2B)
  const [b2cParams, setB2CParams] = useState<B2CParams>(defaultB2C)
  const [showYouthProgramSettings, setShowYouthProgramSettings] = useState(false)
  const [showB2BSettings, setShowB2BSettings] = useState(false)
  const [showB2CSettings, setShowB2CSettings] = useState(false)

  // Calculations
  const b2bRevenue =
    (b2bParams.hedefKurumSayisi *
      b2bParams.hedefCalisanSayisi *
      b2bParams.ortalamaKisiBasiFiyat *
      b2bParams.togGelirOrani) /
    100

  const onlineRevenue = (b2cParams.onlineSatisAdedi * b2cParams.onlineOrtalamaFiyat * b2cParams.onlineTogOrani) / 100

  // Etkinlik hesaplaması: TOG alış fiyatı = online fiyat * (100 - iskonto oranı) / 100
  // Kâr = online fiyat - TOG alış fiyatı
  const togAlisFiyati = (b2cParams.onlineOrtalamaFiyat * (100 - b2cParams.etkinlikIskonto)) / 100
  const etkinlikKar = b2cParams.onlineOrtalamaFiyat - togAlisFiyati
  const etkinlikRevenue = b2cParams.etkinlikSatisAdedi * etkinlikKar

  const totalRevenue = b2bRevenue + onlineRevenue + etkinlikRevenue

  // Youth Program Impact Calculations - Her program türü için yıllık maliyet hesaplanıp toplam gelire bölünüyor
  const calculateYouthProgramImpact = () => {
    const monthlyPrograms = {
      spor: Math.floor(totalRevenue / (youthPrograms.spor * 12)),
      sanat: Math.floor(totalRevenue / (youthPrograms.sanat * 12)),
      kultur: Math.floor(totalRevenue / (youthPrograms.kultur * 12)),
      teknoloji: Math.floor(totalRevenue / (youthPrograms.teknoloji * 12)),
      girisimcilik: Math.floor(totalRevenue / (youthPrograms.girisimcilik * 12)),
      egitim: Math.floor(totalRevenue / (youthPrograms.egitim * 12)),
      kariyer: Math.floor(totalRevenue / (youthPrograms.kariyer * 12)),
      sosyalSorumluluk: Math.floor(totalRevenue / (youthPrograms.sosyalSorumluluk * 12)),
    }

    return { monthlyPrograms }
  }

  const impact = calculateYouthProgramImpact()

  const handleSaveYouthPrograms = () => {
    setShowYouthProgramSettings(false)
  }

  return (
    <section
      data-section="calculator"
      className="w-full py-16 lg:py-24 bg-gradient-to-br from-red-50 via-white to-orange-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 space-y-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-100 to-orange-100 text-red-800 px-6 py-3 rounded-full text-sm font-semibold border border-red-200">
            <Calculator className="w-5 h-5" />
            <span>TOG Gelir ve Etki Hesaplayıcısı</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            <span className="text-red-600">Potansiyel Gelir</span> ve{" "}
            <span className="text-orange-600">Gençlik Etkisi</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            İş modelimizin TOG'a sağlayacağı geliri ve bu gelirle desteklenebilecek proje sayısını hesaplayın
          </p>
        </div>

        {/* Revenue Summary Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-6 text-center">
              <Building2 className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">B2B Geliri</h3>
              <p className="text-2xl font-bold text-blue-600">₺{b2bRevenue.toLocaleString("tr-TR")}</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Online Satış</h3>
              <p className="text-2xl font-bold text-purple-600">₺{onlineRevenue.toLocaleString("tr-TR")}</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Etkinlik Geliri</h3>
              <p className="text-2xl font-bold text-green-600">₺{etkinlikRevenue.toLocaleString("tr-TR")}</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-50 to-orange-100 border-red-200">
            <CardContent className="p-6 text-center">
              <GraduationCap className="w-8 h-8 text-red-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Toplam TOG Geliri</h3>
              <p className="text-3xl font-bold text-red-600">₺{totalRevenue.toLocaleString("tr-TR")}</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* B2B Parameters */}
          <Card className="border-2 border-red-200">
            <CardHeader className="bg-gradient-to-r from-red-50 to-red-100">
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
                    <span className="text-blue-600">₺{b2bRevenue.toLocaleString("tr-TR")}</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* B2C Parameters */}
          <Card className="border-2 border-purple-200">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  B2C Model Parametreleri
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowB2CSettings(!showB2CSettings)}
                  className="border-purple-200 text-purple-600 hover:bg-purple-50"
                >
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              {showB2CSettings ? (
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Online Satışlar - Reflect Studio</h4>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="onlineSatis">Satış Adedi</Label>
                      <Input
                        id="onlineSatis"
                        type="number"
                        value={b2cParams.onlineSatisAdedi}
                        onChange={(e) => setB2CParams({ ...b2cParams, onlineSatisAdedi: Number(e.target.value) })}
                        onFocus={(e) => e.target.select()}
                      />
                    </div>
                    <div>
                      <Label htmlFor="onlineFiyat">Ortalama Fiyat (₺)</Label>
                      <Input
                        id="onlineFiyat"
                        type="number"
                        value={b2cParams.onlineOrtalamaFiyat}
                        onChange={(e) => setB2CParams({ ...b2cParams, onlineOrtalamaFiyat: Number(e.target.value) })}
                        onFocus={(e) => e.target.select()}
                      />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="onlineOran">TOG Lisans Oranı (%)</Label>
                      <Input
                        id="onlineOran"
                        type="number"
                        step="0.1"
                        value={b2cParams.onlineTogOrani}
                        onChange={(e) => setB2CParams({ ...b2cParams, onlineTogOrani: Number(e.target.value) })}
                        onFocus={(e) => e.target.select()}
                      />
                    </div>
                  </div>

                  <Separator />
                  <h4 className="font-semibold text-gray-900 mb-3">Etkinlik Satışları - TOG</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="etkinlikSatis">Satış Adedi</Label>
                      <Input
                        id="etkinlikSatis"
                        type="number"
                        value={b2cParams.etkinlikSatisAdedi}
                        onChange={(e) => setB2CParams({ ...b2cParams, etkinlikSatisAdedi: Number(e.target.value) })}
                        onFocus={(e) => e.target.select()}
                      />
                    </div>
                    <div>
                      <Label htmlFor="etkinlikFiyat">Ortalama Fiyat (₺)</Label>
                      <Input
                        id="etkinlikFiyat"
                        type="number"
                        value={b2cParams.onlineOrtalamaFiyat}
                        disabled
                        className="bg-gray-100"
                      />
                      <p className="text-xs text-gray-500 mt-1">Online fiyatından otomatik alınır</p>
                    </div>
                    <div>
                      <Label htmlFor="etkinlikIskonto">Alım İskonto Oranı (%)</Label>
                      <Input
                        id="etkinlikIskonto"
                        type="number"
                        value={b2cParams.etkinlikIskonto}
                        onChange={(e) => setB2CParams({ ...b2cParams, etkinlikIskonto: Number(e.target.value) })}
                        onFocus={(e) => e.target.select()}
                      />
                    </div>
                    <div>
                      <Label htmlFor="togAlisFiyati">TOG Alış Fiyatı (₺)</Label>
                      <Input id="togAlisFiyati" type="number" value={togAlisFiyati} disabled className="bg-gray-100" />
                      <p className="text-xs text-gray-500 mt-1">%60 iskonto = %40 fiyatına alım</p>
                    </div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <p className="text-sm text-green-800">
                      <span className="font-semibold">Etkinlik Kârı:</span> ₺{etkinlikKar.toLocaleString("tr-TR")}{" "}
                      (Satış: ₺{b2cParams.onlineOrtalamaFiyat} - Alış: ₺{togAlisFiyati})
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Online Gelir:</span>
                    <span className="font-semibold text-purple-600">₺{onlineRevenue.toLocaleString("tr-TR")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Etkinlik Gelir:</span>
                    <span className="font-semibold text-green-600">₺{etkinlikRevenue.toLocaleString("tr-TR")}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>TOG Alış Fiyatı:</span>
                    <span>₺{togAlisFiyati.toLocaleString("tr-TR")}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Etkinlik Kârı:</span>
                    <span>₺{etkinlikKar.toLocaleString("tr-TR")}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>B2C Toplam Gelir:</span>
                    <span className="text-purple-600">
                      ₺{(onlineRevenue + etkinlikRevenue).toLocaleString("tr-TR")}
                    </span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Youth Program Impact */}
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

        {/* Summary */}
        <Card className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Özet Etki Raporu</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-yellow-400">₺{totalRevenue.toLocaleString("tr-TR")}</div>
                <div className="text-gray-300">Toplam TOG Geliri</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">{impact.monthlyPrograms.spor}</div>
                <div className="text-gray-300">Spor Programı (Yıllık)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">{impact.monthlyPrograms.sanat}</div>
                <div className="text-gray-300">Sanat Programı (Yıllık)</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <WWFCaseStudySection />
      </div>
    </section>
  )
}
