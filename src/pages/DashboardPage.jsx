import React, { useState } from 'react'
import { Droplet, Zap, Flame, Camera, MapPin, Wallet, Gift, CheckCircle2, Leaf, ArrowRight, Info, ShieldCheck, Scale, X, Activity, History } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const resourceData = [
  { name: 'Su (m³)', ma: 15, current: 12 },
  { name: 'Elek (kWh)', ma: 250, current: 190 },
  { name: 'Gaz (m³)', ma: 50, current: 40 },
]

const Dashboard = () => {
  const [verifying, setVerifying] = useState(false)
  const [verified, setVerified] = useState(false)
  const [totalPoints, setTotalPoints] = useState(1250)
  
  // Modals State
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalStep, setModalStep] = useState(1) // 1: form, 2: analyzing, 3: success
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false)

  // History State
  const [history, setHistory] = useState([
    { id: 1, type: 'atık', title: '2 Litre Atık Yağ Teslimi', points: 50, date: 'Dün, 14:30' },
    { id: 2, type: 'tasarruf', title: 'Aylık Su Tasarrufu', points: 150, date: 'Geçen Hafta' },
    { id: 3, type: 'atık', title: '5 Kg Kompost Atık Teslimi', points: 120, date: '23 Temmuz' },
    { id: 4, type: 'harcama', title: 'Market Kuponu Kullanımı', points: -200, date: '20 Temmuz' }
  ])

  const handleAIUpload = () => {
    setVerifying(true)
    setTimeout(() => {
      setVerifying(false)
      setVerified(true)
      setTotalPoints(prev => prev + 50)
      setHistory(prev => [{
        id: Date.now(),
        type: 'atık',
        title: 'Organik Atık Doğrulandı (AI)',
        points: 50,
        date: 'Bugün, ' + new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      }, ...prev])
    }, 1500)
  }

  const handleBillSubmit = (e) => {
    e.preventDefault()
    setModalStep(2)
    setTimeout(() => {
      setModalStep(3)
      setTotalPoints(prev => prev + 150)
      setHistory(prev => [{
        id: Date.now(),
        type: 'tasarruf',
        title: 'Enerji Tasarrufu Tespit Edildi',
        points: 150,
        date: 'Bugün, ' + new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      }, ...prev])
    }, 2000)
  }

  const resetModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setModalStep(1), 300)
  }

  const renderHistoryIcon = (type) => {
    if (type === 'atık') return <Leaf size={16} color="var(--primary)" />
    if (type === 'tasarruf') return <Zap size={16} color="#3b82f6" />
    if (type === 'harcama') return <Gift size={16} color="#ef4444" />
    return <Activity size={16} />
  }

  return (
    <div className="flex-col gap-4" style={{ minHeight: 'calc(100vh - 120px)', paddingBottom: '3rem', display: 'flex', justifyContent: 'center', position: 'relative' }}>
      
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

        {/* CLICKABLE WALLET */}
        <div 
          className="glass-panel flex items-center gap-3" 
          style={{ padding: '0.75rem 1.25rem', background: 'rgba(16, 185, 129, 0.05)', position: 'relative', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.2s', border: '1px solid rgba(16,185,129,0.2)' }}
          onClick={() => setIsHistoryModalOpen(true)}
          title="Atık ve Tasarruf Geçmişimi Gör"
        >
          <div style={{ position: 'absolute', right: '-20px', top: '-20px', opacity: 0.1 }}><Leaf size={100} /></div>
          <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Wallet size={20} color="#05070a" />
          </div>
          <div style={{ zIndex: 1 }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Tek Cüzdan: Yeşil Puan</div>
            <div className="flex items-end gap-1">
              <span style={{ fontSize: '1.6rem', fontWeight: 800, lineHeight: 1, color: 'white' }}>{totalPoints.toLocaleString()}</span>
              <span style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.85rem' }}>YP</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Bento Grid */}
      <div className="bento-grid" style={{ gap: '1rem', flex: 1 }}>
        
        {/* Bento Box 1: Resource Saving (Span 2) */}
        <div 
          className="glass-panel bento-col-span-2 flex-col justify-between" 
          style={{ padding: '1.25rem', position: 'relative', cursor: 'pointer', transition: 'all 0.2s' }}
          onClick={() => setIsModalOpen(true)}
          title="Tasarruf sorgulamak için tıklayın"
        >
          <div className="flex justify-between items-start">
            <div style={{ width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                <div className="badge inline-block" style={{ fontSize: '0.65rem' }}>Kaynak Tasarrufu Modülü</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#60a5fa', fontSize: '0.7rem', fontWeight: 500, whiteSpace: 'nowrap' }}>
                  <ShieldCheck size={14}/> Sadece Telefon + Abone No
                </div>
              </div>
              <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Zap size={16} color="#3b82f6"/> Enerji ve Su Tüketimi
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.2rem', maxWidth: '95%' }}>
                Son 3 aylık hareketli ortalamanın (Moving Average) altına düştükçe puan kazanın. Zamlı TL tutarına değil, net <b>m³/kWh</b> miktarına bakılır. (Boş ev filtresi aktiftir).
              </p>
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
          <div style={{ position: 'absolute', bottom: '1.25rem', right: '1.25rem' }}>
            <button className="btn btn-secondary" style={{ padding: '0.4rem 1rem', fontSize: '0.75rem', background: '#3b82f6', color: 'white', border: 'none' }}>Sorgula</button>
          </div>
        </div>

        {/* Bento Box 2: AI Verification (Span 1) */}
        <div className="glass-panel flex-col items-center justify-center text-center" style={{ padding: '1.25rem', background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.08) 0%, rgba(15, 23, 42, 0) 100%)', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '1rem', left: '1.25rem' }}>
             <div className="badge badge-green" style={{ fontSize: '0.65rem' }}>Organik Atık Modülü</div>
          </div>
          
          <div style={{ marginTop: '1rem' }} />

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

      {/* Modal Overlay: Kaynak Tasarrufu */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={resetModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Zap size={18} color="#3b82f6"/> Abonelik Sorgulama
              </h3>
              <button style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }} onClick={resetModal}>
                <X size={20} />
              </button>
            </div>
            
            <div className="modal-body">
              {modalStep === 1 && (
                <form onSubmit={handleBillSubmit} className="flex-col gap-4">
                  <div className="badge flex items-center gap-1" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#60a5fa', borderColor: 'rgba(59, 130, 246, 0.2)', width: 'fit-content' }}>
                    <ShieldCheck size={12}/> T.C. Kimlik İstenmez
                  </div>
                  
                  <div className="flex-col gap-2">
                    <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Fatura Türü</label>
                    <select className="select-field" required>
                      <option value="elektrik">Elektrik Faturası</option>
                      <option value="su">Su Faturası</option>
                      <option value="gaz">Doğalgaz Faturası</option>
                    </select>
                  </div>
                  
                  <div className="flex-col gap-2">
                    <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Telefon Numarası</label>
                    <input type="tel" className="input-field" placeholder="05XX XXX XX XX" required />
                  </div>
                  
                  <div className="flex-col gap-2">
                    <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Abonelik / Tesisat No</label>
                    <input type="text" className="input-field" placeholder="Faturadaki abone numarası" required />
                  </div>
                  
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                    Tüketimi Analiz Et
                  </button>
                </form>
              )}

              {modalStep === 2 && (
                <div className="flex-col items-center justify-center text-center gap-4" style={{ padding: '2rem 0' }}>
                  <div style={{ color: '#3b82f6', animation: 'pulse-glow 1s infinite', borderRadius: '50%' }}>
                    <Activity size={48} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Hareketli Ortalama Hesaplanıyor</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Son 3 aylık net tüketim verileriniz (m³/kWh) analiz ediliyor ve boş ev filtresinden geçiriliyor...</p>
                  </div>
                </div>
              )}

              {modalStep === 3 && (
                <div className="flex-col items-center justify-center text-center gap-4" style={{ padding: '1rem 0' }}>
                  <CheckCircle2 size={56} color="var(--primary)" style={{ animation: 'fade-in 0.3s ease-out' }} />
                  <div>
                    <h4 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.25rem' }}>Tebrikler! Tasarruf Tespit Edildi</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>Bu ay tüketiminiz son 3 aylık ortalamanızın %15 altında gerçekleşti.</p>
                    <div className="badge badge-green" style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}>+150 Yeşil Puan</div>
                  </div>
                  <button className="btn btn-secondary" style={{ width: '100%', marginTop: '1rem' }} onClick={resetModal}>
                    Cüzdana Dön
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Modal Overlay: History (Cüzdan) */}
      {isHistoryModalOpen && (
        <div className="modal-overlay" onClick={() => setIsHistoryModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '500px' }}>
            <div className="modal-header">
              <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <History size={18} color="var(--primary)"/> Atık ve Tasarruf Geçmişi
              </h3>
              <button style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }} onClick={() => setIsHistoryModalOpen(false)}>
                <X size={20} />
              </button>
            </div>
            
            <div className="modal-body" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
              <div className="flex-col gap-3">
                {history.map(item => (
                  <div key={item.id} className="flex justify-between items-center" style={{ padding: '0.75rem', background: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--surface-border)' }}>
                    <div className="flex items-center gap-3">
                      <div style={{ 
                        width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: item.type === 'atık' ? 'rgba(16, 185, 129, 0.1)' : item.type === 'tasarruf' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(239, 68, 68, 0.1)'
                      }}>
                        {renderHistoryIcon(item.type)}
                      </div>
                      <div>
                        <h4 style={{ fontSize: '0.9rem', marginBottom: '0.1rem' }}>{item.title}</h4>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.date}</p>
                      </div>
                    </div>
                    <div style={{ 
                      fontSize: '1rem', fontWeight: '700', 
                      color: item.points > 0 ? 'var(--primary)' : '#ef4444' 
                    }}>
                      {item.points > 0 ? '+' : ''}{item.points} YP
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Dashboard
