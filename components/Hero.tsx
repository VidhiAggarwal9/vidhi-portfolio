"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const TICKERS = [
  "Full-Stack Development","Data Analytics",
  "Generative AI","Power BI","React · Node.js · Python",
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  return (
    <section id="hero" style={{ background: "#fafaf8" }}>
      {/* ── Main grid ── */}
      <div style={{
        maxWidth: 1080, margin: "0 auto",
        padding: "120px 32px 60px",
        display: "grid", gridTemplateColumns: "1fr 400px",
        gap: 64, alignItems: "center",
      }} className="hero-inner">

        {/* TEXT */}
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#eff6ff", border: "1px solid #bfdbfe",
            borderRadius: 999, padding: "6px 16px",
            fontSize: 11, fontWeight: 600, color: "#1d4ed8", marginBottom: 28,
          }}>
            <span className="pulse-dot" style={{ width: 7, height: 7, background: "#22c55e", borderRadius: "50%", display: "inline-block" }} />
            Available for internships &amp; collaborations
          </div>

          <h1 style={{ fontSize: 54, fontWeight: 900, lineHeight: 1.06,
                       letterSpacing: -2.5, color: "#1c1917", marginBottom: 20 }}>
            Turning{" "}
            <em style={{ fontFamily: "'Playfair Display',serif",
                         fontStyle: "italic", color: "#1d4ed8" }}>Data</em>
            <br />into Decisions,<br />
            <span style={{ color: "#c4c0bb", fontWeight: 300 }}>Ideas into Products.</span>
          </h1>

          <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.8,
                      maxWidth: 420, marginBottom: 36 }}>
            AI &amp; Data Science student at Poornima College of Engineering, Jaipur.
            I build full-stack web apps and data systems that are clean, purposeful, and actually work.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 44 }}>
            <button onClick={() => scrollTo("projects")}
              style={{ display: "inline-flex", alignItems: "center", gap: 8,
                       background: "#1c1917", color: "#fff", padding: "13px 26px",
                       borderRadius: 7, fontSize: 13, fontWeight: 600,
                       border: "none", cursor: "pointer" }}>
              View My Work →
            </button>
           
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)",
                        border: "1px solid #e5e7eb", borderRadius: 12,
                        overflow: "hidden", background: "#fff" }}>
            {[["8.96","CGPA"],["5+","Projects"],["Jaipur","India"]].map(([n,l],i,a) => (
              <div key={l} style={{ padding: "16px 20px", textAlign: "center",
                                    borderRight: i < a.length-1 ? "1px solid #e5e7eb" : "none" }}>
                <div style={{ fontSize: 24, fontWeight: 900, color: "#1c1917", letterSpacing: -0.5 }}>{n}</div>
                <div style={{ fontSize: 10, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "1.5px", marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* PHOTO */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          style={{ position: "relative", display: "flex", justifyContent: "center" }}>
          {/* Decor */}
          <div style={{ position:"absolute", top:-18, right:-18, width:68, height:68,
                        borderRadius:"50%", border:"2px solid #1d4ed8", opacity:0.12 }} />
          <div style={{ position:"absolute", bottom:-10, left:-10, width:36, height:36,
                        background:"#1d4ed8", borderRadius:8, opacity:0.08 }} />
          {/* Chips */}
          <div style={{ position:"absolute", top:-14, left:-32, background:"#fff",
                        border:"1px solid #e5e7eb", borderRadius:12, padding:"10px 14px",
                        boxShadow:"0 6px 24px rgba(0,0,0,0.08)", zIndex:3 }}>
            <div style={{ fontSize:9, color:"#9ca3af", textTransform:"uppercase", letterSpacing:"1.5px", marginBottom:3 }}>Status</div>
            <div style={{ fontSize:13, fontWeight:700, color:"#16a34a", display:"flex", alignItems:"center", gap:5 }}>
              <span className="pulse-dot" style={{ width:6, height:6, background:"#22c55e", borderRadius:"50%", display:"inline-block" }} />
              Open to Work
            </div>
          </div>
          <div style={{ position:"absolute", bottom:44, right:-36, background:"#fff",
                        border:"1px solid #e5e7eb", borderRadius:12, padding:"10px 14px",
                        boxShadow:"0 6px 24px rgba(0,0,0,0.08)", zIndex:3 }}>
            <div style={{ fontSize:9, color:"#9ca3af", textTransform:"uppercase", letterSpacing:"1.5px", marginBottom:3 }}>Stack</div>
            <div style={{ fontSize:13, fontWeight:700, color:"#1c1917" }}>React · Node.js</div>
          </div>
          {/* Card */}
          <div style={{ position:"relative", width:300, aspectRatio:"3/4",
                        borderRadius:24, overflow:"hidden",
                        border:"1px solid #e5e7eb",
                        boxShadow:"0 24px 64px rgba(0,0,0,0.1), 0 4px 16px rgba(0,0,0,0.05)" }}>
            <Image src="/vidhi.jpeg" alt="Vidhi Aggarwal" fill
                   style={{ objectFit:"cover", objectPosition:"center top" }} priority />
            <div style={{ position:"absolute", bottom:0, left:0, right:0,
                          background:"linear-gradient(to top,rgba(28,25,23,0.75),transparent)",
                          padding:"28px 20px 20px" }}>
              <div style={{ fontSize:15, fontWeight:700, color:"#fff" }}>Vidhi Aggarwal</div>
              <div style={{ fontSize:11, color:"rgba(255,255,255,0.6)", marginTop:2 }}>AI &amp; DS · Full-Stack Developer</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* TICKER */}
      <div style={{ background:"#1c1917", padding:"12px 0", overflow:"hidden", whiteSpace:"nowrap" }}>
        <div className="ticker-animate" style={{ display:"inline-flex" }}>
          {[...TICKERS,...TICKERS].map((t,i) => (
            <span key={i} style={{ fontSize:11, fontWeight:600,
              color:"rgba(255,255,255,0.4)", letterSpacing:"2.5px",
              textTransform:"uppercase", padding:"0 32px" }}>
              {t}<span style={{ color:"rgba(255,255,255,0.12)", marginLeft:28 }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          .hero-inner{ grid-template-columns:1fr !important; padding:96px 24px 48px !important; gap:0 !important; }
          .hero-inner > div:last-child{ display:none; }
          h1{ font-size:38px !important; }
        }
      `}</style>
    </section>
  );
}
