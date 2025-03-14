"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trophy, HelpCircle, Info, Filter } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import type { Player } from "./quiz-app"
import type { QuizSettings } from "./quiz-app"

interface StartScreenProps {
  onStart: (playerName: string, settings?: Partial<QuizSettings>) => void
  ranking: Player[]
  databaseStats: any
  settings: QuizSettings
}

export default function StartScreen({ onStart, ranking, databaseStats, settings }: StartScreenProps) {
  const [playerName, setPlayerName] = useState("")
  const [activeTab, setActiveTab] = useState("start")
  const [showSettings, setShowSettings] = useState(false)
  const [localSettings, setLocalSettings] = useState<QuizSettings>(settings)

  useEffect(() => {
    try {
      const savedRanking = JSON.parse(localStorage.getItem("quizRanking") || "[]")
      // setStoredRanking(savedRanking) // This line was removed because storedRanking is not used anymore
    } catch (error) {
      console.error("Error loading ranking from localStorage:", error)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (playerName.trim()) {
      onStart(playerName.trim(), localSettings)
    }
  }

  const handleSettingsChange = (key: keyof QuizSettings, value: any) => {
    setLocalSettings((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleCategoryToggle = (category: string) => {
    setLocalSettings((prev) => {
      const categories = [...prev.categories]
      if (categories.includes(category)) {
        return {
          ...prev,
          categories: categories.filter((c) => c !== category),
        }
      } else {
        return {
          ...prev,
          categories: [...categories, category],
        }
      }
    })
  }

  const displayRanking = ranking //storedRanking.length > 0 ? storedRanking : ranking; // storedRanking is not used anymore, so ranking is used directly

  const categoryLabels: Record<string, string> = {
    brasileirao: "Brasileirão",
    copa_do_brasil: "Copa do Brasil",
    libertadores: "Libertadores",
    selecao_brasileira: "Seleção Brasileira",
    premier_league: "Premier League",
    la_liga: "La Liga",
    serie_a: "Serie A Italiana",
    bundesliga: "Bundesliga",
    ligue_1: "Ligue 1",
    champions_league: "Champions League",
    copa_do_mundo: "Copa do Mundo",
    euro: "Eurocopa",
    jogadores: "Jogadores",
    tecnicos: "Técnicos",
    historia: "História",
    estatisticas: "Estatísticas",
    curiosidades: "Curiosidades",
    transferencias: "Transferências",
  }

  return (
    <div className="p-6 md:p-8">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="start">Iniciar</TabsTrigger>
          <TabsTrigger value="ranking">Ranking</TabsTrigger>
          <TabsTrigger value="help">Como Jogar</TabsTrigger>
        </TabsList>

        <TabsContent value="start" className="space-y-6">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-green-700 dark:text-green-500 mb-2">Quiz de Futebol do JG</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Teste seus conhecimentos sobre futebol brasileiro e europeu!
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="playerName" className="block text-sm font-medium mb-1">
                    Digite seu nome para começar
                  </label>
                  <Input
                    id="playerName"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    placeholder="Seu nome"
                    required
                    className="w-full"
                  />
                </div>

                <div className="flex justify-between items-center">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setShowSettings(!showSettings)}
                    className="flex items-center gap-1"
                  >
                    <Filter className="h-4 w-4" />
                    {showSettings ? "Ocultar Configurações" : "Configurações"}
                  </Button>

                  <div className="text-sm text-gray-500">
                    {databaseStats ? `${databaseStats.totalQuestions} perguntas disponíveis` : "Carregando..."}
                  </div>
                </div>

                {showSettings && (
                  <div className="border rounded-md p-4 space-y-4 mt-4">
                    <div>
                      <h3 className="font-medium mb-2">Número de Perguntas</h3>
                      <div className="flex items-center gap-4">
                        <Slider
                          value={[localSettings.questionCount]}
                          min={5}
                          max={20}
                          step={5}
                          onValueChange={(value) => handleSettingsChange("questionCount", value[0])}
                          className="flex-1"
                        />
                        <span className="w-8 text-center">{localSettings.questionCount}</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Tempo por Pergunta (segundos)</h3>
                      <div className="flex items-center gap-4">
                        <Slider
                          value={[localSettings.timePerQuestion]}
                          min={3}
                          max={15}
                          step={1}
                          onValueChange={(value) => handleSettingsChange("timePerQuestion", value[0])}
                          className="flex-1"
                        />
                        <span className="w-8 text-center">{localSettings.timePerQuestion}s</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Dificuldade</h3>
                      <RadioGroup
                        value={localSettings.difficulty || ""}
                        onValueChange={(value) => handleSettingsChange("difficulty", value || null)}
                        className="flex space-x-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="" id="all-difficulty" />
                          <Label htmlFor="all-difficulty">Todas</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="facil" id="easy" />
                          <Label htmlFor="easy">Fácil</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="medio" id="medium" />
                          <Label htmlFor="medium">Médio</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="dificil" id="hard" />
                          <Label htmlFor="hard">Difícil</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Categorias</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {databaseStats &&
                          Object.keys(databaseStats.categoryCounts).map((category) => (
                            <div key={category} className="flex items-center space-x-2">
                              <Checkbox
                                id={`category-${category}`}
                                checked={localSettings.categories.includes(category)}
                                onCheckedChange={() => handleCategoryToggle(category)}
                              />
                              <Label htmlFor={`category-${category}`} className="text-sm">
                                {categoryLabels[category] || category}
                                <span className="text-xs text-gray-500 ml-1">
                                  ({databaseStats.categoryCounts[category]})
                                </span>
                              </Label>
                            </div>
                          ))}
                      </div>
                      {localSettings.categories.length === 0 && (
                        <p className="text-xs text-gray-500 mt-2">
                          Nenhuma categoria selecionada = todas as categorias
                        </p>
                      )}
                    </div>
                  </div>
                )}

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                  Iniciar Quiz
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <p>
              {localSettings.questionCount} perguntas • {localSettings.timePerQuestion} segundos por pergunta • 3 dicas
              disponíveis
            </p>
          </div>
        </TabsContent>

        <TabsContent value="ranking">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4 text-center flex items-center justify-center">
                <Trophy className="mr-2 h-5 w-5 text-yellow-500" />
                Top Jogadores
              </h2>

              {displayRanking.length > 0 ? (
                <div className="space-y-3">
                  {displayRanking.slice(0, 10).map((player, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center p-3 rounded-lg ${
                        index < 3
                          ? "bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800"
                          : ""
                      }`}
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-8 h-8 flex items-center justify-center rounded-full mr-3 ${
                            index === 0
                              ? "bg-yellow-100 text-yellow-700"
                              : index === 1
                                ? "bg-gray-100 text-gray-700"
                                : index === 2
                                  ? "bg-amber-100 text-amber-700"
                                  : "bg-gray-50 text-gray-500"
                          }`}
                        >
                          {index + 1}
                        </div>
                        <span className="font-medium">{player.name}</span>
                      </div>
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                        {player.score} pts
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <p>Ainda não há jogadores no ranking.</p>
                  <p className="text-sm mt-2">Seja o primeiro a jogar!</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="help">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4 text-center flex items-center justify-center">
                <HelpCircle className="mr-2 h-5 w-5 text-blue-500" />
                Como Jogar
              </h2>

              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Regras do Quiz:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>O quiz contém 10 perguntas sobre futebol brasileiro e europeu</li>
                    <li>Você tem 5 segundos para responder cada pergunta</li>
                    <li>Se o tempo acabar, a pergunta será considerada errada</li>
                    <li>Cada resposta correta vale 1 ponto</li>
                    <li>Você pode usar até 3 dicas durante o quiz</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Sistema de Dicas:</h3>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-100 dark:border-blue-800">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <Info className="inline h-4 w-4 mr-1 text-blue-500" />
                      Você tem direito a 3 dicas durante todo o quiz. Cada dica elimina uma opção incorreta, facilitando
                      sua escolha. Use suas dicas estrategicamente!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

