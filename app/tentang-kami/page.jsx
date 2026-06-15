import ICAHeader from "@/components/ica/ICAHeader";
import ICAFooter from "@/components/ica/ICAFooter";
import ScrollReveal from "@/components/ica/ScrollReveal";

export const metadata = {
  title: "Tentang Kami — Indonesia Creators Academy 2026",
};

export default function TentangKamiPage() {
  return (
    <>
      <ICAHeader />

      {/* PAGE HERO */}
      <ScrollReveal>
      <section className="ica-about-hero" style={{
        padding: "180px 0 100px",
        backgroundImage: "url(https://images.unsplash.com/photo-1481887328591-3e277f9473dc?w=1920&q=80&auto=format&fit=crop)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.88)" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <span style={{ color: "#888", fontSize: 14, textTransform: "uppercase", letterSpacing: 3, marginBottom: 20, display: "block" }}>
                Tentang Kami
              </span>
              <h1 style={{ fontSize: 56, fontWeight: 700, color: "#fff", marginBottom: 30, lineHeight: 1.2 }}>
                Di balik zaman yang semakin maju dengan kecanggihan teknologi ada generasi yang harus disiapkan dengan benar
              </h1>
              <p className="about-hero-text mx-auto">
                Tidak hanya mahir di depan layar, tapi tidak lupa untuk bersujud pada-Nya. Karena karya akan dipertanggungjawabkan bukan hanya di dunia tapi di akhirat. Bahkan dari karya ini kita berharap sebagai salah satu pintu yang menjadikan Allah ridho.
              </p>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* FILOSOFI & ADAB */}
      <ScrollReveal>
      <section className="space ica-filosofi">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="filosofi-highlight">Filosofi & Adab</div>
              <p className="filosofi-text">
                Indonesia Creators Academy menjadikan shalat berjamaah menjadi poros disiplin harian, kegiatan sunah lainnya menjadi pelengkap kebaikan, hal ini menjadi bagian dalam belajar untuk mewujudkan sebuah karya. Karena kami lebih takut meluluskan orang pintar tanpa adab, dari pada orang beradab yang masih belajar menjadi ahli.
              </p>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* MEET THE MENTORS */}
      <ScrollReveal>
      <section className="space ica-mentor">
        <div className="container">
          <div className="title-area text-center mb-60">
            <h2 className="sec-title">Meet the Mentors</h2>
            <p className="sec-text" style={{ maxWidth: 700, margin: "20px auto 0" }}>
              Para pengajar Indonesia Creators Academy adalah praktisi yang masih aktif di industri, mengajar dari pengalaman yang masih berjalan.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="mentor-card">
                <div style={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  margin: "0 auto",
                  overflow: "hidden",
                  border: "2px solid #333",
                  background: "#222",
                }}>
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80&auto=format&fit=crop&crop=face"
                    alt="Aryo Pamungkas"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="mentor-name">Aryo Pamungkas</div>
                <div className="mentor-role">Founder — Slab Design, Letter Hand, Vector Factory</div>
                <p className="mentor-bio">Masih menjalankan banyak studio dengan klien luar negeri. Praktisi aktif yang membawa pengalaman industri nyata ke dalam kelas.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mentor-card">
                <div style={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  margin: "0 auto",
                  overflow: "hidden",
                  border: "2px solid #333",
                  background: "#222",
                }}>
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80&auto=format&fit=crop&crop=face"
                    alt="Arief Fatoni"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="mentor-name">Arief Fatoni</div>
                <div className="mentor-role">Praktisi Event Nasional & Internasional</div>
                <p className="mentor-bio">Masih terlibat di event besar nasional dan internasional. Mengajarkan dari pengalaman nyata dunia kreatif yang masih berjalan.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mentor-card">
                <div style={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  margin: "0 auto",
                  overflow: "hidden",
                  border: "2px solid #333",
                  background: "#222",
                }}>
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80&auto=format&fit=crop&crop=face"
                    alt="Alib Isa"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="mentor-name">Alib Isa</div>
                <div className="mentor-role">Guru Lettering Indonesia</div>
                <p className="mentor-bio">Masih dikenal sebagai guru lettering Indonesia. Tidak hanya mengajar dari buku, tetapi dari pengalaman nyata yang masih berjalan di industri.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      <ICAFooter />
    </>
  );
}
