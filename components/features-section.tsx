import { Card, CardContent } from "@/components/ui/card"
import { Zap, Shield, BarChart3, Rocket, Users, Globe } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "AI-Powered Matching",
      description:
        "Our intelligent algorithm connects the right AI products with the right buyers, maximizing conversion rates.",
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description:
        "Enterprise-grade security ensures safe transactions and protects intellectual property for all parties.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive insights and metrics help founders optimize their products and sales strategies.",
    },
    {
      icon: Rocket,
      title: "Launch Support",
      description: "Dedicated support team helps startups successfully launch and promote their AI products.",
    },
    {
      icon: Users,
      title: "Community Network",
      description: "Join a thriving community of AI innovators, founders, and early adopters.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access worldwide markets and connect with international buyers and partners.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose OpenShopAI?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built specifically for AI startups, our platform provides everything you need to succeed in the AI
            marketplace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
