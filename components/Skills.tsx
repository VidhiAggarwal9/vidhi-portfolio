"use client";
import { motion } from "framer-motion";

const CATS = [
  { name:"Languages",  items:["C++","Python","JavaScript"] },
  { name:"Frontend",   items:["React.js","Next.js","HTML","CSS","Tailwind"] },
  { name:"Backend",    items:["Node.js","Express.js","REST APIs"] },
  { name:"Data",       items:["Power BI","Matplotlib","Jupyter","Excel"] },
  { name:"Databases",  items:["MySQL","PostgreSQL","MongoDB"] },
  { name:"AI & Tools", items:["Claude","ChatGPT","Cursor","n8n","Postman","GitHub"] },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding:"88px 32px", background:"#fafaf8" }}>
      <div style={{ maxWidth:1080, margin:"0 auto",
                    display:"grid", gridTemplateColumns:"1fr 1fr",
                    gap:56, alignItems:"start" }}
           className="skill-resp">

        <motion.div initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
          <p style={{fontSize:10,fontWeight:700,color:"#1d4ed8",letterSpacing:3,textTransform:"uppercase",marginBottom:8}}>Skills</p>
          <h2 style={{fontSize:38,fontWeight:900,color:"#1c1917",letterSpacing:-1.5,marginBottom:20}}>
            Tech{" "}<em style={{fontFamily:"'Playfair Display',serif",fontStyle:"italic",color:"#1d4ed8"}}>Stack</em>
          </h2>
          <p style={{fontSize:14,color:"#6b7280",lineHeight:1.8,marginBottom:12}}>
            I work across the full spectrum — from pixel-perfect interfaces to backend systems and ML models.
            Tools chosen for practicality, not trends.
          </p>
          <div style={{borderLeft:"3px solid #1d4ed8",background:"#eff6ff",borderRadius:"0 10px 10px 0",padding:"18px 22px",marginTop:24}}>
            <p style={{fontFamily:"'Playfair Display',serif",fontSize:15,fontStyle:"italic",color:"#1e3a5f",lineHeight:1.65}}>
              "Whether it's designing modular systems or analyzing data for meaningful patterns — I focus on clarity, efficiency, and practical solutions."
            </p>
          </div>
        </motion.div>

        <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
          style={{display:"flex",flexDirection:"column",gap:10}}>
          {CATS.map((c,i)=>(
            <motion.div key={c.name}
              initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}}
              viewport={{once:true}} transition={{delay:i*0.06}}
              style={{background:"#fff",border:"1px solid #e5e7eb",borderRadius:10,
                      padding:"14px 18px",display:"flex",alignItems:"center",gap:16}}>
              <span style={{fontSize:9,fontWeight:700,color:"#1d4ed8",letterSpacing:2,textTransform:"uppercase",minWidth:80,flexShrink:0}}>{c.name}</span>
              <div style={{display:"flex",flexWrap:"wrap",gap:5}}>
                {c.items.map(it=>(
                  <span key={it} style={{fontSize:11,color:"#374151",background:"#f5f4f1",border:"1px solid #e5e7eb",borderRadius:5,padding:"4px 9px",fontWeight:500}}>{it}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <style>{`@media(max-width:860px){ .skill-resp{ grid-template-columns:1fr !important; } }`}</style>
    </section>
  );
}