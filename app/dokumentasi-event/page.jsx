import ICAHeader from "@/components/ica/ICAHeader";
import ICAFooter from "@/components/ica/ICAFooter";

export const metadata = {
  title: "Dokumentasi Event & Kolaborasi — Indonesia Creators Academy 2026",
};

export default function DokumentasiEventPage() {
  const events = [
    { title: "Event Islami Skala Lokal", desc: "Santri ICA terlibat sebagai media partner, mendokumentasikan dan menyebarkan nilai dari setiap acara." },
    { title: "Event Islami Skala Nasional", desc: "Dipercaya sebagai tim kreatif yang mengabadikan momen-momen penting event nasional." },
    { title: "Media Partner", desc: "Bermitra dengan penyelenggara event sebagai tim dokumentasi resmi." },
    { title: "Kolaborasi Komunitas", desc: "Bekerja sama dengan berbagai komunitas kreatif dan dakwah di Indonesia." },
  ];

  return (
    <>
      <ICAHeader />

      {/* PAGE HERO */}
      <div className="breadcumb-wrapper" style={{ background: "#111", padding: "180px 0 80px" }}>
        <div className="container">
          <div className="breadcumb-content text-center">
            <span style={{ color: "#999", fontSize: 14, textTransform: "uppercase", letterSpacing: 3, display: "block", marginBottom: 12 }}>
              Dokumentasi Event & Kolaborasi
            </span>
            <h1 className="breadcumb-title" style={{ color: "#fff", fontSize: 48, fontWeight: 600 }}>
              Belajar di Balik Pintu? Tidak.
            </h1>
            <p style={{ color: "#bbb", maxWidth: 700, margin: "20px auto 0", fontSize: 16, lineHeight: 1.8 }}>
              ICA bukan lembaga yang belajar di balik pintu. Santri terjun langsung sebagai media partner di berbagai event islami — mengaplikasikan skill di lapangan sebelum program magang resmi dimulai.
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <section className="space">
        <div className="container">
          <div className="row justify-content-center mb-60">
            <div className="col-lg-8">
              <p style={{ fontSize: 16, lineHeight: 1.9, color: "#555" }}>
                Kelas mengajarkan teknik. Lapangan mengajarkan selebihnya — mulai dari cara membaca situasi, cara bekerja dalam tim, cara menghasilkan karya di bawah tekanan waktu nyata, dan cara menjaga adab ketika tidak ada yang mengawasi.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.9, color: "#555" }}>
                Santri ICA sudah terlibat sebagai media partner di berbagai event islami skala lokal hingga nasional — bukan sebagai peserta, tapi sebagai tim kreatif yang dipercaya mengabadikan dan menyebarkan nilai dari setiap acara.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {events.map((item, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div style={{ background: "#f8f8f8", padding: "40px 30px", height: "100%", borderBottom: "3px solid #C5A55A" }}>
                  <div style={{ fontSize: 32, fontWeight: 700, color: "#111", marginBottom: 16 }}>
                    {(i + 1).toString().padStart(2, "0")}
                  </div>
                  <h4 style={{ fontSize: 16, fontWeight: 600, color: "#111", marginBottom: 12 }}>{item.title}</h4>
                  <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7, marginBottom: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ICAFooter />
    </>
  );
}
