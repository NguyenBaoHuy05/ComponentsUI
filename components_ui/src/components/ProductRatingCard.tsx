export default function ProductRatingCard() {
  return (
    <div className="max-w-sm overflow-hidden border border-gray-300 rounded-lg shadow-sm">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Product Image</span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">Smart Watch</h3>
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">★★★★☆</div>
          <span className="text-sm text-gray-600 ml-2">(4.2) 128 reviews</span>
        </div>
        <p className="text-gray-600 text-sm mb-3">
          Advanced fitness tracking and health monitoring
        </p>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg line-through text-gray-400">$299.99</span>
            <span className="text-2xl font-bold text-red-600 ml-2">
              $249.99
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
