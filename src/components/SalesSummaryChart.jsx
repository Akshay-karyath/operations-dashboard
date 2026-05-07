import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";

function SalesSummaryChart() {

  const pieData = [
    { name: "Burger", value: 40 },
    { name: "Pizza", value: 25 },
    { name: "Biryani", value: 35 },
  ];

  const barData = [
    { name: "Orders", value: 120 },
    { name: "Revenue", value: 450 },
    { name: "Customers", value: 80 },
  ];

  const COLORS = ["#3B82F6", "#10B981", "#F59E0B"];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">

      <h2 className="text-lg font-semibold mb-5">
        Sales Analytics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* PIE CHART */}
        <div className="h-48">

          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={70}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

        </div>

        {/* BAR CHART */}
        <div className="h-48">

          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <Tooltip />
              <Bar dataKey="value" fill="#6366F1" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}

export default SalesSummaryChart;