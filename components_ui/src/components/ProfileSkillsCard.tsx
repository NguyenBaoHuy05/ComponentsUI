import { Badge } from "./Badge";
export default function ProfileSkillsCard() {
  return (
    <div className="max-w-sm border border-blue-400 rounded-lg shadow-sm">
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
            DK
          </div>
          <div>
            <h3 className="font-semibold text-lg">David Kim</h3>
            <p className="text-gray-600">Full Stack Developer</p>
          </div>
        </div>
        <div className="mb-3">
          <h4 className="font-medium text-sm text-gray-500 mb-2">Skills</h4>
          <div className="flex flex-wrap gap-1">
            <Badge color="blue">React</Badge>
            <Badge color="green">Node.js</Badge>
            <Badge color="purple">TypeScript</Badge>
            <Badge color="yellow">AWS</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
