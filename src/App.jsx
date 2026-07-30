import React from 'react'
import { Leaf, User, ShieldCheck } from 'lucide-react'
import './index.css'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer">
            <Leaf className="text-emerald-500" size={28} color="#10b981" />
            <span className="text-xl font-bold tracking-tight">Tasarruf<span className="gradient-text">Hanem</span></span>
          </div>
          <div className="flex gap-4 items-center">
            <div className="badge flex items-center gap-1" style={{ border: 'none' }}>
              <ShieldCheck size={16} /> KVKK Dostu
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 ml-2 cursor-pointer hover:border-emerald-500 transition-colors">
              <User size={20} color="#94a3b8" />
            </div>
          </div>
        </div>
      </nav>

      <main className="container" style={{ padding: '2rem 1.5rem', paddingBottom: '4rem' }}>
        <Dashboard />
      </main>
    </>
  )
}

export default App
