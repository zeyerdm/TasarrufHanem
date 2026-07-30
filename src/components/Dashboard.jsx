import React, { useState } from 'react'
import { Droplet, Zap, Flame, Camera, UploadCloud, MapPin, Wallet, Gift, CheckCircle2 } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const resourceData = [
  { name: 'Su (m³)', ma: 15, current: 12 },
  { name: 'Elektrik (kWh)', ma: 250, current: 190 },
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
    <div className="flex-col gap-6" style={{ marginTop: '1rem', animation: 'fade-in 0.5s ease-out' }}>
      
      {/* Wallet Card */}
      <div className="glass-panel flex justify-between items-center" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(15, 23, 42, 0.8))', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
        <div className="flex items-center gap-4">
          <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(16,185,129,0.5)' }}>
            <Wallet size={32} color="white" />
          </div>
          <div>
            <h2 style={{ fontSize: '1.125rem', color: 'var(--text-muted)', fontWeight: 500 }}>Toplam Yeşil Puan</h2>
            <div className="flex items-end gap-2">
              <span style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1, color: 'white' }}>1,250</span>
              <span style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: '0.25rem' }}>YP</span>
            </div>
          </div>
        </div>
        <button className="btn btn-primary">Puanları Harca</button>
      </div>

      <div className="grid grid-cols-2">
        {/* Resource Saving Module */}
        <div className="glass-panel flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 style={{ fontSize: '1.25rem' }}>Kaynak Tasarrufu</h3>
            <div className="badge">Hareketli Ortalama (Son 3 Ay)</div>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Tüketiminiz ortalamanın altına düştükçe puan kazanırsınız. Zamlı tutarlara değil, net harcamaya bakılır.</p>
          
          <div style={{ height: '240px', width: '100%', marginTop: '1rem' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={resourceData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                <XAxis dataKey="name" stroke="var(--text-muted)" tick={{ fill: 'var(--text-muted)' }} axisLine={false} tickLine={false} />
                <YAxis stroke="var(--text-muted)" tick={{ fill: 'var(--text-muted)' }} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--bg-dark)', borderColor: 'var(--surface-border)', borderRadius: '8px' }}
                  itemStyle={{ color: 'var(--text-main)' }}
                />
                <Bar dataKey="ma" name="3 Aylık Ortalama" fill="var(--surface-border)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="current" name="Güncel Tüketim" fill="var(--primary)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI & Waste Module */}
        <div className="flex-col gap-6">
          <div className="glass-panel flex-col gap-4" style={{ height: '100%' }}>
            <div className="flex justify-between items-center">
              <h3 style={{ fontSize: '1.25rem' }}>AI Doğrulama & Biyokütle</h3>
              <div className="flex items-center gap-2" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                <MapPin size={16} /> Yakındaki Konteynerler
              </div>
            </div>
            
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
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                  {verifying ? <Camera size={32} style={{ animation: 'pulse-glow 1.5s infinite' }} /> : <UploadCloud size={32} />}
                </div>
                <div className="text-center">
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>
                    {verifying ? 'Görsel İşleniyor (Image Hashing)...' : 'Atık Ayrıştırma Görevi'}
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    {verifying ? 'Sahte veya tekrar eden görsel kontrolü yapılıyor.' : 'Organik atıklarınızı ayırdığınızı gösteren 3 saniyelik bir video yükleyin.'}
                  </p>
                </div>
                <button 
                  className="btn btn-secondary" 
                  style={{ width: '100%', marginTop: '1rem', background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', borderColor: 'rgba(59, 130, 246, 0.3)' }}
                  onClick={handleAIUpload}
                  disabled={verifying}
                >
                  {verifying ? 'Analiz Ediliyor...' : 'Video Çek / Yükle'}
                </button>
              </div>
            ) : (
              <div className="flex-col items-center justify-center gap-4" style={{ flex: 1, border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '12px', backgroundColor: 'rgba(16, 185, 129, 0.05)', padding: '2rem' }}>
                <CheckCircle2 size={48} color="var(--primary)" />
                <div className="text-center">
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.25rem' }}>Doğrulama Başarılı!</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>+50 Yeşil Puan hesabınıza eklendi. Konteynere atık bıraktığınızda ekstra puan kazanacaksınız.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Rewards Overview */}
      <div className="glass-panel flex-col gap-4">
        <h3 style={{ fontSize: '1.25rem' }}>Adil Dönüşüm - Ödüller</h3>
        <div className="grid grid-cols-3 gap-4">
          <div style={{ padding: '1.5rem', background: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--surface-border)' }}>
            <Droplet size={24} color="#3b82f6" style={{ marginBottom: '1rem' }} />
            <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Fatura İndirimi</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Su veya elektrik faturasında doğrudan indirim (TR-ETS destekli).</p>
          </div>
          <div style={{ padding: '1.5rem', background: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--surface-border)' }}>
            <Gift size={24} color="#f59e0b" style={{ marginBottom: '1rem' }} />
            <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Market Kuponu</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Temel gıda ve alışverişlerde geçerli QR kodlu indirim.</p>
          </div>
          <div style={{ padding: '1.5rem', background: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--surface-border)' }}>
            <Zap size={24} color="#10b981" style={{ marginBottom: '1rem' }} />
            <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Ulaşım Kartı</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Belediye toplu taşıma araçları için bakiye yüklemesi.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard
