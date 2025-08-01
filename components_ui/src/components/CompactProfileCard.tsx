export default function CompactProfileCard() {
  return (
    <div className="max-w-sm border-2 rounded-2xl shadow-lg ">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
              RB
            </div>
            <div>
              <h4 className="font-semibold">Robert Brown</h4>
              <p className="text-sm text-gray-600">Designer</p>
            </div>
          </div>
          <button className="bg-blue-500 text-white rounded-lg text-[12px] px-2 py-1">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}
