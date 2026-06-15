import ICAHeader from "@/components/ica/ICAHeader";
import ICAFooter from "@/components/ica/ICAFooter";
import ScrollReveal from "@/components/ica/ScrollReveal";

export const metadata = {
  title: "Kontak — Indonesia Creators Academy 2026",
};

export default function KontakPage() {
  return (
    <>
      <ICAHeader />

      <div className="breadcumb-wrapper" style={{ background: "#111", padding: "180px 0 80px" }}>
        <div className="container">
          <div className="breadcumb-content text-center">
            <span style={{ color: "#999", fontSize: 14, textTransform: "uppercase", letterSpacing: 3, display: "block", marginBottom: 12 }}>
              Kontak
            </span>
            <h1 className="breadcumb-title" style={{ color: "#fff", fontSize: 48, fontWeight: 600 }}>
              Hubungi Kami
            </h1>
          </div>
        </div>
      </div>

      <ScrollReveal>
      <section className="space">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <h2 style={{ fontSize: 28, fontWeight: 600, color: "#111", marginBottom: 30 }}>Informasi Kontak</h2>
              <div style={{ marginBottom: 30 }}>
                <h5 style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: 2, color: "#999", marginBottom: 8 }}>Email</h5>
                <p style={{ fontSize: 16, color: "#333" }}>info@indonesiacreatorsacademy.com</p>
              </div>
              <div style={{ marginBottom: 30 }}>
                <h5 style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: 2, color: "#999", marginBottom: 8 }}>Telepon</h5>
                <p style={{ fontSize: 16, color: "#333" }}>+62 812-3456-7890</p>
              </div>
              <div style={{ marginBottom: 30 }}>
                <h5 style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: 2, color: "#999", marginBottom: 8 }}>Instagram</h5>
                <p style={{ fontSize: 16, color: "#333" }}>@indonesiacreatorsacademy</p>
              </div>
              <div style={{ marginBottom: 30 }}>
                <h5 style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: 2, color: "#999", marginBottom: 8 }}>Alamat</h5>
                <p style={{ fontSize: 16, color: "#333" }}>Indonesia (hubungi untuk detail lokasi)</p>
              </div>
            </div>
            <div className="col-lg-7">
              <form>
                <div className="row g-4">
                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Nama" style={{ borderRadius: 0, padding: "16px 20px" }} />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control" placeholder="Email" style={{ borderRadius: 0, padding: "16px 20px" }} />
                  </div>
                  <div className="col-12">
                    <input type="text" className="form-control" placeholder="Subjek" style={{ borderRadius: 0, padding: "16px 20px" }} />
                  </div>
                  <div className="col-12">
                    <textarea className="form-control" placeholder="Pesan" rows={6} style={{ borderRadius: 0, padding: "16px 20px" }}></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn" style={{ background: "#111", color: "#fff" }}>
                      <span className="link-effect">
                        <span className="effect-1">KIRIM PESAN</span>
                        <span className="effect-1">KIRIM PESAN</span>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      <ICAFooter />
    </>
  );
}
