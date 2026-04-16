"use client";
import { motion } from "framer-motion";

const PROJECTS = [
  { icon:"📊", title:"Blinkit Analysis",         sub:"Power BI · Data Analytics",   desc:"Customer trend analysis and delivery performance dashboard for business optimization.", tags:["Power BI","Excel","DAX"],                  repo:"https://github.com/VidhiAggarwal9/Blinkit-Analysis-using-Power-bi" },
  { icon:"🧠", title:"Gen AI Interview Coach",    sub:"Generative AI · Web-D",         desc:"AI-powered simulator providing real-time personalized feedback for interview rounds.",   tags:["Gen AI","Python"],                   repo:"https://github.com/VidhiAggarwal9/gen-ai-interview-coach" },
  { icon:"🤚", title:"IoT Smart Defense Glove",   sub:"Web-D · Embedded Systems",      desc:"Wearable converting hand gestures into digital command signals for defense use.",        tags:["IoT","Sensors","Embedded C" ],              repo:"https://github.com/VidhiAggarwal9/IOT-Smart-Glove" },
  { icon:"🛰️", title:"Space Debris Detection",    sub:"Full Stack Web App",        desc:"ML model using satellite imagery to classify and predict orbital space debris.",         tags:["Python","HTML","CSS","JS",'MERN"],           repo:"https://github.com/VidhiAggarwal9/Space-Debris-Detection" },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding:"88px 32px", background:"#f5f4f1" }}>
      <div style={{ maxWidth:1080, margin:"0 auto" }}>
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} style={{marginBottom:48}}>
          <p style={{fontSize:10,fontWeight:700,color:"#1d4ed8",letterSpacing:3,textTransform:"uppercase",marginBottom:8}}>Work</p>
          <h2 style={{fontSize:38,fontWeight:900,color:"#1c1917",letterSpacing:-1.5}}>
            More{" "}<em style={{fontFamily:"'Playfair Display',serif",fontStyle:"italic",color:"#1d4ed8"}}>Projects</em>
          </h2>
        </motion.div>

        <div className="proj-grid-resp"
             style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
          {PROJECTS.map((p,i)=>(
            <motion.div key={p.title}
              initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}}
              viewport={{once:true}} transition={{delay:i*0.08}}
              whileHover={{y:-3}}
              style={{background:"#fff",border:"1px solid #e5e7eb",borderRadius:16,
                      padding:28,position:"relative",overflow:"hidden",
                      transition:"box-shadow 0.25s,border-color 0.25s"}}
              onMouseEnter={e=>{
                (e.currentTarget.style.boxShadow="0 12px 40px rgba(0,0,0,0.09)");
                (e.currentTarget.style.borderColor="rgba(29,78,216,0.2)");
              }}
              onMouseLeave={e=>{
                (e.currentTarget.style.boxShadow="none");
                (e.currentTarget.style.borderColor="#e5e7eb");
              }}
            >
              <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:18}}>
                <div style={{width:44,height:44,borderRadius:12,background:"#eff6ff",border:"1px solid #bfdbfe",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20}}>{p.icon}</div>
                <a href={p.repo} target="_blank" rel="noopener"
                   style={{fontSize:11,fontWeight:600,color:"#6b7280",border:"1px solid #e5e7eb",borderRadius:5,padding:"5px 10px",textDecoration:"none"}}>↗ GitHub</a>
              </div>
              <h3 style={{fontSize:15,fontWeight:700,color:"#1c1917",marginBottom:4}}>{p.title}</h3>
              <p style={{fontSize:10,fontWeight:700,color:"#1d4ed8",textTransform:"uppercase",letterSpacing:"1px",marginBottom:10}}>{p.sub}</p>
              <p style={{fontSize:13,color:"#6b7280",lineHeight:1.65,marginBottom:14}}>{p.desc}</p>
              <div style={{display:"flex",flexWrap:"wrap",gap:5}}>
                {p.tags.map(t=><span key={t} style={{fontSize:10,color:"#6b7280",background:"#f5f4f1",border:"1px solid #e5e7eb",borderRadius:4,padding:"3px 8px",fontWeight:500}}>{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:700px){ .proj-grid-resp{ grid-template-columns:1fr !important; } }`}</style>
    </section>
  );
}
