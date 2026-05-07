import { NavLink } from "react-router-dom";
import { LayoutDashboard, ShoppingCart, Users, BarChart3 } from "lucide-react";

function Sidebar() {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Orders", path: "/dashboard", icon: ShoppingCart },
    { name: "Customers", path: "/dashboard", icon: Users },
    { name: "Reports", path: "/dashboard", icon: BarChart3 },
  ];

  return (
    <div className="h-screen w-64 bg-[#1F2937] text-white flex flex-col p-5 shadow-lg">

      {/* LOGO */}
      <h1 className="text-2xl font-bold mb-10 tracking-wide">
        FoodOps
      </h1>

      {/* MENU */}
      <nav className="flex flex-col gap-2">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                ${
                  isActive
                    ? "bg-white text-gray-900 shadow-md"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </NavLink>
          );
        })}

      </nav>

      {/* FOOTER */}
      <div className="mt-auto text-sm text-gray-400">
        <p>© 2026 FoodOps</p>
      </div>

    </div>
  );
}

export default Sidebar;