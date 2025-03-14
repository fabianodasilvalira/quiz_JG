"use client"

import { Button } from "@/components/ui/button"
import { Trophy, RotateCcw, Share2, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import type { Player } from "./quiz-app"

interface ResultScreenProps {
  player: Player
  ranking: Player[]
  onPlayAgain: () => void
  totalQuestions: number
  hintsUsed: number
}

export default function ResultScreen({ player, ranking, onPlayAgain, totalQuestions, hintsUsed }: ResultScreenProps) {
  const percentage = Math.round((player.score / totalQuestions) * 100)

  let message = ""
  let emoji = ""

  if (percentage >= 80) {
    message = "Impressionante! Você é um verdadeiro craque do futebol!"
    emoji = "🏆"
  } else if (percentage >= 60) {
    message = "Muito bom! Você conhece bastante sobre futebol!"
    emoji = "⚽"
  } else if (percentage >= 40) {
    message = "Bom trabalho! Continue acompanhando o futebol!"
    emoji = "👍"
  } else {
    message = "Continue tentando! Assista mais jogos para melhorar seu conhecimento!"
    emoji = "📺"
  }

  const playerRank = ranking.findIndex((p) => p.name === player.name && p.score === player.score) + 1

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Quiz de Futebol do JG",
          text: `Acabei de marcar ${player.score} de ${totalQuestions} no Quiz de Futebol do JG! Consegue me superar?`,
          url: window.location.href,
        })
        .catch((error) => console.log("Erro ao compartilhar", error))
    } else {
      // Fallback para navegadores que não suportam a API Web Share
      const shareText = `Acabei de marcar ${player.score} de ${totalQuestions} no Quiz de Futebol do JG! Consegue me superar?`
      navigator.clipboard
        .writeText(shareText)
        .then(() => alert("Texto copiado para a área de transferência!"))
        .catch((err) => console.error("Erro ao copiar texto: ", err))
    }
  }

  return (
    <div className="p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
        >
          <div className="w-20 h-20 flex items-center justify-center text-4xl bg-yellow-100 rounded-full mb-4">
            {emoji}
          </div>
        </motion.div>

        <h1 className="text-2xl font-bold text-center mb-2">Resultado Final</h1>

        <p className="text-center mb-6">
          {player.name}, você acertou <span className="font-bold">{player.score}</span> de {totalQuestions} perguntas (
          {percentage}%)
        </p>

        <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-6 mb-6 overflow-hidden">
          <motion.div
            className="bg-green-600 h-6 rounded-full flex items-center justify-center text-white text-sm font-medium"
            style={{ width: "0%" }}
            animate={{ width: `${percentage}%` }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {percentage}%
          </motion.div>
        </div>

        <Card className="w-full mb-6">
          <CardContent className="p-4 md:p-6">
            <div className="text-center space-y-4">
              <p className="text-gray-700 dark:text-gray-300 text-lg">{message}</p>

              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <div className="bg-green-50 dark:bg-green-900/30 px-3 py-1 rounded-full">
                  <span className="font-medium">Pontuação:</span> {player.score} pts
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                  <span className="font-medium">Posição:</span> {playerRank > 0 ? `#${playerRank}` : "N/A"}
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/30 px-3 py-1 rounded-full flex items-center">
                  <Lightbulb className="h-3 w-3 mr-1" />
                  <span className="font-medium">Dicas usadas:</span> {hintsUsed}/3
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {ranking.length > 0 && (
          <div className="w-full mb-8">
            <h2 className="text-xl font-semibold mb-3 text-center flex items-center justify-center">
              <Trophy className="mr-2 h-5 w-5 text-yellow-500" />
              Top Jogadores
            </h2>

            <div className="space-y-3 mt-4">
              {ranking.slice(0, 5).map((rankedPlayer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div
                    className={`flex justify-between items-center p-3 rounded-lg ${
                      rankedPlayer.name === player.name
                        ? "bg-green-100 dark:bg-green-900/40 border border-green-200 dark:border-green-800"
                        : index < 3
                          ? "bg-gray-50 dark:bg-gray-800/40"
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
                      <span className="font-medium">{rankedPlayer.name}</span>
                    </div>
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                      {rankedPlayer.score} pts
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-3 justify-center">
          <Button onClick={onPlayAgain} className="bg-green-600 hover:bg-green-700">
            <RotateCcw className="mr-2 h-4 w-4" />
            Jogar Novamente
          </Button>

          <Button variant="outline" onClick={handleShare}>
            <Share2 className="mr-2 h-4 w-4" />
            Compartilhar
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

