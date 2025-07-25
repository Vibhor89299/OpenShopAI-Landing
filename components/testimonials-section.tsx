import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder, AI Vision Labs",
      content:
        "OpenShopAI transformed how we sell our computer vision products. We went from zero to $50K MRR in just 3 months.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO, DataFlow AI",
      content:
        "The platform's AI matching system connected us with enterprise clients we never would have reached otherwise.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Emily Watson",
      role: "Product Manager, TechCorp",
      content:
        "As a buyer, I love how easy it is to discover and evaluate new AI tools. The quality is consistently high.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Trusted by AI Innovators</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful founders and buyers who are building the future of AI commerce.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-purple-600 mb-4" />

                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>

                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
