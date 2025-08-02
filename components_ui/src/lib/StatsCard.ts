const StatsCard = `export default function StatsCard() {
  return (
    <div className="max-w-sm border rounded-lg shadow-lg">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">Total Users</p>
            <p className="text-3xl font-bold text-blue-900">12,345</p>
            <p className="text-sm text-green-600">+12% from last month</p>
          </div>
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <span className="text-blue-600 text-xl">👥</span>
          </div>
        </div>
      </div>
    </div>
  );
}
`;
export default StatsCard;
