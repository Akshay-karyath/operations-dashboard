function Header() {
  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-4 sm:px-6 shadow-sm">

      <h2 className="text-base sm:text-lg font-semibold">
        Dashboard
      </h2>

      <div className="flex gap-2">

        <button className="bg-blue-500 text-white px-3 sm:px-4 py-1 rounded-lg hover:bg-blue-600 text-sm">
          Sync
        </button>

        <button className="bg-gray-200 px-3 sm:px-4 py-1 rounded-lg hover:bg-gray-300 text-sm">
          Export
        </button>

      </div>

    </div>
  );
}

export default Header;