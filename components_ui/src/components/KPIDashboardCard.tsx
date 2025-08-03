import { ProgressBar } from "./ProgressBar";
export default function KPIDashboardCard() {
  return (
    <div className="max-w-sm border border-gray-200 rounded-lg shadow-md bg-gray-950 text-white">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-cyan-500">
            Conversion Rate
          </h3>
          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
            <span className="text-orange-600 text-sm">🎯</span>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold text-orange-500">4.2%</span>
            <span className="text-sm text-gray-500 ml-2">actual</span>
          </div>
          <div className="flex items-baseline mt-1">
            <span className="text-lg text-gray-200">5.0%</span>
            <span className="text-sm text-gray-500 ml-2">target</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Progress to target</span>
            <span className="text-gray-900 font-medium">84%</span>
          </div>
          <ProgressBar value={84} className="h-2" />
          <p className="text-sm text-orange-600">0.8% below target</p>
        </div>
      </div>
    </div>
  );
}
