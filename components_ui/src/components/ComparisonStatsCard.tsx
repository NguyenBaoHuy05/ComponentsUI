import { Badge } from "./Badge";
export default function ComparisonStatsCard() {
  return (
    <div className="max-w-sm border border-gray-200 rounded-lg shadow-md ">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-cyan-600">
            Sales Performance
          </h3>
          <span className="text-2xl">📈</span>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">This Month</p>
              <p className="text-2xl font-bold text-green-500">$52,340</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Last Month</p>
              <p className="text-xl font-semibold text-gray-500">$48,120</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Badge className="bg-green-100 text-green-800">
              ↗ +8.8% increase
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
