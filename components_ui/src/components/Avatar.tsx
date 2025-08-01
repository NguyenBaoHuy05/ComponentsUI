import React from "react";
import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 40 }) => (
  <Image
    src={src}
    alt={alt}
    width={size}
    height={size}
    className="rounded-full object-cover border border-gray-200 dark:border-gray-700"
    style={{ width: size, height: size }}
  />
);
