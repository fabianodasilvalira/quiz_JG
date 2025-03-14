"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface BannerImage {
  id: string
  src: string
  alt: string
}

export default function Banner() {
  const [currentImage, setCurrentImage] = useState(0)
  const [bannerImages, setBannerImages] = useState<BannerImage[]>([
    {
      id: "1",
      src: "/placeholder.svg?height=300&width=1200&text=Campo+de+Futebol",
      alt: "Campo de Futebol",
    },
    {
      id: "2",
      src: "/placeholder.svg?height=300&width=1200&text=Torcida",
      alt: "Torcida",
    },
    {
      id: "3",
      src: "/placeholder.svg?height=300&width=1200&text=Gol+Histórico",
      alt: "Gol Histórico",
    },
    {
      id: "4",
      src: "/placeholder.svg?height=300&width=1200&text=Estádio+Lotado",
      alt: "Estádio Lotado",
    },
    {
      id: "5",
      src: "/placeholder.svg?height=300&width=1200&text=Comemoração",
      alt: "Comemoração",
    },
  ])

  // Carregar imagens do localStorage
  useEffect(() => {
    const savedImages = localStorage.getItem("bannerImages")
    if (savedImages) {
      try {
        setBannerImages(JSON.parse(savedImages))
      } catch (e) {
        console.error("Erro ao carregar imagens do banner:", e)
      }
    }
  }, [])

  // Função para avançar para a próxima imagem
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % bannerImages.length)
  }

  // Função para voltar para a imagem anterior
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + bannerImages.length) % bannerImages.length)
  }

  // Transição automática a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage()
    }, 5000)

    return () => clearInterval(interval)
  }, [bannerImages.length])

  if (bannerImages.length === 0) {
    return (
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-b-lg bg-green-800">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-lg">Carregando banner...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-b-lg">
      {/* Imagens com transição */}
      <div className="relative w-full h-full">
        {bannerImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Overlay com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col items-center justify-end p-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-2 drop-shadow-lg">
          Quiz de Futebol do JG
        </h1>
        <div className="text-white/90 font-medium text-sm sm:text-base bg-green-800/80 px-4 py-1 rounded-full mb-4">
          JG Depósito (86) 99528-3262
        </div>
      </div>

      {/* Botões de navegação */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1 rounded-full"
        aria-label="Imagem anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1 rounded-full"
        aria-label="Próxima imagem"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-1.5">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentImage ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

