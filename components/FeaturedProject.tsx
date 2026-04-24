"use client";
import { motion } from "framer-motion";

const bars = [38,55,42,80,50,92,65,88,58,95,70,62];

export default function FeaturedProject() {
  return (
    <section id="featured" style={{ padding:"88px 32px", background:"#fafaf8" }}>
      <div style={{ maxWidth:1080, margin:"0 auto" }}>

        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} style={{marginBottom:40}}>
          <p style={{fontSize:10,fontWeight:700,color:"#1d4ed8",letterSpacing:3,textTransform:"uppercase",marginBottom:8}}>Featured Project</p>
          <h2 style={{fontSize:38,fontWeight:900,color:"#1c1917",letterSpacing:-1.5,lineHeight:1.1}}>
            Visita — Hotel{" "}
            <em style={{fontFamily:"'Playfair Display',serif",fontStyle:"italic",color:"#1d4ed8"}}>Analytics</em>
          </h2>
          <p style={{fontSize:14,color:"#6b7280",marginTop:10,lineHeight:1.75,maxWidth:480}}>
            A full-stack analytics platform transforming raw booking data into live dashboards and KPIs.
          </p>
        </motion.div>

        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1}}
          className="feat-resp"
          style={{border:"1px solid #e5e7eb",borderRadius:20,overflow:"hidden",
                  background:"#fff",boxShadow:"0 4px 24px rgba(0,0,0,0.06)",
                  display:"grid",gridTemplateColumns:"1fr 1fr"}}>

          {/* Left */}
          <div style={{padding:48}}>
            <p style={{fontSize:10,fontWeight:700,color:"#1d4ed8",letterSpacing:"2.5px",textTransform:"uppercase",marginBottom:18,display:"flex",alignItems:"center",gap:10}}>
              <span style={{width:18,height:1.5,background:"#1d4ed8",display:"inline-block",flexShrink:0}}/>
              Full-Stack · Analytics · Node.js + React
            </p>
            <h3 style={{fontSize:46,fontWeight:900,letterSpacing:-2,lineHeight:1,marginBottom:14,color:"#1c1917"}}>
              Vi<em style={{fontFamily:"'Playfair Display',serif",fontStyle:"italic",color:"#1d4ed8"}}>sita</em>
            </h3>
            <p style={{fontSize:14,color:"#6b7280",lineHeight:1.75,marginBottom:26,maxWidth:320}}>
              Upload messy hotel booking data — Visita cleans, processes, and visualises it into revenue dashboards, occupancy trends, and booking KPIs.
            </p>
            <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:30}}>
              {["Node.js","React","Express","CSV/Excel"].map(t=>(
                <span key={t} style={{fontSize:11,fontWeight:500,color:"#1d4ed8",background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:5,padding:"4px 10px"}}>{t}</span>
              ))}
            </div>
            <div style={{display:"flex",gap:10}}>
              <a href="https://github.com/VidhiAggarwal9/Visita" target="_blank" rel="noopener"
                 style={{background:"#1c1917",color:"#fff",padding:"9px 18px",borderRadius:7,fontSize:12,fontWeight:600,textDecoration:"none"}}>GitHub Repo ↗</a>
              <a href="#contact"
                 style={{background:"#fff",color:"#1c1917",padding:"9px 18px",borderRadius:7,fontSize:12,fontWeight:600,textDecoration:"none",border:"1.5px solid #e5e7eb"}}>Case Study</a>
            </div>
          </div>

          {/* Dashboard */}
          <div style={{background:"#f5f4f1",borderLeft:"1px solid #e5e7eb",padding:36,display:"flex",flexDirection:"column",gap:14}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span style={{fontSize:12,fontWeight:600,color:"#374151"}}>Booking Overview</span>
              <span style={{fontSize:10,fontWeight:600,color:"#16a34a",display:"flex",alignItems:"center",gap:5}}>
                <span className="pulse-dot" style={{width:6,height:6,background:"#22c55e",borderRadius:"50%",display:"inline-block"}}/>Live
              </span>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
              {[["Revenue","₹8.4L","↑ 12.4%"],["Bookings","1,284","↑ 8.1%"],["Avg Stay","3.2d","↑ 0.4"],["Occupancy","78%","↑ 5.2%"]].map(([l,v,g])=>(
                <div key={l} style={{background:"#fff",border:"1px solid #e5e7eb",borderRadius:10,padding:"12px 14px"}}>
                  <p style={{fontSize:10,color:"#9ca3af",fontWeight:500,marginBottom:4}}>{l}</p>
                  <p style={{fontSize:19,fontWeight:900,color:"#1c1917",letterSpacing:-0.5}}>{v}</p>
                  <p style={{fontSize:10,color:"#16a34a",fontWeight:600,marginTop:2}}>{g}</p>
                </div>
              ))}
            </div>
            <div style={{background:"#fff",border:"1px solid #e5e7eb",borderRadius:10,padding:14}}>
              <p style={{fontSize:10,color:"#9ca3af",fontWeight:500,marginBottom:10}}>Monthly Bookings</p>
              <div style={{display:"flex",alignItems:"flex-end",gap:4,height:52}}>
                {bars.map((h,i)=>(
                  <motion.div key={i} initial={{height:0}} whileInView={{height:`${h}%`}} viewport={{once:true}}
                    transition={{delay:i*0.04,duration:0.4}}
                    style={{flex:1,borderRadius:"2px 2px 0 0",background:"#1d4ed8",opacity:h>70?0.85:h>50?0.5:0.2}}/>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <style>{`
        @media(max-width:860px){ .feat-resp{ grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}
