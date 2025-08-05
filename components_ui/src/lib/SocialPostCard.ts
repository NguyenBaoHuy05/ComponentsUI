const SocialPostCard = `import { Button } from "./Button";
export default function SocialPostCard() {
  return (
    <div className="max-w-md border rounded-lg shadow-lg ">
      <div className="p-4">
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">
            JD
          </div>
          <div className="ml-3">
            <h4 className="font-semibold">Jane Doe</h4>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </div>
        </div>
        <p className="text-gray-500 mb-3">
          Just finished an amazing project! The team worked incredibly hard and
          the results exceeded our expectations. 🚀
        </p>
        <div className="flex items-center justify-between text-gray-500">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center space-x-1 hover:text-red-500 "
          >
            <span>❤️</span>
            <span className="text-sm ">24</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center space-x-1 hover:text-blue-500"
          >
            <span>💬</span>
            <span className="text-sm">8</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center space-x-1 hover:text-green-500"
          >
            <span>🔄</span>
            <span className="text-sm">3</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
`;
export default SocialPostCard;
