import { FileCode2 } from "lucide-react";
function AddSpace(word: string) {
  return word.replace(/([a-z])([A-Z])/g, "$1 $2");
}
export default function Components({
  children,
  type,
  onViewCode,
}: {
  children: React.ReactNode;
  type: string;
  onViewCode: () => void;
}) {
  return (
    <div className="flex flex-col border-1 border-gray-800 rounded-md h-fit mb-4">
      <div className="flex border-b border-gray-800 w-full p-2">
        <span className=" bg-gray-900 hover:bg-gray-800 px-1 rounded-md">
          {AddSpace(type).charAt(0).toUpperCase() + AddSpace(type).slice(1)}
        </span>
        <span
          className="ml-auto hover:cursor-pointer"
          onClick={() => {
            onViewCode();
          }}
        >
          <FileCode2 />
        </span>
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
}
