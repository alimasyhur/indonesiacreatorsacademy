import React from "react";
import Link from "next/link";

export default function ICAFooter() {
  return (
    <footer className="footer-wrapper footer-layout1 overflow-hidden" style={{ background: "#111" }}>
      <div className="container">
        <div className="footer-top space" style={{ borderBottom: "1px solid #333" }}>
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              {/* <img src="/assets/img/ica-logo-transparant.png" alt="ICA" height="150" style={{ display: "block", marginBottom: 12 }} /> */}
              <h2 className="footer-top-title" style={{ color: "#fff", fontSize: 36, fontWeight: 600 }}>
                Indonesia Creators Academy
              </h2>
            </div>
            <div className="col-lg-5">
              <div className="footer-top-wrap">
                <p className="mb-30" style={{ color: "#aaa" }}>
                  Belajar Multimedia dan Diniyah dengan 1 Tahun Pembinaan Penuh.
                  Berkarya Dengan Arah.
                </p>
                <Link href="/ppdb" className="btn" style={{ background: "#fff", color: "#111" }}>
                  <span className="link-effect">
                    <span className="effect-1">DAFTAR SEKARANG</span>
                    <span className="effect-1">DAFTAR SEKARANG</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-menu-area" style={{ paddingTop: 60, paddingBottom: 40 }}>
          <div className="row gy-3 justify-content-between">
            <div className="col-lg-4">
              <h5 style={{ color: "#fff", marginBottom: 20 }}>Navigasi</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><Link href="/" style={{ color: "#aaa", textDecoration: "none" }}>Home</Link></li>
                <li className="mb-2"><Link href="/tentang-kami" style={{ color: "#aaa", textDecoration: "none" }}>Tentang Kami</Link></li>
                <li className="mb-2"><Link href="/program-pendidikan" style={{ color: "#aaa", textDecoration: "none" }}>Program Pendidikan</Link></li>
                <li className="mb-2"><Link href="/ppdb" style={{ color: "#aaa", textDecoration: "none" }}>PPDB</Link></li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h5 style={{ color: "#fff", marginBottom: 20 }}>Program</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><Link href="/program-pendidikan#mukim" style={{ color: "#aaa", textDecoration: "none" }}>Jalur Mukim</Link></li>
                <li className="mb-2"><Link href="/program-pendidikan#non-mukim" style={{ color: "#aaa", textDecoration: "none" }}>Jalur Non-Mukim</Link></li>
                <li className="mb-2"><Link href="/kalender-pendidikan" style={{ color: "#aaa", textDecoration: "none" }}>Kalender Pendidikan</Link></li>
                <li className="mb-2"><Link href="/digital-shop" style={{ color: "#aaa", textDecoration: "none" }}>Digital Shop</Link></li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h5 style={{ color: "#fff", marginBottom: 20 }}>Kontak</h5>
              <ul className="list-unstyled">
                <li className="mb-2" style={{ color: "#aaa" }}>Email: info@indonesiacreatorsacademy.com</li>
                <li className="mb-2" style={{ color: "#aaa" }}>Tel: +62 812-3456-7890</li>
                <li className="mb-2" style={{ color: "#aaa" }}>Instagram: @indonesiacreatorsacademy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap" style={{ borderTop: "1px solid #333" }}>
        <div className="container">
          <div className="row gy-3 justify-content-between align-items-center" style={{ padding: "20px 0" }}>
            <div className="col-md-6">
              <p className="copyright-text" style={{ color: "#666", margin: 0 }}>
                &copy; {new Date().getFullYear()} Indonesia Creators Academy. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
