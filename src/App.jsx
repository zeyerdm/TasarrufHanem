import React from 'react'
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Leaf, User, ShieldCheck } from 'lucide-react'
import './index.css'

import Home from './pages/Home'
import Login from './pages/Login'
import DashboardPage from './pages/DashboardPage'

// Navbar component inside Router context
const Navbar = () => {
  const location = useLocation()
  
  return (
    <nav className="navbar" style={{ padding: '0.5rem 0', height: '60px' }}>
      <div className="container flex justify-between items-center h-full">
        <Link to="/" className="flex items-center gap-2 cursor-pointer" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Leaf className="text-emerald-500" size={24} color="#10b981" />
          <span className="text-lg font-bold tracking-tight">Tasarruf<span className="gradient-text">Hanem</span></span>
        </Link>
        <div className="flex gap-4 items-center">
          <div className="badge flex items-center gap-1" style={{ border: 'none', padding: '0.2rem 0.4rem', fontSize: '0.75rem' }}>
            <ShieldCheck size={14} /> KVKK Dostu
          </div>
          {location.pathname !== '/login' && (
            <Link to="/login" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 cursor-pointer" title="Giriş Yap">
              <User size={16} color="#94a3b8" />
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

function App() {
  return (
    <Router>
      <Navbar />
      <main className="container" style={{ padding: '1rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
