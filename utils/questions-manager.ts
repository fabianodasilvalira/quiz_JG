import type { QuestionDatabase, Question, QuestionCategory, QuestionDifficulty } from "@/data/questions-structure"
import { allQuestions } from "@/data/questions"

// Inicializa o banco de dados de perguntas
export const fullQuestionDatabase: QuestionDatabase = {
  version: "1.0.0",
  lastUpdated: new Date().toISOString().split("T")[0],
  totalQuestions: allQuestions.length,
  categories: calculateCategoryCounts(allQuestions),
  questions: allQuestions,
}

// Função para calcular a contagem de perguntas por categoria
function calculateCategoryCounts(questions: Question[]): Record<QuestionCategory, number> {
  const counts: Partial<Record<QuestionCategory, number>> = {}

  questions.forEach((question) => {
    if (!counts[question.category]) {
      counts[question.category] = 0
    }
    counts[question.category]!++
  })

  // Garantir que todas as categorias estejam presentes, mesmo que com zero
  const allCategories: QuestionCategory[] = [
    "brasileirao",
    "copa_do_brasil",
    "libertadores",
    "selecao_brasileira",
    "premier_league",
    "la_liga",
    "serie_a",
    "bundesliga",
    "ligue_1",
    "champions_league",
    "copa_do_mundo",
    "euro",
    "jogadores",
    "tecnicos",
    "historia",
    "estatisticas",
    "curiosidades",
    "transferencias",
  ]

  const result = {} as Record<QuestionCategory, number>
  allCategories.forEach((category) => {
    result[category] = counts[category] || 0
  })

  return result
}

// Função para obter perguntas aleatórias
export function getRandomQuestions(
  count: number,
  categories?: QuestionCategory[],
  difficulty?: QuestionDifficulty,
): Question[] {
  let filteredQuestions = [...fullQuestionDatabase.questions]

  // Filtra por categoria se especificado
  if (categories && categories.length > 0) {
    filteredQuestions = filteredQuestions.filter((q) => categories.includes(q.category))
  }

  // Filtra por dificuldade se especificado
  if (difficulty) {
    filteredQuestions = filteredQuestions.filter((q) => q.difficulty === difficulty)
  }

  // Embaralha as perguntas
  const shuffled = filteredQuestions.sort(() => 0.5 - Math.random())

  // Retorna o número solicitado de perguntas ou todas se não houver suficientes
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

// Função para obter perguntas por categoria
export function getQuestionsByCategory(category: QuestionCategory, count?: number): Question[] {
  const categoryQuestions = fullQuestionDatabase.questions.filter((q) => q.category === category)

  if (!count) return categoryQuestions

  // Embaralha e retorna o número solicitado
  const shuffled = categoryQuestions.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

// Função para obter perguntas por dificuldade
export function getQuestionsByDifficulty(difficulty: QuestionDifficulty, count?: number): Question[] {
  const difficultyQuestions = fullQuestionDatabase.questions.filter((q) => q.difficulty === difficulty)

  if (!count) return difficultyQuestions

  // Embaralha e retorna o número solicitado
  const shuffled = difficultyQuestions.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

// Função para obter estatísticas do banco de dados
export function getDatabaseStats(): {
  totalQuestions: number
  categoryCounts: Record<QuestionCategory, number>
  difficultyCounts: Record<QuestionDifficulty, number>
} {
  const difficultyCounts: Record<QuestionDifficulty, number> = {
    facil: 0,
    medio: 0,
    dificil: 0,
  }

  fullQuestionDatabase.questions.forEach((q) => {
    difficultyCounts[q.difficulty]++
  })

  return {
    totalQuestions: fullQuestionDatabase.totalQuestions,
    categoryCounts: fullQuestionDatabase.categories,
    difficultyCounts,
  }
}

