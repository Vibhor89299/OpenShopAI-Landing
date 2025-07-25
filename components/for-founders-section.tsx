import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"

export function ForFoundersSection() {
  const benefits = [
    "Zero upfront costs - only pay when you sell",
    "AI-powered product optimization recommendations",
    "Direct access to qualified buyers and investors",
    "Comprehensive sales and performance analytics",
    "Marketing support and promotional opportunities",
    "Secure payment processing and fraud protection",
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Built for AI Founders</h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you're launching your first AI product or scaling your startup, OpenShopAI provides the tools and
              community you need to succeed.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">AI</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Smart Pricing Assistant</h4>
                    <p className="text-sm text-gray-500">Optimize your product pricing</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-2">Recommended price range:</div>
                  <div className="text-2xl font-bold text-green-600">$149 - $299/month</div>
                  <div className="text-sm text-gray-500">Based on similar AI tools</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Performance Metrics</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Product Views</span>
                    <span className="font-semibold">2,847</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Demo Requests</span>
                    <span className="font-semibold">156</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Conversion Rate</span>
                    <span className="font-semibold text-green-600">12.3%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
