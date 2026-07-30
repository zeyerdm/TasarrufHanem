import React, { useState } from 'react'
import { Droplet, Zap, Flame, Camera, MapPin, Wallet, Gift, CheckCircle2, Leaf, ArrowRight } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const resourceData = [
  { name: 'Su', ma: 15, current: 12 },
  { name: 'Elek.', ma: 250, current: 190 },
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
    <div className="flex-col gap-6" style={{ marginTop: '1rem' }}>
      
      {/* 1. Header & Wallet (Top Row) */}
      <div className="flex-col md:flex-row justify-between items-center gap-6" style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '2.2rem', lineHeight: 1.1, marginBottom: '0.25rem' }}>
            Merhaba, <span className="gradient-text">Zeynep</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
            Bugün yeşil dönüşüme katkı sağlamak için harika bir gün.
          </p>
        </div>

        <div className="glass-panel flex items-center gap-4" style={{ padding: '1rem 1.5rem', background: 'rgba(16, 185, 129, 0.05)' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Wallet size={24} color="#05070a" />
          </div>
          <div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Yeşil Puan</div>
            <div className="flex items-end gap-1">
              <span style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1, color: 'white' }}>1,250</span>
              <span style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '1rem' }}>YP</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Bento Grid */}
      <div className="bento-grid">
        
        {/* Bento Box 1: Resource Saving (Span 2) */}
        <div className="glass-panel bento-col-span-2 flex-col justify-between" style={{ minHeight: '320px', animationDelay: '0.1s' }}>
          <div className="flex justify-between items-start">
            <div>
              <div className="badge mb-2 inline-block">Akış 1</div>
              <h3 style={{ fontSize: '1.4rem' }}>Kaynak Tasarrufu</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>Son 3 aylık ortalamaya göre net tüketiminiz.</p>
            </div>
            <button className="btn btn-secondary" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>Detaylar</button>
          </div>
          
          <div style={{ height: '180px', width: '100%', marginTop: '1.5rem' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={resourceData} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
                <XAxis dataKey="name" stroke="var(--text-muted)" tick={{ fill: 'var(--text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis stroke="var(--text-muted)" tick={{ fill: 'var(--text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--bg-dark)', borderColor: 'var(--surface-border)', borderRadius: '8px' }}
                  itemStyle={{ color: 'var(--text-main)' }}
                  cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                />
                <Bar dataKey="ma" name="Ortalama" fill="var(--surface-border)" radius={[4, 4, 0, 0]} barSize={32} />
                <Bar dataKey="current" name="Güncel" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bento Box 2: AI Verification (Span 1) */}
        <div className="glass-panel flex-col items-center justify-center text-center" style={{ minHeight: '320px', animationDelay: '0.2s', background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.05) 0%, rgba(15, 23, 42, 0) 100%)' }}>
          <div className="badge badge-green mb-4">Akış 2 &bull; Yapay Zeka</div>
          
          {!verified ? (
            <>
              <div 
                style={{ 
                  width: '80px', height: '80px', borderRadius: '50%', 
                  background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1rem', color: 'var(--primary)'
                }}
              >
                {verifying ? <Camera size={36} style={{ animation: 'pulse-glow 1s infinite' }} /> : <Leaf size={36} />}
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Atık Ayrıştırma</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem', px: 2 }}>
                Organik atığınızı çöpe atmayın. 3 sn video ile doğrulayın, puan kazanın.
              </p>
              <button 
                className="btn btn-primary" 
                style={{ width: '100%' }}
                onClick={handleAIUpload}
                disabled={verifying}
              >
                {verifying ? 'Analiz Ediliyor...' : 'Kamerayı Aç'}
              </button>
            </>
          ) : (
            <>
              <CheckCircle2 size={64} color="var(--primary)" style={{ marginBottom: '1rem', animation: 'fade-in 0.3s ease-out' }} />
              <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '0.25rem' }}>Harika İş!</h3>
              <p style={{ color: 'var(--text-main)', fontSize: '1rem', marginBottom: '1rem' }}>+50 YP Eklendi</p>
              <button className="btn btn-secondary" style={{ width: '100%' }} onClick={() => setVerified(false)}>Yeni Atık</button>
            </>
          )}
        </div>

        {/* Bento Box 3: Smart Container Map / Status (Span 1) */}
        <div className="glass-panel flex justify-between items-center" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-3">
            <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '0.75rem', borderRadius: '12px', color: '#3b82f6' }}>
              <MapPin size={24} />
            </div>
            <div>
              <h4 style={{ fontSize: '1rem' }}>En Yakın Konteyner</h4>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>150m ileride (Atatürk Mah.)</div>
            </div>
          </div>
          <ArrowRight size={20} color="var(--text-muted)" />
        </div>

        {/* Bento Box 4: Rewards (Span 2) */}
        <div className="glass-panel bento-col-span-2 flex justify-between items-center" style={{ animationDelay: '0.4s' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Ödüller & Dönüşüm</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Puanlarınızı anında harcayın.</p>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-secondary flex items-center gap-2" style={{ padding: '0.5rem 1rem' }}><Droplet size={16} color="#3b82f6"/> Fatura</button>
            <button className="btn btn-secondary flex items-center gap-2" style={{ padding: '0.5rem 1rem' }}><Gift size={16} color="#f59e0b"/> Market</button>
            <button className="btn btn-secondary flex items-center gap-2" style={{ padding: '0.5rem 1rem' }}><Zap size={16} color="var(--primary)"/> Ulaşım</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard
