const ProductTimerCard = `import { Button } from "./Button";
export default function ProductTimerCard() {
  return (
    <div className="max-w-sm overflow-hidden border rounded-lg shadow-lg">
      <div className="bg-red-500 text-white text-center py-2">
        <div className="text-sm font-medium">Flash Sale Ends In:</div>
        <div className="text-lg font-bold">02:15:43</div>
      </div>
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Headset Image</span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">Gaming Headset</h3>
        <p className="text-gray-600 text-sm mb-3">
          Professional gaming headset with 7.1 surround sound
        </p>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg line-through text-gray-400">$149.99</span>
            <span className="text-2xl font-bold text-red-600 ml-2">$89.99</span>
          </div>
          <Button className="bg-red-500 hover:bg-red-600">Buy Now</Button>
        </div>
      </div>
    </div>
  );
}
`;
export default ProductTimerCard;
