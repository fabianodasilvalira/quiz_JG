export interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: string
  explanation?: string
  category: QuestionCategory
  difficulty: QuestionDifficulty
}

export type QuestionCategory =
  | "brasileirao"
  | "copa_do_brasil"
  | "libertadores"
  | "selecao_brasileira"
  | "premier_league"
  | "la_liga"
  | "serie_a"
  | "bundesliga"
  | "ligue_1"
  | "champions_league"
  | "copa_do_mundo"
  | "euro"
  | "jogadores"
  | "tecnicos"
  | "historia"
  | "estatisticas"
  | "curiosidades"
  | "transferencias"

export type QuestionDifficulty = "facil" | "medio" | "dificil"

export interface QuestionDatabase {
  version: string
  lastUpdated: string
  totalQuestions: number
  categories: Record<QuestionCategory, number>
  questions: Question[]
}

