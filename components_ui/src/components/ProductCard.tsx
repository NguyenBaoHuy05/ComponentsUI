import { Button } from "./Button";
export default function ProductCard() {
  return (
    <div className="max-w-sm overflow-hidden border border-gray-300 rounded-lg shadow-sm">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Product Image</span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">Wireless Headphones</h3>
        <p className="text-gray-600 text-sm mb-3">
          Premium quality wireless headphones with noise cancellation
        </p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-green-600">$99.99</span>
          <Button>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}
