"use client";
import { motion } from "framer-motion";

const EVENTS = [
  { yr:"2022", gold:true,  title:"Started B.Tech – AI & DS",       desc:"Enrolled at Poornima. Began C++, Python, and the fundamentals of AI and data science.", n:"01" },
  { yr:"2023", gold:false, title:"Entered Full-Stack Dev",          desc:"Built real apps with React, Node.js & Express. Moved from theory to production code.",   n:"02" },
  { yr:"2023", gold:true,  title:"IoT & Space ML",                  desc:"Smart Defense Glove and Space Debris Detection ML model using satellite imagery.",        n:"03" },
  { yr:"2023", gold:true,  title:"Blinkit Power BI Dashboard",      desc:"Delivered a business analytics dashboard surfacing customer and delivery trends.",       n:"04" },
  { yr:"2024", gold:false, title:"Visita & Gen AI Projects",        desc:"Built the Visita hotel analytics platform and a Gen AI interview simulator.",            n:"05" },  
];

export default function Timeline() {
  return (
    <section id="timeline"
      style={{ background:"#111827", padding:"88px 32px", position:"relative", overflow:"hidden" }}>
      {/* Grid texture */}
      <div style={{ position:"absolute", inset:0,
                    backgroundImage:"repeating-linear-gradient(90deg,rgba(255,255,255,0.013) 0,rgba(255,255,255,0.013) 1px,transparent 1px,transparent 72px)",
                    pointerEvents:"none" }} />

      <div style={{ maxWidth:1080, margin:"0 auto", position:"relative" }}>
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} style={{marginBottom:56}}>
          <p style={{fontSize:10,fontWeight:700,color:"#ca8a04",letterSpacing:3,textTransform:"uppercase",marginBottom:8}}>Journey</p>
          <h2 style={{fontSize:38,fontWeight:900,color:"#fff",letterSpacing:-1.5}}>
            The{" "}<em style={{fontFamily:"'Playfair Display',serif",fontStyle:"italic",color:"#ca8a04"}}>Timeline</em>
          </h2>
        </motion.div>

        <div style={{ position:"relative" }}>
          {/* Spine */}
          <div style={{ position:"absolute", top:26, left:0, right:0, height:1, background:"rgba(255,255,255,0.07)" }} className="hide-mobile"/>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:0 }} className="tl-resp">
            {EVENTS.map((e,i)=>(
              <motion.div key={i}
                initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}}
                viewport={{once:true}} transition={{delay:i*0.1}}
                style={{ paddingRight:24, position:"relative" }}>
                {/* Ghost number */}
                <div style={{ position:"absolute", top:-50, right:16,
                              fontSize:86, fontWeight:900,
                              fontFamily:"'Playfair Display',serif",
                              color:"rgba(255,255,255,0.025)", lineHeight:1,
                              pointerEvents:"none" }}>{e.n}</div>
                {/* Dot */}
                <div style={{ marginBottom:18 }}>
                  <div style={{
                    width:13, height:13, borderRadius:"50%",
                    background: e.gold ? "#ca8a04" : "rgba(255,255,255,0.35)",
                    boxShadow: e.gold
                      ? "0 0 0 3px rgba(202,138,4,0.2)"
                      : "0 0 0 3px rgba(255,255,255,0.07)",
                    position:"relative", zIndex:2,
                  }}/>
                </div>
                <div style={{ fontSize:10, fontWeight:700, fontFamily:"monospace",
                              color: e.gold ? "#ca8a04" : "rgba(255,255,255,0.3)",
                              marginBottom:8 }}>{e.yr}</div>
                <div style={{ fontSize:13, fontWeight:700, color:"#fff", lineHeight:1.3, marginBottom:7 }}>{e.title}</div>
                <p style={{ fontSize:11, color:"rgba(255,255,255,0.38)", lineHeight:1.65 }}>{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          .tl-resp{ grid-template-columns:1fr !important; }
          .hide-mobile{ display:none !important; }
        }
      `}</style>
    </section>
  );
}