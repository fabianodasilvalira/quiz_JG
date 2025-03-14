"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Lightbulb, AlertCircle, Volume2, VolumeX } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import type { Question } from "@/data/questions-structure"
import type { QuizState } from "./quiz-app"
import { soundEffects } from "@/utils/sound-effects"

interface QuizScreenProps {
  questions: Question[]
  onComplete: (score: number, hintsUsed: number) => void
  playerName: string
  quizState: QuizState
  onUseHint: () => boolean
  onNextQuestion: () => void
  timePerQuestion?: number
}

export default function QuizScreen({
  questions,
  onComplete,
  playerName,
  quizState,
  onUseHint,
  onNextQuestion,
  timePerQuestion = 5,
}: QuizScreenProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [timeLeft, setTimeLeft] = useState(timePerQuestion)
  const [isAnswered, setIsAnswered] = useState(false)
  const [eliminatedOption, setEliminatedOption] = useState<string | null>(null)
  const [showHintAnimation, setShowHintAnimation] = useState(false)
  const [soundsEnabled, setSoundsEnabled] = useState(true)

  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const lastTickTimeRef = useRef<number>(0)
  const currentQuestion = questions[currentQuestionIndex]
  const progress = (currentQuestionIndex / questions.length) * 100

  // Resetar o tempo quando o timePerQuestion mudar
  useEffect(() => {
    setTimeLeft(timePerQuestion)
  }, [timePerQuestion])

  const toggleSounds = () => {
    const newState = !soundsEnabled
    setSoundsEnabled(newState)
    soundEffects.setMuted(!newState)
  }

  const goToNextQuestion = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
      setSelectedAnswer(null)
      setTimeLeft(timePerQuestion)
      setIsAnswered(false)
      setEliminatedOption(null)
      onNextQuestion()
    } else {
      onComplete(score, quizState.hintsUsed)
    }
  }, [currentQuestionIndex, questions.length, onComplete, score, quizState.hintsUsed, onNextQuestion, timePerQuestion])

  const handleAnswerSelect = (answer: string) => {
    if (isAnswered) return

    setSelectedAnswer(answer)
    setIsAnswered(true)

    if (answer === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1)
      soundEffects.playCorrect(0.6)
    } else {
      soundEffects.playWrong(0.6)
    }

    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }

    // Wait 1.5 seconds to show the result before moving to next question
    setTimeout(() => {
      goToNextQuestion()
    }, 1500)
  }

  const handleUseHint = () => {
    if (isAnswered || eliminatedOption) return

    const hintUsed = onUseHint()
    if (!hintUsed) return

    soundEffects.playHint(0.5)

    // Find an incorrect option to eliminate
    const incorrectOptions = currentQuestion.options.filter((option) => option !== currentQuestion.correctAnswer)

    if (incorrectOptions.length > 0) {
      const randomIndex = Math.floor(Math.random() * incorrectOptions.length)
      setEliminatedOption(incorrectOptions[randomIndex])
      setShowHintAnimation(true)

      setTimeout(() => {
        setShowHintAnimation(false)
      }, 1500)
    }
  }

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        // Tocar som de tick quando o tempo estiver acabando
        const now = Date.now()
        if (prev <= 3 && now - lastTickTimeRef.current > 900) {
          soundEffects.playTick(0.3)
          lastTickTimeRef.current = now
        }

        if (prev <= 1) {
          if (timerRef.current) {
            clearInterval(timerRef.current)
            timerRef.current = null
          }

          if (!isAnswered) {
            setIsAnswered(true)
            soundEffects.playWrong(0.6)
            setTimeout(() => {
              goToNextQuestion()
            }, 1000)
          }
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }, [currentQuestionIndex, isAnswered, goToNextQuestion])

  const getAnswerButtonClass = (answer: string) => {
    if (answer === eliminatedOption) {
      return "opacity-50 line-through"
    }

    if (!isAnswered) return ""

    if (answer === currentQuestion.correctAnswer) {
      return "bg-green-100 border-green-500 dark:bg-green-900 dark:border-green-500"
    }

    if (answer === selectedAnswer) {
      return "bg-red-100 border-red-500 dark:bg-red-900 dark:border-red-500"
    }

    return "opacity-50"
  }

  return (
    <div className="p-6 md:p-8">
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm font-medium">
          Jogador: <span className="font-bold">{playerName}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-sm font-medium">
            Pontuação: <span className="font-bold">{score}</span>
          </div>
          <button
            onClick={toggleSounds}
            className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label={soundsEnabled ? "Desativar sons" : "Ativar sons"}
          >
            {soundsEnabled ? (
              <Volume2 className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            ) : (
              <VolumeX className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            )}
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mb-2">
        <div className="text-sm">
          Pergunta {currentQuestionIndex + 1} de {questions.length}
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center text-sm font-medium">
            <Clock className="h-4 w-4 mr-1" />
            <span className={timeLeft <= 2 ? "text-red-500" : ""}>{timeLeft}s</span>
          </div>

          <Button
            variant="outline"
            size="sm"
            className={`h-8 px-2 ${
              quizState.hintsUsed >= quizState.maxHints || isAnswered || eliminatedOption
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-amber-50 hover:text-amber-600"
            }`}
            onClick={handleUseHint}
            disabled={quizState.hintsUsed >= quizState.maxHints || isAnswered || eliminatedOption !== null}
          >
            <Lightbulb className="h-4 w-4 mr-1 text-amber-500" />
            <span className="text-xs">Dica ({quizState.maxHints - quizState.hintsUsed})</span>
          </Button>
        </div>
      </div>

      <Progress value={progress} className="mb-6 h-2" />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="mb-6 border-2">
            <CardContent className="p-4 md:p-6">
              <h2 className="text-xl font-bold">{currentQuestion.question}</h2>
            </CardContent>
          </Card>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Button
                  variant="outline"
                  className={`w-full justify-start text-left p-4 h-auto transition-all duration-200 ${getAnswerButtonClass(
                    option,
                  )}`}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={isAnswered || option === eliminatedOption}
                >
                  <span className="mr-2 font-bold">{String.fromCharCode(65 + index)}.</span> {option}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Hint animation */}
      {showHintAnimation && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-amber-100 text-amber-800 px-6 py-4 rounded-lg shadow-lg flex items-center">
            <AlertCircle className="h-5 w-5 mr-2" />
            <span>Uma opção incorreta foi eliminada!</span>
          </div>
        </motion.div>
      )}
    </div>
  )
}

