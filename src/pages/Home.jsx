import React from 'react'
import { Link } from 'react-router-dom'
import { Leaf, ArrowRight, ShieldCheck, Cpu, Globe } from 'lucide-react'

const Home = () => {
  return (
    <div className="flex-col gap-12" style={{ padding: '2rem 0', paddingBottom: '4rem' }}>
      
      {/* Hero Section */}
      <section className="flex-col items-center text-center gap-6" style={{ marginTop: '2rem' }}>
        <div className="badge badge-green inline-flex items-center gap-2 mb-4" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
          <Globe size={16} /> COP31 Vizyonu & Adil Dönüşüm
        </div>
        <h1 style={{ fontSize: '3.5rem', lineHeight: 1.1, maxWidth: '800px' }}>
          Evden Başlayan <br/>
          <span className="gradient-text">Yeşil Dönüşüm</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', lineHeight: 1.6 }}>
          TasarrufHanem, enerji bağımsızlığına giden yolda su, elektrik ve doğalgaz tasarrufunu organik atık yönetimiyle tek bir platformda birleştirir.
        </p>
        <div className="flex gap-4" style={{ marginTop: '1rem' }}>
          <Link to="/login" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}>
            Hemen Başla <ArrowRight size={18} />
          </Link>
          <a href="#moduller" className="btn btn-secondary" style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}>
            Projeyi İncele
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section id="moduller" className="bento-grid mt-12">
        <div className="glass-panel flex-col gap-4" style={{ padding: '2rem' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Cpu size={24} />
          </div>
          <h3 style={{ fontSize: '1.4rem' }}>Kaynak Tasarrufu</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>
            Son 3 aylık hareketli ortalamaya (Moving Average) göre net m³/kWh tüketiminiz üzerinden puan kazanın.
          </p>
        </div>
        
        <div className="glass-panel flex-col gap-4" style={{ padding: '2rem' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Leaf size={24} />
          </div>
          <h3 style={{ fontSize: '1.4rem' }}>Organik Atık (Proof of Action)</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>
            Yapay zeka (Computer Vision) ile evdeki atık ayrıştırmanızı doğrulayın, lojistik maliyetini kaynağında önleyin.
          </p>
        </div>

        <div className="glass-panel flex-col gap-4" style={{ padding: '2rem' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ShieldCheck size={24} />
          </div>
          <h3 style={{ fontSize: '1.4rem' }}>KVKK Dostu Cüzdan</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>
            T.C. Kimlik veya e-Devlet şifresi yok. Sadece telefon ve abone no ile eşleştirme yaparak "Yeşil Puan" biriktirin.
          </p>
        </div>
      </section>

    </div>
  )
}

export default Home
