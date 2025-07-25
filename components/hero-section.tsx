"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, TrendingUp, Users } from "lucide-react"

export function HeroSection() {
  const [currentStat, setCurrentStat] = useState(0)
  const stats = [
    { label: "AI Startups Connected", value: "500+" },
    { label: "Products Launched", value: "1,200+" },
    { label: "Revenue Generated", value: "$2.5M+" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [stats.length])

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-First E-commerce Platform
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Connect, Create, and
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}
                Collaborate
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              OpenShopAI is the premier platform for AI startups to showcase, sell, and scale their innovative products.
              Join the revolution where founders connect with buyers in the AI ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Start Selling Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Explore Products
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-500 ${
                    currentStat === index ? "scale-110 opacity-100" : "opacity-70"
                  }`}
                >
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">AI Product Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-medium">AI Analytics Tool</div>
                        <div className="text-sm text-gray-500">$299/month</div>
                      </div>
                    </div>
                    <div className="text-green-600 font-medium">+24%</div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-pink-600" />
                      </div>
                      <div>
                        <div className="font-medium">Customer AI Bot</div>
                        <div className="text-sm text-gray-500">$149/month</div>
                      </div>
                    </div>
                    <div className="text-green-600 font-medium">+18%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
