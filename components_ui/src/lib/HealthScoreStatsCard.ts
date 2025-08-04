const HealthScoreStatsCard = `export default function HealthScoreStatsCard() {
  return (
    <div className="max-w-sm border border-gray-200 rounded-lg shadow-md ">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-200">System Health</h3>
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-green-600 text-sm">✓</span>
          </div>
        </div>
        <div className="text-center mb-4">
          <div className="text-4xl font-bold text-green-600 mb-1">98.5</div>
          <p className="text-sm text-gray-600">Health Score</p>
          <p className="text-xs text-green-600 font-medium">Excellent</p>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">Uptime</span>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-cyan-500">99.9%</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">Response Time</span>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-cyan-500">145ms</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">Error Rate</span>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-cyan-500">0.1%</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">CPU Usage</span>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-cyan-500">23%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
`;

export default HealthScoreStatsCard;
