import { Badge } from "./Badge";

export default function BlogCard() {
  return (
    <div className="max-w-sm overflow-hidden border rounded-lg shadow-lg">
      <div className="h-48 bg-gray-300 flex items-center justify-center">
        <span className="text-gray-600">Blog Image</span>
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <Badge color="blue">Technology</Badge>
          <span className="text-gray-500 text-sm ml-2">Mar 15, 2024</span>
        </div>
        <h3 className="font-bold text-lg mb-2">
          The Future of Web Development
        </h3>
        <p className="text-gray-500 text-sm mb-3">
          Exploring the latest trends and technologies shaping the future of web
          development...
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm">
              AB
            </div>
            <span className="text-sm text-gray-700 ml-2">Alex Brown</span>
          </div>
          <span className="text-sm text-cyan-500">5 min read</span>
        </div>
      </div>
    </div>
  );
}
