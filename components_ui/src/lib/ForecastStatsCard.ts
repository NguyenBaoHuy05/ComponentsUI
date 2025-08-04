const ForecastStatsCard = `import { ProgressBar } from "./ProgressBar";
export default function ForecastStatsCard() {
  return (
    <div className="max-w-sm border border-gray-200 rounded-lg shadow-md bg-white">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Revenue Forecast
          </h3>
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
            <span className="text-purple-600 text-sm">📈</span>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold text-gray-900">$127K</span>
            <span className="text-sm text-gray-500 ml-2">projected</span>
          </div>
          <p className="text-sm text-gray-600">Next quarter estimate</p>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Confidence Level</span>
            <span className="text-sm font-medium text-purple-600">87%</span>
          </div>
          <ProgressBar value={87} className="h-2" />
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="text-center">
              <p className="text-lg font-semibold text-green-600">$115K</p>
              <p className="text-xs text-gray-500">Best Case</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-red-600">$98K</p>
              <p className="text-xs text-gray-500">Worst Case</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
`;
export default ForecastStatsCard;
