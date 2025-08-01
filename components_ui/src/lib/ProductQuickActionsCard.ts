const ProductQuickActionsCard = `import { Button } from "./Button";
export default function ProductQuickActionsCard() {
  return (
    <div className="max-w-sm overflow-hidden relative group">
      <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex flex-col space-y-2">
          <Button className="flex justify-center items-center w-8 h-8 p-0 bg-white rounded-full shadow-md">
            ❤️
          </Button>
          <Button className="flex justify-center items-center w-8 h-8 p-0 bg-white rounded-full shadow-md">
            ⚖️
          </Button>
          <Button className="flex justify-center items-center w-8 h-8 p-0 bg-white rounded-full shadow-md">
            👁️
          </Button>
        </div>
      </div>
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Sneakers Image</span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">Running Sneakers</h3>
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400 text-sm">★★★★★</div>
          <span className="text-sm text-gray-600 ml-2">(4.8)</span>
        </div>
        <p className="text-gray-600 text-sm mb-3">
          Lightweight and comfortable running shoes
        </p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-green-600">$89.99</span>
          <Button>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}
`;
export default ProductQuickActionsCard;
