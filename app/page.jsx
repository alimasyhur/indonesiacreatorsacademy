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

      {/* HERO SECTION */}
      <section className="ica-hero" id="hero" style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&q=80&auto=format&fit=crop)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.6) 40%, rgba(15,10,25,0.88) 100%)",
          zIndex: 0,
        }} />
        <div style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "35%",
          height: "100%",
          background: "linear-gradient(180deg, rgba(197,165,90,0.06) 0%, rgba(147,51,234,0.03) 50%, transparent 100%)",
          zIndex: 0,
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row" style={{ minHeight: "calc(100vh - 120px)", alignItems: "flex-end", paddingBottom: 80 }}>
            <div className="col-lg-8">
              <div className="ica-badge" style={{
                padding: "8px 20px",
                border: "1px solid rgba(197,165,90,0.3)",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#C5A55A",
                marginBottom: 30,
              }}>
                Angkatan 2026 — Pendaftaran Dibuka
              </div>
              <h1 className="hero-title" style={{ fontSize: 100, lineHeight: 1, fontWeight: 700, letterSpacing: -3, marginBottom: 8 }}>
                Berkarya{" "}
                <span style={{ color: "#C5A55A", textDecoration: "underline", textDecorationColor: "rgba(197,165,90,0.3)", textUnderlineOffset: 12 }}>
                  Dengan Arah
                </span>
              </h1>
              <p className="hero-subtitle" style={{ fontSize: 20, color: "#999", maxWidth: 560, lineHeight: 1.7, marginTop: 24, marginBottom: 40 }}>
                Program 1 tahun yang memadukan pendidikan multimedia dan diniyah dalam satu lingkungan pembinaan penuh.
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
                <Link href="/ppdb" className="btn" style={{
                  background: "#C5A55A",
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
                <Link href="/tentang-kami" className="btn" style={{
                  background: "transparent",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.2)",
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
              <div style={{
                borderLeft: "1px solid rgba(255,255,255,0.08)",
                paddingLeft: 40,
              }}>
                {[
                  { label: "1 Tahun", desc: "Pembinaan penuh" },
                  { label: "2 Jalur", desc: "Mukim & Non-Mukim" },
                  { label: "9+ Mapel", desc: "Desain + Diniyah" },
                ].map((stat, i) => (
                  <div key={i} style={{ marginBottom: 32 }}>
                    <div style={{ fontSize: 32, fontWeight: 700, color: "#C5A55A", lineHeight: 1, marginBottom: 6 }}>{stat.label}</div>
                    <div style={{ fontSize: 14, color: "#888" }}>{stat.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12" style={{ marginTop: 60 }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                paddingTop: 32,
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}>
                <div style={{ width: 32, height: 1, background: "#C5A55A" }} />
                <span style={{ fontSize: 13, color: "#666", letterSpacing: 2, textTransform: "uppercase" }}>
                  Scroll untuk eksplorasi
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER'S MESSAGE */}
      <ScrollReveal>
        <section className="space ica-founder">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="founder-quote">
                  "Setelah berhasil dan sukses mendirikan beberapa studio desain di industri kreatif seperti Slab Design, Letter Hand, dan Vector Factory. Munculah keresahan tentang anak–anak muda yang memiliki potensi tapi tidak mengerti harus bagaimana, apalagi jika tidak memiliki ruang untuk belajar dengan benar. Dari keresahan ini lahirlah gagasan untuk menyiapkan generasi yang memiliki skill desain yang baik dan adab yang benar."
                </div>
                <div className="founder-name">— Aryo Pamungkas, Pendiri ICA</div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* THE PROBLEM & SOLUTION */}
      <ScrollReveal>
        <section className="space ica-problem-solution">
          <div className="container">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="problem-box">
                  <h3>Problem</h3>
                  <p>Sebuah Lembaga Pendidikan yang mengatasnamakan multimedia/desain masih banyak yang menomor duakan atau malah sebatas pelengkap dan daya tarik fasilitas yang diberikan sekolah. Dan banyak lulusan yang masih belum mengerti untuk apa mereka berkarya dan dunia kerja seperti apa yang akan dihadapi. Disisi lain jika ada beberapa yang memiliki skill desain yang baik atau expert tetapi lemah dalam akhlak dan adab seorang muslim. Misal deadline klien berhasil terlaksana tapi sholat terlewat.</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="solution-box">
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

      {/* SHOWCASE KARYA */}
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

      {/* CTA UTAMA */}
      <section className="space ica-cta text-center" style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1920&q=80&auto=format&fit=crop)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "rgba(0,0,0,0.85)",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <h2 className="cta-title">Siap Bergabung?</h2>
          <p className="cta-text">Indonesia Creators Academy — Informasi selengkapnya di poster pendaftaran terbaru.</p>
          <div className="btn-wrap mt-40" style={{ display: "flex", justifyContent: "center" }}>
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
