const SocialCommentCard = `import { Button } from "./Button";
export default function SocialCommentCard() {
  return (
    <div className="max-w-md border rounded-lg shadow-md ">
      <div className="p-4">
        <div className="flex space-x-3">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
            TC
          </div>
          <div className="flex-1">
            <div className="flex items-center mb-1">
              <h4 className="font-semibold text-sm">Tom Chen</h4>
              <span className="text-gray-500 text-xs ml-2">15 min ago</span>
            </div>
            <p className="text-gray-400 text-sm mb-2">
              This is exactly what I was looking for! Thanks for sharing this
              amazing resource. The examples are really helpful.
            </p>
            <div className="flex items-center space-x-4 text-gray-500">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center space-x-1 hover:text-red-500 text-xs h-auto p-0"
              >
                <span>❤️</span>
                <span>12</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-xs hover:text-blue-500 h-auto p-0"
              >
                Reply
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-xs hover:text-gray-700 h-auto p-0"
              >
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
`;
export default SocialCommentCard;
