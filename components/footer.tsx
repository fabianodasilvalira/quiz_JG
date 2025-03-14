"use client"

import { useState } from "react"
import AdminPanel from "./admin-panel"

export default function Footer() {
  const [showAdminPanel, setShowAdminPanel] = useState(false)

  return (
    <footer className="w-full py-4 text-center text-white bg-green-950 mt-8 shadow-inner">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-sm font-medium">
          Desenvolvido por{" "}
          <button onClick={() => setShowAdminPanel(true)} className="font-bold hover:underline focus:outline-none">
            Fabiano Lira
          </button>
        </p>
        <p className="text-xs text-green-300 mt-1">© {new Date().getFullYear()} - Todos os direitos reservados</p>
      </div>

      {showAdminPanel && <AdminPanel onClose={() => setShowAdminPanel(false)} />}
    </footer>
  )
}

