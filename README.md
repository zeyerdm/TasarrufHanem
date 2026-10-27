# 🌱 TasarrufHanem — Evden Başlayan Yeşil Dönüşüm

> Su, elektrik ve doğalgaz tasarrufunu organik atık yönetimiyle tek platformda birleştiren, tasarruf eden hanelere "Yeşil Puan" kazandıran web uygulaması prototipi.
>
> *A web app prototype that rewards households with "Green Points" for saving water, electricity and gas and for sorting organic waste.*

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-7-CA4245?logo=reactrouter&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222?logo=githubpages&logoColor=white)

## 📌 Proje Hakkında

TasarrufHanem, COP31 vizyonu ve adil dönüşüm hedefleri doğrultusunda tasarlanmış bir sürdürülebilirlik platformudur. Haneler kaynak tüketimlerini azalttıkça ve organik atıklarını ayrıştırdıkça puan kazanır; biriken puanlar kampanya ve kuponlarda kullanılabilir.

## ✨ Özellikler

| Modül | Açıklama |
| --- | --- |
| **Kaynak Tasarrufu** | Son 3 aylık hareketli ortalamaya göre net m³ / kWh tüketimi analiz edilir, ortalamanın altında kalan haneler puan kazanır. |
| **Organik Atık (Proof of Action)** | Evde yapılan atık ayrıştırma, yapay zekâ (bilgisayarlı görü) doğrulama akışıyla onaylanır. |
| **KVKK Dostu Cüzdan** | T.C. kimlik no veya e-Devlet şifresi istenmez; telefon ve abone numarasıyla eşleştirilerek Yeşil Puan biriktirilir. |
| **Kullanıcı Paneli** | Puan bakiyesi, işlem geçmişi (atık teslimi, tasarruf, harcama) ve grafiklerle tüketim özeti. |

## 🛠️ Kullanılan Teknolojiler

- **Arayüz:** React 19, React Router 7 (HashRouter)
- **Grafikler:** Recharts
- **İkonlar:** lucide-react
- **Derleme & Lint:** Vite 8, Oxlint
- **Dağıtım:** GitHub Actions ile GitHub Pages

## 📁 Proje Yapısı

```
.
├── src/
│   ├── App.jsx                 # Router ve gezinme çubuğu
│   ├── components/Hero.jsx     # Giriş bölümü
│   └── pages/
│       ├── Home.jsx            # Tanıtım sayfası
│       ├── Login.jsx           # Giriş ekranı
│       └── DashboardPage.jsx   # Yeşil Puan paneli
├── public/
└── .github/workflows/deploy.yml  # GitHub Pages dağıtımı
```

## 🚀 Kurulum

```bash
npm install
npm run dev      # geliştirme sunucusu
npm run build    # üretim derlemesi (dist/)
npm run lint     # Oxlint
```

`main` dalına yapılan her push, GitHub Actions üzerinden otomatik olarak GitHub Pages'e dağıtılır.

> Bu sürüm bir arayüz prototipidir; tüketim verileri ve işlem geçmişi örnek verilerle gösterilmektedir.

## 👩‍💻 Geliştirici

**Zeynep Erdem** — [github.com/zeyerdm](https://github.com/zeyerdm)
