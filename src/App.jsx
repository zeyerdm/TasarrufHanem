import React from 'react'
import { Leaf, User, ShieldCheck } from 'lucide-react'
import './index.css'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <>
      <nav className="navbar" style={{ padding: '0.5rem 0', height: '50px' }}>
        <div className="container flex justify-between items-center h-full">
          <div className="flex items-center gap-2 cursor-pointer">
            <Leaf className="text-emerald-500" size={20} color="#10b981" />
            <span className="text-lg font-bold tracking-tight">Tasarruf<span className="gradient-text">Hanem</span></span>
          </div>
          <div className="flex gap-3 items-center">
            <div className="badge flex items-center gap-1" style={{ border: 'none', padding: '0.2rem 0.4rem', fontSize: '0.65rem' }}>
              <ShieldCheck size={12} /> KVKK Dostu
            </div>
            <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 cursor-pointer">
              <User size={14} color="#94a3b8" />
            </div>
          </div>
        </div>
      </nav>

      <main className="container" style={{ padding: '0.75rem 1rem', height: 'calc(100vh - 50px)', display: 'flex', flexDirection: 'column' }}>
        <Dashboard />
      </main>
    </>
  )
}

export default App
