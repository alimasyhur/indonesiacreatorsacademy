import ICAHeader from "@/components/ica/ICAHeader";
import ICAFooter from "@/components/ica/ICAFooter";

export const metadata = {
  title: "Galeri Portofolio Siswa — Indonesia Creators Academy 2026",
};

export default function GaleriSiswaPage() {
  const categories = [
    { name: "Brand Identity", count: "24 karya" },
    { name: "Poster & Flyer", count: "18 karya" },
    { name: "Fotografi", count: "32 karya" },
    { name: "Videografi", count: "15 karya" },
    { name: "Lettering", count: "20 karya" },
    { name: "UI/UX Design", count: "12 karya" },
  ];

  return (
    <>
      <ICAHeader />

      {/* PAGE HERO */}
      <div className="breadcumb-wrapper" style={{ background: "#111", padding: "180px 0 80px" }}>
        <div className="container">
          <div className="breadcumb-content text-center">
            <span style={{ color: "#999", fontSize: 14, textTransform: "uppercase", letterSpacing: 3, display: "block", marginBottom: 12 }}>
              Portofolio Galeri Siswa
            </span>
            <h1 className="breadcumb-title" style={{ color: "#fff", fontSize: 48, fontWeight: 600 }}>
              Setiap Karya Punya Cerita
            </h1>
            <p style={{ color: "#bbb", maxWidth: 700, margin: "20px auto 0", fontSize: 16, lineHeight: 1.8 }}>
              Setiap karya punya cerita di baliknya — berapa kali direvisi, koreksi apa yang paling mengubah arahnya, dan momen apa yang akhirnya membuat pengajar bilang "sudah, ini layak". Galeri portofolio ICA bukan sekadar display hasil akhir. Ini cermin dari sistem yang bekerja.
            </p>
          </div>
        </div>
      </div>

      {/* KATEGORI KARYA */}
      <section className="space">
        <div className="container">
          <div className="title-area text-center mb-60">
            <h2 className="sec-title">Kategori Karya</h2>
            <p className="sec-text" style={{ maxWidth: 700, margin: "20px auto 0" }}>
              Bahwa proses yang jujur dan konsisten menghasilkan karya yang bisa dipertanggungjawabkan.
            </p>
          </div>
          <div className="row g-4">
            {categories.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div style={{
                  background: i % 2 === 0 ? "#f8f8f8" : "#fff",
                  padding: "80px 40px",
                  textAlign: "center",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                  <h3 style={{ fontSize: 22, fontWeight: 600, color: i % 2 === 0 ? "#111" : "#111", marginBottom: 12 }}>
                    {item.name}
                  </h3>
                  <span style={{ fontSize: 14, color: "#999" }}>
                    {item.count}
                  </span>
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
