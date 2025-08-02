const RevenueStatsCard = `export default function RevenueStatsCard() {
  return (
    <div
      className="max-w-sm bg-gradient-to-r from-green-400 to-green-600 text-white 
    border-0 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Monthly Revenue</h3>
          <span className="text-2xl">💰</span>
        </div>
        <div className="mb-2">
          <p className="text-3xl font-bold">$45,678</p>
        </div>
        <div className="flex items-center">
          <span className="text-sm bg-white/20 px-2 py-1 rounded">
            ↗ +18.2%
          </span>
          <span className="text-sm ml-2 opacity-90">vs last month</span>
        </div>
      </div>
    </div>
  );
}
`;
export default RevenueStatsCard;
