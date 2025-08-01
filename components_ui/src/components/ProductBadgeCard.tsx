import { Badge } from "./Badge";
import { Button } from "./Button";
export default function ProductBadgeCard() {
  return (
    <div className="max-w-sm overflow-hidden relative border border-green-300 rounded-lg shadow-lg">
      <div className="absolute top-2 left-2 z-5">
        <Badge color="red">20% OFF</Badge>
      </div>
      <div className="absolute top-2 right-2 z-5">
        <Badge color="green">New</Badge>
      </div>
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Product Image</span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">Gaming Laptop</h3>
        <p className="text-gray-600 text-sm mb-3">
          High-performance gaming laptop with RTX graphics
        </p>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg line-through text-gray-400">$1,299</span>
            <span className="text-2xl font-bold text-green-600 ml-2">
              $1,039
            </span>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600">Buy Now</Button>
        </div>
      </div>
    </div>
  );
}
