"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Program", href: "/program-pendidikan" },
  { label: "PPDB", href: "/ppdb" },
  { label: "Kontak", href: "/kontak" },
];

export default function ICAHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`mobile-menu-wrapper ${mobileOpen ? "body-visible" : ""}`}>
        <div className="mobile-menu-area">
          <button className="menu-toggle" onClick={() => setMobileOpen(false)}>
            <i className="fas fa-times"></i>
          </button>
          <div className="mobile-logo">
            <Link href="/">
              <img src="/assets/img/ica-logo-transparant.png" alt="ICA" height="30" style={{ display: "block" }} />
            </Link>
          </div>
          <div className="mobile-menu">
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    style={{ color: pathname === item.href ? "#C5A55A" : "#111", fontWeight: pathname === item.href ? 700 : 400 }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <header className={`nav-header header-layout1 ica-header ${scrolled ? "header-sticky" : ""}`}>
        <div className="sticky-wrapper">
          <div className="menu-area">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <Link href="/">
                      <img src="/assets/img/ica-logo-transparant.png" alt="ICA" height="36" style={{ display: "block" }} />
                    </Link>
                  </div>
                </div>
                <div className="col-auto ms-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      {navItems.map((item) => (
                        <li key={item.href} className={pathname === item.href ? "active" : ""}>
                          <Link href={item.href}>
                            <span className="link-effect">
                              <span className="effect-1">{item.label}</span>
                              <span className="effect-1">{item.label}</span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="navbar-right d-inline-flex d-lg-none">
                    <button type="button" className="menu-toggle sidebar-btn" onClick={() => setMobileOpen(true)}>
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
