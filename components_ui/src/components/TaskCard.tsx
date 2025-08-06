import { Badge } from "./Badge";
import { Checkbox } from "./Checkbox";

export default function TaskCard() {
  return (
    <div className="max-w-md border-l-4 border-green-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Checkbox className="mr-3" />
            <div>
              <h4 className="font-semibold text-black">
                Complete project proposal
              </h4>
              <p className="text-sm text-gray-600">Due: Tomorrow, 5:00 PM</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge color="yellow" className="bg-yellow-100 text-yellow-800">
              High Priority
            </Badge>
            <button className="text-gray-400 hover:text-gray-600">⋮</button>
          </div>
        </div>
      </div>
    </div>
  );
}
