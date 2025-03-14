// Classe para gerenciar efeitos sonoros
class SoundEffects {
  private audioContext: AudioContext | null = null
  private muted = false

  constructor() {
    // Inicializar o AudioContext sob demanda para evitar problemas com políticas de autoplay
    this.initAudioContext()
  }

  private initAudioContext() {
    try {
      // Criar AudioContext apenas quando necessário
      if (!this.audioContext && typeof window !== "undefined") {
        this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      }
    } catch (error) {
      console.warn("Web Audio API não suportada neste navegador:", error)
    }
  }

  // Gerar som de tick (contagem regressiva)
  playTick(volume = 0.3) {
    if (this.muted || !this.audioContext) return

    try {
      this.initAudioContext()

      // Criar oscilador para som de tick
      const oscillator = this.audioContext.createOscillator()
      const gainNode = this.audioContext.createGain()

      oscillator.type = "sine"
      oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime)
      oscillator.frequency.exponentialRampToValueAtTime(500, this.audioContext.currentTime + 0.1)

      gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1)

      oscillator.connect(gainNode)
      gainNode.connect(this.audioContext.destination)

      oscillator.start()
      oscillator.stop(this.audioContext.currentTime + 0.1)
    } catch (error) {
      console.warn("Erro ao reproduzir som de tick:", error)
    }
  }

  // Gerar som de resposta correta
  playCorrect(volume = 0.5) {
    if (this.muted || !this.audioContext) return

    try {
      this.initAudioContext()

      // Criar oscilador para som de resposta correta
      const oscillator = this.audioContext.createOscillator()
      const gainNode = this.audioContext.createGain()

      oscillator.type = "sine"
      oscillator.frequency.setValueAtTime(440, this.audioContext.currentTime) // Nota A4
      oscillator.frequency.setValueAtTime(554.37, this.audioContext.currentTime + 0.1) // Nota C#5
      oscillator.frequency.setValueAtTime(659.25, this.audioContext.currentTime + 0.2) // Nota E5

      gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3)

      oscillator.connect(gainNode)
      gainNode.connect(this.audioContext.destination)

      oscillator.start()
      oscillator.stop(this.audioContext.currentTime + 0.3)
    } catch (error) {
      console.warn("Erro ao reproduzir som de resposta correta:", error)
    }
  }

  // Gerar som de resposta incorreta
  playWrong(volume = 0.5) {
    if (this.muted || !this.audioContext) return

    try {
      this.initAudioContext()

      // Criar oscilador para som de resposta incorreta
      const oscillator = this.audioContext.createOscillator()
      const gainNode = this.audioContext.createGain()

      oscillator.type = "sine"
      oscillator.frequency.setValueAtTime(220, this.audioContext.currentTime) // Nota A3
      oscillator.frequency.setValueAtTime(196, this.audioContext.currentTime + 0.2) // Nota G3

      gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.4)

      oscillator.connect(gainNode)
      gainNode.connect(this.audioContext.destination)

      oscillator.start()
      oscillator.stop(this.audioContext.currentTime + 0.4)
    } catch (error) {
      console.warn("Erro ao reproduzir som de resposta incorreta:", error)
    }
  }

  // Gerar som de dica
  playHint(volume = 0.4) {
    if (this.muted || !this.audioContext) return

    try {
      this.initAudioContext()

      // Criar oscilador para som de dica
      const oscillator = this.audioContext.createOscillator()
      const gainNode = this.audioContext.createGain()

      oscillator.type = "sine"
      oscillator.frequency.setValueAtTime(600, this.audioContext.currentTime)
      oscillator.frequency.exponentialRampToValueAtTime(900, this.audioContext.currentTime + 0.1)
      oscillator.frequency.exponentialRampToValueAtTime(600, this.audioContext.currentTime + 0.2)

      gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.2)

      oscillator.connect(gainNode)
      gainNode.connect(this.audioContext.destination)

      oscillator.start()
      oscillator.stop(this.audioContext.currentTime + 0.2)
    } catch (error) {
      console.warn("Erro ao reproduzir som de dica:", error)
    }
  }

  setMuted(muted: boolean): void {
    this.muted = muted
  }

  isMuted(): boolean {
    return this.muted
  }

  toggleMute(): boolean {
    this.muted = !this.muted
    return this.muted
  }
}

// Exportar uma única instância para uso em toda a aplicação
export const soundEffects = new SoundEffects()

