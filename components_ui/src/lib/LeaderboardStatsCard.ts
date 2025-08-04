const LeaderboardStatsCard = `export default function LeaderboardStatsCard() {
  return (
    <div className="max-w-sm border border-gray-200 rounded-lg shadow-md ">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
            <span className="text-yellow-600 text-lg">🏆</span>
          </div>
          <h3 className="text-lg font-semibold text-cyan-500">
            Top Performers
          </h3>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                1
              </div>
              <div>
                <p className="text-sm font-medium text-gray-200">
                  Sarah Johnson
                </p>
                <p className="text-xs text-gray-500">Sales Manager</p>
              </div>
            </div>
            <span className="text-sm font-bold text-gray-700">$45,230</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                2
              </div>
              <div>
                <p className="text-sm font-medium text-gray-200">Mike Chen</p>
                <p className="text-xs text-gray-500">Account Executive</p>
              </div>
            </div>
            <span className="text-sm font-bold text-gray-700">$38,950</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                3
              </div>
              <div>
                <p className="text-sm font-medium text-gray-200">Emma Davis</p>
                <p className="text-xs text-gray-500">Senior Sales Rep</p>
              </div>
            </div>
            <span className="text-sm font-bold text-gray-700">$32,180</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200 text-center">
          <p className="text-xs text-blue-400">
            This month&#39;s revenue leaders
          </p>
        </div>
      </div>
    </div>
  );
}
`;
export default LeaderboardStatsCard;
