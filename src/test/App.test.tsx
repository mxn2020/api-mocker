import { describe, it, expect } from "vitest"; import { render, screen } from "@testing-library/react"; import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar"; import EndpointsPage from "../pages/EndpointsPage"; import EndpointBuilderPage from "../pages/EndpointBuilderPage"; import AnalyticsPage from "../pages/AnalyticsPage";
function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }

describe("Pages", () => {
  it("Sidebar renders", () => { wrap(<Sidebar/>); expect(screen.getByText("API Mocker")).toBeInTheDocument(); });
  it("EndpointsPage renders", () => { wrap(<EndpointsPage/>); expect(screen.getByText("/api/users")).toBeInTheDocument(); });
  it("EndpointBuilderPage renders", () => { wrap(<EndpointBuilderPage/>); expect(screen.getAllByDisplayValue("/api/users")[0]).toBeInTheDocument(); });
  it("AnalyticsPage renders", () => { wrap(<AnalyticsPage/>); expect(screen.getByText("Total Requests (24h)")).toBeInTheDocument(); });
});
