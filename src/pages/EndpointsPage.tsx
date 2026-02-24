import { Server, Plus, Search, MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";
const endpoints = [
  { id:"1", method:"GET", path:"/api/users", delay:"50ms", status:200 },
  { id:"2", method:"POST", path:"/api/auth/login", delay:"250ms", status:200 },
  { id:"3", method:"GET", path:"/api/products/:id", delay:"120ms", status:404 },
  { id:"4", method:"DELETE", path:"/api/comments/:id", delay:"80ms", status:204 }
];
export default function EndpointsPage() {
  return (<div style={{padding:"var(--space-8)",maxWidth:1200}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--space-6)"}}>
      <h1 style={{fontSize:"var(--font-size-2xl)",fontWeight:800,display:"flex",alignItems:"center",gap:"var(--space-2)"}}><Server style={{color:"var(--color-accent-primary)"}}/> Mock Endpoints</h1>
      <Link to="/builder" className="btn btn-primary"><Plus size={16}/> Create Endpoint</Link>
    </div>
    
    <div className="card" style={{padding:"var(--space-2)",marginBottom:"var(--space-6)",display:"flex",alignItems:"center",gap:"var(--space-2)"}}>
      <Search size={18} style={{color:"var(--color-text-tertiary)",marginLeft:"var(--space-2)"}}/>
      <input type="text" placeholder="Search by path or method..." style={{border:"none",background:"transparent",width:"100%",padding:"var(--space-2)",outline:"none",fontSize:"14px"}} />
    </div>

    <div className="card">
      <table style={{width:"100%",borderCollapse:"collapse"}}>
        <thead>
          <tr style={{borderBottom:"1px solid var(--color-border)",background:"var(--color-bg-secondary)"}}>
            <th style={{textAlign:"left",padding:"12px 16px",fontSize:"12px",textTransform:"uppercase",color:"var(--color-text-secondary)",fontWeight:700}}>Method</th>
            <th style={{textAlign:"left",padding:"12px 16px",fontSize:"12px",textTransform:"uppercase",color:"var(--color-text-secondary)",fontWeight:700}}>Path</th>
            <th style={{textAlign:"left",padding:"12px 16px",fontSize:"12px",textTransform:"uppercase",color:"var(--color-text-secondary)",fontWeight:700}}>Response</th>
            <th style={{textAlign:"left",padding:"12px 16px",fontSize:"12px",textTransform:"uppercase",color:"var(--color-text-secondary)",fontWeight:700}}>Delay</th>
            <th style={{textAlign:"right",padding:"12px 16px",fontSize:"12px",textTransform:"uppercase",color:"var(--color-text-secondary)",fontWeight:700}}></th>
          </tr>
        </thead>
        <tbody>
          {endpoints.map(ep=>(<tr key={ep.id} style={{borderBottom:"1px solid var(--color-border)",cursor:"pointer"}} onClick={()=>window.location.href='/builder'}>
            <td style={{padding:"16px",width:"80px"}}><span className={`badge bg-method-${ep.method}`}>{ep.method}</span></td>
            <td style={{padding:"16px"}}><span className="mono" style={{fontWeight:600}}>{ep.path}</span></td>
            <td style={{padding:"16px"}}><span className="mono" style={{fontSize:"13px"}}>{ep.status} OK</span></td>
            <td style={{padding:"16px"}}><span className="mono" style={{fontSize:"13px",color:"var(--color-text-secondary)"}}>{ep.delay}</span></td>
            <td style={{padding:"16px",textAlign:"right"}}><button className="btn btn-ghost btn-sm" onClick={(e)=>e.stopPropagation()}><MoreVertical size={16}/></button></td>
          </tr>))}
        </tbody>
      </table>
    </div>
  </div>);
}
