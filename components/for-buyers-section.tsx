import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Filter, Star, Shield } from "lucide-react"

export function ForBuyersSection() {
  const products = [
    {
      name: "AI Content Generator",
      category: "Content Creation",
      price: "$99/month",
      rating: 4.8,
      description: "Generate high-quality content using advanced AI models",
    },
    {
      name: "Smart Analytics Dashboard",
      category: "Data Analytics",
      price: "$199/month",
      rating: 4.9,
      description: "AI-powered insights for business intelligence",
    },
    {
      name: "Voice AI Assistant",
      category: "Voice Technology",
      price: "$149/month",
      rating: 4.7,
      description: "Custom voice AI solutions for customer service",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-4 mb-6">
                <Search className="w-6 h-6 text-purple-600" />
                <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2">
                  <span className="text-gray-500">Search AI products...</span>
                </div>
                <Filter className="w-6 h-6 text-gray-400" />
              </div>

              <div className="space-y-4">
                {products.map((product, index) => (
                  <Card key={index} className="border border-gray-200 hover:border-purple-300 transition-colors">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900">{product.name}</h4>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600">{product.rating}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-purple-600 font-medium">{product.category}</span>
                        <span className="font-bold text-gray-900">{product.price}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Discover Cutting-Edge AI Products</h2>
            <p className="text-xl text-gray-600 mb-8">
              Browse through hundreds of vetted AI products from innovative startups. Find the perfect solution for your
              business needs.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Search className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Smart Discovery</h4>
                  <p className="text-gray-600">AI-powered search helps you find exactly what you need</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Vetted Products</h4>
                  <p className="text-gray-600">All products are thoroughly reviewed and tested</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Community Reviews</h4>
                  <p className="text-gray-600">Real feedback from verified buyers and users</p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
            >
              Explore Marketplace
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
