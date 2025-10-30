import { cn } from "../../utils/styles";
import type { FC, ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    padding?: "none" | "sm" | "md" | "lg";
    shadow?: boolean;
    border?: boolean;
    hoverable?: boolean;
}

export const Card: FC<CardProps> = ({
    children,
    className,
    padding = "md",
    shadow = true,
    border = true,
    hoverable = false,
}) => {
    const paddingStyles = {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
    };

    return (
        <div
            className={cn(
                "bg-white rounded-lg",
                paddingStyles[padding],
                shadow && "shadow-lg",
                border && "border border-gray-200",
                hoverable && "hover:shadow-xl transition-shadow duration-300",
                className
            )}
        >
            {children}
        </div>
    );
};