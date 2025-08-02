const ProductComparisonCard = `import { Button } from "./Button";
export default function ProductComparisonCard() {
  return (
    <div className="max-w-sm overflow-hidden border border-cyan-500 rounded-lg shadow-lg">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Software Image</span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">Design Software Pro</h3>
        <p className="text-gray-600 text-sm mb-3">
          Professional design tools for creatives
        </p>
        <div className="mb-3">
          <h4 className="font-medium text-sm text-gray-700 mb-2">
            vs Competitors:
          </h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Cloud Storage</span>
              <span className="text-green-600 font-medium">100GB vs 10GB</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Templates</span>
              <span className="text-green-600 font-medium">5000+ vs 500</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Team Members</span>
              <span className="text-green-600 font-medium">Unlimited vs 5</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-green-600">$29/mo</span>
          <Button>Start Trial</Button>
        </div>
      </div>
    </div>
  );
}
`;
export default ProductComparisonCard;
