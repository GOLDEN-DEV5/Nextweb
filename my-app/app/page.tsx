"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" },
  }),
};

const skills = ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"];

export default function HomePage() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, backgroundColor: "#020617" }}>
        <div style={{ position: "absolute", top: "25%", left: "25%", width: "384px", height: "384px", backgroundColor: "rgba(79,70,229,0.08)", borderRadius: "50%", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", bottom: "25%", right: "25%", width: "320px", height: "320px", backgroundColor: "rgba(67,56,202,0.08)", borderRadius: "50%", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.025,
          backgroundImage: "linear-gradient(#818cf8 1px, transparent 1px), linear-gradient(90deg, #818cf8 1px, transparent 1px)",
          backgroundSize: "60px 60px" }} />
      </div>

      <div style={{ position: "relative", zIndex: 10, maxWidth: "1152px", margin: "0 auto", padding: "112px 24px 80px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "32px" }}>

        {/* Badge */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}
          style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "9999px", border: "1px solid rgba(99,102,241,0.3)", backgroundColor: "rgba(99,102,241,0.08)" }}>
          <span className="animate-pulse" style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#818cf8", display: "inline-block" }} />
          <span style={{ fontSize: "11px", color: "#a5b4fc", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500 }}>Available for work</span>
        </motion.div>

        {/* Heading */}
        <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
          className="font-serif"
          style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)", color: "#fff", lineHeight: 1, letterSpacing: "-0.02em", maxWidth: "900px" }}>
          Hi, I&apos;m{" "}
          <span className="gradient-text">Sami Abbas</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
          style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", color: "#94a3b8", fontWeight: 300, maxWidth: "640px", lineHeight: 1.7 }}>
          Full Stack Developer from{" "}
          <span style={{ color: "#a5b4fc", fontWeight: 500 }}>Gilgit Baltistan, Pakistan</span>
          {" "}— crafting elegant digital experiences with clean code and thoughtful design.
        </motion.p>

        {/* Skill pills */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}
          style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {skills.map((s) => (
            <span key={s} style={{ padding: "4px 12px", fontSize: "12px", color: "#cbd5e1", backgroundColor: "rgba(30,41,59,0.6)", border: "1px solid rgba(51,65,85,0.5)", borderRadius: "9999px", letterSpacing: "0.04em" }}>
              {s}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}
          style={{ display: "flex", flexWrap: "wrap", gap: "16px", paddingTop: "8px" }}>
          <Link href="/projects">
            <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 32px", backgroundColor: "#4f46e5", color: "#fff", fontSize: "14px", fontWeight: 600, borderRadius: "10px", cursor: "pointer", boxShadow: "0 8px 32px rgba(79,70,229,0.3)", textDecoration: "none" }}>
              View Projects →
            </motion.span>
          </Link>
          <Link href="/contact">
            <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 32px", border: "1px solid #334155", color: "#cbd5e1", fontSize: "14px", fontWeight: 600, borderRadius: "10px", cursor: "pointer", textDecoration: "none", transition: "all 0.2s" }}>
              Get in Touch
            </motion.span>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={5}
          style={{ display: "flex", gap: "48px", paddingTop: "32px", borderTop: "1px solid rgba(30,41,59,0.6)", width: "100%" }}>
          {[{ value: "2+", label: "Years Experience" }, { value: "10+", label: "Projects Built" }, { value: "10+", label: "Happy Clients" }].map((stat) => (
            <div key={stat.label} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span className="font-serif" style={{ fontSize: "2rem", color: "#818cf8", fontWeight: 700 }}>{stat.value}</span>
              <span style={{ fontSize: "11px", color: "#64748b", letterSpacing: "0.12em", textTransform: "uppercase" }}>{stat.label}</span>
            </div>
          ))}
        </motion.div>
        {/* Featured capabilities */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={6}
          style={{ width: "100%", marginTop: "8px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "16px",
              paddingTop: "8px",
              borderTop: "1px solid rgba(30,41,59,0.6)",
              marginTop: "32px",
            }}
          >
            {[
              {
                title: "Clean Architecture",
                desc: "Structured components + scalable patterns so your product stays easy to maintain.",
              },
              {
                title: "Performance Mindset",
                desc: "Animation, rendering, and data flows designed to feel instant for users.",
              },
              {
                title: "Full-Stack Delivery",
                desc: "From UI to APIs to databases—end to end delivery with consistent quality.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -4 }}
                style={{
                  background: "rgba(15,23,42,0.6)",
                  border: "1px solid rgba(30,41,59,0.6)",
                  borderRadius: "16px",
                  padding: "20px",
                }}
              >
                <h3 style={{ color: "#fff", fontSize: "16px", fontWeight: 800, marginBottom: "8px" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={7}
          style={{ width: "100%", paddingTop: "8px" }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              padding: "18px 18px",
              borderRadius: "16px",
              border: "1px solid rgba(99,102,241,0.25)",
              background:
                "linear-gradient(135deg, rgba(79,70,229,0.15), rgba(2,6,23,0.35))",
              marginTop: "32px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span
                style={{
                  color: "#818cf8",
                  fontSize: "12px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                Let&apos;s build something
              </span>
              <span style={{ color: "#fff", fontSize: "18px", fontWeight: 800 }}>
                Need a fast, reliable web app?
              </span>
              <span style={{ color: "#94a3b8", fontSize: "14px" }}>
                I can help with Next.js/React UI, API development, and database design.
              </span>
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 18px",
                    backgroundColor: "#4f46e5",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: 700,
                    borderRadius: "12px",
                    boxShadow: "0 8px 32px rgba(79,70,229,0.3)",
                  }}
                >
                  Contact me →
                </motion.span>
              </Link>
              <Link href="/projects" style={{ textDecoration: "none" }}>
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 18px",
                    backgroundColor: "transparent",
                    border: "1px solid rgba(148,163,184,0.35)",
                    color: "#cbd5e1",
                    fontSize: "14px",
                    fontWeight: 700,
                    borderRadius: "12px",
                  }}
                >
                  View work
                </motion.span>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

