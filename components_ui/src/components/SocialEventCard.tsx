import { Button } from "./Button";
export default function SocialEventCard() {
  return (
    <div className="max-w-sm overflow-hidden border rounded-lg shadow-lg border-purple-300 ">
      <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
        <span className="text-white text-lg font-bold">🎉 Event Cover</span>
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">
            DT
          </div>
          <span className="text-sm font-medium">Design Team</span>
        </div>
        <h3 className="font-bold text-lg mb-2">UI/UX Workshop 2024</h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-400">
            <span className="mr-2">📅</span>
            <span>March 25, 2024 at 2:00 PM</span>
          </div>
          <div className="flex items-center text-sm text-gray-400">
            <span className="mr-2">📍</span>
            <span>Design Studio, Downtown</span>
          </div>
          <div className="flex items-center text-sm text-gray-400">
            <span className="mr-2">👥</span>
            <span>23 people interested</span>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button className="flex-1 bg-indigo-500 hover:bg-indigo-600">
            Interested
          </Button>
          <Button variant="outline" className="flex-1 bg-transparent">
            Share
          </Button>
        </div>
      </div>
    </div>
  );
}
