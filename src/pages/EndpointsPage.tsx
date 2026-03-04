import { Server, Plus, Search, MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";
import { Button, Card, Badge, Input } from "@geenius-ui/react-css";

const endpoints = [
  { id: "1", method: "GET", path: "/api/users", delay: "50ms", status: 200 },
  { id: "2", method: "POST", path: "/api/auth/login", delay: "250ms", status: 200 },
  { id: "3", method: "GET", path: "/api/products/:id", delay: "120ms", status: 404 },
  { id: "4", method: "DELETE", path: "/api/comments/:id", delay: "80ms", status: 204 }
];

export default function EndpointsPage() {
  return (<div style={{ padding: "var(--space-8)", maxWidth: 1200 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
      <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 800, display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Server style={{ color: "var(--color-accent-primary)" }} /> Mock Endpoints</h1>
      <Link to="/builder"><Button variant="primary" icon={<Plus size={16} />}>Create Endpoint</Button></Link>
    </div>

    <Card padding="sm" className="search-bar">
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
        <Search size={18} style={{ color: "var(--color-text-tertiary)", marginLeft: "var(--space-2)" }} />
        <Input type="text" placeholder="Search by path or method..." style={{ border: "none", background: "transparent", boxShadow: "none" }} />
      </div>
    </Card>

    <div style={{ marginTop: "var(--space-6)" }}>
      <Card padding="none">
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid var(--color-border)", background: "var(--color-bg-secondary)" }}>
              <th style={{ textAlign: "left", padding: "12px 16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)", fontWeight: 700 }}>Method</th>
              <th style={{ textAlign: "left", padding: "12px 16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)", fontWeight: 700 }}>Path</th>
              <th style={{ textAlign: "left", padding: "12px 16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)", fontWeight: 700 }}>Response</th>
              <th style={{ textAlign: "left", padding: "12px 16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)", fontWeight: 700 }}>Delay</th>
              <th style={{ textAlign: "right", padding: "12px 16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)", fontWeight: 700 }}></th>
            </tr>
          </thead>
          <tbody>
            {endpoints.map(ep => (<tr key={ep.id} style={{ borderBottom: "1px solid var(--color-border)", cursor: "pointer" }} onClick={() => window.location.href = '/builder'}>
              <td style={{ padding: "16px", width: "80px" }}><Badge variant={ep.method === "GET" ? "success" : ep.method === "POST" ? "info" : ep.method === "DELETE" ? "error" : "secondary"}>{ep.method}</Badge></td>
              <td style={{ padding: "16px" }}><span className="mono" style={{ fontWeight: 600 }}>{ep.path}</span></td>
              <td style={{ padding: "16px" }}><span className="mono" style={{ fontSize: "13px" }}>{ep.status} OK</span></td>
              <td style={{ padding: "16px" }}><span className="mono" style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>{ep.delay}</span></td>
              <td style={{ padding: "16px", textAlign: "right" }}><Button variant="ghost" size="sm" icon={<MoreVertical size={16} />} onClick={(e: React.MouseEvent) => e.stopPropagation()} /></td>
            </tr>))}
          </tbody>
        </table>
      </Card>
    </div>
  </div>);
}
