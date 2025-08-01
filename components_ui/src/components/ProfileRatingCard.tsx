import { Button } from "./Button";
export default function ProfileRatingCard() {
  return (
    <div className="max-w-sm border border-pink-400 rounded-lg shadow-sm">
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
            SL
          </div>
          <div>
            <h3 className="font-semibold text-lg">Sarah Lee</h3>
            <p className="text-gray-600">Graphic Designer</p>
            <div className="flex items-center mt-1">
              <div className="flex text-yellow-400 text-sm">★★★★★</div>
              <span className="text-sm text-gray-500 ml-2">
                4.9 (127 reviews)
              </span>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Specialized in brand identity and digital design with 8+ years of
          experience.
        </p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-green-600">$85/hr</span>
          <Button>Hire Me</Button>
        </div>
      </div>
    </div>
  );
}
