import { FileCode2 } from "lucide-react";
export default function Components({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col border-1 border-gray-800 rounded-md h-fit mb-4">
      <div className="flex border-b border-gray-800 w-full p-2">
        <span className="hover:cursor-pointer bg-gray-900 hover:bg-gray-800 px-1 rounded-md">
          Copy
        </span>
        <span className="ml-auto hover:cursor-pointer">
          <FileCode2 />
        </span>
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
}
