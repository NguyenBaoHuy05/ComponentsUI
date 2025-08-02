import { Button } from "./Button";
export default function ProductShippingCard() {
  return (
    <div className="max-w-sm overflow-hidden border border-gray-200 rounded-lg shadow-md ">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Book Image</span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">Programming Guide</h3>
        <p className="text-gray-600 text-sm mb-3">
          Complete guide to modern web development
        </p>
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-3">
          <div className="flex items-center text-sm text-green-700">
            <span className="mr-2">🚚</span>
            <span className="font-medium">
              Free shipping on orders over $25
            </span>
          </div>
          <div className="flex items-center text-sm text-green-600 mt-1">
            <span className="mr-2">📦</span>
            <span>Arrives by March 15</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-green-600">$34.99</span>
          <Button>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}
