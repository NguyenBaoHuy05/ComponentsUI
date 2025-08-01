const ProductVariantsCard = `import { Button } from "./Button";
export default function ProductVariantsCard() {
  return (
    <div className="max-w-sm overflow-hidden">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">T-Shirt Image</span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">Premium Cotton T-Shirt</h3>
        <p className="text-gray-600 text-sm mb-3">
          Comfortable and stylish everyday wear
        </p>
        <div className="mb-3">
          <p className="text-sm font-medium text-gray-700 mb-1">Colors:</p>
          <div className="flex space-x-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-blue-600"></div>
            <div className="w-6 h-6 bg-red-500 rounded-full border"></div>
            <div className="w-6 h-6 bg-green-500 rounded-full border"></div>
            <div className="w-6 h-6 bg-black rounded-full border"></div>
          </div>
        </div>
        <div className="mb-3">
          <p className="text-sm font-medium text-gray-700 mb-1">Sizes:</p>
          <div className="flex space-x-2">
            <span className="border border-gray-300 px-2 py-1 text-xs rounded">
              S
            </span>
            <span className="border border-gray-300 px-2 py-1 text-xs rounded bg-blue-500 text-white">
              M
            </span>
            <span className="border border-gray-300 px-2 py-1 text-xs rounded">
              L
            </span>
            <span className="border border-gray-300 px-2 py-1 text-xs rounded">
              XL
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-green-600">$29.99</span>
          <Button>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}`;
export default ProductVariantsCard;
