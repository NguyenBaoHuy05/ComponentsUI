import { Button } from "./Button";
export default function ProductQuantityCard() {
  return (
    <div className="max-w-sm overflow-hidden border rounded-lg shadow-lg">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Coffee Image</span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">Premium Coffee Beans</h3>
        <p className="text-gray-600 text-sm mb-3">
          Freshly roasted arabica coffee beans
        </p>
        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold text-green-600">$24.99</span>
          <div className="flex items-center border border-gray-300 rounded">
            <Button variant="ghost" className="px-3 py-1 h-auto">
              -
            </Button>
            <span className="px-3 py-1 border-l border-r border-gray-300">
              1
            </span>
            <Button variant="ghost" className="px-3 py-1 h-auto">
              +
            </Button>
          </div>
        </div>
        <Button className="w-full">Add to Cart</Button>
      </div>
    </div>
  );
}
