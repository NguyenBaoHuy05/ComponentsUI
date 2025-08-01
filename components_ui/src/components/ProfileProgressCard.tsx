import { ProgressBar } from "./ProgressBar";
export default function ProfileProgressCard() {
  return (
    <div className="max-w-sm border border-emerald-400 rounded-lg shadow-sm">
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
            AJ
          </div>
          <div>
            <h3 className="font-semibold text-lg">Alex Johnson</h3>
            <p className="text-gray-600">Student</p>
            <p className="text-sm text-emerald-600">Level 7</p>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Course Progress</span>
            <span className="text-gray-600">75%</span>
          </div>
          <ProgressBar value={75} />
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <div className="text-center">
            <div className="font-bold text-lg text-green-600">12</div>
            <div>Completed</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg text-green-600">4</div>
            <div>In Progress</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg text-green-600">8</div>
            <div>Certificates</div>
          </div>
        </div>
      </div>
    </div>
  );
}
