"use client"

import { useState, useEffect, useRef } from "react"
import { Volume2, VolumeX } from "lucide-react"

interface AudioControllerProps {
  className?: string
}

export default function AudioController({ className = "" }: AudioControllerProps) {
  const [isMuted, setIsMuted] = useState(true)
  const audioContextRef = useRef<AudioContext | null>(null)
  const oscillatorRef = useRef<OscillatorNode | null>(null)
  const gainNodeRef = useRef<GainNode | null>(null)

  // Criar uma melodia simples de futebol usando Web Audio API
  const createFootballMelody = () => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      }

      const ctx = audioContextRef.current
      const now = ctx.currentTime

      // Criar um nó de ganho para controlar o volume
      const gainNode = ctx.createGain()
      gainNode.gain.value = 0.2 // Volume baixo
      gainNode.connect(ctx.destination)
      gainNodeRef.current = gainNode

      // Função para tocar uma nota
      const playNote = (frequency: number, startTime: number, duration: number) => {
        const osc = ctx.createOscillator()
        osc.type = "sine"
        osc.frequency.value = frequency

        const noteGain = ctx.createGain()
        noteGain.gain.setValueAtTime(0.2, startTime)
        noteGain.gain.exponentialRampToValueAtTime(0.01, startTime + duration - 0.05)

        osc.connect(noteGain)
        noteGain.connect(gainNode)

        osc.start(startTime)
        osc.stop(startTime + duration)
      }

      // Melodia simples inspirada em cantos de futebol
      // Notas da escala de C maior
      const C4 = 261.63
      const D4 = 293.66
      const E4 = 329.63
      const F4 = 349.23
      const G4 = 392.0
      const A4 = 440.0

      // Tocar uma sequência de notas em loop
      const loopMelody = (time: number) => {
        // Primeira parte da melodia
        playNote(G4, time, 0.25)
        playNote(G4, time + 0.25, 0.25)
        playNote(A4, time + 0.5, 0.5)
        playNote(G4, time + 1, 0.5)
        playNote(C4, time + 1.5, 0.5)

        // Segunda parte
        playNote(G4, time + 2, 0.25)
        playNote(G4, time + 2.25, 0.25)
        playNote(A4, time + 2.5, 0.5)
        playNote(G4, time + 3, 0.5)
        playNote(D4, time + 3.5, 0.5)

        // Terceira parte
        playNote(G4, time + 4, 0.25)
        playNote(G4, time + 4.25, 0.25)
        playNote(G4, time + 4.5, 0.25)
        playNote(E4, time + 4.75, 0.25)
        playNote(C4, time + 5, 0.5)
        playNote(D4, time + 5.5, 0.5)
        playNote(C4, time + 6, 1)

        // Agendar a próxima repetição
        setTimeout(() => {
          if (!isMuted) {
            loopMelody(ctx.currentTime)
          }
        }, 6900) // Um pouco menos que a duração total para evitar gaps
      }

      // Iniciar a melodia
      loopMelody(now)
    } catch (error) {
      console.warn("Web Audio API não suportada:", error)
    }
  }

  const stopAudio = () => {
    if (gainNodeRef.current) {
      gainNodeRef.current.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current!.currentTime + 0.5)
      setTimeout(() => {
        if (oscillatorRef.current) {
          oscillatorRef.current.stop()
          oscillatorRef.current = null
        }
      }, 500)
    }
  }

  useEffect(() => {
    // Limpar ao desmontar
    return () => {
      stopAudio()
      if (audioContextRef.current && audioContextRef.current.state !== "closed") {
        audioContextRef.current.close()
      }
    }
  }, [])

  useEffect(() => {
    if (!isMuted) {
      createFootballMelody()
    } else {
      stopAudio()
    }
  }, [isMuted])

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <button
      onClick={toggleMute}
      className={`flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white px-2 py-1 rounded-full transition-colors ${className}`}
      aria-label={isMuted ? "Ativar música" : "Desativar música"}
    >
      {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      <span className="text-xs">{isMuted ? "Música: Off" : "Música: On"}</span>
    </button>
  )
}

