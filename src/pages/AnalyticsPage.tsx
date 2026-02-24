import { Activity, ArrowUpRight } from "lucide-react";
export default function AnalyticsPage() {
  return (<div style={{padding:"var(--space-8)",maxWidth:1200}}>
    <h1 style={{fontSize:"var(--font-size-2xl)",fontWeight:800,marginBottom:"var(--space-6)",display:"flex",alignItems:"center",gap:"var(--space-2)"}}><Activity style={{color:"var(--color-accent-primary)"}}/> Analytics & Logs</h1>
    
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"var(--space-4)",marginBottom:"var(--space-8)"}}>
      <div className="card" style={{padding:"var(--space-5)"}}>
        <div style={{fontSize:"13px",fontWeight:700,color:"var(--color-text-secondary)",textTransform:"uppercase"}}>Total Requests (24h)</div>
        <div style={{fontSize:"32px",fontWeight:800,marginTop:8}}>42,150</div>
        <div style={{fontSize:"13px",color:"var(--color-success)",fontWeight:700,display:"flex",alignItems:"center",marginTop:4}}><ArrowUpRight size={14}/> 12.5%</div>
      </div>
      <div className="card" style={{padding:"var(--space-5)"}}>
        <div style={{fontSize:"13px",fontWeight:700,color:"var(--color-text-secondary)",textTransform:"uppercase"}}>Avg Latency</div>
        <div style={{fontSize:"32px",fontWeight:800,marginTop:8}}>145ms</div>
        <div style={{fontSize:"13px",color:"var(--color-text-tertiary)",fontWeight:700,marginTop:4}}>Includes simulated delay</div>
      </div>
      <div className="card" style={{padding:"var(--space-5)"}}>
        <div style={{fontSize:"13px",fontWeight:700,color:"var(--color-text-secondary)",textTransform:"uppercase"}}>Error Rate</div>
        <div style={{fontSize:"32px",fontWeight:800,marginTop:8}}>2.4%</div>
        <div style={{fontSize:"13px",color:"var(--color-text-tertiary)",fontWeight:700,marginTop:4}}>Status >= 400</div>
      </div>
    </div>

    <h2 style={{fontSize:"18px",fontWeight:800,marginBottom:"var(--space-4)"}}>Recent Requests</h2>
    <div className="card" style={{padding:"var(--space-4)",display:"flex",justifyContent:"center",alignItems:"center",height:200,color:"var(--color-text-tertiary)",background:"var(--color-bg-secondary)"}}>
      <div style={{textAlign:"center"}}>
        <Activity size={32} style={{margin:"0 auto",opacity:0.5,marginBottom:8}}/>
        <p style={{fontWeight:600}}>No recent requests recorded in the development environment.</p>
      </div>
    </div>
  </div>);
}
