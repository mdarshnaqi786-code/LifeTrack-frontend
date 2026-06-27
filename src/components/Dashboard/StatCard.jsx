function StatCard({ title, value, icon, color }) {
  return (
    <div className="bg-white h-36 rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

      <div className="flex justify-between items-center h-full">

        <div>
          <p className="text-gray-500 text-sm font-medium">
            {title}
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            {value}
          </h2>
        </div>

        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl ${color}`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}

export default StatCard;