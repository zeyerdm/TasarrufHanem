import React, { useState } from 'react'
import { Droplet, Zap, Flame, Camera, UploadCloud, MapPin, Wallet, Gift, CheckCircle2, Leaf, Cpu } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

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
    }, 2000)
  }

  return (
    <div className="flex-col gap-8" style={{ animation: 'fade-in 0.5s ease-out' }}>
      
      {/* Header & Wallet Section */}
      <div className="flex-col md:flex-row justify-between items-center gap-6" style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <div className="badge mb-2" style={{ display: 'inline-block', marginBottom: '0.5rem' }}>COP31 Vizyonu</div>
          <h1 style={{ fontSize: '2.5rem', lineHeight: 1.2, marginBottom: '0.5rem' }}>
            Evden Başlayan <span className="gradient-text">Yeşil Dönüşüm</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Kaynak tasarrufundan biyokütle enerjisine uzanan adil ödül ekosistemi.
          </p>
        </div>

        <div className="glass-panel flex items-center gap-6" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(15, 23, 42, 0.9))', border: '1px solid rgba(16, 185, 129, 0.4)', padding: '1.5rem 2rem' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(16,185,129,0.5)' }}>
            <Wallet size={32} color="white" />
          </div>
          <div>
            <h2 style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px' }}>Yeşil Puan Cüzdanı</h2>
            <div className="flex items-end gap-2" style={{ marginTop: '0.25rem' }}>
              <span style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1, color: 'white' }}>1,250</span>
              <span style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: '0.3rem', fontSize: '1.25rem' }}>YP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Two Main Flows Side-by-Side */}
      <div className="grid grid-cols-2 md-grid-cols-1">
        
        {/* Flow 1: Resource Saving */}
        <div className="glass-panel flex-col gap-4" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-50px', right: '-50px', opacity: 0.05 }}>
            <Zap size={200} />
          </div>
          
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2" style={{ color: '#3b82f6', marginBottom: '0.5rem' }}>
                <Droplet size={20} />
                <span style={{ fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Akış 1</span>
              </div>
              <h3 style={{ fontSize: '1.5rem' }}>Kaynak Tasarrufu</h3>
            </div>
            <div className="badge">Son 3 Ay M.A.</div>
          </div>
          
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', minHeight: '45px' }}>
            Abonelik numaralarınızla net tüketiminizi takip edin. Hareketli ortalamanın (Moving Average) altına düştükçe otomatik puan kazanın.
          </p>
          
          <div style={{ height: '260px', width: '100%', marginTop: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '12px', padding: '1rem' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={resourceData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="name" stroke="var(--text-muted)" tick={{ fill: 'var(--text-muted)' }} axisLine={false} tickLine={false} />
                <YAxis stroke="var(--text-muted)" tick={{ fill: 'var(--text-muted)' }} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--bg-dark)', borderColor: 'var(--surface-border)', borderRadius: '8px' }}
                  itemStyle={{ color: 'var(--text-main)' }}
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                />
                <Bar dataKey="ma" name="3 Aylık Ortalama" fill="var(--surface-border)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="current" name="Güncel Tüketim" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <button className="btn btn-secondary" style={{ width: '100%', marginTop: '0.5rem' }}>Fatura Aboneliği Ekle</button>
        </div>

        {/* Flow 2: Organic Waste & Biomass */}
        <div className="glass-panel flex-col gap-4" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-50px', right: '-50px', opacity: 0.05 }}>
            <Leaf size={200} />
          </div>

          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2" style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>
                <Flame size={20} />
                <span style={{ fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Akış 2</span>
              </div>
              <h3 style={{ fontSize: '1.5rem' }}>Organik Atık & Biyokütle</h3>
            </div>
            <div className="badge flex items-center gap-1">
              <Cpu size={14} /> AI Destekli
            </div>
          </div>
          
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', minHeight: '45px' }}>
            Organik atıklarınızı evde ayrıştırın. Akıllı tartım sensörlü konteynerlere bırakmadan önce ev içi görevinizi 3 saniyelik video ile doğrulayın.
          </p>
          
          <div className="flex-col" style={{ flex: 1, marginTop: '1rem', minHeight: '260px' }}>
            {!verified ? (
              <div 
                className="flex-col items-center justify-center gap-4" 
                style={{ 
                  flex: 1, 
                  border: '2px dashed var(--surface-border)', 
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  padding: '2rem',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                  {verifying ? <Camera size={32} style={{ animation: 'pulse-glow 1.5s infinite' }} /> : <UploadCloud size={32} />}
                </div>
                <div className="text-center">
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>
                    {verifying ? 'Görsel İşleniyor (Image Hashing)...' : 'Ev İçi Ayrıştırma Doğrulaması'}
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    {verifying ? 'Sahte veya tekrar eden görsel denetimi yapılıyor.' : 'Atığınızı ayırdığınızı gösteren videoyu yükleyip hemen puan kazanın.'}
                  </p>
                </div>
                <button 
                  className="btn btn-primary" 
                  style={{ width: '100%', marginTop: '1rem' }}
                  onClick={handleAIUpload}
                  disabled={verifying}
                >
                  {verifying ? 'Yapay Zeka Analiz Ediyor...' : 'Video Çek / Yükle'}
                </button>
              </div>
            ) : (
              <div className="flex-col items-center justify-center gap-4" style={{ flex: 1, border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '12px', backgroundColor: 'rgba(16, 185, 129, 0.05)', padding: '2rem' }}>
                <CheckCircle2 size={56} color="var(--primary)" style={{ animation: 'float 3s ease-in-out infinite' }} />
                <div className="text-center">
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.25rem', fontWeight: 700 }}>Doğrulama Başarılı!</h4>
                  <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>+50 Yeşil Puan Kazanıldı</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Atığınızı en yakın akıllı konteynere (<MapPin size={12} style={{display:'inline'}}/> 150m) bırakarak ekstra tartım puanı kazanabilirsiniz.</p>
                </div>
                <button className="btn btn-secondary" style={{ width: '100%' }} onClick={() => setVerified(false)}>Yeni Atık Girişi</button>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Rewards Overview */}
      <div className="glass-panel flex-col gap-4">
        <div className="flex items-center gap-2" style={{ marginBottom: '0.5rem' }}>
          <Gift size={24} color="var(--primary)" />
          <h3 style={{ fontSize: '1.5rem' }}>Adil Dönüşüm - Puan Harcama</h3>
        </div>
        <p style={{ color: 'var(--text-muted)', marginTop: '-1rem', marginBottom: '1rem' }}>Elde edilen TR-ETS gelirleri ve EPR bütçeleri, topladığınız yeşil puanlarla doğrudan hane bütçenize geri döner.</p>
        
        <div className="grid grid-cols-3 md-grid-cols-1 gap-4">
          <div style={{ padding: '1.5rem', background: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--surface-border)', cursor: 'pointer', transition: 'all 0.2s' }} className="hover:border-blue-500">
            <Droplet size={28} color="#3b82f6" style={{ marginBottom: '1rem' }} />
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Fatura İndirimi</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Su veya elektrik faturanıza ₺50 / ₺100 anında indirim olarak yansıtın.</p>
          </div>
          <div style={{ padding: '1.5rem', background: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--surface-border)', cursor: 'pointer', transition: 'all 0.2s' }} className="hover:border-amber-500">
            <Gift size={28} color="#f59e0b" style={{ marginBottom: '1rem' }} />
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Market Kuponu</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Zincir marketlerde temel gıda alışverişleriniz için dijital kupon kodu oluşturun.</p>
          </div>
          <div style={{ padding: '1.5rem', background: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--surface-border)', cursor: 'pointer', transition: 'all 0.2s' }} className="hover:border-emerald-500">
            <Zap size={28} color="#10b981" style={{ marginBottom: '1rem' }} />
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Ulaşım Kartı</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Belediye toplu taşıma kartınıza (otobüs/metro) doğrudan bakiye yükleyin.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard
