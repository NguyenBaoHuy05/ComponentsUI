const SocialProfileSummary = `import { Button } from "./Button";
export default function SocialProfileSummary() {
  return (
    <div className="max-w-sm border rounded-lg shadow-lg ">
      <div className="p-6">
        <div className="text-center mb-4">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-2xl">
            MK
          </div>
          <h3 className="font-bold text-xl">@mikekelly</h3>
          <p className="text-gray-600">Digital Creator & Photographer</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="font-bold text-lg">1.2K</div>
            <div className="text-sm text-gray-500">Posts</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg">45.8K</div>
            <div className="text-sm text-gray-500">Followers</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg">892</div>
            <div className="text-sm text-gray-500">Following</div>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button className="flex-1">Follow</Button>
          <Button variant="outline" className="flex-1 bg-transparent 0">
            Message
          </Button>
        </div>
      </div>
    </div>
  );
}
`;
export default SocialProfileSummary;
