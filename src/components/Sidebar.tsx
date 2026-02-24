import { Link, useLocation } from "react-router-dom";
import { Server, Activity, Settings, Zap } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
export default function Sidebar() {
  const loc = useLocation();
  const links = [
    { to: "/", icon: Server, label: "Endpoints" },
    { to: "/analytics", icon: Activity, label: "Analytics" },
    { to: "/settings", icon: Settings, label: "Settings" }
  ];
  return (<aside style={{width:"var(--sidebar-width)",background:"var(--color-bg-card)",borderRight:"1px solid var(--color-border)",height:"100vh",position:"fixed",display:"flex",flexDirection:"column"}}>
    <div style={{padding:"var(--space-6)",display:"flex",alignItems:"center",gap:"var(--space-3)",borderBottom:"1px solid var(--color-border)"}}>
      <div style={{background:"var(--color-text-primary)",borderRadius:"8px",padding:6}}><Zap size={20} style={{color:"var(--color-accent-primary)",fill:"var(--color-accent-primary)"}}/></div>
      <strong style={{fontSize:"1.1rem",fontWeight:800,letterSpacing:"-0.5px"}}>API Mocker</strong>
    </div>
    <div style={{padding:"var(--space-4)",flex:1,display:"flex",flexDirection:"column",gap:"var(--space-6)"}}>
      <nav style={{display:"flex",flexDirection:"column",gap:"var(--space-1)"}}>
        <div style={{fontSize:"11px",fontWeight:800,textTransform:"uppercase",color:"var(--color-text-tertiary)",marginBottom:"var(--space-2)",letterSpacing:"1px",paddingLeft:"var(--space-2)"}}>Workspace</div>
        {links.map(l=><Link key={l.to} to={l.to} style={{display:"flex",alignItems:"center",gap:"var(--space-3)",padding:"var(--space-3)",borderRadius:"var(--radius-sm)",color:loc.pathname===l.to?"var(--color-accent-primary)":"var(--color-text-secondary)",background:loc.pathname===l.to?"var(--color-accent-soft)":"transparent",fontWeight:700,fontSize:"14px",transition:"all var(--transition-fast)"}}><l.icon size={18}/>{l.label}</Link>)}
      </nav>
    </div>
    <div style={{padding:"var(--space-4)",borderTop:"1px solid var(--color-border)",display:"flex",justifyContent:"flex-end"}}><ThemeToggle /></div>
  </aside>);
}
