import ICAHeader from "@/components/ica/ICAHeader";
import ICAFooter from "@/components/ica/ICAFooter";
import Link from "next/link";
import ScrollReveal from "@/components/ica/ScrollReveal";

export const metadata = {
  title: "Info PPDB & Pendaftaran — Indonesia Creators Academy 2026",
};

export default function PPDBPage() {
  return (
    <>
      <ICAHeader />

      {/* PAGE HERO */}
      <div className="breadcumb-wrapper" style={{ background: "#111", padding: "180px 0 80px" }}>
        <div className="container">
          <div className="breadcumb-content text-center">
            <span style={{ color: "#999", fontSize: 14, textTransform: "uppercase", letterSpacing: 3, display: "block", marginBottom: 12 }}>
              Info PPDB & Pendaftaran
            </span>
            <h1 className="breadcumb-title" style={{ color: "#fff", fontSize: 48, fontWeight: 600 }}>
              Pendaftaran Angkatan 2026
            </h1>
            <p style={{ color: "#bbb", maxWidth: 700, margin: "20px auto 0", fontSize: 16, lineHeight: 1.8 }}>
              Dua gelombang, kuota terbatas, sistem seleksi berlaku. Satu tahun di lingkungan yang tepat bisa mengubah arah — tapi itu hanya bisa terjadi kalau kamu mendaftar.
            </p>
          </div>
        </div>
      </div>

      {/* INFO PENDAFTARAN */}
      <ScrollReveal>
      <section className="space">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <span style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: 3, color: "#999", marginBottom: 16, display: "block" }}>
                Mengapa ICA?
              </span>
              <h2 style={{ fontSize: 36, fontWeight: 600, color: "#111", marginBottom: 24 }}>
                Kuota Terbatas, Seleksi Ketat
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#555", marginBottom: 20 }}>
                ICA tidak membuka pendaftaran untuk sebanyak-banyaknya orang. Pembinaan yang baik butuh perhatian yang cukup untuk setiap peserta yang masuk — dan itulah alasan kuota dibatasi setiap angkatan.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#555", marginBottom: 20 }}>
                Dua gelombang pendaftaran tersedia untuk memberi kesempatan yang adil. Tapi semakin awal mendaftar, semakin matang persiapan masuk dan semakin besar peluang untuk melewati seleksi dengan baik. Ini bukan basa-basi. Angkatan sebelumnya sudah membuktikannya.
              </p>
            </div>
            <div className="col-lg-5">
              <div style={{ background: "#f8f8f8", padding: "40px 35px", borderLeft: "4px solid #C5A55A" }}>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: "#111", marginBottom: 24 }}>Informasi Pendaftaran</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {[
                    { label: "Gelombang 1", value: "Januari — Maret 2026" },
                    { label: "Gelombang 2", value: "April — Juni 2026" },
                    { label: "Jalur Mukim", value: "Full-time, tinggal di asrama" },
                    { label: "Jalur Non-Mukim", value: "Fleksibel, konsultasi jadwal" },
                    { label: "Seleksi", value: "Portofolio & Wawancara" },
                    { label: "Kuota", value: "Terbatas per angkatan" },
                  ].map((item, i) => (
                    <li key={i} style={{ padding: "12px 0", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between" }}>
                      <span style={{ fontSize: 14, color: "#999" }}>{item.label}</span>
                      <span style={{ fontSize: 14, fontWeight: 600, color: "#111" }}>{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* PERSYARATAN */}
      <ScrollReveal>
      <section className="space" style={{ background: "#f8f8f8" }}>
        <div className="container">
          <div className="title-area text-center mb-60">
            <h2 className="sec-title">Persyaratan Pendaftaran</h2>
          </div>
          <div className="row g-4">
            {[
              { title: "Persyaratan Umum", items: ["Lulus SMA/SMK/sederajat", "Usia maksimal 22 tahun", "Bersedia tinggal di asrama (jalur mukim)", "Mengisi formulir pendaftaran online"] },
              { title: "Persyaratan Akademik", items: ["Portofolio (jika ada)", "Surat rekomendasi (opsional)", "Transkrip nilai", "Surat keterangan sehat"] },
              { title: "Persyaratan Diniyah", items: ["Mampu membaca Al-Quran", "Bersedia mengikuti program diniyah", "Komitmen 1 tahun penuh", "Izin orang tua/wali"] },
            ].map((section, i) => (
              <div key={i} className="col-lg-4">
                <div style={{ background: "#fff", padding: "40px 30px", border: "1px solid #eee", height: "100%" }}>
                  <h4 style={{ fontSize: 16, fontWeight: 600, color: "#111", marginBottom: 20 }}>{section.title}</h4>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {section.items.map((item, j) => (
                      <li key={j} style={{ padding: "8px 0", borderBottom: "1px solid #f0f0f0", fontSize: 14, color: "#555" }}>
                        <span style={{ color: "#111", marginRight: 8 }}>—</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
      <section className="space ica-cta text-center" style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1517239071090-2a00b808e6e5?w=1920&q=80&auto=format&fit=crop)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.85)" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <h2 className="cta-title">Daftar Sekarang</h2>
          <p className="cta-text">Ambil langkah pertamamu menuju perjalanan satu tahun yang akan mengubah cara kamu berkarya.</p>
          <div className="btn-wrap mt-40" style={{ display: "flex", justifyContent: "center" }}>
            <Link href="#" className="btn" style={{ background: "#fff", color: "#111" }}>
              <span className="link-effect">
                <span className="effect-1">DAFTAR ONLINE</span>
                <span className="effect-1">DAFTAR ONLINE</span>
              </span>
            </Link>
          </div>
        </div>
      </section>
      </ScrollReveal>

      <ICAFooter />
    </>
  );
}
