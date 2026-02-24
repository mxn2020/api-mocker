import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import EndpointsPage from "./pages/EndpointsPage";
import EndpointBuilderPage from "./pages/EndpointBuilderPage";
import AnalyticsPage from "./pages/AnalyticsPage";
export default function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/builder" element={<EndpointBuilderPage />} />
      <Route path="/*" element={<div style={{display:"flex"}}>
        <Sidebar />
        <main style={{marginLeft:"var(--sidebar-width)",flex:1,minHeight:"100vh"}}><Routes>
          <Route path="/" element={<EndpointsPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/settings" element={<EndpointsPage />} />
        </Routes></main>
      </div>} />
    </Routes>
  </BrowserRouter>);
}
