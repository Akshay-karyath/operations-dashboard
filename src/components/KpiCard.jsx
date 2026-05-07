function KpiCard({ title, value, icon, color }) {
  return (
    <div
      className={`bg-white p-5 rounded-2xl shadow-sm border-l-4 ${color}
      hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h2 className="text-2xl font-bold mt-1">{value}</h2>
        </div>

        <div className="text-3xl opacity-80">{icon}</div>
      </div>
    </div>
  );
}

export default KpiCard;