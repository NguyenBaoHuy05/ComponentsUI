const ProductReviewsCard = `import { Button } from "./Button";
export default function ProductReviewsCard() {
  return (
    <div className="max-w-sm overflow-hidden border rounded-lg shadow-lg">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Backpack Image</span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">Travel Backpack</h3>
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">★★★★★</div>
          <span className="text-sm text-gray-600 ml-2">(4.9) 234 reviews</span>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 mb-3">
          <p className="text-sm text-gray-700 italic">
            &#34;Perfect for my hiking trips! Great quality and very
            comfortable.&#34;
          </p>
          <p className="text-xs text-gray-500 mt-1">- Sarah M.</p>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-green-600">$79.99</span>
          <Button>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}

`;
export default ProductReviewsCard;
