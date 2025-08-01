export default function ProfileCoverCard() {
  return (
    <div className="max-w-sm overflow-hidden border-pink-300 border-2 rounded-lg shadow-lg">
      <div className="h-24 bg-gradient-to-r from-purple-400 to-pink-400"></div>
      <div className="px-6 pb-6">
        <div className="flex justify-center -mt-8 mb-4">
          <div className="w-16 h-16 bg-white rounded-full p-1">
            <div className="w-full h-full bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              LG
            </div>
          </div>
        </div>
        <div className="text-center">
          <h3 className="font-bold text-lg">Lisa Garcia</h3>
          <p className="text-gray-600 mb-2">Marketing Director</p>
          <p className="text-sm text-gray-500">
            Passionate about digital marketing and growth strategies
          </p>
        </div>
      </div>
    </div>
  );
}
