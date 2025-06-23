"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Pause, Mail, Github, Linkedin, Twitter, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function CinemaPortfolio() {
  const [currentScene, setCurrentScene] = useState("hero")
  const [isPlaying, setIsPlaying] = useState(true)

  const scenes = [
    { id: "hero", title: "INTRO" },
    { id: "about", title: "PROFILE" },
    { id: "portfolio", title: "WORK" },
    { id: "contact", title: "CONNECT" },
  ]

  const portfolioItems = [
    {
      title: "Neural Commerce",
      subtitle: "E-Commerce Revolution",
      year: "2024",
      description: "Next-generation shopping experience powered by AI",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Quantum Banking",
      subtitle: "Financial Interface",
      year: "2023",
      description: "Secure digital banking with quantum encryption",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Synth Dashboard",
      subtitle: "Data Visualization",
      year: "2024",
      description: "Real-time analytics in a cyberpunk aesthetic",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        const currentIndex = scenes.findIndex((scene) => scene.id === currentScene)
        const nextIndex = (currentIndex + 1) % scenes.length
        setCurrentScene(scenes[nextIndex].id)
      }
    }, 8000)

    return () => clearInterval(interval)
  }, [currentScene, isPlaying, scenes])

  const renderScene = () => {
    switch (currentScene) {
      case "hero":
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
            <div className="text-center space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl md:text-6xl font-thin text-gray-800 tracking-[0.2em]">ALEX CHEN</h1>
                <div className="w-24 h-px bg-gray-400 mx-auto" />
                <p className="text-lg md:text-xl text-gray-600 font-light tracking-[0.3em] uppercase">
                  Digital Architect
                </p>
              </div>
              <Button
                onClick={() => setCurrentScene("about")}
                className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 mt-6"
              >
                <Play className="mr-2 h-4 w-4" />
                Start Experience
              </Button>
            </div>
          </div>
        )

      case "about":
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 p-6 overflow-y-auto">
            <div className="max-w-4xl mx-auto h-full flex items-center">
              <div className="grid md:grid-cols-2 gap-8 items-center w-full">
                <div className="space-y-4">
                  <h2 className="text-3xl font-thin text-gray-800 tracking-wider uppercase">Profile</h2>
                  <div className="w-12 h-px bg-gray-400" />
                  <div className="space-y-3 text-gray-700 leading-relaxed">
                    <p className="text-base font-light">
                      Crafting digital experiences at the intersection of technology and artistry.
                    </p>
                    <p className="text-sm">
                      With over 5 years of experience in full-stack development, I specialize in creating immersive web
                      applications that push the boundaries of what's possible.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div>
                      <h3 className="text-gray-600 font-light uppercase tracking-wider text-xs mb-2">Technologies</h3>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>React / Next.js</li>
                        <li>Node.js / Express</li>
                        <li>TypeScript</li>
                        <li>Three.js / WebGL</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-gray-600 font-light uppercase tracking-wider text-xs mb-2">Focus</h3>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>3D Web Experiences</li>
                        <li>Interactive Design</li>
                        <li>Performance Optimization</li>
                        <li>Creative Development</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 border border-gray-300" />
                    <div className="absolute inset-3 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 border border-gray-200" />
                    <div className="absolute inset-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "portfolio":
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 p-4 overflow-y-auto">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-thin text-gray-800 tracking-wider uppercase mb-3">Selected Work</h2>
                <div className="w-12 h-px bg-gray-400 mx-auto" />
              </div>
              <div className="grid gap-4">
                {portfolioItems.map((item, index) => (
                  <Card
                    key={index}
                    className="bg-white/80 border border-gray-200 hover:shadow-lg transition-all duration-300 group"
                  >
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-3 gap-0">
                        <div className="relative overflow-hidden">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            width={400}
                            height={300}
                            className="w-full h-32 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="md:col-span-2 p-4 flex flex-col justify-center space-y-3">
                          <div>
                            <h3 className="text-xl font-thin text-gray-800 tracking-wider">{item.title}</h3>
                            <p className="text-gray-600 text-xs uppercase tracking-wider">{item.subtitle}</p>
                            <p className="text-gray-500 text-xs mt-1">{item.year}</p>
                          </div>
                          <div className="w-8 h-px bg-gray-400" />
                          <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="self-start bg-transparent border-gray-400 text-gray-700 hover:bg-gray-100 transition-all duration-300"
                          >
                            View Project
                            <ArrowRight className="ml-2 h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )

      case "contact":
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
            <div className="text-center space-y-6 max-w-xl mx-auto px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-thin text-gray-800 tracking-wider uppercase">Let's Connect</h2>
                <div className="w-12 h-px bg-gray-400 mx-auto" />
                <p className="text-base text-gray-700 leading-relaxed">
                  Ready to bring your vision to life? Let's create something extraordinary together.
                </p>
              </div>

              <div className="grid grid-cols-4 gap-3 mt-8">
                <Button
                  variant="outline"
                  className="bg-transparent border-gray-400 text-gray-700 hover:bg-gray-100 transition-all duration-300 h-10"
                >
                  <Mail className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent border-gray-400 text-gray-700 hover:bg-gray-100 transition-all duration-300 h-10"
                >
                  <Github className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent border-gray-400 text-gray-700 hover:bg-gray-100 transition-all duration-300 h-10"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent border-gray-400 text-gray-700 hover:bg-gray-100 transition-all duration-300 h-10"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
              </div>

              <div className="mt-8 text-gray-600 text-sm">
                <p>alex.chen@example.com</p>
                <p className="mt-1">Available for freelance projects</p>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Cinema Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/cinema-background.png')",
          backgroundSize: "cover",
          backgroundPositionX: "center",
          backgroundPositionY: ".5%",
          filter: "blur(1.5px)",
          zIndex: -1,
        }}
      />

      {/* Scene Navigation - positioned on the right side */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col space-y-3">
          {scenes.map((scene) => (
            <button
              key={scene.id}
              onClick={() => setCurrentScene(scene.id)}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                currentScene === scene.id
                  ? "bg-white border-white shadow-lg"
                  : "bg-transparent border-white/50 hover:border-white"
              }`}
              title={scene.title}
            />
          ))}
        </div>
      </div>

      {/* Screen Content Area - positioned to match the blank screen in the background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="relative bg-white/95 backdrop-blur-sm overflow-hidden shadow-2xl"
          style={{
            width: "42%",
            height: "32%",
            marginTop: "-8%", // Adjust to align with screen in background
            borderRadius: "8px",
            border: "2px solid rgba(0,0,0,0.1)",
          }}
        >
          {/* Screen Content */}
          <div className="absolute inset-0">{renderScene()}</div>
        </div>
      </div>

      {/* Bottom Controls - positioned below the screen */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => setIsPlaying(!isPlaying)}
            variant="outline"
            className="bg-white/90 border-gray-300 text-gray-700 hover:bg-white transition-all duration-300"
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>

          <Button
            onClick={() => setCurrentScene("portfolio")}
            variant="outline"
            className="bg-white/90 border-gray-300 text-gray-700 hover:bg-white transition-all duration-300 px-6 tracking-wider uppercase text-sm"
          >
            View Work
          </Button>
        </div>
      </div>
    </div>
  )
}
