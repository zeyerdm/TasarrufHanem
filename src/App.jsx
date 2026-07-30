import React from 'react'
import { Leaf, User, ShieldCheck } from 'lucide-react'
import './index.css'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <nav className="navbar" style={{ padding: '0.75rem 0' }}>
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer">
            <Leaf className="text-emerald-500" size={24} color="#10b981" />
            <span className="text-xl font-bold tracking-tight">Tasarruf<span className="gradient-text">Hanem</span></span>
          </div>
          <div className="flex gap-4 items-center">
            <div className="badge flex items-center gap-1" style={{ border: 'none', padding: '0.2rem 0.5rem', fontSize: '0.7rem' }}>
              <ShieldCheck size={14} /> KVKK Dostu
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 ml-1 cursor-pointer hover:border-emerald-500 transition-colors">
              <User size={16} color="#94a3b8" />
            </div>
          </div>
        </div>
      </nav>

      <main className="container" style={{ padding: '1rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Dashboard />
      </main>
    </div>
  )
}

export default App
