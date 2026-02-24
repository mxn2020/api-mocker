import { ArrowLeft, Save, Code, Clock, Settings2 } from "lucide-react";
import { Link } from "react-router-dom";
export default function EndpointBuilderPage() {
  return (<div style={{display:"flex",flexDirection:"column",height:"100vh"}}>
    <header style={{padding:"var(--space-4) var(--space-6)",borderBottom:"1px solid var(--color-border)",background:"var(--color-bg-card)",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <div style={{display:"flex",alignItems:"center",gap:"var(--space-4)"}}>
        <Link to="/" className="btn btn-ghost btn-sm" style={{padding:8}}><ArrowLeft size={18}/></Link>
        <div style={{display:"flex",gap:"var(--space-2)",alignItems:"center"}}>
          <select className="select mono method-GET" style={{width:100,fontWeight:700,background:"var(--color-bg-primary)"}} disabled>
            <option>GET</option> <option>POST</option>
          </select>
          <input type="text" className="input mono" defaultValue="/api/users" style={{width:400,fontSize:"16px",fontWeight:600}} />
        </div>
      </div>
      <button className="btn btn-primary"><Save size={16}/> Save Endpoint</button>
    </header>

    <div style={{display:"flex",flex:1,overflow:"hidden"}}>
      {/* Editor Left */}
      <div style={{flex:1,borderRight:"1px solid var(--color-border)",display:"flex",flexDirection:"column",background:"var(--color-bg-card)"}}>
        <div style={{padding:"var(--space-2) var(--space-4)",borderBottom:"1px solid var(--color-border)",background:"var(--color-bg-secondary)",fontSize:"12px",fontWeight:700,textTransform:"uppercase",display:"flex",alignItems:"center",gap:"var(--space-2)"}}><Code size={14}/> JSON Response Editor</div>
        <textarea className="mono" style={{flex:1,border:"none",padding:"var(--space-4)",fontSize:"14px",resize:"none",outline:"none",background:"var(--color-bg-card)",color:"var(--color-text-primary)",lineHeight:1.6}} defaultValue={`{
  "users": [
    { "id": 1, "name": "Alice Cooper", "role": "admin" },
    { "id": 2, "name": "Bob Marley", "role": "user" }
  ],
  "meta": {
    "total": 2,
    "page": 1
  }
}`}></textarea>
      </div>

      {/* Settings Right */}
      <div style={{width:350,background:"var(--color-bg-primary)",display:"flex",flexDirection:"column",padding:"var(--space-6)",gap:"var(--space-6)",overflowY:"auto"}}>
        <div>
          <h3 style={{fontSize:"13px",fontWeight:800,textTransform:"uppercase",marginBottom:"var(--space-3)",display:"flex",alignItems:"center",gap:8}}><Settings2 size={16}/> Response Config</h3>
          <div className="card" style={{padding:"var(--space-4)",display:"flex",flexDirection:"column",gap:"var(--space-4)"}}>
            <div>
              <label style={{fontSize:"13px",fontWeight:700,marginBottom:6,display:"block"}}>Status Code</label>
              <div style={{display:"flex",gap:8}}>
                <input type="number" className="input mono" defaultValue={200} style={{width:80}} />
                <input type="text" className="input" defaultValue="OK" readOnly style={{background:"var(--color-bg-secondary)",color:"var(--color-text-secondary)"}} />
              </div>
            </div>
            <div>
              <label style={{fontSize:"13px",fontWeight:700,marginBottom:6,display:"block"}}>Content-Type</label>
              <select className="select mono"><option>application/json</option><option>text/html</option></select>
            </div>
          </div>
        </div>

        <div>
          <h3 style={{fontSize:"13px",fontWeight:800,textTransform:"uppercase",marginBottom:"var(--space-3)",display:"flex",alignItems:"center",gap:8}}><Clock size={16}/> Network Simulation</h3>
          <div className="card" style={{padding:"var(--space-4)"}}>
            <label style={{fontSize:"13px",fontWeight:700,marginBottom:6,display:"block"}}>Latency (ms)</label>
            <input type="number" className="input mono" defaultValue={50} />
            <p style={{fontSize:"12px",color:"var(--color-text-tertiary)",marginTop:8}}>Simulate slow network conditions. 0 means instantly returned.</p>
          </div>
        </div>
      </div>
    </div>
  </div>);
}
