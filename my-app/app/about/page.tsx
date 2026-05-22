"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express", "REST APIs", "GraphQL", "PostgreSQL"] },
  { category: "Tools", items: ["Git", "Docker", "Vercel", "Figma", "VS Code"] },
];

const timeline = [
  { year: "2025 – Present", role: "Full Stack Developer", company: "Freelance / Remote", desc: "Building scalable web applications for international clients. Specializing in Next.js, TypeScript, React JS and Data Base" },
  { year: "2024 – 2025", role: "Front end Developer", company: "Sairow Solution GB", desc: "Built and maintained client websites. Worked across HTML, CSS, JavaScript" },
  { year: "2025 – 2027", role: "Intermediate in Computer Science", company: "KIPS COLLEGE GILGIT" },
];

export default function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#020617", paddingTop: "128px", paddingBottom: "96px" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0} style={{ marginBottom: "64px" }}>
          <p style={{ color: "#818cf8", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500, marginBottom: "12px" }}>About Me</p>
          <h1 className="font-serif" style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", color: "#fff", marginBottom: "24px", lineHeight: 1.15 }}>
            Passionate about building<br />
            <span className="gradient-text">meaningful products.</span>
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "18px", maxWidth: "640px", lineHeight: 1.7 }}>
            I&apos;m Sami Abbas, a Full Stack Developer from the breathtaking valleys of Gilgit Baltistan, Pakistan.
            I build fast, accessible, and beautiful web applications — from pixel-perfect UIs to robust backend systems.
          </p>
        </motion.div>

        {/* Bio + Image */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px", marginBottom: "96px" }}>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}
            style={{ display: "flex", flexDirection: "column", gap: "20px", color: "#94a3b8", lineHeight: 1.75, fontSize: "16px" }}>
            <p>Growing up surrounded by the majestic Karakoram mountains gave me a deep appreciation for precision and scale — qualities I bring into every line of code I write.</p>
            <p>With 3+ years of professional experience, I&apos;ve worked with startups and agencies across Pakistan and internationally, delivering production-ready applications that users love.</p>
            <p>When I&apos;m not coding, I&apos;m probably hiking the trails near Skardu, reading about system design, or experimenting with new tech stacks.</p>
            <div style={{ paddingTop: "16px" }}>
              <a href="/mycv.png" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#818cf8", border: "1px solid rgba(99,102,241,0.3)", padding: "10px 20px", borderRadius: "8px", textDecoration: "none" }}>
                Download Resume ↓
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}>
            <div style={{ position: "relative", aspectRatio: "1/1", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(99,102,241,0.2)" }} className="glow">
              <Image
                src="/profile.jpeg"
                alt="Sami Abbas"
                fill
                style={{ objectFit: "cover",}}
                priority
              />
              {/* Name overlay at bottom */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px", background: "linear-gradient(to top, rgba(2,6,23,0.9), transparent)" }}>
                <p style={{ color: "#fff", fontSize: "16px", fontWeight: 600 }}>Sami Abbas</p>
                <p style={{ color: "#818cf8", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "4px" }}>Gilgit Baltistan</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3} style={{ marginBottom: "96px" }}>
          <p style={{ color: "#818cf8", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500, marginBottom: "32px" }}>Tech Stack</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
            {skills.map((group) => (
              <div key={group.category} style={{ background: "rgba(15,23,42,0.6)", border: "1px solid rgba(30,41,59,0.6)", borderRadius: "16px", padding: "24px" }}>
                <h3 style={{ color: "#cbd5e1", fontWeight: 600, marginBottom: "16px", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase" }}>{group.category}</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {group.items.map((item) => (
                    <span key={item} style={{ padding: "4px 12px", fontSize: "12px", color: "#a5b4fc", background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)", borderRadius: "9999px" }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}>
          <p style={{ color: "#818cf8", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500, marginBottom: "40px" }}>Experience & Education</p>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: 0, top: "8px", bottom: "8px", width: "1px", background: "linear-gradient(to bottom, rgba(99,102,241,0.5), rgba(99,102,241,0.05))" }} />
            {timeline.map((item, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" animate="visible" custom={5 + i * 0.5}
                style={{ position: "relative", paddingLeft: "40px", paddingBottom: "40px" }}>
                <div style={{ position: "absolute", left: 0, top: "6px", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#6366f1", transform: "translateX(-4px)", boxShadow: "0 0 0 4px #020617" }} />
                <p style={{ fontSize: "11px", color: "#818cf8", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "4px" }}>{item.year}</p>
                <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "18px", marginBottom: "2px" }}>{item.role}</h3>
                <p style={{ color: "#64748b", fontSize: "14px", marginBottom: "8px" }}>{item.company}</p>
                <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.7 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
