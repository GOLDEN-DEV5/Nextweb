"use client";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const projects = [
  { title: "GB Adventures", desc: "A travel & tourism platform for Gilgit Baltistan, featuring interactive maps, trek guides, and local business listings.", tech: ["Next.js", "TypeScript", "Mapbox", "PostgreSQL", "Prisma"], github: "https://github.com", live: "https://example.com", tag: "Full Stack", accent: "rgba(79,70,229,0.15)" },
  { title: "TaskFlow", desc: "A modern project management SaaS with real-time collaboration, drag-and-drop boards, and team analytics. Served 500+ active users.", tech: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind"], github: "https://github.com", live: "https://example.com", tag: "SaaS", accent: "rgba(109,40,217,0.15)" },
  { title: "SwiftCart", desc: "E-commerce platform with dynamic product listings, secure Stripe payments, order management, and an admin dashboard.", tech: ["Next.js", "Stripe", "Supabase", "Tailwind CSS"], github: "https://github.com", live: "https://example.com", tag: "E-Commerce", accent: "rgba(37,99,235,0.15)" },
  { title: "AQI Monitor", desc: "Real-time air quality monitoring dashboard for Pakistani cities. Pulls data from IoT sensors and displays pollution trends.", tech: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"], github: "https://github.com", live: "https://example.com", tag: "Data Viz", accent: "rgba(5,150,105,0.15)" },
  { title: "DevBlog CMS", desc: "A headless CMS and blogging platform built for developers. Markdown support, code highlighting, and custom themes.", tech: ["Next.js", "MDX", "Contentlayer", "Vercel"], github: "https://github.com", live: "https://example.com", tag: "CMS", accent: "rgba(180,83,9,0.15)" },
  { title: "ChatAI Assistant", desc: "An AI-powered chat application integrated with OpenAI GPT-4. Features conversation history and context-aware responses.", tech: ["Next.js", "OpenAI API", "Prisma", "NextAuth"], github: "https://github.com", live: "https://example.com", tag: "AI / ML", accent: "rgba(190,18,60,0.15)" },
];


export default function ProjectsPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#020617", paddingTop: "128px", paddingBottom: "96px" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0} style={{ marginBottom: "64px" }}>
          <p style={{ color: "#818cf8", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500, marginBottom: "12px" }}>Portfolio</p>
          <h1 className="font-serif" style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", color: "#fff", marginBottom: "24px", lineHeight: 1.15 }}>
            Projects I&apos;ve <span className="gradient-text">crafted.</span>
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "18px", maxWidth: "500px", lineHeight: 1.7 }}>
            Real-world applications and side projects — from SaaS platforms to data visualization tools.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
          {projects.map((project, i) => (
            <motion.div key={project.title} variants={fadeUp} initial="hidden" animate="visible" custom={i + 1} whileHover={{ y: -4 }}
              style={{ display: "flex", flexDirection: "column", background: `linear-gradient(135deg, ${project.accent}, #0f172a)`, border: "1px solid rgba(30,41,59,0.7)", borderRadius: "16px", padding: "24px", transition: "border-color 0.3s", cursor: "default" }}>

              <span style={{ alignSelf: "flex-start", marginBottom: "16px", padding: "4px 10px", fontSize: "11px", color: "#a5b4fc", background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.2)", borderRadius: "9999px", letterSpacing: "0.05em" }}>
                {project.tag}
              </span>

              <h2 className="font-serif" style={{ fontSize: "20px", color: "#fff", fontWeight: 700, marginBottom: "12px" }}>{project.title}</h2>
              <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px", flex: 1 }}>{project.desc}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
                {project.tech.map((t) => (
                  <span key={t} style={{ padding: "2px 8px", fontSize: "11px", color: "#64748b", background: "rgba(30,41,59,0.7)", borderRadius: "4px" }}>{t}</span>
                ))}
              </div>

              <div style={{ display: "flex", gap: "16px", paddingTop: "16px", borderTop: "1px solid rgba(30,41,59,0.6)" }}>
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: "13px", color: "#64748b", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#64748b")}>
                  GitHub ↗
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: "13px", color: "#818cf8", fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#a5b4fc")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#818cf8")}>
                  Live Demo ↗
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
