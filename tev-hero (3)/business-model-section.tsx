import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, CheckCircle, Zap, ExternalLink, TrendingUp } from "lucide-react"

export default function BusinessModelSection() {
  return (
    <section
      data-section="business-model"
      className="w-full py-16 lg:py-24 bg-gradient-to-br from-red-50 via-blue-50 to-orange-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-100 via-blue-100 to-orange-100 text-red-800 px-6 py-3 rounded-full text-sm font-semibold border border-red-200">
            <span className="text-lg">📦</span>
            <span>TOG x Reflect Studio – B2B İş Modeli</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-red-600">Kurumsal odaklı model.</span> Sürdürülebilir gelir.
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Gençlik projeleri için daha sürdürülebilir, risksiz ve profesyonel bir gelir modeli.
            </p>
          </div>
        </div>

        {/* Single Model - B2B Only */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="relative overflow-hidden border-2 border-red-200 bg-gradient-to-br from-red-50 to-white shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#c72b33] via-[#4a90d9] to-[#f3b138]"></div>
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-200 mb-2">B2B MODEL</Badge>
                  <h3 className="text-2xl font-bold text-gray-900">Kurumlara Yönelik Ortak Satış</h3>
                </div>
              </div>

              {/* AÇEV Responsibilities */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">🧠</span>
                  </div>
                  <h4 className="font-bold text-gray-900">TOG'dan Beklenenler:</h4>
                </div>
                <div className="space-y-2 ml-8">
                  {[
                    "YK / Mütevelli / Bağışçı ekosisteminden kurumsal temaslar",
                    "İlk toplantı katılımı ve kurum tanıtımı",
                    "Onay ve destek",
                    "İletişim: gençlik projeleri hikayeleri ve başarı örnekleri",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reflect Studio Responsibilities */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 text-sm">🔧</span>
                  </div>
                  <h4 className="font-bold text-gray-900">Reflect Studio'nun Sorumlulukları:</h4>
                </div>
                <div className="space-y-2 ml-8">
                  {[
                    "Brief → Tasarım → Üretim → Kalite → Teslimat",
                    "Tüm iletişim ve süreç yönetimi",
                    "Sözleşme, fiyatlandırma, müşteri takibi",
                    "TOG'un adına tüm operasyonu yürütür",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Revenue */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">💰</span>
                  <h4 className="font-bold text-gray-900">TOG Geliri:</h4>
                </div>
                <div className="space-y-1 text-sm text-gray-700">
                  <p>
                    <span className="font-semibold text-green-700">Net satıştan %12.5 lisans payı</span>
                  </p>
                  <p>Sıfır finansal yük, stok veya üretim riski yok</p>
                </div>
              </div>

              {/* Market Data */}
              <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-red-600" />
                  <h4 className="font-bold text-gray-900">Pazar Verisi:</h4>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <span className="font-semibold">CEO'ların %89'u</span> sürdürülebilir tedarik zincirini öncelik
                    olarak görüyor
                  </p>
                  <p>
                    Purpose-driven hediyeler:{" "}
                    <span className="font-semibold text-red-700">Çalışan memnuniyeti %31↑, Marka algısı %45↑</span>
                  </p>
                </div>
                <div className="mt-3 p-2 bg-green-100 rounded-lg">
                  <p className="text-sm font-semibold text-green-800">
                    🟩 Artık sadece hediye değil, marka değeri yatırımı.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-red-200">
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <ExternalLink className="w-3 h-3" />
                    Kaynaklar: PwC CEO Survey 2023, McKinsey Global Institute 2023
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
