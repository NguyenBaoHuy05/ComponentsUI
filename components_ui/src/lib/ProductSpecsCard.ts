const ProductSpecsCard = `import { Button } from "./Button";
export default function ProductSpecsCard() {
  return (
    <div className="max-w-sm overflow-hidden border rounded-lg shadow-lg ">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Smartphone Image</span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">Smartphone Pro</h3>
        <div className="mb-3">
          <h4 className="font-medium text-sm text-gray-700 mb-2">Key Specs:</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Display:</span>
              <span className="font-medium">6.1</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Storage:</span>
              <span className="font-medium">128GB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Camera:</span>
              <span className="font-medium">48MP</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Battery:</span>
              <span className="font-medium">4000mAh</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-green-600">$699</span>
          <Button>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}
`;
export default ProductSpecsCard;
