import { LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { tradeHistory } from "./components/UserData";

export default function Recharts() {
  const renderLineChart = (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={tradeHistory}>
        <XAxis dataKey="date" />
        <YAxis dataKey="finalPnl" />
      </LineChart>
    </ResponsiveContainer>
  );
  return (
    <div style={{ width: "100%" }} className="dashboard-card">
      {renderLineChart}
    </div>
  );
}
