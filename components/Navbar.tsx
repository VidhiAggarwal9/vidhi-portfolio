"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Work",     id: "projects"  },
  { label: "Skills",   id: "skills"    },
  { label: "About",    id: "about"     },
  { label: "Timeline", id: "timeline"  },
  { label: "Contact",  id: "contact"   },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [stuck,   setStuck]   = useState(false);
  const [open,    setOpen]    = useState(false);

  useEffect(() => {
    const fn = () => setStuck(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* Main nav */}
      <motion.nav
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          position:      "fixed",
          top: 0, left: 0, right: 0,
          zIndex:        1000,
          background:    stuck ? "rgba(250,250,248,0.95)" : "transparent",
          backdropFilter: stuck ? "blur(20px)" : "none",
          borderBottom:  stuck ? "1px solid rgba(0,0,0,0.07)" : "none",
          transition:    "all 0.3s",
        }}
      >
        <div style={{
          maxWidth: 1080, margin: "0 auto",
          padding: "20px 32px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          {/* Brand */}
          <button
            onClick={() => scrollTo("hero")}
            style={{ fontSize: 16, fontWeight: 800, color: "#1c1917",
                     background: "none", border: "none", cursor: "pointer" }}
          >
            Vidhi{" "}
            <em style={{ fontFamily: "'Playfair Display',serif",
                         fontStyle: "italic", color: "#1d4ed8" }}>Aggarwal</em>
          </button>

          {/* Desktop links */}
          <ul style={{ display: "flex", gap: 28, listStyle: "none" }}
              className="hidden md:flex">
            {NAV.map(n => (
              <li key={n.id}>
                <button
                  onClick={() => scrollTo(n.id)}
                  style={{ fontSize: 13, fontWeight: 500, color: "#6b7280",
                           background: "none", border: "none", cursor: "pointer",
                           transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#1c1917")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#6b7280")}
                >
                  {n.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a href="mailto:vidhi27aggarwal9@gmail.com"
             style={{ background: "#1c1917", color: "#fff", fontSize: 12,
                      fontWeight: 600, padding: "9px 20px", borderRadius: 6,
                      textDecoration: "none" }}
             className="hidden md:inline-flex">
            Hire Me
          </a>

          {/* Hamburger */}
          <button className="md:hidden"
                  onClick={() => setOpen(v => !v)}
                  style={{ background: "none", border: "none", cursor: "pointer" }}>
            {open ? <X size={22} color="#1c1917" /> : <Menu size={22} color="#1c1917" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed", inset: 0, background: "#fafaf8",
              zIndex: 999, display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", gap: 32,
            }}
          >
            <button onClick={() => setOpen(false)}
                    style={{ position: "absolute", top: 24, right: 32,
                             fontSize: 26, background: "none", border: "none",
                             cursor: "pointer", color: "#6b7280" }}>✕</button>
            {NAV.map(n => (
              <button key={n.id}
                      onClick={() => { scrollTo(n.id); setOpen(false); }}
                      style={{ fontSize: 26, fontWeight: 700, color: "#1c1917",
                               background: "none", border: "none", cursor: "pointer" }}>
                {n.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}