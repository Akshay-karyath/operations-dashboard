import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Mon", revenue: 4000 },
  { name: "Tue", revenue: 3000 },
  { name: "Wed", revenue: 5000 },
  { name: "Thu", revenue: 4780 },
  { name: "Fri", revenue: 5890 },
  { name: "Sat", revenue: 6390 },
  { name: "Sun", revenue: 7490 },
];

function RevenueChart() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all">

      <h2 className="text-lg font-semibold mb-4">Revenue Overview</h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#3b82f6"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

export default RevenueChart;