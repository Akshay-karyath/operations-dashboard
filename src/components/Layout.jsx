import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-50">

      {/* SIDEBAR (desktop only) */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* MAIN AREA */}
      <div className="flex flex-col flex-1 overflow-hidden">

        <Header />

        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          {children}
        </main>

      </div>

    </div>
  );
}

export default Layout;