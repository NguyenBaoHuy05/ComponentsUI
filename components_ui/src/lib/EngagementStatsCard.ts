const EngagementStatsCard = `// Update the import path below if Badge is in the same directory or adjust as needed
import { Badge } from "./Badge";
export default function EngagementStatsCard() {
  return (
    <div className="max-w-sm border border-gray-200 rounded-lg shadow-md bg-white">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mr-3">
            <span className="text-pink-600 text-lg">💬</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">
            Engagement Rate
          </h3>
        </div>
        <div className="mb-4">
          <p className="text-3xl font-bold text-gray-900">6.8%</p>
          <p className="text-sm text-gray-600">Average engagement rate</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <p className="text-xl font-bold text-pink-600">2.4K</p>
            <p className="text-xs text-gray-500">Likes</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-blue-600">456</p>
            <p className="text-xs text-gray-500">Comments</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-green-600">189</p>
            <p className="text-xs text-gray-500">Shares</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-purple-600">34K</p>
            <p className="text-xs text-gray-500">Reach</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Badge className="bg-green-100 text-green-800">
            ↗ +2.1% this week
          </Badge>
        </div>
      </div>
    </div>
  );
}
`;
export default EngagementStatsCard;
