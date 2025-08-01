export default function TeamMemberCard() {
  return (
    <div className="max-w-sm from-green-400 p-[3px] to-blue-500 bg-gradient-to-r rounded-2xl">
      <div className="w-full bg-black p-6 text-center rounded-2xl">
        <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl">
          MJ
        </div>
        <h3 className="font-bold text-xl mb-1">Mike Johnson</h3>
        <p className="text-gray-600 mb-2">Lead Developer</p>
        <p className="text-sm text-gray-500 mb-4">
          Building amazing web experiences
        </p>
        <div className="flex justify-center space-x-3">
          <button className="w-8 h-8 bg-blue-500 rounded-full p-0">in</button>
          <button className="w-8 h-8 bg-gray-800 rounded-full p-0">gh</button>
          <button className="w-8 h-8 bg-blue-400 rounded-full p-0">tw</button>
        </div>
      </div>
    </div>
  );
}
