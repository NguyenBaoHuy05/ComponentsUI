const ProfileContactCard = `import { Button } from "./Button";
export default function ProfileContactCard() {
  return (
    <div className="max-w-sm border border-cyan-400 rounded-lg shadow-sm">
      <div className="p-6">
        <div className="text-center mb-4">
          <div className="w-20 h-20 bg-cyan-500 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-2xl">
            TC
          </div>
          <h3 className="font-bold text-xl">Tom Chen</h3>
          <p className="text-gray-600">Business Analyst</p>
        </div>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <span className="mr-2">📧</span>
            <span>tom.chen@company.com</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="mr-2">📱</span>
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="mr-2">📍</span>
            <span>New York, NY</span>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button className="flex-1">Message</Button>
          <Button className="flex-1 bg-transparent border border-cyan-400 hover:bg-cyan-400">
            Call
          </Button>
        </div>
      </div>
    </div>
  );
}
`;
export default ProfileContactCard;
