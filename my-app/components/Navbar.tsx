"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all 0.4s",
        backgroundColor: scrolled ? "rgba(2,6,23,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(99,102,241,0.15)" : "none",
        boxShadow: scrolled ? "0 8px 32px rgba(49,46,129,0.2)" : "none",
      }}
    >
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <motion.span whileHover={{ scale: 1.05 }} style={{ fontSize: "20px", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", cursor: "pointer" }}>
            Sami<span style={{ color: "#818cf8" }}>Abbas</span>
          </motion.span>
        </Link>

        {/* Desktop Nav */}
        <ul style={{ display: "flex", alignItems: "center", gap: "32px", listStyle: "none", margin: 0, padding: 0 }}
          className="desktop-nav">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} style={{
                fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase",
                fontWeight: 500, textDecoration: "none", position: "relative",
                color: pathname === link.href ? "#818cf8" : "#94a3b8",
                transition: "color 0.2s",
              }}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          style={{ background: "none", border: "none", cursor: "pointer", color: "#cbd5e1", padding: "4px", display: "none" }}
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ display: "block", height: "2px", width: "24px", backgroundColor: "currentColor", borderRadius: "2px", transition: "all 0.3s",
                transform: menuOpen && i === 0 ? "rotate(45deg) translate(5px,5px)" : menuOpen && i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ backgroundColor: "rgba(2,6,23,0.98)", borderTop: "1px solid rgba(99,102,241,0.1)" }}
          >
            <ul style={{ display: "flex", flexDirection: "column", padding: "24px", gap: "20px", listStyle: "none", margin: 0 }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={() => setMenuOpen(false)} style={{
                    fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase",
                    fontWeight: 500, textDecoration: "none",
                    color: pathname === link.href ? "#818cf8" : "#94a3b8",
                  }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </motion.nav>
  );
}
