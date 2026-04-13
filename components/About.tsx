"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" style={{ padding:"88px 32px", background:"#f5f4f1" }}>
      <div style={{ maxWidth:1080, margin:"0 auto",
                    display:"grid", gridTemplateColumns:"1fr 1fr",
                    gap:56, alignItems:"start" }}
           className="about-resp">

        <motion.div initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
          <p style={{fontSize:10,fontWeight:700,color:"#1d4ed8",letterSpacing:3,textTransform:"uppercase",marginBottom:8}}>About</p>
          <h2 style={{fontSize:38,fontWeight:900,color:"#1c1917",letterSpacing:-1.5,lineHeight:1.1,marginBottom:20}}>
            The Person<br />Behind the{" "}
            <em style={{fontFamily:"'Playfair Display',serif",fontStyle:"italic",color:"#1d4ed8"}}>Code</em>
          </h2>
          <p style={{fontSize:14,color:"#6b7280",lineHeight:1.85,marginBottom:14}}>
            I&apos;m a B.Tech student in AI &amp; Data Science at Poornima College — not just studying the field but actively building within it. My interest sits at the intersection of clean software engineering and data that actually means something.
          </p>
          <p style={{fontSize:14,color:"#6b7280",lineHeight:1.85,marginBottom:14}}>
            I don&apos;t just follow tutorials. I break things, figure out why they broke, rebuild them better. Whether it&apos;s a full-stack analytics platform or an ML model on satellite imagery — I care about outcomes being useful, not just functional.
          </p>
          <div style={{borderLeft:"3px solid #1d4ed8",background:"#eff6ff",borderRadius:"0 10px 10px 0",padding:"18px 22px",marginTop:24}}>
            <p style={{fontFamily:"'Playfair Display',serif",fontSize:15,fontStyle:"italic",color:"#1e3a5f",lineHeight:1.65}}>
              &ldquo;Hands-on by nature, precise by habit.&rdquo;
            </p>
          </div>
        </motion.div>

        <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
          style={{display:"flex",flexDirection:"column",gap:10}}>
          {[
            { bg:"#eff6ff", ico:"🎓", h:"Poornima College of Engineering", s:"B.Tech — AI & Data Science" },
            { bg:"#fefce8", ico:"⭐", h:"CGPA: 8.96",                      s:"Consistent academic performance" },
            { bg:"#f0fdf4", ico:"📍", h:"Jaipur, Rajasthan",                s:"Open to remote & on-site roles" },
          ].map(c=>(
            <div key={c.h} style={{background:"#fff",border:"1px solid #e5e7eb",borderRadius:12,padding:"14px 18px",display:"flex",alignItems:"center",gap:14}}>
              <div style={{width:40,height:40,borderRadius:10,background:c.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0}}>{c.ico}</div>
              <div>
                <div style={{fontSize:13,fontWeight:600,color:"#1c1917"}}>{c.h}</div>
                <div style={{fontSize:11,color:"#9ca3af",marginTop:2}}>{c.s}</div>
              </div>
            </div>
          ))}
          <div style={{background:"#fff",border:"1px solid #e5e7eb",borderRadius:12,padding:"14px 18px"}}>
            <div style={{fontSize:9,fontWeight:700,color:"#9ca3af",letterSpacing:2,textTransform:"uppercase",marginBottom:10}}>Focus Areas</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
              {["Full-Stack Dev","Data Analytics","Machine Learning","AI Tools","IoT"].map(t=>(
                <span key={t} style={{fontSize:11,fontWeight:500,color:"#1d4ed8",background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:999,padding:"4px 12px"}}>{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <style>{`@media(max-width:860px){ .about-resp{ grid-template-columns:1fr !important; } }`}</style>
    </section>
  );
}