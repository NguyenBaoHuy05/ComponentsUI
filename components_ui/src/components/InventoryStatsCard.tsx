export default function InventoryStatsCard() {
  return (
    <div className="max-w-sm border border-gray-200 rounded-lg shadow-md bg-white">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Inventory Status
          </h3>
          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
            <span className="text-orange-600 text-sm">📦</span>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-3xl font-bold text-gray-900">1,247</p>
          <p className="text-sm text-gray-600">Total items in stock</p>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">In Stock</span>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-gray-900">
                892 items
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Low Stock</span>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-gray-900">
                234 items
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Out of Stock</span>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-gray-900">
                121 items
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Reorder needed</span>
            <span className="text-red-600 font-medium">45 items</span>
          </div>
        </div>
      </div>
    </div>
  );
}
