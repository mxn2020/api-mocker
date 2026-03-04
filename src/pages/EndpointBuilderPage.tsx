import { ArrowLeft, Save, Code, Clock, Settings2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button, Card, Input, Label, Select, SelectItem, Textarea } from "@geenius-ui/react-css";

export default function EndpointBuilderPage() {
  return (<div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
    <header style={{ padding: "var(--space-4) var(--space-6)", borderBottom: "1px solid var(--color-border)", background: "var(--color-bg-card)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
        <Link to="/"><Button variant="ghost" size="sm" icon={<ArrowLeft size={18} />} /></Link>
        <div style={{ display: "flex", gap: "var(--space-2)", alignItems: "center" }}>
          <Select defaultValue="GET" disabled>
            <SelectItem value="GET">GET</SelectItem>
            <SelectItem value="POST">POST</SelectItem>
          </Select>
          <Input type="text" className="mono" defaultValue="/api/users" style={{ width: 400, fontSize: "16px", fontWeight: 600 }} />
        </div>
      </div>
      <Button variant="primary" icon={<Save size={16} />}>Save Endpoint</Button>
    </header>

    <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
      <div style={{ flex: 1, borderRight: "1px solid var(--color-border)", display: "flex", flexDirection: "column", background: "var(--color-bg-card)" }}>
        <div style={{ padding: "var(--space-2) var(--space-4)", borderBottom: "1px solid var(--color-border)", background: "var(--color-bg-secondary)", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Code size={14} /> JSON Response Editor</div>
        <Textarea className="mono" style={{ flex: 1, border: "none", fontSize: "14px", resize: "none", outline: "none", background: "var(--color-bg-card)", color: "var(--color-text-primary)", lineHeight: 1.6 }} defaultValue={`{
  "users": [
    { "id": 1, "name": "Alice Cooper", "role": "admin" },
    { "id": 2, "name": "Bob Marley", "role": "user" }
  ],
  "meta": {
    "total": 2,
    "page": 1
  }
}`}></Textarea>
      </div>

      <div style={{ width: 350, background: "var(--color-bg-primary)", display: "flex", flexDirection: "column", padding: "var(--space-6)", gap: "var(--space-6)", overflowY: "auto" }}>
        <div>
          <h3 style={{ fontSize: "13px", fontWeight: 800, textTransform: "uppercase", marginBottom: "var(--space-3)", display: "flex", alignItems: "center", gap: 8 }}><Settings2 size={16} /> Response Config</h3>
          <Card padding="md">
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
              <div>
                <Label style={{ marginBottom: 6 }}>Status Code</Label>
                <div style={{ display: "flex", gap: 8 }}>
                  <Input type="number" className="mono" defaultValue={200} style={{ width: 80 }} />
                  <Input type="text" defaultValue="OK" readOnly style={{ background: "var(--color-bg-secondary)", color: "var(--color-text-secondary)" }} />
                </div>
              </div>
              <div>
                <Label style={{ marginBottom: 6 }}>Content-Type</Label>
                <Select defaultValue="application/json">
                  <SelectItem value="application/json">application/json</SelectItem>
                  <SelectItem value="text/html">text/html</SelectItem>
                </Select>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <h3 style={{ fontSize: "13px", fontWeight: 800, textTransform: "uppercase", marginBottom: "var(--space-3)", display: "flex", alignItems: "center", gap: 8 }}><Clock size={16} /> Network Simulation</h3>
          <Card padding="md">
            <Label style={{ marginBottom: 6 }}>Latency (ms)</Label>
            <Input type="number" className="mono" defaultValue={50} />
            <p style={{ fontSize: "12px", color: "var(--color-text-tertiary)", marginTop: 8 }}>Simulate slow network conditions. 0 means instantly returned.</p>
          </Card>
        </div>
      </div>
    </div>
  </div>);
}
