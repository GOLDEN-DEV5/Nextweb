"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #1e293b", backgroundColor: "#020617" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "40px 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
        <p style={{ color: "#475569", fontSize: "14px" }}>
          © {new Date().getFullYear()}{" "}
          <span style={{ color: "#818cf8", fontWeight: 500 }}>Sami Abbas</span>
          {" "}— Gilgit Baltistan, Pakistan
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          {[
            { href: "https://github.com/GOLDEN-DEV5", label: "GitHub" },
            { href: "https://www.linkedin.com/in/samiabbas110/", label: "LinkedIn" },
          ].map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: "14px", color: "#475569", textDecoration: "none", transition: "color 0.2s", letterSpacing: "0.05em" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#818cf8")}
              onMouseLeave={e => (e.currentTarget.style.color = "#475569")}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
