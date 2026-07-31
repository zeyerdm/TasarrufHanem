import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ShieldCheck, Leaf, ArrowRight } from 'lucide-react'

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    // Mock login -> redirect to dashboard
    navigate('/dashboard')
  }

  return (
    <div className="flex-col items-center justify-center gap-8" style={{ minHeight: 'calc(100vh - 120px)', padding: '2rem 0' }}>
      
      <div className="text-center flex-col items-center gap-2">
        <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
          <Leaf size={32} />
        </div>
        <h1 style={{ fontSize: '2.5rem' }}>Giriş Yap</h1>
        <p style={{ color: 'var(--text-muted)' }}>TasarrufHanem cüzdanınıza erişin.</p>
      </div>

      <div className="glass-panel" style={{ width: '100%', maxWidth: '400px', padding: '2rem' }}>
        
        <div className="badge flex items-center justify-center gap-2 mb-6" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#60a5fa', borderColor: 'rgba(59, 130, 246, 0.2)', padding: '0.75rem', width: '100%', fontSize: '0.75rem' }}>
          <ShieldCheck size={16}/> KVKK Dostu: Kimlik No İstenmez
        </div>

        <form onSubmit={handleLogin} className="flex-col gap-5">
          <div className="flex-col gap-2">
            <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Telefon Numarası</label>
            <input type="tel" className="input-field" placeholder="05XX XXX XX XX" required style={{ padding: '1rem' }} />
          </div>
          
          <div className="flex-col gap-2">
            <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Abonelik / Tesisat No</label>
            <input type="text" className="input-field" placeholder="Faturadaki abone numarası" required style={{ padding: '1rem' }} />
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Sisteme yalnızca bir kez kaydedilebilir, sahte hesap engellenir.</span>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1rem', marginTop: '1rem' }}>
            Sisteme Gir <ArrowRight size={18} />
          </button>
        </form>

      </div>
    </div>
  )
}

export default Login
