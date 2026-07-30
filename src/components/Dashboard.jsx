import React, { useState } from 'react'
import { Droplet, Zap, Flame, Camera, MapPin, Wallet, Gift, CheckCircle2, Leaf, ArrowRight } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const resourceData = [
  { name: 'Su', ma: 15, current: 12 },
  { name: 'Elek', ma: 250, current: 190 },
  { name: 'Gaz', ma: 50, current: 40 },
]

const Dashboard = () => {
  const [verifying, setVerifying] = useState(false)
  const [verified, setVerified] = useState(false)

  const handleAIUpload = () => {
    setVerifying(true)
    setTimeout(() => {
      setVerifying(false)
      setVerified(true)
    }, 1500)
  }

  return (
    <div className="flex-col gap-4" style={{ height: 'calc(100vh - 120px)', display: 'flex', justifyContent: 'center' }}>
      
      {/* 1. Header & Wallet */}
      <div className="flex justify-between items-center gap-4">
        <div>
          <h1 style={{ fontSize: '1.8rem', lineHeight: 1.1, marginBottom: '0.1rem' }}>
            Merhaba, <span className="gradient-text">Zeynep</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Bugün yeşil dönüşüme katkı sağlamak için harika bir gün.
          </p>
        </div>

        <div className="glass-panel flex items-center gap-3" style={{ padding: '0.75rem 1.25rem', background: 'rgba(16, 185, 129, 0.05)' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Wallet size={20} color="#05070a" />
          </div>
          <div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Yeşil Puan</div>
            <div className="flex items-end gap-1">
              <span style={{ fontSize: '1.6rem', fontWeight: 800, lineHeight: 1, color: 'white' }}>1,250</span>
              <span style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.85rem' }}>YP</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Bento Grid */}
      <div className="bento-grid" style={{ gap: '1rem', flex: 1 }}>
        
        {/* Bento Box 1: Resource Saving (Span 2) */}
        <div className="glass-panel bento-col-span-2 flex-col justify-between" style={{ padding: '1.25rem' }}>
          <div className="flex justify-between items-start">
            <div>
              <div className="badge mb-1 inline-block" style={{ fontSize: '0.65rem' }}>Akış 1</div>
              <h3 style={{ fontSize: '1.2rem' }}>Kaynak Tasarrufu</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.1rem' }}>Son 3 aylık ortalamaya göre net tüketiminiz.</p>
            </div>
            <button className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.4rem 0.75rem' }}>Detaylar</button>
          </div>
          
          <div style={{ height: '140px', width: '100%', marginTop: '0.5rem' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={resourceData} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
                <XAxis dataKey="name" stroke="var(--text-muted)" tick={{ fill: 'var(--text-muted)', fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis stroke="var(--text-muted)" tick={{ fill: 'var(--text-muted)', fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--bg-dark)', borderColor: 'var(--surface-border)', borderRadius: '8px', fontSize: '0.8rem' }}
                  itemStyle={{ color: 'var(--text-main)' }}
                  cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                />
                <Bar dataKey="ma" name="Ortalama" fill="var(--surface-border)" radius={[4, 4, 0, 0]} barSize={24} />
                <Bar dataKey="current" name="Güncel" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bento Box 2: AI Verification (Span 1) */}
        <div className="glass-panel flex-col items-center justify-center text-center" style={{ padding: '1.25rem', background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.05) 0%, rgba(15, 23, 42, 0) 100%)' }}>
          <div className="badge badge-green mb-2" style={{ fontSize: '0.65rem' }}>Akış 2 &bull; Yapay Zeka</div>
          
          {!verified ? (
            <>
              <div 
                style={{ 
                  width: '56px', height: '56px', borderRadius: '50%', 
                  background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '0.75rem', color: 'var(--primary)'
                }}
              >
                {verifying ? <Camera size={28} style={{ animation: 'pulse-glow 1s infinite' }} /> : <Leaf size={28} />}
              </div>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Atık Ayrıştırma</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '1rem' }}>
                Organik atığı çöpe atmayın. Video ile doğrulayın.
              </p>
              <button 
                className="btn btn-primary" 
                style={{ width: '100%', padding: '0.5rem', fontSize: '0.85rem' }}
                onClick={handleAIUpload}
                disabled={verifying}
              >
                {verifying ? 'Analiz...' : 'Kamera Aç'}
              </button>
            </>
          ) : (
            <>
              <CheckCircle2 size={48} color="var(--primary)" style={{ marginBottom: '0.5rem', animation: 'fade-in 0.3s ease-out' }} />
              <h3 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.1rem' }}>Harika İş!</h3>
              <p style={{ color: 'var(--text-main)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>+50 YP Eklendi</p>
              <button className="btn btn-secondary" style={{ width: '100%', padding: '0.5rem', fontSize: '0.85rem' }} onClick={() => setVerified(false)}>Yeni Atık</button>
            </>
          )}
        </div>

        {/* Bento Box 3: Smart Container Map / Status (Span 1) */}
        <div className="glass-panel flex justify-between items-center" style={{ padding: '1rem 1.25rem' }}>
          <div className="flex items-center gap-3">
            <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '0.5rem', borderRadius: '10px', color: '#3b82f6' }}>
              <MapPin size={20} />
            </div>
            <div>
              <h4 style={{ fontSize: '0.9rem' }}>En Yakın Konteyner</h4>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>150m (Atatürk Mah.)</div>
            </div>
          </div>
          <ArrowRight size={16} color="var(--text-muted)" />
        </div>

        {/* Bento Box 4: Rewards (Span 2) */}
        <div className="glass-panel bento-col-span-2 flex justify-between items-center" style={{ padding: '1rem 1.25rem' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.1rem' }}>Ödüller</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Puanlarınızı anında harcayın.</p>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-secondary flex items-center gap-1" style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem' }}><Droplet size={14} color="#3b82f6"/> Fatura</button>
            <button className="btn btn-secondary flex items-center gap-1" style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem' }}><Gift size={14} color="#f59e0b"/> Market</button>
            <button className="btn btn-secondary flex items-center gap-1" style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem' }}><Zap size={14} color="var(--primary)"/> Ulaşım</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard
