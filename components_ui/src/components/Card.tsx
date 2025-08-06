export interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({
  children,
  className = "",
}) => <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;

export interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({
  children,
  className = "",
}) => (
  <p className={`text-gray-600 dark:text-gray-300 mb-4 ${className}`}>
    {children}
  </p>
);
import React from "react";
import Image from "next/image";

export interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div
    className={`bg-white dark:bg-gray-900 rounded-lg shadow p-6 w-full max-w-xs border border-gray-200 dark:border-gray-700 ${className}`}
  >
    {children}
  </div>
);

export interface CardHeaderProps {
  title?: React.ReactNode;
  badge?: React.ReactNode;
  image?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  badge,
  image,
}) => (
  <>
    {image && (
      <Image
        src={image}
        alt={typeof title === "string" ? title : "Card image"}
        width={400}
        height={160}
        className="w-full h-40 object-cover rounded-md mb-4"
        style={{ objectFit: "cover" }}
      />
    )}
    <div className="flex items-center justify-between mb-2">
      {title && <h3 className="text-lg font-semibold">{title}</h3>}
      {badge && <span>{badge}</span>}
    </div>
  </>
);

export interface CardContentProps {
  children?: React.ReactNode;
  description?: React.ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({
  children,
  description,
}) => (
  <>
    {description && (
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
    )}
    {children}
  </>
);

export interface CardFooterProps {
  children?: React.ReactNode;
  actions?: React.ReactNode;
  footer?: React.ReactNode;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  actions,
  footer,
}) => (
  <>
    {actions && <div className="mt-4 flex gap-2">{actions}</div>}
    {children}
    {footer && (
      <div className="mt-4 border-t pt-2 text-sm text-gray-500 dark:text-gray-400">
        {footer}
      </div>
    )}
  </>
);
