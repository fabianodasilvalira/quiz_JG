"use client"

import { useState, useEffect } from "react"
import { X, Plus, Trash2, AlertCircle } from "lucide-react"

interface AdminPanelProps {
  onClose: () => void
}

interface BannerImage {
  id: string
  src: string
  alt: string
}

export default function AdminPanel({ onClose }: AdminPanelProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [bannerImages, setBannerImages] = useState<BannerImage[]>([])
  const [newImageUrl, setNewImageUrl] = useState("")
  const [newImageAlt, setNewImageAlt] = useState("")
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null)

  // Carregar imagens do localStorage ao iniciar
  useEffect(() => {
    const savedImages = localStorage.getItem("bannerImages")
    if (savedImages) {
      try {
        setBannerImages(JSON.parse(savedImages))
      } catch (e) {
        console.error("Erro ao carregar imagens:", e)
      }
    } else {
      // Imagens padrão se não houver nada salvo
      const defaultImages: BannerImage[] = [
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
      ]
      setBannerImages(defaultImages)
      localStorage.setItem("bannerImages", JSON.stringify(defaultImages))
    }
  }, [])

  // Salvar imagens no localStorage quando mudar
  useEffect(() => {
    if (bannerImages.length > 0) {
      localStorage.setItem("bannerImages", JSON.stringify(bannerImages))
    }
  }, [bannerImages])

  const handleLogin = () => {
    if (password === "cristianoronaldo") {
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Senha incorreta")
    }
  }

  const handleAddImage = () => {
    if (!newImageUrl.trim()) {
      setError("URL da imagem é obrigatória")
      return
    }

    const newImage: BannerImage = {
      id: Date.now().toString(),
      src: newImageUrl,
      alt: newImageAlt || "Imagem do banner",
    }

    setBannerImages([...bannerImages, newImage])
    setNewImageUrl("")
    setNewImageAlt("")
    setError("")
  }

  const handleDeleteImage = (id: string) => {
    if (bannerImages.length <= 1) {
      setError("Não é possível excluir todas as imagens. Deve haver pelo menos uma imagem no banner.")
      return
    }

    setBannerImages(bannerImages.filter((img) => img.id !== id))
    setDeleteConfirmId(null)
  }

  // Renderiza o modal de autenticação
  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Acesso Administrativo</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Senha de Administrador
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="Digite a senha"
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            />
          </div>

          {error && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-md text-sm flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {error}
            </div>
          )}

          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="mr-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              Cancelar
            </button>
            <button
              onClick={handleLogin}
              className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Renderiza o painel de administração
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
      <div className="bg-white rounded-lg p-6 w-full max-w-4xl m-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Painel de Administração - Banner</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Formulário para adicionar nova imagem */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 mb-3">Adicionar Nova Imagem</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
                URL da Imagem*
              </label>
              <input
                type="text"
                id="imageUrl"
                value={newImageUrl}
                onChange={(e) => setNewImageUrl(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="https://exemplo.com/imagem.jpg"
              />
            </div>
            <div>
              <label htmlFor="imageAlt" className="block text-sm font-medium text-gray-700 mb-1">
                Descrição da Imagem
              </label>
              <input
                type="text"
                id="imageAlt"
                value={newImageAlt}
                onChange={(e) => setNewImageAlt(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Descrição da imagem"
              />
            </div>
          </div>
          <button
            onClick={handleAddImage}
            className="mt-3 px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 flex items-center"
          >
            <Plus className="h-4 w-4 mr-1" />
            Adicionar Imagem
          </button>
        </div>

        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-md text-sm flex items-center">
            <AlertCircle className="h-4 w-4 mr-1" />
            {error}
          </div>
        )}

        {/* Lista de imagens existentes */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-3">Imagens do Banner ({bannerImages.length})</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {bannerImages.map((image) => (
              <div key={image.id} className="relative border rounded-md overflow-hidden group">
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-32 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                  {deleteConfirmId === image.id ? (
                    <div className="bg-white p-2 rounded-md shadow-md">
                      <p className="text-sm text-gray-800 mb-2">Confirmar exclusão?</p>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleDeleteImage(image.id)}
                          className="px-2 py-1 text-xs font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
                        >
                          Sim
                        </button>
                        <button
                          onClick={() => setDeleteConfirmId(null)}
                          className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                        >
                          Não
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setDeleteConfirmId(image.id)}
                      className="opacity-0 group-hover:opacity-100 p-1 bg-red-600 text-white rounded-full hover:bg-red-700 transition-opacity"
                      title="Excluir imagem"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  )}
                </div>
                <div className="p-2 bg-gray-50">
                  <p className="text-xs text-gray-600 truncate" title={image.alt}>
                    {image.alt || "Sem descrição"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

