export default function CircularProgressStats() {
  return (
    <div className="max-w-sm border border-blue-400 rounded-lg shadow-md p-6 ">
      <div className="p-6 text-center">
        <h3 className="text-lg font-semibold text-gray-200 mb-4">
          Project Completion
        </h3>
        <div className="relative w-32 h-32 mx-auto mb-4">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-gray-200"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-blue-500"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeDasharray="75, 100"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-blue-500">75%</span>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-gray-600">15 of 20 tasks completed</p>
          <p className="text-sm text-blue-600 font-medium">5 tasks remaining</p>
        </div>
      </div>
    </div>
  );
}
