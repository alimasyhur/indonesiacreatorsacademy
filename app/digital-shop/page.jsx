import ICAHeader from "@/components/ica/ICAHeader";
import ICAFooter from "@/components/ica/ICAFooter";
import Link from "next/link";

export const metadata = {
  title: "Digital Shop — Indonesia Creators Academy 2026",
};

export default function DigitalShopPage() {
  const products = [
    { title: "E-book Creators Conference", price: "Rp 149.000", desc: "Cara kerja nyata dari praktisi yang sekarang masih aktif — positioning, konten, dan keputusan konkret yang membentuk karier kreatif." },
    { title: "Font Pack Vol. 1", price: "Rp 79.000", desc: "Font dirancang untuk kebutuhan branding nyata. Hasil riset dan proses yang bisa dipertanggungjawabkan." },
    { title: "Aset Grafis Bundle", price: "Rp 99.000", desc: "Template desain, mockup, dan aset grafis siap pakai untuk berbagai kebutuhan kreatif." },
    { title: "E-book Branding Dasar", price: "Rp 89.000", desc: "Panduan langkah demi langkah membangun brand identity dari nol. Ditulis dari pengalaman langsung." },
  ];

  return (
    <>
      <ICAHeader />

      {/* PAGE HERO */}
      <div className="breadcumb-wrapper" style={{ background: "#111", padding: "180px 0 80px" }}>
        <div className="container">
          <div className="breadcumb-content text-center">
            <span style={{ color: "#999", fontSize: 14, textTransform: "uppercase", letterSpacing: 3, display: "block", marginBottom: 12 }}>
              Digital Shop
            </span>
            <h1 className="breadcumb-title" style={{ color: "#fff", fontSize: 48, fontWeight: 600 }}>
              Ilmu yang Bermanfaat
            </h1>
            <p style={{ color: "#bbb", maxWidth: 700, margin: "20px auto 0", fontSize: 16, lineHeight: 1.8 }}>
              Produk digital dari orang yang masih aktif di industri. E-book, font, dan aset grafis dari pengalaman nyata — sekali beli, langsung bisa dipakai. Ilmu yang bermanfaat pantas disebarkan. Karya yang baik layak dihargai.
            </p>
          </div>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <section className="space">
        <div className="container">
          <div className="row g-4">
            {products.map((item, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className="ica-product-card">
                  <div style={{ width: "100%", height: 200, background: "#f5f5f5", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 0 }}>
                    <span style={{ fontSize: 48, color: "#ccc" }}>
                      {i === 0 ? "📘" : i === 1 ? "🔤" : i === 2 ? "🎨" : "📖"}
                    </span>
                  </div>
                  <div className="product-title">{item.title}</div>
                  <div className="product-desc">{item.desc}</div>
                  <div className="product-price">{item.price}</div>
                  <button className="btn" style={{ background: "#111", color: "#fff", width: "100%" }}>
                    <span className="link-effect">
                      <span className="effect-1">BELI</span>
                      <span className="effect-1">BELI</span>
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-BOOK HIGHLIGHT */}
      <section className="space" style={{ background: "#f8f8f8" }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: 3, color: "#999", marginBottom: 16, display: "block" }}>
                Featured Product
              </span>
              <h2 style={{ fontSize: 36, fontWeight: 600, color: "#111", marginBottom: 20 }}>
                E-book Creators Conference
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "#555", marginBottom: 20 }}>
                Creators Conference bukan kumpulan motivasi. Isinya adalah cara kerja nyata dari praktisi yang sekarang masih aktif — bagaimana mereka membangun positioning, kenapa sebagian konten bertahan sementara yang lain hilang dalam dua hari, dan keputusan-keputusan konkret yang membentuk karier kreatif yang bertahan lama.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "#555", marginBottom: 30 }}>
                PDF interaktif dengan akses video eksklusif via barcode, studi kasus nyata, dan materi yang langsung bisa diterapkan. Untuk kreator yang ingin memahami industri lebih dalam dari sekadar skills.
              </p>
              <Link href="#" className="btn" style={{ background: "#111", color: "#fff" }}>
                <span className="link-effect">
                  <span className="effect-1">BELI SEKARANG</span>
                  <span className="effect-1">BELI SEKARANG</span>
                </span>
              </Link>
            </div>
            <div className="col-lg-6">
              <div style={{ background: "#111", padding: 80, textAlign: "center" }}>
                <span style={{ fontSize: 80 }}>📘</span>
                <h3 style={{ color: "#fff", marginTop: 30, fontSize: 20 }}>Creators Conference</h3>
                <span style={{ color: "#888", fontSize: 14 }}>PDF Interaktif + Video Eksklusif</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ICAFooter />
    </>
  );
}
