const ProductStockCard = `import { Button } from "./Button";
import { ProgressBar } from "./ProgressBar";
export default function ProductStockCard() {
  return (
    <div className="max-w-sm overflow-hidden border border-red-500 rounded-lg shadow-lg ">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Tablet Image</span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">10-inch Tablet</h3>
        <p className="text-gray-600 text-sm mb-3">
          High-resolution display with long battery life
        </p>
        <div className="mb-3">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-600">Stock Level</span>
            <span className="text-sm text-orange-600">Only 3 left!</span>
          </div>
          <ProgressBar value={15} />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-green-600">$299.99</span>
          <Button className="bg-red-500 hover:bg-red-600">Buy Now</Button>
        </div>
      </div>
    </div>
  );
}

`;
export default ProductStockCard;
