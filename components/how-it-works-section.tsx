import { Card, CardContent } from "@/components/ui/card"
import { UserPlus, Upload, TrendingUp, DollarSign } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description: "Create your founder account and complete your startup profile with AI product details.",
    },
    {
      icon: Upload,
      title: "List Products",
      description: "Upload your AI products with detailed descriptions, demos, and pricing information.",
    },
    {
      icon: TrendingUp,
      title: "Get Discovered",
      description: "Our AI matching system connects your products with interested buyers and partners.",
    },
    {
      icon: DollarSign,
      title: "Start Selling",
      description: "Process secure transactions and grow your AI startup with our comprehensive tools.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in minutes and begin selling your AI products to a global audience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
