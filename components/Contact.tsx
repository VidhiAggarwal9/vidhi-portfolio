"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" });
  const [ok,   setOk]   = useState(false);

  function send() {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in your Name, Email and Message.");
      return;
    }
    const sub  = encodeURIComponent(form.subject || `Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:vidhi27aggarwal9@gmail.com?subject=${sub}&body=${body}`;
    setOk(true);
    setForm({ name:"", email:"", subject:"", message:"" });
    setTimeout(() => setOk(false), 4000);
  }

  return (
    <section id="contact" style={{ padding:"88px 32px", background:"#fafaf8" }}>
      <div style={{ maxWidth:1080, margin:"0 auto" }}>

        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} style={{marginBottom:48}}>
          <p style={{fontSize:10,fontWeight:700,color:"#1d4ed8",letterSpacing:3,textTransform:"uppercase",marginBottom:8}}>Contact</p>
          <h2 style={{fontSize:38,fontWeight:900,color:"#1c1917",letterSpacing:-1.5}}>
            Let&apos;s Build{" "}
            <em style={{fontFamily:"'Playfair Display',serif",fontStyle:"italic",color:"#1d4ed8"}}>Something</em>
          </h2>
          <p style={{fontSize:14,color:"#6b7280",marginTop:10,lineHeight:1.7,maxWidth:480}}>Open to internships, collaborations, and conversations about tech and data.</p>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:48 }} className="contact-resp">
          {/* Links */}
          <motion.div initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
            style={{display:"flex",flexDirection:"column",gap:10}}>
            {[
              { ico:"🐙", h:"GitHub",   s:"@VidhiAggarwal9",              href:"https://github.com/VidhiAggarwal9" },
              { ico:"💼", h:"LinkedIn", s:"vidhi-aggarwal-15b25b291",      href:"https://www.linkedin.com/in/vidhi-aggarwal-15b25b291/" },
              { ico:"✉️", h:"Email",    s:"vidhi27aggarwal9@gmail.com",    href:"mailto:vidhi27aggarwal9@gmail.com" },
            ].map(c=>(
              <a key={c.h} href={c.href}
                 target={c.href.startsWith("http") ? "_blank" : undefined}
                 rel="noopener"
                 style={{display:"flex",alignItems:"center",gap:14,background:"#fff",
                         border:"1px solid #e5e7eb",borderRadius:12,padding:"14px 18px",
                         textDecoration:"none",transition:"all 0.2s"}}
                 onMouseEnter={e=>{e.currentTarget.style.borderColor="#1d4ed8";e.currentTarget.style.boxShadow="0 4px 16px rgba(29,78,216,0.08)";}}
                 onMouseLeave={e=>{e.currentTarget.style.borderColor="#e5e7eb";e.currentTarget.style.boxShadow="none";}}>
                <div style={{width:36,height:36,borderRadius:9,background:"#eff6ff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,flexShrink:0}}>{c.ico}</div>
                <div>
                  <div style={{fontSize:13,fontWeight:600,color:"#1c1917"}}>{c.h}</div>
                  <div style={{fontSize:11,color:"#9ca3af"}}>{c.s}</div>
                </div>
                <span style={{marginLeft:"auto",color:"#d1d5db"}}>↗</span>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
            style={{background:"#fff",border:"1px solid #e5e7eb",borderRadius:16,padding:32}}>
            <h3 style={{fontSize:18,fontWeight:700,color:"#1c1917",marginBottom:20,letterSpacing:-0.3}}>Send a message</h3>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}} className="form-row-resp">
                {[
                  { id:"name",    ph:"Your Name",  type:"text"  },
                  { id:"email",   ph:"Your Email", type:"email" },
                ].map(f=>(
                  <input key={f.id} type={f.type} placeholder={f.ph}
                    value={form[f.id as keyof typeof form]}
                    onChange={e=>setForm({...form,[f.id]:e.target.value})}
                    style={{width:"100%",background:"#fafaf8",border:"1.5px solid #e5e7eb",
                            borderRadius:8,padding:"11px 14px",fontSize:13,color:"#1c1917",
                            fontFamily:"'Inter',sans-serif",outline:"none"}}
                    onFocus={e=>{e.target.style.borderColor="#1d4ed8";e.target.style.background="#fff";}}
                    onBlur={e=>{e.target.style.borderColor="#e5e7eb";e.target.style.background="#fafaf8";}}
                  />
                ))}
              </div>
              <input type="text" placeholder="Subject"
                value={form.subject}
                onChange={e=>setForm({...form,subject:e.target.value})}
                style={{width:"100%",background:"#fafaf8",border:"1.5px solid #e5e7eb",
                        borderRadius:8,padding:"11px 14px",fontSize:13,color:"#1c1917",
                        fontFamily:"'Inter',sans-serif",outline:"none"}}
                onFocus={e=>{e.target.style.borderColor="#1d4ed8";e.target.style.background="#fff";}}
                onBlur={e=>{e.target.style.borderColor="#e5e7eb";e.target.style.background="#fafaf8";}}
              />
              <textarea placeholder="What&apos;s on your mind?"
                value={form.message}
                onChange={e=>setForm({...form,message:e.target.value})}
                rows={4}
                style={{width:"100%",background:"#fafaf8",border:"1.5px solid #e5e7eb",
                        borderRadius:8,padding:"11px 14px",fontSize:13,color:"#1c1917",
                        fontFamily:"'Inter',sans-serif",outline:"none",resize:"none"}}
                onFocus={e=>{e.target.style.borderColor="#1d4ed8";e.target.style.background="#fff";}}
                onBlur={e=>{e.target.style.borderColor="#e5e7eb";e.target.style.background="#fafaf8";}}
              />
              <button onClick={send}
                style={{width:"100%",background:"#1c1917",color:"#fff",border:"none",
                        borderRadius:8,padding:13,fontSize:14,fontWeight:600,
                        cursor:"pointer",fontFamily:"'Inter',sans-serif",transition:"opacity 0.2s"}}
                onMouseEnter={e=>(e.currentTarget.style.opacity="0.84")}
                onMouseLeave={e=>(e.currentTarget.style.opacity="1")}>
                Send Message →
              </button>
              {ok && (
                <div style={{textAlign:"center",fontSize:13,color:"#16a34a",fontWeight:600,
                             padding:10,background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:8}}>
                  ✓ Opening your email client…
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media(max-width:860px){ .contact-resp,.form-row-resp{ grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}