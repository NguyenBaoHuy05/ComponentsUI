const ProductSubscriptionCard = `import { Button } from "./Button";
import { Badge } from "./Badge";
export default function ProductSubscriptionCard() {
  return (
    <div className="max-w-sm overflow-hidden border border-orange-300 rounded-lg shadow-lg">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Meal Kit Image</span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">Weekly Meal Kit</h3>
        <p className="text-gray-600 text-sm mb-3">
          Fresh ingredients and recipes delivered weekly
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-blue-800">
              Subscription Benefits:
            </span>
            <Badge className="bg-blue-500">Save 15%</Badge>
          </div>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Free delivery</li>
            <li>• Cancel anytime</li>
            <li>• Skip weeks when needed</li>
          </ul>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-green-600">$49.99</span>
            <span className="text-sm text-gray-500">/week</span>
          </div>
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  );
}
`;
export default ProductSubscriptionCard;
