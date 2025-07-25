import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Star } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for new founders testing the waters",
      features: [
        "List up to 3 AI products",
        "Basic analytics dashboard",
        "Community support",
        "5% transaction fee",
        "Standard product visibility",
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
    },
    {
      name: "Growth",
      price: "$99",
      period: "/month",
      description: "Ideal for scaling AI startups",
      features: [
        "Unlimited product listings",
        "Advanced analytics & insights",
        "Priority customer support",
        "3% transaction fee",
        "Enhanced product visibility",
        "Marketing campaign tools",
        "API access",
      ],
      buttonText: "Start Growing",
      buttonVariant: "default" as const,
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For established AI companies",
      features: [
        "Everything in Growth",
        "Custom integrations",
        "Dedicated account manager",
        "Negotiable transaction fees",
        "White-label options",
        "Advanced security features",
        "Custom analytics reports",
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your startup's needs. Scale up as you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                plan.popular ? "ring-2 ring-purple-600" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-600">{plan.period}</span>}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${plan.popular ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" : ""}`}
                  variant={plan.buttonVariant}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
