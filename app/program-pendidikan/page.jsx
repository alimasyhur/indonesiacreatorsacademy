import ICAHeader from "@/components/ica/ICAHeader";
import ICAFooter from "@/components/ica/ICAFooter";
import Link from "next/link";
import ScrollReveal from "@/components/ica/ScrollReveal";

export const metadata = {
  title: "Program Pendidikan — Indonesia Creators Academy 2026",
};

export default function ProgramPendidikanPage() {
  const kurikulum = [
    { title: "Gambar Manual", desc: "Alam benda, sketsa, lettering, komposisi, dan nirmana — dasar yang membangun kepekaan visual." },
    { title: "Desain Digital", desc: "Adobe Creative Suite — mengaplikasikan kemampuan manual ke media digital." },
    { title: "Fotografi & Videografi", desc: "Teknik pengambilan gambar, pencahayaan, dan editing video profesional." },
    { title: "Video Mapping", desc: "Teknik proyeksi visual pada media non-konvensional, dari konsep hingga eksekusi." },
    { title: "Qowaidul Quraniyyah", desc: "Dasar-dasar pemahaman Al-Quran sebagai pondasi spiritual." },
    { title: "Adab & Akhlak", desc: "Pembentukan karakter muslim yang beradab dalam berkarya dan bermasyarakat." },
    { title: "Sirah Nabawiyah", desc: "Mempelajari perjalanan hidup Rasulullah sebagai teladan." },
    { title: "Hadits Arbain & Tahsin", desc: "Memahami hadits-hadits pilihan dan memperbaiki bacaan Al-Quran." },
    { title: "Fiqih", desc: "Pemahaman hukum Islam dalam kehidupan sehari-hari." },
  ];

  return (
    <>
      <ICAHeader />

      {/* PAGE HERO */}
      <div className="breadcumb-wrapper" style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1516315720917-231ef9acce48?w=1920&q=80&auto=format&fit=crop)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "180px 0 80px",
        position: "relative",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.85)" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="breadcumb-content text-center">
            <span style={{ color: "#999", fontSize: 14, textTransform: "uppercase", letterSpacing: 3, display: "block", marginBottom: 12 }}>
              Program Pendidikan
            </span>
            <h1 className="breadcumb-title" style={{ color: "#fff", fontSize: 48, fontWeight: 600 }}>
              Program 1 Tahun
            </h1>
            <p style={{ color: "#bbb", maxWidth: 700, margin: "20px auto 0", fontSize: 16, lineHeight: 1.8 }}>
              Program satu tahun Indonesia Creators Academy memiliki kurikulum yang dimulai dari dasar, yaitu gambar manual alam benda, sketsa, lettering, komposisi, nirmana, dan lanjut digital dengan software adobe, foto-vidiografi, dan video mapping. Lanjut kemudian materi diniyah, seperti Qowaidul Quraniyyah, Adab Akhlak, Siroh Nabawi, Hadist Arbain, Tahsin, dan Fiqih.
            </p>
          </div>
        </div>
      </div>

      {/* JALUR MUKIM */}
      <ScrollReveal>
      <section className="space" id="mukim">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: 3, color: "#999", marginBottom: 16, display: "block" }}>
                Jalur Mukim
              </span>
              <h2 style={{ fontSize: 40, fontWeight: 600, color: "#111", marginBottom: 24 }}>Asrama ICA</h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#555", marginBottom: 20 }}>
                Asrama ICA merupakan ruang pembinaan dengan jadwal ibadah bersama, tanggung jawab bersama, dan budaya saling mendorong yang terbentuk dari rutinitas harian. Asrama sebagai tempat tinggal, belajar, dan bertumbuh di satu lingkungan selama satu tahun.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#555", marginBottom: 20 }}>
                Lingkungan terjaga, jadwal terstruktur, dan sesama kreator yang saling mendorong maju. Tahajud dan subuh berjamaah. Sedari kelas desain pagi sampai kelas diniyah sore. Pengerjaan tugas bisa dilakukan siang dan malam. Satu tahun dengan ritme yang konsisten menghasilkan kebiasaan yang tidak bisa dibeli dari kelas online mana pun.
              </p>
            </div>
            <div className="col-lg-6">
              <div style={{ background: "#111", padding: 60, color: "#fff" }}>
                <h3 style={{ color: "#fff", fontSize: 24, marginBottom: 20 }}>Yang Didapatkan</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {["Tempat tinggal 1 tahun", "Jadwal ibadah bersama", "Kelas desain pagi + diniyah sore", "Lingkungan kondusif terjaga", "Evaluasi berkala jujur", "Magang industri"].map((item, i) => (
                    <li key={i} style={{ padding: "10px 0", borderBottom: "1px solid #333", color: "#ccc" }}>
                      <span style={{ color: "#fff", marginRight: 12 }}>—</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* JALUR NON-MUKIM */}
      <ScrollReveal>
      <section className="space" id="non-mukim">
        <div className="container">
          <div className="row align-items-center g-5 flex-row-reverse">
            <div className="col-lg-6">
              <span style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: 3, color: "#999", marginBottom: 16, display: "block" }}>
                Jalur Non-Mukim
              </span>
              <h2 style={{ fontSize: 40, fontWeight: 600, color: "#111", marginBottom: 24 }}>Fleksibel Tanpa Kompromi</h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#555", marginBottom: 20 }}>
                Kurikulum yang sama dengan jalur mukim, fleksibilitas yang berbeda. Jadwal bisa dikonsultasikan, pendampingan pengajar aktif tetap tersedia, biaya lebih efisien.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#555", marginBottom: 20 }}>
                Untuk yang punya kondisi khusus seperti pekerjaan, keluarga, atau keterbatasan lainnya, jalur non-mukim hadir dengan standar yang tidak dikurangi. Kurikulum sama, koreksi sama, ekspektasi yang sama. Perbedaannya hanya pada fleksibilitas jadwal yang bisa dikonsultasikan dengan admin sebelum mendaftar.
              </p>
            </div>
            <div className="col-lg-6">
              <div style={{ background: "#f8f8f8", padding: 60, borderLeft: "4px solid #C5A55A" }}>
                <h3 style={{ fontSize: 24, marginBottom: 20, color: "#111" }}>Yang Didapatkan</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {["Kurikulum sama dengan jalur mukim", "Jadwal fleksibel (konsultasi)", "Pendampingan pengajar aktif", "Koreksi dan evaluasi yang sama", "Biaya lebih efisien", "Magang industri"].map((item, i) => (
                    <li key={i} style={{ padding: "10px 0", borderBottom: "1px solid #eee", color: "#555" }}>
                      <span style={{ color: "#111", marginRight: 12, fontWeight: 600 }}>+</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* KURIKULUM */}
      <ScrollReveal>
      <section className="space" style={{ background: "#111" }}>
        <div className="container">
          <div className="title-area text-center mb-60">
            <h2 className="sec-title" style={{ color: "#fff" }}>Kurikulum ICA</h2>
            <p style={{ color: "#bbb", maxWidth: 700, margin: "20px auto 0" }}>
              Kurikulum ICA disusun dengan mata pelajaran yang sesuai kebutuhan nyata di industri kreatif. Mata Pelajaran ini urut, sedari gambar manual yang diteruskan sampai menjadi karya digital dan konten video.
            </p>
          </div>
          <div className="row g-3">
            {kurikulum.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="kurikulum-card" style={{ padding: 30, height: "100%" }}>
                  <span style={{ color: "#888", fontSize: 12, textTransform: "uppercase", letterSpacing: 2, display: "block", marginBottom: 10 }}>
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <h4 style={{ color: "#fff", fontSize: 16, fontWeight: 600, marginBottom: 12 }}>{item.title}</h4>
                  <p style={{ color: "#999", fontSize: 14, lineHeight: 1.6, marginBottom: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* SISTEM PEMBELAJARAN */}
      <ScrollReveal>
      <section className="space">
        <div className="container">
          <div className="title-area text-center mb-60">
            <h2 className="sec-title">Sistem Pembelajaran</h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
              <div style={{ padding: "40px 30px", border: "1px solid #eee", textAlign: "center", height: "100%", background: "#f8f8f8" }}>
                <div style={{ fontSize: 32, fontWeight: 700, color: "#111", marginBottom: 20 }}>01</div>
                <h4 style={{ fontSize: 18, fontWeight: 600, color: "#111", marginBottom: 16 }}>Tugas Berbasis Industri</h4>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7, marginBottom: 0 }}>Pengajar memberikan tugas yang disesuaikan kebutuhan industri dari pembuatan desain logo, poster, branding sampai pembuatan video konten.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div style={{ padding: "40px 30px", border: "1px solid #eee", textAlign: "center", height: "100%", background: "#f8f8f8" }}>
                <div style={{ fontSize: 32, fontWeight: 700, color: "#111", marginBottom: 20 }}>02</div>
                <h4 style={{ fontSize: 18, fontWeight: 600, color: "#111", marginBottom: 16 }}>Evaluasi Berkala</h4>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7, marginBottom: 0 }}>Bukan formalitas. Karya peserta diperiksa langsung, dianalisis satu per satu, dan diperbaiki bersama. Koreksi yang jujur adalah bentuk penghargaan paling nyata terhadap potensi seseorang.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div style={{ padding: "40px 30px", border: "1px solid #eee", textAlign: "center", height: "100%", background: "#f8f8f8" }}>
                <div style={{ fontSize: 32, fontWeight: 700, color: "#111", marginBottom: 20 }}>03</div>
                <h4 style={{ fontSize: 18, fontWeight: 600, color: "#111", marginBottom: 16 }}>Presentasi Karya</h4>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7, marginBottom: 0 }}>Presentasi karya sebagai bentuk pertanggungjawaban siswa atas karya yang dibuatnya. Melatih kemampuan komunikasi dan argumentasi desain.</p>
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
