const SocialPollCard = `import { ProgressBar } from "./ProgressBar";
export default function SocialPollCard() {
  return (
    <div className="max-w-md border rounded-lg shadow-md">
      <div className="p-4">
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
            LM
          </div>
          <div className="ml-3">
            <h4 className="font-semibold">Lisa Martinez</h4>
            <p className="text-sm text-gray-500">1 hour ago</p>
          </div>
        </div>
        <p className="text-cyan-500 mb-4">
          Which design do you prefer for our new landing page?
        </p>
        <div className="space-y-3 mb-4">
          <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-800 cursor-pointer">
            <div className="flex justify-between items-center">
              <span className="text-sm">Modern & Minimalist</span>
              <span className="text-sm font-medium text-blue-600">67%</span>
            </div>
            <ProgressBar value={67} className="h-2 mt-2" />
          </div>
          <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-800 cursor-pointer">
            <div className="flex justify-between items-center">
              <span className="text-sm">Bold & Colorful</span>
              <span className="text-sm font-medium text-purple-600">33%</span>
            </div>
            <ProgressBar value={33} className="h-2 mt-2" />
          </div>
        </div>
        <p className="text-xs text-gray-500 text-center">
          124 votes • Poll ends in 2 days
        </p>
      </div>
    </div>
  );
}

`;
export default SocialPollCard;
