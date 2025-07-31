"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Shirt, Coffee, Briefcase, Crown, Laptop, Zap, Heart, GraduationCap } from "lucide-react"

interface Product {
  name: string
  minPrice: string
  maxPrice: string
  link: string
  icon: React.ReactNode
  category: "giyim" | "aksesuar" | "teknoloji" | "yasam"
}

const productData: Product[] = [
  {
    name: "T-shirt",
    minPrice: "₺650",
    maxPrice: "₺1,300",
    link: "https://reflectstudio.com/collections/t-shirt",
    icon: <Shirt className="w-5 h-5" />,
    category: "giyim",
  },
  {
    name: "Hoodie",
    minPrice: "₺1,600",
    maxPrice: "₺2,500",
    link: "https://reflectstudio.com/collections/hoodie",
    icon: <Shirt className="w-5 h-5" />,
    category: "giyim",
  },
  {
    name: "Çanta",
    minPrice: "₺500",
    maxPrice: "₺2,000",
    link: "https://reflectstudio.com/collections/canta",
    icon: <Briefcase className="w-5 h-5" />,
    category: "aksesuar",
  },
  {
    name: "Şapka",
    minPrice: "₺500",
    maxPrice: "₺1,200",
    link: "https://reflectstudio.com/collections/sapka",
    icon: <Crown className="w-5 h-5" />,
    category: "aksesuar",
  },
  {
    name: "Matara",
    minPrice: "₺1,000",
    maxPrice: "₺3,000",
    link: "https://reflectstudio.com/collections/matara",
    icon: <Coffee className="w-5 h-5" />,
    category: "yasam",
  },
  {
    name: "Çorap",
    minPrice: "₺100",
    maxPrice: "₺250",
    link: "https://reflectstudio.com/collections/corap",
    icon: <Heart className="w-5 h-5" />,
    category: "giyim",
  },
  {
    name: "Laptop Case",
    minPrice: "₺500",
    maxPrice: "₺1,500",
    link: "https://reflectstudio.com/collections/laptop-case",
    icon: <Laptop className="w-5 h-5" />,
    category: "teknoloji",
  },
  {
    name: "Sweatshirt",
    minPrice: "₺1,600",
    maxPrice: "₺2,500",
    link: "https://reflectstudio.com/collections/sweatshirt",
    icon: <Zap className="w-5 h-5" />,
    category: "giyim",
  },
]

const getCategoryConfig = (category: string) => {
  switch (category) {
    case "giyim":
      return {
        name: "Giyim",
        color: "bg-red-100 text-red-800",
        borderColor: "border-red-200",
      }
    case "aksesuar":
      return {
        name: "Aksesuar",
        color: "bg-orange-100 text-orange-800",
        borderColor: "border-orange-200",
      }
    case "teknoloji":
      return {
        name: "Teknoloji",
        color: "bg-blue-100 text-blue-800",
        borderColor: "border-blue-200",
      }
    case "yasam":
      return {
        name: "Yaşam",
        color: "bg-green-100 text-green-800",
        borderColor: "border-green-200",
      }
    default:
      return {
        name: "Diğer",
        color: "bg-gray-100 text-gray-800",
        borderColor: "border-gray-200",
      }
  }
}

export default function ProductCollectionSection() {
  const categories = ["giyim", "aksesuar", "teknoloji", "yasam"]

  return (
    <section
      data-section="products"
      className="w-full py-16 lg:py-24 bg-gradient-to-br from-orange-50 via-blue-50 to-red-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 via-blue-100 to-red-100 text-orange-800 px-6 py-3 rounded-full text-sm font-semibold border border-orange-200">
            <GraduationCap className="w-5 h-5" />
            <span>TOG x Reflect Studio Koleksiyon Fikirleri</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-red-600">Gençlik Misyonu</span> ile{" "}
              <span className="text-blue-600">Tasarım Buluşuyor</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Gençlerin sosyal sorumluluk projelerinin önemini anlatan ilham verici hikayelerin çizimlerle
              canlandırılması, TOG destekçisi ünlülerle yapılacak özel tasarım işbirlikleri, gençliğin gücünü anlatan
              mottoların görselleştirilmesi ve TOG'un yıllık birikimindeki anlamlı sayıların sanatsal yorumlarıyla,
              Türkiye'nin gençlik geleceğine dair umut dolu mesajları günlük hayata taşıyoruz.
            </p>
          </div>
        </div>

        {/* Product Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const config = getCategoryConfig(category)
              const productCount = productData.filter((p) => p.category === category).length
              return (
                <Badge key={category} className={`${config.color} px-4 py-2 text-sm font-medium`}>
                  {config.name} ({productCount})
                </Badge>
              )
            })}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {productData.map((product, index) => {
            const categoryConfig = getCategoryConfig(product.category)

            return (
              <Card
                key={index}
                className={`${categoryConfig.borderColor} border-2 shadow-lg hover:shadow-xl transition-all duration-300 group h-full`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                        {product.icon}
                      </div>
                      <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-200">
                        {product.name}
                      </CardTitle>
                    </div>
                    <Badge className={categoryConfig.color}>{categoryConfig.name}</Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-2">
                  {/* Price Range */}
                  <div className="bg-gradient-to-r from-red-50 via-blue-50 to-orange-50 p-3 rounded-lg border border-red-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">Fiyat Aralığı:</span>
                      <span className="font-bold text-red-700">
                        {product.minPrice} - {product.maxPrice}
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant="outline"
                    className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 transition-all duration-200 bg-transparent"
                    onClick={() => window.open(product.link, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Benzer Ürünleri İncele
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom Info Section */}
        <div className="space-y-8">
          {/* Design Philosophy */}
          <Card className="bg-gradient-to-r from-red-600 via-blue-600 to-orange-600 text-white shadow-2xl">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center space-y-6">
                <h3 className="text-2xl lg:text-3xl font-bold">Tasarım Felsefemiz</h3>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="space-y-3">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                      <Heart className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-lg">Anlamlı Tasarım</h4>
                    <p className="text-red-100 text-sm leading-relaxed">
                      Gençlik projeleri hikayelerinin çizimleri, ünlü destekçi tasarımları, sosyal sorumluluk mottoları
                      ve TOG'un anlamlı sayılarıyla her ürün bir hikaye anlatır
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                      <Zap className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-lg">Premium Kalite</h4>
                    <p className="text-red-100 text-sm leading-relaxed">
                      Sürdürülebilir malzemeler, etik üretim süreçleri ve uzun ömürlü kullanım için tasarlanmış ürünler
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-lg">Eğitim Odaklı</h4>
                    <p className="text-red-100 text-sm leading-relaxed">
                      Her satın alma TOG'un gençlik faaliyetlerine katkı sağlar, sosyal sorumluluk projelerini destekler
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
