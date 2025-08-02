const MultiMetricStatsCard = `export default function MultiMetricStatsCard() {
  return (
    <div className="max-w-sm border border-gray-200 rounded-lg shadow-md ">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-purple-200 rounded-lg flex items-center justify-center mr-3">
            <span className="text-purple-600 text-lg">📊</span>
          </div>
          <h3 className="text-lg font-semibold text-blue-500">
            Website Analytics
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-200">24.5K</p>
            <p className="text-sm text-gray-600">Page Views</p>
            <p className="text-xs text-green-600">+5.2%</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-200">1,234</p>
            <p className="text-sm text-gray-600">Visitors</p>
            <p className="text-xs text-green-600">+12.1%</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-200">3.2%</p>
            <p className="text-sm text-gray-600">Bounce Rate</p>
            <p className="text-xs text-red-600">-0.8%</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-200">2:45</p>
            <p className="text-sm text-gray-600">Avg. Session</p>
            <p className="text-xs text-green-600">+15s</p>
          </div>
        </div>
      </div>
    </div>
  );
}
`;
export default MultiMetricStatsCard;
