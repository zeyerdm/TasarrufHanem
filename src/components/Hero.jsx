import React from 'react'
import { ArrowRight, Leaf, ShieldCheck, Cpu } from 'lucide-react'

const Hero = ({ onStart }) => {
  return (
    <div className="flex-col gap-8" style={{ marginTop: '2rem' }}>
      <div className="flex-col items-center justify-center text-center gap-6 glass-panel" style={{ padding: '4rem 2rem', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
        <div className="badge" style={{ animation: 'fade-in 1s ease-out' }}>
          COP31 Vizyonu - İklim Kanunu Uyumlu
        </div>
        
        <h1 style={{ fontSize: '3.5rem', lineHeight: 1.1, maxWidth: '800px' }}>
          Evden Başlayan Yeşil Dönüşüm: <br/>
          <span className="gradient-text">Kaynak Tasarrufundan Biyokütle Enerjisine</span>
        </h1>
        
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', lineHeight: 1.6 }}>
          Su, elektrik ve doğalgaz tasarrufu yaparken organik atıklarınızı enerjiye dönüştürün. 
          Hem hane bütçeniz kazansın, hem Türkiye'nin enerji bağımsızlığı!
        </p>

        <div className="flex gap-4" style={{ marginTop: '1rem' }}>
          <button className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }} onClick={onStart}>
            Panelime Git <ArrowRight size={20} />
          </button>
          <button className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
            Sistemi Tanı
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3" style={{ marginTop: '2rem' }}>
        <div className="glass-panel flex-col gap-4" style={{ animationDelay: '0.1s' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
            <Cpu size={24} />
          </div>
          <h3 style={{ fontSize: '1.25rem' }}>Yapay Zeka Doğrulama</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.5 }}>
            Atık yağ biriktirme ve evde ayrıştırma görevleriniz, 3 saniyelik video ile anında (Computer Vision) doğrulanır.
          </p>
        </div>

        <div className="glass-panel flex-col gap-4" style={{ animationDelay: '0.2s' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
            <Leaf size={24} />
          </div>
          <h3 style={{ fontSize: '1.25rem' }}>Adil Kazanç Modeli</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.5 }}>
            Yeşil Puanlarınızı tek cüzdanda biriktirin; belediye faturası indirimi, market kuponu veya ulaşım bileti olarak harcayın.
          </p>
        </div>

        <div className="glass-panel flex-col gap-4" style={{ animationDelay: '0.3s' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f59e0b' }}>
            <ShieldCheck size={24} />
          </div>
          <h3 style={{ fontSize: '1.25rem' }}>KVKK Dostu</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.5 }}>
            Kimlik verisi istenmez! Sadece telefon numarası ve abonelik eşleştirmesiyle anti-fraud korumalı güvenli kullanım.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
