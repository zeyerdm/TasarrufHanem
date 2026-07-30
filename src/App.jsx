import { useState } from 'react'
import { Leaf, Droplet, Zap, Flame, User, LayoutDashboard, Gift } from 'lucide-react'
import './index.css'
import Hero from './components/Hero'
import Dashboard from './components/Dashboard'

function App() {
  const [activeTab, setActiveTab] = useState('home') // 'home', 'dashboard'

  return (
    <>
      <nav className="navbar">
        <div className="container flex justify-between items-center">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => setActiveTab('home')}
          >
            <Leaf className="text-emerald-500" size={28} color="#10b981" />
            <span className="text-xl font-bold tracking-tight">Tasarruf<span className="gradient-text">Hanem</span></span>
          </div>
          <div className="flex gap-4 items-center">
            <button 
              className={`btn ${activeTab === 'home' ? 'btn-secondary' : 'btn-secondary'}`}
              style={{ background: activeTab === 'home' ? 'var(--surface-hover)' : '' }}
              onClick={() => setActiveTab('home')}
            >
              Ana Sayfa
            </button>
            <button 
              className={`btn ${activeTab === 'dashboard' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setActiveTab('dashboard')}
            >
              <LayoutDashboard size={18} />
              Panel
            </button>
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 ml-2 cursor-pointer hover:border-emerald-500 transition-colors">
              <User size={20} color="#94a3b8" />
            </div>
          </div>
        </div>
      </nav>

      <main className="container" style={{ padding: '2rem 1.5rem', paddingBottom: '4rem' }}>
        {activeTab === 'home' ? <Hero onStart={() => setActiveTab('dashboard')} /> : <Dashboard />}
      </main>
    </>
  )
}

export default App
