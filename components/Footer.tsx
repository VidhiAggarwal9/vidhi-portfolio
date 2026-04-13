"use client";
export default function Footer() {
  return (
    <footer style={{ background:"#1c1917", padding:"44px 32px" }}>
      <div style={{ maxWidth:1080, margin:"0 auto",
                    display:"flex", alignItems:"center",
                    justifyContent:"space-between",
                    flexWrap:"wrap", gap:12 }}>
        <div style={{ fontSize:15, fontWeight:800, color:"#fff" }}>
          Vidhi{" "}
          <em style={{ fontFamily:"'Playfair Display',serif",
                       fontStyle:"italic", color:"#ca8a04" }}>Aggarwal</em>
        </div>
        <div style={{ fontSize:12, color:"rgba(255,255,255,0.25)" }}>
          © {new Date().getFullYear()} · Vidhi Aggarwal · All rights reserved.
        </div>
        <div style={{ display:"flex", gap:20 }}>
          {[
            { l:"GitHub",   h:"https://github.com/VidhiAggarwal9" },
            { l:"LinkedIn", h:"https://www.linkedin.com/in/vidhi-aggarwal-15b25b291/" },
            { l:"Email",    h:"mailto:vidhi27aggarwal9@gmail.com" },
          ].map(({l,h})=>(
            <a key={l} href={h}
               target={h.startsWith("http") ? "_blank" : undefined}
               rel="noopener"
               style={{ fontSize:12, color:"rgba(255,255,255,0.38)",
                        textDecoration:"none", transition:"color 0.2s" }}
               onMouseEnter={e=>(e.currentTarget.style.color="rgba(255,255,255,0.8)")}
               onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.38)")}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}