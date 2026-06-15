import ICAHeader from "@/components/ica/ICAHeader";
import ICAFooter from "@/components/ica/ICAFooter";
import Link from "next/link";

export const metadata = {
  title: "Infaq & Orang Tua Asuh — Indonesia Creators Academy 2026",
};

export default function InfaqPage() {
  return (
    <>
      <ICAHeader />

      {/* PAGE HERO */}
      <div className="breadcumb-wrapper" style={{ background: "#111", padding: "180px 0 80px" }}>
        <div className="container">
          <div className="breadcumb-content text-center">
            <span style={{ color: "#999", fontSize: 14, textTransform: "uppercase", letterSpacing: 3, display: "block", marginBottom: 12 }}>
              Infaq & Orang Tua Asuh
            </span>
            <h1 className="breadcumb-title" style={{ color: "#fff", fontSize: 48, fontWeight: 600 }}>
              Keterbatasan Bukan Penghalang
            </h1>
            <p style={{ color: "#bbb", maxWidth: 700, margin: "20px auto 0", fontSize: 16, lineHeight: 1.8 }}>
              Ada santri berbakat yang sudah lulus seleksi ICA tapi terkendala biaya. Program Orang Tua Asuh hadir untuk memastikan keterbatasan finansial bukan penghalang seseorang mendapat pendidikan yang serius.
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
                Kami tidak ingin ada santri yang harus berhenti bukan karena tidak mampu belajar, tapi karena tidak mampu membayar. Program Orang Tua Asuh ICA dirancang untuk menutup celah itu — bukan dengan bantuan sesaat, tapi dengan dukungan yang menyertai proses belajar selama satu tahun penuh.
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-6">
              <div style={{ background: "#f8f8f8", padding: "50px 40px", height: "100%" }}>
                <div style={{ fontSize: 36, marginBottom: 20 }}>🤝</div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: "#111", marginBottom: 16 }}>Menjadi Orang Tua Asuh</h3>
                <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, marginBottom: 20 }}>
                  Donatur tidak hanya menanggung biaya. Mereka menjadi bagian dari perjalanan seorang santri dengan laporan berkala yang transparan dan peran yang nyata dalam membentuk satu generasi kreator.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {["Laporan perkembangan santri berkala", "Doa dari santri setiap hari", "Kesempatan bertemu langsung dengan santri", "Sertifikat Orang Tua Asuh"].map((item, i) => (
                    <li key={i} style={{ padding: "8px 0", borderBottom: "1px solid #eee", fontSize: 14, color: "#555" }}>
                      <span style={{ color: "#111", marginRight: 8 }}>+</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{ background: "#111", padding: "50px 40px", height: "100%" }}>
                <div style={{ fontSize: 36, marginBottom: 20 }}>🎯</div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: "#fff", marginBottom: 16 }}>Cara Berpartisipasi</h3>
                <p style={{ fontSize: 14, color: "#bbb", lineHeight: 1.7, marginBottom: 20 }}>
                  Program ini hadir untuk menjembatani para dermawan dengan calon santri berbakat yang membutuhkan dukungan finansial.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {["Donasi bulanan atau tahunan", "Bisa perorangan atau institusi", "Pilih santri yang akan didukung", "Terima laporan transparan"].map((item, i) => (
                    <li key={i} style={{ padding: "8px 0", borderBottom: "1px solid #333", fontSize: 14, color: "#bbb" }}>
                      <span style={{ color: "#fff", marginRight: 8 }}>+</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-60">
            <Link href="/ppdb" className="btn" style={{ background: "#111", color: "#fff" }}>
              <span className="link-effect">
                <span className="effect-1">INFO LEBIH LANJUT</span>
                <span className="effect-1">INFO LEBIH LANJUT</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <ICAFooter />
    </>
  );
}
