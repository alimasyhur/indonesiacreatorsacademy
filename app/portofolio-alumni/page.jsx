import ICAHeader from "@/components/ica/ICAHeader";
import ICAFooter from "@/components/ica/ICAFooter";

export const metadata = {
  title: "Portofolio & Alumni — Indonesia Creators Academy 2026",
};

export default function PortofolioAlumniPage() {
  const alumniCareer = [
    { company: "Freelancer", name: "Independen", role: "Desainer Grafis" },
    { company: "Studio In-House", name: "Lembaga Dakwah", role: "Kreator Konten" },
    { company: "Agensi Kreatif", name: "Jakarta & Bandung", role: "Desainer Senior" },
    { company: "Pendiri Studio", name: "Own Studio", role: "Creative Director" },
    { company: "Media Partner", name: "Event Nasional", role: "Tim Dokumentasi" },
    { company: "Branding", name: "Corporate Client", role: "Brand Designer" },
  ];

  return (
    <>
      <ICAHeader />

      {/* PAGE HERO */}
      <div className="breadcumb-wrapper" style={{ background: "#111", padding: "180px 0 80px" }}>
        <div className="container">
          <div className="breadcumb-content text-center">
            <span style={{ color: "#999", fontSize: 14, textTransform: "uppercase", letterSpacing: 3, display: "block", marginBottom: 12 }}>
              Portofolio & Alumni
            </span>
            <h1 className="breadcumb-title" style={{ color: "#fff", fontSize: 48, fontWeight: 600 }}>
              Yang Sampai Disini
            </h1>
            <p style={{ color: "#bbb", maxWidth: 700, margin: "20px auto 0", fontSize: 16, lineHeight: 1.8 }}>
              Setiap karya di galeri ini punya riwayat panjang — dari sketsa awal yang ditolak, revisi yang tidak sedikit, koreksi pengajar yang tidak segan dan jujur. Yang sampai disini bukan yang paling pertama jadi, tapi yang paling banyak melewati proses.
            </p>
          </div>
        </div>
      </div>

      {/* GALERI KARYA */}
      <section className="space">
        <div className="container">
          <div className="title-area text-center mb-60">
            <h2 className="sec-title">Galeri Karya Alumni</h2>
            <p className="sec-text" style={{ maxWidth: 700, margin: "20px auto 0" }}>
              Galeri ini bukan sekadar pajangan tugas akhir. Setiap karya yang masuk sudah melewati evaluasi langsung oleh pengajar yang sekarang masih aktif mengerjakan proyek profesional.
            </p>
          </div>
          <div className="row g-4">
            {["Logo & Brand Identity", "UI/UX & Web Design", "Fotografi", "Videografi & Motion", "Lettering & Type Design", "Dokumentasi Event"].map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div style={{
                  background: "#f8f8f8",
                  padding: "60px 30px",
                  textAlign: "center",
                  borderBottom: "3px solid #C5A55A",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                  <div style={{ fontSize: 28, fontWeight: 700, color: "#111", marginBottom: 8 }}>
                    {String.fromCharCode(65 + i)}
                  </div>
                  <h4 style={{ fontSize: 16, fontWeight: 600, color: "#111", marginBottom: 0 }}>{item}</h4>
                  <span style={{ fontSize: 12, color: "#999", marginTop: 8 }}>Kurasi dari enam angkatan</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONI */}
      <section className="space ica-testimonial">
        <div className="container">
          <div className="title-area text-center mb-60">
            <h2 className="sec-title">Testimoni Alumni</h2>
          </div>
          <div className="row g-4">
            {[
              { text: "Satu tahun di ICA mengubah cara saya melihat pekerjaan dan tanggung jawab berkarya. Yang berubah bukan hanya skill-nya tetapi cara saya memandang untuk apa karya itu dibuat.", author: "Alumni Angkatan 1", role: "Desainer di Studio In-House" },
              { text: "ICA mengajarkan saya bahwa karya akan dipertanggungjawabkan bukan hanya di dunia tapi di akhirat. Ini yang membedakan ICA dari tempat belajar lainnya.", author: "Alumni Angkatan 2", role: "Freelance Brand Designer" },
              { text: "Lingkungan asrama yang terjaga, jadwal ibadah bersama, dan teman-teman yang saling mendorong — kombinasi yang tidak bisa saya dapatkan di mana pun.", author: "Alumni Angkatan 3", role: "Creative Director" },
            ].map((item, i) => (
              <div key={i} className="col-lg-4">
                <div className="testimonial-card">
                  <p className="testimonial-text">"{item.text}"</p>
                  <div className="testimonial-author">{item.author}</div>
                  <div className="testimonial-role">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALUMNI CAREER */}
      <section className="space">
        <div className="container">
          <div className="title-area text-center mb-60">
            <h2 className="sec-title">Alumni Career</h2>
            <p className="sec-text" style={{ maxWidth: 700, margin: "20px auto 0" }}>
              Alumni ICA sudah dipercaya berbagai brand, lembaga dakwah, dan perusahaan kreatif — dari freelance, project-based, sampai full-time di studio dan agensi.
            </p>
          </div>
          <div className="ica-alumni-grid">
            {alumniCareer.map((item, i) => (
              <div key={i} className="alumni-item">
                <div className="alumni-company">{item.company}</div>
                <div className="alumni-name">{item.name}</div>
                <div className="alumni-role">{item.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ICAFooter />
    </>
  );
}
