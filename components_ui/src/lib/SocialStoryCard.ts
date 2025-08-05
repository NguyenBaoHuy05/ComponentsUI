const SocialStoryCard = `export default function SocialStoryCard() {
  return (
    <div className="max-w-sm overflow-hidden border rounded-lg shadow-lg ">
      <div className="relative">
        <div className="h-64 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
          <span className="text-white text-lg font-bold">Story Content</span>
        </div>
        <div className="absolute top-4 left-4 right-4">
          <div className="flex space-x-1 mb-3">
            <div className="flex-1 h-1 bg-white/30 rounded-full">
              <div className="h-1 bg-white rounded-full w-full"></div>
            </div>
            <div className="flex-1 h-1 bg-white/30 rounded-full">
              <div className="h-1 bg-white rounded-full w-3/5"></div>
            </div>
            <div className="flex-1 h-1 bg-white/30 rounded-full"></div>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-purple-600 font-bold text-sm mr-2">
              AB
            </div>
            <span className="text-white text-sm font-medium">alexbrown</span>
            <span className="text-white/70 text-sm ml-2">5m</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-200 font-semibold">
          Behind the scenes of our latest photoshoot! ✨
        </p>
      </div>
    </div>
  );
}
`;
export default SocialStoryCard;
