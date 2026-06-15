import ICAHeader from "@/components/ica/ICAHeader";
import ICAFooter from "@/components/ica/ICAFooter";

export const metadata = {
  title: "Kegiatan Harian Santri — Indonesia Creators Academy 2026",
};

export default function KegiatanHarianPage() {
  const jadwal = [
    { time: "04.00 — 06.00", activity: "Tahajud, Subuh berjamaah, dzikir pagi — poros disiplin yang tidak bergantung pada motivasi sesaat." },
    { time: "06.00 — 07.30", activity: "Olahraga, mandi, sarapan bersama — waktu ngobrol paling produktif." },
    { time: "08.00 — 12.00", activity: "Kelas Desain — dari manual sampai digital bersama pengajar aktif industri." },
    { time: "12.00 — 13.30", activity: "Shalat Dzuhur berjamaah, istirahat, makan siang." },
    { time: "13.30 — 15.30", activity: "Kelas Diniyah — pembinaan akhlak, Qowaidul Quraniyyah, Sirah Nabawi." },
    { time: "15.30 — 17.00", activity: "Shalat Ashar, penugasan mandiri, praktik lapangan." },
    { time: "17.00 — 19.00", activity: "Shalat Maghrib, mengaji, diskusi karya." },
    { time: "19.00 — 21.00", activity: "Shalat Isya, koreksi karya, diskusi tidak terbatas jam pelajaran." },
    { time: "21.00 — 22.00", activity: "Waktu istirahat — kreator yang kelelahan tidak menghasilkan karya terbaik." },
  ];

  return (
    <>
      <ICAHeader />

      {/* PAGE HERO */}
      <div className="breadcumb-wrapper" style={{ background: "#111", padding: "180px 0 80px" }}>
        <div className="container">
          <div className="breadcumb-content text-center">
            <span style={{ color: "#999", fontSize: 14, textTransform: "uppercase", letterSpacing: 3, display: "block", marginBottom: 12 }}>
              Kegiatan Harian Santri
            </span>
            <h1 className="breadcumb-title" style={{ color: "#fff", fontSize: 48, fontWeight: 600 }}>
              Karakter Dibentuk dari Rutinitas
            </h1>
            <p style={{ color: "#bbb", maxWidth: 700, margin: "20px auto 0", fontSize: 16, lineHeight: 1.8 }}>
              Satu hari di ICA bukan hanya tentang belajar desain. Ada ibadah yang dijaga, adab yang dilatih, dan kebersamaan yang dibentuk dari rutinitas yang konsisten setiap hari. Karakter tidak dibentuk dari satu ceramah. Ia terbentuk dari apa yang dilakukan berulang kali, setiap hari, sampai menjadi kebiasaan yang melekat.
            </p>
          </div>
        </div>
      </div>

      {/* INTRO */}
      <section className="space" style={{ background: "#f8f8f8" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <p style={{ fontSize: 18, lineHeight: 1.9, color: "#555" }}>
                Di ICA, ritme harian santri dirancang untuk melatih dua hal sekaligus — ketajaman visual sebagai kreator dan keteguhan akhlak sebagai muslim. Bukan program terpisah, tetapi satu bingkai yang berjalan beriringan dari sebelum fajar sampai malam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JADWAL HARIAN */}
      <section className="space">
        <div className="container">
          <div className="title-area text-center mb-60">
            <h2 className="sec-title">Jadwal Harian</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="ica-jadwal">
                {jadwal.map((item, i) => (
                  <div key={i} className="jadwal-item">
                    <div className="jadwal-time">{item.time}</div>
                    <div className="jadwal-activity">{item.activity}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEHIDUPAN ASRAMA */}
      <section className="space" style={{ background: "#111" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <span style={{ color: "#888", fontSize: 14, textTransform: "uppercase", letterSpacing: 3, marginBottom: 16, display: "block" }}>
                Kehidupan Asrama
              </span>
              <h2 style={{ color: "#fff", fontSize: 36, fontWeight: 600, marginBottom: 30 }}>
                Lingkungan yang Membentuk Karakter
              </h2>
              <p style={{ color: "#bbb", fontSize: 16, lineHeight: 1.9 }}>
                Asrama ICA merupakan lingkungan yang membentuk karakter dan kebiasaan baik. Bukan karena ada peraturan yang memaksanya, tapi karena budaya itu yang dibangun sejak hari pertama. Kebersamaan di asrama menghasilkan sesuatu yang tidak ada di kelas online mana pun — rasa bertanggung jawab terhadap kemajuan orang di samping kita.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ICAFooter />
    </>
  );
}
