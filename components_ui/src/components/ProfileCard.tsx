export default function ProfileCard() {
  return (
    <div className="max-w-sm border-blue-500 border-2 rounded-2xl">
      <div className="p-3">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
            JD
          </div>
          <div>
            <h3 className="font-semibold text-lg">John Doe</h3>
            <p className="text-gray-600">Software Engineer</p>
            <p className="text-sm text-gray-500">San Francisco, CA</p>
          </div>
        </div>
      </div>
    </div>
  );
}
