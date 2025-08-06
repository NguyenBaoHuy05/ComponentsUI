import { Button } from "./Button";

export default function NotificationCard() {
  return (
    <div className="max-w-md bg-blue-50 border-l-4 border-blue-400 rounded-lg">
      <div className="p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="text-blue-400 text-xl">ℹ️</span>
          </div>
          <div className="ml-3">
            <h4 className="font-semibold text-blue-800">
              New Update Available
            </h4>
            <p className="text-blue-700 text-sm mt-1">
              Version 2.1.0 is now available with new features and bug fixes.
            </p>
            <div className="mt-2">
              <Button
                variant="link"
                className="text-blue-600 text-sm font-medium hover:text-blue-800 p-0"
              >
                Update Now
              </Button>
              <Button
                variant="link"
                className="text-gray-600 text-sm font-medium ml-4 hover:text-gray-800 p-0"
              >
                Dismiss
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
