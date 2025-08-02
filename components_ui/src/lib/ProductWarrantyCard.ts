const ProductWarrantyCard = `import { Button } from "./Button";
export default function ProductWarrantyCard() {
  return (
    <div className="max-w-sm overflow-hidden border rounded-lg shadow-lg ">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Monitor Image</span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">4K Gaming Monitor</h3>
        <p className="text-gray-600 text-sm mb-3">
          Ultra-wide 4K display with 144Hz refresh rate
        </p>
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-3">
          <div className="flex items-center mb-2">
            <span className="text-green-600 mr-2">🛡️</span>
            <span className="font-medium text-green-800">3-Year Warranty</span>
          </div>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Free repairs & replacements</li>
            <li>• 24/7 customer support</li>
            <li>• 30-day money back guarantee</li>
          </ul>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-green-600">$599</span>
          <Button variant="secondary">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}
`;
export default ProductWarrantyCard;
