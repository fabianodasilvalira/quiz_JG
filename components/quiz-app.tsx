"use client"

import { useState, useEffect } from "react"
import StartScreen from "./start-screen"
import QuizScreen from "./quiz-screen"
import ResultScreen from "./result-screen"
import { getRandomQuestions, getDatabaseStats } from "@/utils/questions-manager"
import type { Question } from "@/data/questions-structure"

export type Player = {
  name: string
  score: number
}

export type QuizState = {
  hintsUsed: number
  maxHints: number
  currentHintUsed: boolean
}

export type QuizSettings = {
  questionCount: number
  timePerQuestion: number
  categories: string[]
  difficulty: string | null
}

export default function QuizApp() {
  const [screen, setScreen] = useState<"start" | "quiz" | "result">("start")
  const [currentPlayer, setCurrentPlayer] = useState<Player>({ name: "", score: 0 })
  const [ranking, setRanking] = useState<Player[]>([])
  const [quizState, setQuizState] = useState<QuizState>({
    hintsUsed: 0,
    maxHints: 3,
    currentHintUsed: false,
  })
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([])
  const [quizSettings, setQuizSettings] = useState<QuizSettings>({
    questionCount: 10,
    timePerQuestion: 5,
    categories: [],
    difficulty: null,
  })
  const [databaseStats, setDatabaseStats] = useState<any>(null)

  // Carregar ranking e estatísticas do banco de dados ao iniciar
  useEffect(() => {
    try {
      const savedRanking = JSON.parse(localStorage.getItem("quizRanking") || "[]")
      setRanking(savedRanking)

      // Carregar estatísticas do banco de dados
      const stats = getDatabaseStats()
      setDatabaseStats(stats)
    } catch (error) {
      console.error("Error loading data:", error)
    }
  }, [])

  const handleStartQuiz = (playerName: string, settings?: Partial<QuizSettings>) => {
    // Atualizar configurações se fornecidas
    const updatedSettings = settings ? { ...quizSettings, ...settings } : quizSettings

    setQuizSettings(updatedSettings)

    // Obter perguntas aleatórias com base nas configurações
    const questions = getRandomQuestions(
      updatedSettings.questionCount,
      updatedSettings.categories.length > 0 ? (updatedSettings.categories as any[]) : undefined,
      (updatedSettings.difficulty as any) || undefined,
    )

    setQuizQuestions(questions)
    setCurrentPlayer({ name: playerName, score: 0 })
    setQuizState({
      hintsUsed: 0,
      maxHints: 3,
      currentHintUsed: false,
    })
    setScreen("quiz")
  }

  const handleQuizComplete = (score: number, hintsUsed: number) => {
    const updatedPlayer = { ...currentPlayer, score }
    setCurrentPlayer(updatedPlayer)

    // Update ranking
    const newRanking = [...ranking, updatedPlayer].sort((a, b) => b.score - a.score)

    // Save to localStorage
    try {
      const existingRanking = JSON.parse(localStorage.getItem("quizRanking") || "[]")
      const updatedRanking = [...existingRanking, updatedPlayer].sort((a, b) => b.score - a.score).slice(0, 10) // Keep only top 10

      localStorage.setItem("quizRanking", JSON.stringify(updatedRanking))
      setRanking(updatedRanking)
    } catch (error) {
      console.error("Error saving to localStorage:", error)
    }

    setScreen("result")
  }

  const handlePlayAgain = () => {
    setScreen("start")
  }

  const handleUseHint = () => {
    if (quizState.hintsUsed < quizState.maxHints && !quizState.currentHintUsed) {
      setQuizState({
        ...quizState,
        hintsUsed: quizState.hintsUsed + 1,
        currentHintUsed: true,
      })
      return true
    }
    return false
  }

  const handleNextQuestion = () => {
    setQuizState({
      ...quizState,
      currentHintUsed: false,
    })
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden transition-all duration-300">
      {screen === "start" && (
        <StartScreen
          onStart={handleStartQuiz}
          ranking={ranking}
          databaseStats={databaseStats}
          settings={quizSettings}
        />
      )}
      {screen === "quiz" && (
        <QuizScreen
          questions={quizQuestions}
          onComplete={handleQuizComplete}
          playerName={currentPlayer.name}
          quizState={quizState}
          onUseHint={handleUseHint}
          onNextQuestion={handleNextQuestion}
          timePerQuestion={quizSettings.timePerQuestion}
        />
      )}
      {screen === "result" && (
        <ResultScreen
          player={currentPlayer}
          ranking={ranking}
          onPlayAgain={handlePlayAgain}
          totalQuestions={quizQuestions.length}
          hintsUsed={quizState.hintsUsed}
        />
      )}
    </div>
  )
}

