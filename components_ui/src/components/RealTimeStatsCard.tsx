export default function RealTimeStatsCard() {
  return (
    <div className="max-w-sm border border-gray-200 rounded-lg shadow-md ">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-200">Live Visitors</h3>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
            <span className="text-sm text-green-600">Live</span>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-3xl font-bold text-cyan-500">1,247</p>
          <p className="text-sm text-gray-500">Currently online</p>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-300">Page views/min</span>
            <span className="text-gray-200 font-medium">156</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-300">New visitors</span>
            <span className="text-gray-200 font-medium">23</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-300">Avg. session</span>
            <span className="text-gray-200 font-medium">3:42</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-green-500 text-center">
            Last updated: just now
          </p>
        </div>
      </div>
    </div>
  );
}
