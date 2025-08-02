const ProgressStatsCard = `import { ProgressBar } from "./ProgressBar";
export default function ProgressStatsCard() {
  return (
    <div className="max-w-sm border border-gray-200 rounded-lg shadow-md ">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-300">
              Goal Progress
            </h3>
            <p className="text-sm text-gray-600">Monthly target</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-blue-600">78%</p>
            <p className="text-sm text-gray-500">Complete</p>
          </div>
        </div>
        <div className="mb-2">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>$78,000</span>
            <span>$100,000</span>
          </div>
          <ProgressBar value={78} className="h-3" />
        </div>
      </div>
    </div>
  );
}
`;
export default ProgressStatsCard;
