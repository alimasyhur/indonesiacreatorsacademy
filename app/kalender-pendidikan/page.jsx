import ICAHeader from "@/components/ica/ICAHeader";
import ICAFooter from "@/components/ica/ICAFooter";

export const metadata = {
  title: "Kalender Pendidikan — Indonesia Creators Academy 2026",
};

export default function KalenderPendidikanPage() {
  const timeline = [
    { month: "Bulan 1-3", title: "Dasar Manual", desc: "Gambar alam benda, sketsa, nirmana, lettering. Membangun kepekaan visual dan fundamental desain." },
    { month: "Bulan 4-6", title: "Digital Foundation", desc: "Adobe Photoshop, Illustrator, InDesign. Aplikasi kemampuan manual ke perangkat lunak desain." },
    { month: "Bulan 7", title: "Evaluasi Tengah Tahun", desc: "Evaluasi berkala karya. Stadium general bersama praktisi industri. Persiapan magang." },
    { month: "Bulan 8", title: "Magang Ramadan", desc: "Program magang intensif selama bulan Ramadan di studio desain dan tim media." },
    { month: "Bulan 9-10", title: "Magang Industri", desc: "Magang industri dua bulan penuh di studio desain / agensi kreatif." },
    { month: "Bulan 11", title: "Portofolio & Pameran", desc: "Kurasi karya terbaik, persiapan pameran, dan portofolio profesional." },
    { month: "Bulan 12", title: "Wisuda", desc: "Sidang akhir, wisuda, dan pelepasan. Siap berkarya dengan skill dan adab yang benar." },
  ];

  return (
    <>
      <ICAHeader />

      {/* PAGE HERO */}
      <div className="breadcumb-wrapper" style={{ background: "#111", padding: "180px 0 80px" }}>
        <div className="container">
          <div className="breadcumb-content text-center">
            <span style={{ color: "#999", fontSize: 14, textTransform: "uppercase", letterSpacing: 3, display: "block", marginBottom: 12 }}>
              Kalender Pendidikan
            </span>
            <h1 className="breadcumb-title" style={{ color: "#fff", fontSize: 48, fontWeight: 600 }}>
              Satu Tahun Penuh, Terstruktur
            </h1>
            <p style={{ color: "#bbb", maxWidth: 700, margin: "20px auto 0", fontSize: 16, lineHeight: 1.8 }}>
              Kalender ICA mencakup jadwal belajar, evaluasi, magang, pameran, sampai wisuda — disusun jauh sebelum tahun ajaran dimulai. Bukan jadwal yang mengalir sesuai keadaan, tapi rencana yang disusun dengan serius.
            </p>
          </div>
        </div>
      </div>

      {/* TIMELINE */}
      <section className="space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="ica-timeline">
                {timeline.map((item, i) => (
                  <div key={i} className="timeline-item">
                    <span style={{ fontSize: 12, fontWeight: 600, color: "#999", textTransform: "uppercase", letterSpacing: 2, display: "block", marginBottom: 4 }}>
                      {item.month}
                    </span>
                    <div className="timeline-title">{item.title}</div>
                    <p className="timeline-text">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-60">
            <div className="col-lg-8" style={{ background: "#f8f8f8", padding: 40, borderLeft: "4px solid #C5A55A" }}>
              <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8, marginBottom: 0 }}>
                <strong style={{ color: "#111" }}>Dokumen Resmi:</strong> Kalender Pendidikan ICA adalah dokumen resmi yang sudah ditandatangani Kepala Sekolah dan Pembina Yayasan. Setiap fase punya tujuan dan pengukurannya sendiri. Transparansi ini bentuk tanggung jawab kami kepada peserta dan orang tua, bukan sekadar jadwal, tapi kontrak belajar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ICAFooter />
    </>
  );
}
