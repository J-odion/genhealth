"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Heart,
  MessageCircle,
  MapPin,
  Clock,
  Users,
  Shield,
  Zap,
  ArrowRight,
  Phone,
  Mail,
  Calendar,
} from "lucide-react"
import Link from "next/link"

export default function GenHealthProductPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Gen Health
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#mission" className="text-slate-600 hover:text-blue-600 transition-colors">
              Mission
            </Link>
            <Link href="#product" className="text-slate-600 hover:text-blue-600 transition-colors">
              Product
            </Link>
            <Link href="#features" className="text-slate-600 hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600">
              Partner With Us
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                  Care for{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                    Whoever.
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-teal-500 to-green-500 bg-clip-text text-transparent">
                    Wherever.
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
                    Whenever.
                  </span>
                </h1>
                <p className="text-xl text-slate-600 max-w-lg">
                  We're replacing waiting rooms with massages. Gen Health bridges people and providers with fast,
                  personal healthcare access that puts control back in the patient's hands.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-lg px-8"
                >
                  Schedule Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-200 text-blue-600 hover:bg-blue-50 text-lg px-8 bg-transparent"
                >
                  View Pitch Deck
                </Button>
              </div>
            </div>

            {/* Animated Health Illustration */}
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px]">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  {/* Background Circle */}
                  <circle cx="200" cy="200" r="180" fill="url(#gradient1)" opacity="0.1" className="animate-pulse" />

                  {/* Central Health Icon */}
                  <g className="animate-bounce" style={{ animationDuration: "3s" }}>
                    <circle cx="200" cy="200" r="60" fill="url(#gradient2)" />
                    <path d="M180 200h40M200 180v40" stroke="white" strokeWidth="6" strokeLinecap="round" />
                  </g>

                  {/* Orbiting Elements */}
                  <g className="animate-spin" style={{ animationDuration: "20s" }}>
                    <circle cx="300" cy="150" r="25" fill="url(#gradient3)" opacity="0.8" />
                    <circle cx="100" cy="250" r="20" fill="url(#gradient4)" opacity="0.8" />
                    <circle cx="320" cy="280" r="15" fill="url(#gradient5)" opacity="0.8" />
                    <circle cx="80" cy="120" r="18" fill="url(#gradient6)" opacity="0.8" />
                  </g>

                  {/* Connection Lines */}
                  <g opacity="0.3">
                    <line
                      x1="200"
                      y1="200"
                      x2="300"
                      y2="150"
                      stroke="url(#gradient2)"
                      strokeWidth="2"
                      className="animate-pulse"
                    />
                    <line
                      x1="200"
                      y1="200"
                      x2="100"
                      y2="250"
                      stroke="url(#gradient2)"
                      strokeWidth="2"
                      className="animate-pulse"
                    />
                    <line
                      x1="200"
                      y1="200"
                      x2="320"
                      y2="280"
                      stroke="url(#gradient2)"
                      strokeWidth="2"
                      className="animate-pulse"
                    />
                    <line
                      x1="200"
                      y1="200"
                      x2="80"
                      y2="120"
                      stroke="url(#gradient2)"
                      strokeWidth="2"
                      className="animate-pulse"
                    />
                  </g>

                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#14B8A6" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2563EB" />
                      <stop offset="100%" stopColor="#0D9488" />
                    </linearGradient>
                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                    <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#7C3AED" />
                    </linearGradient>
                    <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#D97706" />
                    </linearGradient>
                    <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#EF4444" />
                      <stop offset="100%" stopColor="#DC2626" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-teal-50">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  To be your lifelong health companion wherever you are, delivering personalised care that helps you
                  live fully, age gracefully, and stay healthy every step of the way.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-blue-50">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  We're replacing waiting rooms with massages. Gen Health bridges people and providers with fast,
                  personal healthcare access that puts control back in the patient's hands.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Introduction to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Gen Health
              </span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              At Gen Health, we're here to make your healthcare journey easier. We take the stress off hospitals by
              helping you find the right doctor, lab, or pharmacy, wherever you are, whenever you need it. Think of us
              as your personal health managers, always just a message away.
            </p>
          </div>
        </div>
      </section>

      {/* MVP Section */}
      <section id="product" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
                  Our{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">MVP</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  We connect patients to the right healthcare services, medication, lab tests, and consultations,
                  through familiar messaging apps, all from the comfort of their own location.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                  <span className="text-lg text-slate-700">Messaging app integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-teal-500" />
                  <span className="text-lg text-slate-700">Location-based services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-green-500" />
                  <span className="text-lg text-slate-700">24/7 availability</span>
                </div>
              </div>
            </div>

            {/* Messaging Interface Illustration */}
            <div className="relative">
              <Card className="max-w-sm mx-auto shadow-2xl">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-4 text-white">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <Heart className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Gen Health Assistant</h3>
                        <p className="text-sm opacity-90">Online now</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 space-y-4 h-64 overflow-y-auto">
                    <div className="flex justify-start">
                      <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                        <p className="text-sm">Hi! I need to find a cardiologist near me.</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-lg p-3 max-w-xs">
                        <p className="text-sm">
                          I found 3 cardiologists within 5km. Would you like to see their availability?
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                        <p className="text-sm">Yes, please!</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
                Product{" "}
                <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                  Overview
                </span>
              </h2>
            </div>

            <div className="space-y-8">
              <p className="text-xl text-slate-700 leading-relaxed">
                Gen Health is a digital healthcare company that connects patients to the right medical services,
                consultations, lab tests, and medication, through everyday messaging apps, all from the comfort of their
                location.
              </p>

              <p className="text-xl text-slate-700 leading-relaxed">
                But we go beyond just convenience. Gen Health also promotes proactive care by helping patients detect
                and address potential health issues early, using periodic blood work and physical exams tailored to each
                person's needs.
              </p>

              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <p className="text-xl text-slate-700 leading-relaxed font-medium">
                  Our goal is simple: to make healthcare more accessible, personalised, and preventative, whoever you
                  are, wherever you are, whenever you need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Gen Health?
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're revolutionizing healthcare delivery with innovative technology and personalized care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Familiar Interface</h3>
                <p className="text-slate-600">Access healthcare through messaging apps you already use daily.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Location-Based</h3>
                <p className="text-slate-600">Find healthcare services wherever you are, whenever you need them.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Proactive Care</h3>
                <p className="text-slate-600">Early detection and prevention through personalized health monitoring.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Personal Health Manager</h3>
                <p className="text-slate-600">Your dedicated health companion, always just a message away.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">24/7 Availability</h3>
                <p className="text-slate-600">Healthcare access that never sleeps, available around the clock.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Instant Connection</h3>
                <p className="text-slate-600">Fast, seamless connection to healthcare providers and services.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Ready to Transform Healthcare?</h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Join us in revolutionizing healthcare delivery. Whether you're an investor, partner, or healthcare
              provider, let's work together to make healthcare accessible for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8">
                <Calendar className="mr-2 w-5 h-5" />
                Schedule a Meeting
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 bg-transparent"
              >
                <Mail className="mr-2 w-5 h-5" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Gen Health</span>
              </div>
              <p className="text-slate-400">
                Making healthcare accessible, personalised, and preventative for everyone.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Product</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-slate-400 hover:text-white transition-colors">
                  Features
                </Link>
                <Link href="#" className="block text-slate-400 hover:text-white transition-colors">
                  How it Works
                </Link>
                <Link href="#" className="block text-slate-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="#" className="block text-slate-400 hover:text-white transition-colors">
                  Careers
                </Link>
                <Link href="#" className="block text-slate-400 hover:text-white transition-colors">
                  Press
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-slate-400">
                  <Mail className="w-4 h-4" />
                  <span>hello@genhealth.com</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-400">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} Gen Health. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
