import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Join the AI Revolution
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your AI Startup?
          </h2>

          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join thousands of AI founders who are already building successful businesses on OpenShopAI. Start your
            journey today and connect with the global AI community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Start Selling Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              Schedule Demo
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-white/80">AI Startups</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">1.2K+</div>
              <div className="text-white/80">Products Listed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">$2.5M+</div>
              <div className="text-white/80">Revenue Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-white/80">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
