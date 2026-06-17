import ICAHeader from "@/components/ica/ICAHeader";
import ICAFooter from "@/components/ica/ICAFooter";
import ScrollReveal from "@/components/ica/ScrollReveal";
import Link from "next/link";

export const metadata = {
  title: "Indonesia Creators Academy 2026 - Berkarya Dengan Arah",
};

export default function HomePage() {
  return (
    <>
      <ICAHeader />

      {/* HERO */}
      <section className="ica-hero" id="hero" style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&q=80&auto=format&fit=crop)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="hero-overlay" />
        <div className="hero-glow" />
        <div className="ica-orb ica-orb--gold" />
        <div className="ica-orb ica-orb--small" />
        <div className="ica-grid-lines" />

        <div className="container hero-content">
          <div className="row" style={{ minHeight: "calc(100vh - 120px)", alignItems: "flex-end", paddingBottom: 80 }}>
            <div className="col-lg-8">
              <div className="hero-badge">
                <span className="badge-dot" />
                Angkatan 2026 — Pendaftaran Dibuka
              </div>
              <h1 className="hero-title">
                Berkarya{" "}
                <span className="hero-title-accent">
                  Dengan Arah
                </span>
              </h1>
              <p className="hero-subtitle">
                Program 1 tahun yang memadukan pendidikan multimedia dan diniyah dalam satu lingkungan pembinaan penuh.
              </p>
              <div className="d-flex gap-3 flex-wrap align-items-center">
                <Link href="/ppdb" className="btn" style={{
                  background: "#f1f2f6",
                  color: "#000",
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: 1.5,
                }}>
                  <span className="link-effect">
                    <span className="effect-1">DAFTAR SEKARANG</span>
                    <span className="effect-1">DAFTAR SEKARANG</span>
                  </span>
                </Link>
                <Link href="/tentang-kami" className="btn ica-glass-btn" style={{
                  fontWeight: 500,
                  fontSize: 13,
                  letterSpacing: 1.5,
                }}>
                  <span className="link-effect">
                    <span className="effect-1">TENTANG KAMI</span>
                    <span className="effect-1">TENTANG KAMI</span>
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <div className="hero-stats">
                {[
                  { label: "1 Tahun", desc: "Pembinaan penuh" },
                  { label: "2 Jalur", desc: "Mukim & Non-Mukim" },
                  { label: "9+ Mapel", desc: "Desain + Diniyah" },
                ].map((stat, i) => (
                  <div className="stat-item" key={i}>
                    <div className="stat-value">{stat.label}</div>
                    <div className="stat-label">{stat.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12">
              <div className="hero-scroll">
                <div className="scroll-line" />
                <span className="scroll-text">Scroll untuk eksplorasi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <ScrollReveal>
        <section className="space ica-founder">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="founder-quote">
                  &ldquo;Setelah berhasil dan sukses mendirikan beberapa studio desain di industri kreatif seperti Slab Design, Letter Hand, dan Vector Factory. Munculah keresahan tentang anak–anak muda yang memiliki potensi tapi tidak mengerti harus bagaimana, apalagi jika tidak memiliki ruang untuk belajar dengan benar. Dari keresahan ini lahirlah gagasan untuk menyiapkan generasi yang memiliki skill desain yang baik dan adab yang benar.&rdquo;
                </div>
                <div className="founder-name">— Aryo Pamungkas, Pendiri ICA</div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* PROBLEM & SOLUTION */}
      <ScrollReveal>
        <section className="space ica-problem-solution">
          <div className="container">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="problem-box">
                  <span className="box-number">01</span>
                  <h3>Problem</h3>
                  <p>Sebuah Lembaga Pendidikan yang mengatasnamakan multimedia/desain masih banyak yang menomor duakan atau malah sebatas pelengkap dan daya tarik fasilitas yang diberikan sekolah. Dan banyak lulusan yang masih belum mengerti untuk apa mereka berkarya dan dunia kerja seperti apa yang akan dihadapi. Disisi lain jika ada beberapa yang memiliki skill desain yang baik atau expert tetapi lemah dalam akhlak dan adab seorang muslim. Misal deadline klien berhasil terlaksana tapi sholat terlewat.</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="solution-box">
                  <span className="box-number">02</span>
                  <h3>Solution</h3>
                  <p>Indonesia Creators Academy hadir sebagai salah satu jawaban dengan pendekatan kurikulum yang memadukan multimedia terkhusus desain dengan akhlak dan adab seorang muslim sebagai pondasinya. Belajar dengan para asatidz dengan materi islam dasar yang menjadikkannya seimbang. Sedangkan dengan praktisi desain yang ahli mengajarkan secara langsung di lapangan yang berupa event. Pembelajaran diakhiri program magang di tempat studio desain/tim media lainnya.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* PROGRAM HIGHLIGHT */}
      <ScrollReveal>
        <section className="space ica-program-highlight">
          <div className="ica-orb ica-orb--purple" />
          <div className="container">
            <div className="title-area text-center mb-60">
              <h2 className="sec-title">Dua Jalur Belajar</h2>
              <p className="sec-text" style={{ maxWidth: 700, margin: "20px auto 0" }}>
                Indonesia Creators Academy membuka dua jalur belajar dengan kurikulum yang tidak berbeda.
              </p>
            </div>
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="program-card">
                  <div className="program-icon">01</div>
                  <h3>Jalur Mukim — Asrama</h3>
                  <p>Untuk yang siap fokus penuh untuk tinggal dan belajar, bertumbuh di lingkungan selama satu tahun jauh dari distraksi. Lingkungan terjaga, jadwal terstruktur, dan sesama kreator yang saling mendorong maju.</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="program-card">
                  <div className="program-icon">02</div>
                  <h3>Jalur Non-Mukim</h3>
                  <p>Membutuhkan fleksibilitas lebih tinggi karena ada jadwal yang harus dikonsultasikan tanpa harus mengorbankan kualitas belajar. Kurikulum sama, koreksi sama, ekspektasi yang sama.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SHOWCASE */}
      <ScrollReveal>
        <section className="space ica-showcase">
          <div className="container">
            <div className="title-area text-center mb-50">
              <h2 className="sec-title">Showcase Karya</h2>
            </div>
            <p className="showcase-text text-center mx-auto">
              Setiap karya yang lahir dari siswa ICA merupakan bagian dari proses pembelajaran yang bisa mereka pertanggungjawabkan. Karya yang dihasilkanpun sudah melalui proses evaluasi berulang sampai layak dipakai secara profesional dan dinilai oleh para pengajar yang aktif di industri. Karya Alumni ICA juga sudah dipakai oleh beberapa lembaga dakwah, dokumentasi event nasional, sampai konten yang jangkauannya jauh melampaui kelas.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
      <section className="space ica-cta text-center" style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1920&q=80&auto=format&fit=crop)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="cta-overlay" />
        <div className="cta-orb" />
        <div className="container">
          <h2 className="cta-title">Siap Bergabung?</h2>
          <p className="cta-text">Indonesia Creators Academy — Informasi selengkapnya di poster pendaftaran terbaru.</p>
          <div className="btn-wrap">
            <Link href="/ppdb" className="btn" style={{ background: "#fff", color: "#111" }}>
              <span className="link-effect">
                <span className="effect-1">INFO PENDAFTARAN</span>
                <span className="effect-1">INFO PENDAFTARAN</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <ICAFooter />
    </>
  );
}
