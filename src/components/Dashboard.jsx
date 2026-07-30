import React, { useState } from 'react'
import { Droplet, Zap, Flame, Camera, MapPin, Wallet, Gift, CheckCircle2, Leaf, ArrowRight, Info, ShieldCheck, Scale } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const resourceData = [
  { name: 'Su (m³)', ma: 15, current: 12 },
  { name: 'Elek (kWh)', ma: 250, current: 190 },
  { name: 'Gaz (m³)', ma: 50, current: 40 },
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
          <h1 style={{ fontSize: '1.8rem', lineHeight: 1.1, marginBottom: '0.2rem' }}>
            Evden Başlayan <span className="gradient-text">Yeşil Dönüşüm</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Scale size={14} color="var(--primary)" /> Adil Dönüşüm & COP31 Vizyonu ile Enerji Bağımsızlığı
          </p>
        </div>

        <div className="glass-panel flex items-center gap-3" style={{ padding: '0.75rem 1.25rem', background: 'rgba(16, 185, 129, 0.05)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: '-20px', top: '-20px', opacity: 0.1 }}><Leaf size={100} /></div>
          <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Wallet size={20} color="#05070a" />
          </div>
          <div style={{ zIndex: 1 }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Tek Cüzdan: Yeşil Puan</div>
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
        <div className="glass-panel bento-col-span-2 flex-col justify-between" style={{ padding: '1.25rem', position: 'relative' }}>
          <div className="flex justify-between items-start">
            <div>
              <div className="badge mb-1 inline-block" style={{ fontSize: '0.65rem' }}>Kaynak Tasarrufu Modülü</div>
              <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Zap size={16} color="#3b82f6"/> Enerji ve Su Tüketimi
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.2rem', maxWidth: '80%' }}>
                Son 3 aylık hareketli ortalamanın (Moving Average) altına düştükçe puan kazanın. Zamlı TL tutarına değil, net <b>m³/kWh</b> miktarına bakılır. (Boş ev filtresi aktiftir).
              </p>
            </div>
            <div className="badge flex items-center gap-1" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#60a5fa', borderColor: 'rgba(59, 130, 246, 0.2)', fontSize: '0.65rem' }}>
              <ShieldCheck size={12}/> Telefon + Abone No
            </div>
          </div>
          
          <div style={{ height: '140px', width: '100%', marginTop: '0.5rem' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={resourceData} margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
                <XAxis dataKey="name" stroke="var(--text-muted)" tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis stroke="var(--text-muted)" tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--bg-dark)', borderColor: 'var(--surface-border)', borderRadius: '8px', fontSize: '0.8rem' }}
                  itemStyle={{ color: 'var(--text-main)' }}
                  cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                />
                <Bar dataKey="ma" name="3 Aylık Ortalama" fill="var(--surface-border)" radius={[4, 4, 0, 0]} barSize={28} />
                <Bar dataKey="current" name="Net Güncel Tüketim" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={28} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bento Box 2: AI Verification (Span 1) */}
        <div className="glass-panel flex-col items-center justify-center text-center" style={{ padding: '1.25rem', background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.08) 0%, rgba(15, 23, 42, 0) 100%)' }}>
          <div className="badge badge-green mb-2" style={{ fontSize: '0.65rem' }}>Organik Atık Modülü</div>
          
          {!verified ? (
            <>
              <div 
                style={{ 
                  width: '56px', height: '56px', borderRadius: '50%', 
                  background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '0.75rem', color: 'var(--primary)'
                }}
              >
                {verifying ? <Camera size={28} style={{ animation: 'pulse-glow 1s infinite' }} /> : <Flame size={28} />}
              </div>
              <h3 style={{ fontSize: '1.05rem', marginBottom: '0.25rem' }}>Proof of Action (AI)</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                Atık yağ ve organik atık ayrıştırmanızı 3 sn video ile doğrulayın. (Image Hashing ile korunur).
              </p>
              <button 
                className="btn btn-primary" 
                style={{ width: '100%', padding: '0.5rem', fontSize: '0.85rem' }}
                onClick={handleAIUpload}
                disabled={verifying}
              >
                {verifying ? 'CV Denetimi...' : 'Kamerayı Aç / Yükle'}
              </button>
            </>
          ) : (
            <>
              <CheckCircle2 size={48} color="var(--primary)" style={{ marginBottom: '0.5rem', animation: 'fade-in 0.3s ease-out' }} />
              <h3 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.1rem' }}>Doğrulandı!</h3>
              <p style={{ color: 'var(--text-main)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>+50 YP Cüzdanınıza Eklendi</p>
              <button className="btn btn-secondary" style={{ width: '100%', padding: '0.5rem', fontSize: '0.85rem' }} onClick={() => setVerified(false)}>Yeni Kayıt</button>
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
              <h4 style={{ fontSize: '0.85rem' }}>IoT Akıllı Konteyner</h4>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', lineHeight: 1.2, marginTop:'0.1rem' }}>
                150m. Tartım sensörü<br/>ile otomatik QR puanı.
              </div>
            </div>
          </div>
          <ArrowRight size={16} color="var(--text-muted)" />
        </div>

        {/* Bento Box 4: Rewards (Span 2) */}
        <div className="glass-panel bento-col-span-2 flex justify-between items-center" style={{ padding: '1rem 1.25rem' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              Ödüller <Info size={14} color="var(--text-muted)" />
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', maxWidth: '280px' }}>
              EPR Bütçeleri ve TR-ETS (Bölgesel Adil Geçiş Fonu) destekli kazanımlar.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-secondary flex items-center gap-1" style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem' }} title="Belediye İş Birlikleri"><Droplet size={14} color="#3b82f6"/> Fatura İndirimi</button>
            <button className="btn btn-secondary flex items-center gap-1" style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem' }} title="Market Marka Sponsorlukları"><Gift size={14} color="#f59e0b"/> Market Kuponu</button>
            <button className="btn btn-secondary flex items-center gap-1" style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem' }} title="Ulaşım Kartları"><Zap size={14} color="var(--primary)"/> Toplu Taşıma</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard
