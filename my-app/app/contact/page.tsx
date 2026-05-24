"use client";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

const contactInfo = [
  { label: "Email", value: "samiabba110@gmail.com", href: "mailto:samiabba110@gmail.com" },
  { label: "Location", value: "Gilgit Baltistan, Pakistan", href: null },
  { label: "LinkedIn", value: "linkedin.com/in/samiabbas", href: "https://www.linkedin.com/in/samiabbas110/" },
  { label: "GitHub", value: "github.com/samiabbas", href: "https://github.com/GOLDEN-DEV5" },
];

const inputStyle = {
  width: "100%", background: "rgba(15,23,42,0.8)", border: "1px solid #1e293b",
  borderRadius: "10px", padding: "12px 16px", color: "#f1f5f9", fontSize: "14px",
  outline: "none", transition: "border-color 0.2s", fontFamily: "inherit",
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // ← new

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // ✅ Updated handleSubmit — connects to Resend
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("❌ Failed to send. Please try again.");
      }
    } catch {
      setError("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#020617", paddingTop: "128px", paddingBottom: "96px" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0} style={{ marginBottom: "64px" }}>
          <p style={{ color: "#818cf8", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500, marginBottom: "12px" }}>Get In Touch</p>
          <h1 className="font-serif" style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", color: "#fff", marginBottom: "24px", lineHeight: 1.15 }}>
            Let&apos;s work <span className="gradient-text">together.</span>
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "18px", maxWidth: "500px", lineHeight: 1.7 }}>
            Have a project in mind? I&apos;m open to freelance work, collaborations, and interesting conversations.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "48px" }}>

          {/* Info */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1} style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {contactInfo.map((item) => (
                <div key={item.label} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "11px", color: "#475569", letterSpacing: "0.15em", textTransform: "uppercase" }}>{item.label}</span>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                      style={{ color: "#cbd5e1", fontSize: "14px", fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#818cf8")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#cbd5e1")}>
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ color: "#cbd5e1", fontSize: "14px", fontWeight: 500 }}>{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: "rgba(15,23,42,0.6)", border: "1px solid rgba(99,102,241,0.2)", borderRadius: "16px", padding: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <span className="animate-pulse" style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#34d399", display: "inline-block" }} />
                <span style={{ fontSize: "14px", color: "#34d399", fontWeight: 500 }}>Available for work</span>
              </div>
              <p style={{ color: "#64748b", fontSize: "14px", lineHeight: 1.65 }}>
                Currently accepting new freelance projects. Response time: within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} style={{ flex: 1 }}>
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(15,23,42,0.6)", border: "1px solid rgba(99,102,241,0.2)", borderRadius: "20px", padding: "64px 32px", textAlign: "center" }}>
                <div>
                  <div style={{ fontSize: "56px", marginBottom: "16px" }}>🎉</div>
                  <h3 className="font-serif" style={{ fontSize: "24px", color: "#fff", marginBottom: "12px" }}>Message Sent!</h3>
                  <p style={{ color: "#94a3b8", fontSize: "14px" }}>Thanks for reaching out — I&apos;ll reply within 24 hours.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    style={{ marginTop: "24px", fontSize: "14px", color: "#818cf8", background: "none", border: "none", cursor: "pointer" }}>
                    Send another message
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  {[{ name: "name", label: "Name", type: "text", placeholder: "Your name" }, { name: "email", label: "Email", type: "email", placeholder: "you@example.com" }].map((f) => (
                    <div key={f.name} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <label style={{ fontSize: "11px", color: "#475569", letterSpacing: "0.15em", textTransform: "uppercase" }}>{f.label}</label>
                      <input type={f.type} name={f.name} required placeholder={f.placeholder}
                        value={form[f.name as keyof typeof form]} onChange={handleChange}
                        style={inputStyle}
                        onFocus={e => (e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)")}
                        onBlur={e => (e.currentTarget.style.borderColor = "#1e293b")} />
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ fontSize: "11px", color: "#475569", letterSpacing: "0.15em", textTransform: "uppercase" }}>Subject</label>
                  <input type="text" name="subject" required placeholder="What's this about?" value={form.subject} onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "#1e293b")} />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ fontSize: "11px", color: "#475569", letterSpacing: "0.15em", textTransform: "uppercase" }}>Message</label>
                  <textarea name="message" required rows={6} placeholder="Tell me about your project..." value={form.message} onChange={handleChange}
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={e => (e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "#1e293b")} />
                </div>

                <motion.button type="submit" disabled={loading} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  style={{ width: "100%", padding: "16px", backgroundColor: loading ? "#3730a3" : "#4f46e5", color: "#fff", fontSize: "14px", fontWeight: 600, borderRadius: "10px", border: "none", cursor: loading ? "not-allowed" : "pointer", boxShadow: "0 8px 32px rgba(79,70,229,0.25)", fontFamily: "inherit" }}>
                  {loading ? (
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                      <span className="animate-spin" style={{ width: "16px", height: "16px", border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%", display: "inline-block" }} />
                      Sending...
                    </span>
                  ) : "Send Message →"}
                </motion.button>

                {/* ← new: shows error message if email fails */}
                {error && (
                  <p style={{ color: "#f87171", fontSize: "13px", textAlign: "center", marginTop: "4px" }}>
                    {error}
                  </p>
                )}

              </form>
            )}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
