import QuizApp from "@/components/quiz-app"
import Footer from "@/components/footer"
import Banner from "@/components/banner"
import AudioController from "@/components/audio-controller"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-green-900">
      {/* Header com banner */}
      <header className="w-full bg-white shadow-md relative">
        <div className="max-w-5xl mx-auto">
          <Banner />

          {/* Controlador de áudio */}
          <div className="absolute top-4 right-4 z-10">
            <AudioController />
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-xl">
          <QuizApp />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

