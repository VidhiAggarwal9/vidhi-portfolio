"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Shield, Briefcase, Award, ExternalLink } from "lucide-react";

const experiences = [
  {
    category: "Research Publication",
    icon: FileText,
    color: "#6366f1",
    items: [
      {
        title: "Special Forces Defense Glove",
        org: "STM Journals",
        badge: "Published",
        badgeColor: "#6366f1",
        description:
          "Peer-reviewed paper focused on sensor-based systems and real-time applications for tactical wearable technology. Explored gesture-to-signal conversion and embedded IoT architecture.",
        meta: null,
      },
    ],
  },
  {
    category: "Patent",
    icon: Shield,
    color: "#a855f7",
    items: [
      {
        title: "Special Forces Defense Glove",
        org: "Government of India",
        badge: "Filed",
        badgeColor: "#a855f7",
        description:
          "Developed a multi-utility tactical glove designed to enhance soldier safety, grip, and operational effectiveness in field conditions. Integrates sensor arrays with real-time signal processing.",
        meta: "Application No. 202611020277",
      },
    ],
  },
  {
    category: "Internships",
    icon: Briefcase,
    color: "#06b6d4",
    items: [
      {
        title: "Data Analytics Intern",
        org: "Seldom Technologies",
        badge: "45 Days",
        badgeColor: "#10b981",
        description:
          "Worked on end-to-end data analytics pipelines. Analysed business datasets, created visual dashboards, and derived actionable insights for product and operations teams.",
        meta: null,
      },
      {
        title: "Web Development Intern",
        org: "Promo Daddy LLP",
        badge: "15 Days",
        badgeColor: "#f59e0b",
        description:
          "Built and deployed responsive web interfaces. Collaborated with the design team on frontend components and gained hands-on experience with real client projects.",
        meta: null,
      },
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="experience" className="py-32 relative">
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="tag mb-4 inline-flex">
            <Award size={11} /> Experience
          </span>
          <h2 className="section-title gradient-text mb-4">
            Research, Patents & Industry
          </h2>
          <p className="text-text-muted text-lg max-w-xl">
            From peer-reviewed publications to real-world internships — work
            that goes beyond the classroom.
          </p>
        </motion.div>

        {/* Experience Groups */}
        <div className="space-y-10">
          {experiences.map(({ category, icon: Icon, color, items }, gi) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.12, duration: 0.6 }}
            >
              {/* Category label */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}18`, border: `1px solid ${color}30` }}
                >
                  <Icon size={15} style={{ color }} />
                </div>
                <h3
                  className="text-xs font-mono font-bold uppercase tracking-[0.18em]"
                  style={{ color }}
                >
                  {category}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-white/[0.06] to-transparent" />
              </div>

              {/* Cards */}
              <div className={`grid gap-4 ${items.length > 1 ? "md:grid-cols-2" : "md:grid-cols-1 max-w-3xl"}`}>
                {items.map(({ title, org, badge, badgeColor, description, meta }, ci) => (
                  <motion.div
                    key={ci}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: gi * 0.12 + ci * 0.08 + 0.15, duration: 0.5 }}
                    className="card group relative overflow-hidden"
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                      style={{
                        background: `radial-gradient(ellipse at 20% 20%, ${color}0d 0%, transparent 65%)`,
                      }}
                    />

                    <div className="relative z-10">
                      {/* Top row */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex-1">
                          <h4 className="text-base font-bold text-text group-hover:text-white transition-colors mb-1">
                            {title}
                          </h4>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs text-text-muted font-mono">{org}</span>
                            {meta && (
                              <>
                                <span className="text-text-muted/30 text-xs">·</span>
                                <span
                                  className="text-xs font-mono px-2 py-0.5 rounded-md"
                                  style={{
                                    background: `${color}12`,
                                    border: `1px solid ${color}25`,
                                    color: color,
                                  }}
                                >
                                  {meta}
                                </span>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Badge */}
                        <span
                          className="flex-shrink-0 text-xs font-mono font-semibold px-3 py-1.5 rounded-full"
                          style={{
                            background: `${badgeColor}18`,
                            border: `1px solid ${badgeColor}35`,
                            color: badgeColor,
                          }}
                        >
                          {badge}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-text-muted text-sm leading-relaxed">
                        {description}
                      </p>

                      {/* Bottom accent line */}
                      <div
                        className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
                        style={{ background: `linear-gradient(90deg, ${color}60, transparent)` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
