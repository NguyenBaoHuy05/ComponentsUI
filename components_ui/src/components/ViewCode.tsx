"use client";
import React, { useEffect, useState } from "react";
import { X, Copy } from "lucide-react";

const loadComponent = async (componentName: string) => {
  try {
    const importedModule = await import(`@/lib/${componentName}`);
    // You may want to stringify the code or get the source code differently
    return importedModule.default?.toString() || "Component loaded";
  } catch (error) {
    console.error("Cannot import:", error);
    return "Error loading component";
  }
};

export default function ViewCode({
  componentName,
  onClose,
}: {
  componentName: string;
  onClose: () => void;
}) {
  const [code, setCode] = useState<string>("Loading...");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    loadComponent(componentName).then(setCode);
  }, [componentName]);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(true);
      })
      .catch((err) => {
        console.error("Failed to copy code: ", err);
      });
  };

  return (
    <div className="absolute inset-0 bg-black opacity-90 z-0 flex items-center justify-center">
      <div className="relative border-2 border-dashed border-gray-300 rounded-md p-4 z-10 w-[800px] h-[500px] bg-white">
        <pre className="text-sm text-white bg-black p-4 rounded-md overflow-auto ">
          <code>{code}</code>
        </pre>
        <div className="absolute top-5 right-5 flex space-x-2">
          <button
            className="text-white hover:text-gray-400 hover:cursor-pointer"
            onClick={handleCopy}
          >
            {copied ? <span>Copied!</span> : <Copy />}
          </button>
          <button
            onClick={onClose}
            className=" text-white hover:text-gray-400 hover:cursor-pointer "
          >
            <X size={25} />
          </button>
        </div>
      </div>
    </div>
  );
}
