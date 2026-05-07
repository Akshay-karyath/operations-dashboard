import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import KpiCard from "../components/KpiCard";
import OrdersTable from "../components/OrdersTable";
import RevenueChart from "../components/RevenueChart";
import SalesSummaryChart from "../components/SalesSummaryChart";

import {
  ShoppingCart,
  DollarSign,
  Users,
  TrendingUp,
  Calendar,
  BarChart3,
  Activity,
  Flame,
  User,
} from "lucide-react";

import { getDashboardStats } from "../api/dashboardApi";
import { getOrders } from "../api/ordersApi";

function Dashboard() {
  const [stats, setStats] = useState(null);
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    getDashboardStats().then(setStats);

    getOrders().then((res) => {
      setOrders(res);
      setFilteredOrders(res);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    let data = [...orders];

    if (search) {
      data = data.filter((o) =>
        o.customer.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (statusFilter !== "All") {
      data = data.filter((o) => o.status === statusFilter);
    }

    setFilteredOrders(data);
  }, [search, statusFilter, orders]);

  if (loading) {
    return (
      <Layout>
        <p className="text-gray-500">Loading dashboard...</p>
      </Layout>
    );
  }

  const trendingMenus = [
    {
      name: "Burger",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      orders: 120,
      type: "Veg",
    },
    {
      name: "Pizza",
      img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
      orders: 98,
      type: "Non-Veg",
    },
    {
      name: "Fried Chicken",
      img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086",
      orders: 150,
      type: "Non-Veg",
    },
    {
      name: "Sandwich",
      img: "https://images.unsplash.com/photo-1550507992-eb63ffee0847",
      orders: 75,
      type: "Veg",
    },
    {
      name: "Noodles",
      img: "https://images.unsplash.com/photo-1612927601601-6638404737ce",
      orders: 110,
      type: "Veg",
    },
    {
      name: "Biryani",
      img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
      orders: 200,
      type: "Non-Veg",
    },
  ];

  return (
    <Layout>
      <div className="space-y-6">

        {/* KPI CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <KpiCard title="Orders" value={stats.totalOrders} icon={<ShoppingCart />} />
          <KpiCard title="Revenue" value={`₹${stats.revenue}`} icon={<DollarSign />} />
          <KpiCard title="Customers" value={stats.customers} icon={<Users />} />
          <KpiCard title="Growth" value={`${stats.growth}%`} icon={<TrendingUp />} />
        </div>

        {/* SEARCH + FILTER */}
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            className="border p-3 rounded-xl w-full sm:w-1/2 lg:w-1/3"
            placeholder="Search customer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border p-3 rounded-xl w-full sm:w-1/3"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        {/* ORDERS TABLE */}
        <OrdersTable
          orders={filteredOrders}
          onSelectOrder={setSelectedOrder}
        />

        {/* ANALYTICS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <RevenueChart />
          </div>

          <SalesSummaryChart />

        </div>

        {/* SALES PERFORMANCE */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">

          <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <Activity size={18} /> Sales Performance
          </h2>

          <div className="space-y-6">
            {[
              { label: "Daily Sales", value: 75, color: "from-blue-500 to-blue-400", icon: Calendar },
              { label: "Weekly Sales", value: 60, color: "from-green-500 to-green-400", icon: BarChart3 },
              { label: "Monthly Sales", value: 85, color: "from-purple-500 to-purple-400", icon: TrendingUp },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="bg-gray-50 p-4 rounded-xl">

                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <Icon size={16} />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <span className="text-sm font-semibold">{item.value}%</span>
                  </div>

                  <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
                    <div
                      className={`h-2.5 rounded-full bg-gradient-to-r ${item.color}`}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* TRENDING MENUS */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">

          <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <Flame size={18} /> Trending Menus
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {trendingMenus.map((item) => (
              <div
                key={item.name}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
              >

                <img
                  src={`${item.img}?auto=format&fit=crop&w=800&q=60`}
                  alt={item.name}
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />

                <div className="p-4">

                  <div className="flex justify-between items-center">
                    <p className="font-semibold">{item.name}</p>

                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        item.type === "Veg"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {item.type}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 mt-2">
                    {item.orders} Orders
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* USER STATISTICS */}
        <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-sm flex items-center justify-between">

          <div className="flex items-center gap-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Top User"
              className="w-14 h-14 rounded-full object-cover"
            />

            <div>
              <p className="text-sm text-gray-500">Top User</p>
              <p className="font-semibold text-lg">John Mathew</p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-500 flex items-center justify-end gap-1">
              <User size={14} /> New Users
            </p>
            <p className="text-xl font-bold">{stats.customers}</p>
          </div>

        </div>

      </div>

      {/* ORDER MODAL */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

          <div className="bg-white p-6 rounded-xl w-[90%] md:w-[400px]">

            <h2 className="text-lg font-semibold mb-4">Order Details</h2>

            <p><b>ID:</b> {selectedOrder.id}</p>
            <p><b>Customer:</b> {selectedOrder.customer}</p>
            <p><b>Amount:</b> ₹{selectedOrder.amount}</p>
            <p><b>Status:</b> {selectedOrder.status}</p>

            <button
              onClick={() => setSelectedOrder(null)}
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg"
            >
              Close
            </button>

          </div>

        </div>
      )}

    </Layout>
  );
}

export default Dashboard;