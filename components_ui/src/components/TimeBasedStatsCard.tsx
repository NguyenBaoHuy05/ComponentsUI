import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./select";
export default function TimeBasedStatsCard() {
  return (
    <div className="max-w-sm border border-gray-200 rounded-lg shadow-md">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4 text-gray-700">
          <h3 className="text-lg font-semibold text-gray-100">Active Users</h3>
          <Select defaultValue="7days">
            <SelectTrigger className="min-w-[120px] text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-4">
          <p className="text-3xl font-bold text-cyan-500">8,549</p>
          <p className="text-sm text-gray-600">Average daily active users</p>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-lg font-semibold text-gray-200">9.2K</p>
            <p className="text-xs text-gray-500">Peak</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-red-500">7.8K</p>
            <p className="text-xs text-gray-500">Low</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-green-600">+12%</p>
            <p className="text-xs text-gray-500">Growth</p>
          </div>
        </div>
      </div>
    </div>
  );
}
