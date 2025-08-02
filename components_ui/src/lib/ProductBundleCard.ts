const ProductBundleCard = `import { Button } from "./Button";
export default function ProductBundleCard() {
  return (
    <div className="max-w-sm overflow-hidden border border-purple-500 rounded-lg shadow-md">
      <div className="bg-purple-500 text-white text-center py-2 text-sm font-medium">
        Bundle Deal - Save 25%
      </div>
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Camera Kit Image</span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">Camera + Lens Bundle</h3>
        <p className="text-gray-600 text-sm mb-3">
          Professional camera with 50mm lens included
        </p>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mb-3">
          <p className="text-sm font-medium text-purple-800 mb-1">
            This bundle includes:
          </p>
          <ul className="text-sm text-purple-700 space-y-1">
            <li>• Digital Camera ($899)</li>
            <li>• 50mm Lens ($299)</li>
            <li>• Camera Bag ($49)</li>
          </ul>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg line-through text-gray-400">$1,247</span>
            <span className="text-2xl font-bold text-purple-600 ml-2">
              $935
            </span>
          </div>
          <Button className="bg-purple-500 hover:bg-purple-600">
            Buy Bundle
          </Button>
        </div>
      </div>
    </div>
  );
}
`;
export default ProductBundleCard;
