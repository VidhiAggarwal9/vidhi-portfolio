"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Shield, Briefcase } from "lucide-react";

const experiences = [
  {
    category: "Research Publication",
    icon: FileText,
    items: [
      {
        title: "Special Forces Defense Glove",
        org: "STM Journals",
        badge: "Published",
        desc: "Peer-reviewed paper on sensor-based systems and real-time tactical wearable tech with IoT integration.",
        meta: null,
      },
    ],
  },
  {
    category: "Patent",
    icon: Shield,
    items: [
      {
        title: "Special Forces Defense Glove",
        org: "Government of India",
        badge: "Filed",
        desc: "Designed a multi-utility tactical glove enhancing soldier safety with sensor arrays and real-time signal processing.",
        meta: "Application No. 202611020277",
      },
    ],
  },
  {
    category: "Internships",
    icon: Briefcase,
    items: [
      {
        title: "Data Analytics Intern",
        org: "Seldom Technologies",
        badge: "45 Days",
        desc: "Built dashboards, analyzed datasets, and generated actionable business insights.",
        meta: null,
      },
      {
        title: "Web Development Intern",
        org: "Promo Daddy LLP",
        badge: "15 Days",
        desc: "Developed responsive UI components and worked on real client-facing web projects.",
        meta: null,
      },
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      id="experience"
      style={{
        background: "#11132a",
        padding: "88px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* subtle grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(90deg,rgba(255,255,255,0.013) 0,rgba(255,255,255,0.013) 1px,transparent 1px,transparent 72px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1080, margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56 }}
        >
          <p
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: "#ca8a04",
              letterSpacing: 3,
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            Experience
          </p>

          <h2
            style={{
              fontSize: 38,
              fontWeight: 900,
              color: "#fff",
              letterSpacing: -1.5,
            }}
          >
            Research,{" "}
            <em
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                color: "#ca8a04",
              }}
            >
              Patents
            </em>{" "}
            & Work
          </h2>
        </motion.div>

        {/* Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {experiences.map((group, gi) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={gi}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: gi * 0.15 }}
              >
                {/* Category */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 20,
                  }}
                >
                  <Icon size={16} color="#ca8a04" />
                  <h3
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: 2,
                      color: "#ca8a04",
                      textTransform: "uppercase",
                    }}
                  >
                    {group.category}
                  </h3>
                  <div
                    style={{
                      flex: 1,
                      height: 1,
                      background: "rgba(255,255,255,0.08)",
                    }}
                  />
                </div>

                {/* Cards */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      group.items.length > 1 ? "1fr 1fr" : "1fr",
                    gap: 20,
                  }}
                >
                  {group.items.map((item, ci) => (
                    <motion.div
                      key={ci}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: gi * 0.15 + ci * 0.1 }}
                      style={{
                        border: "1px solid rgba(255,255,255,0.06)",
                        padding: 20,
                        borderRadius: 12,
                        background: "transparent",
                      }}
                    >
                      {/* Title */}
                      <div style={{ marginBottom: 10 }}>
                        <h4
                          style={{
                            fontSize: 14,
                            fontWeight: 700,
                            color: "#fff",
                            marginBottom: 4,
                          }}
                        >
                          {item.title}
                        </h4>

                        <div
                          style={{
                            fontSize: 11,
                            color: "rgba(255,255,255,0.4)",
                            fontFamily: "monospace",
                          }}
                        >
                          {item.org}
                          {item.meta && ` • ${item.meta}`}
                        </div>
                      </div>

                      {/* Description */}
                      <p
                        style={{
                          fontSize: 12,
                          color: "rgba(255,255,255,0.38)",
                          lineHeight: 1.6,
                          marginBottom: 12,
                        }}
                      >
                        {item.desc}
                      </p>

                      {/* Badge */}
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          color: "#ca8a04",
                          border: "1px solid rgba(202,138,4,0.4)",
                          padding: "4px 10px",
                          borderRadius: 20,
                        }}
                      >
                        {item.badge}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media(max-width:900px){
          #experience div[style*="grid-template-columns"]{
            grid-template-columns:1fr !important;
          }
        }
      `}</style>
    </section>
  );
}