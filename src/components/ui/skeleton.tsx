import { cn } from "../../utils/styles";
import type { FC } from "react";

interface SkeletonProps {
    width?: string;
    height?: string;
    className?: string;
    variant?: "text" | "circular" | "rectangular";
}

export const Skeleton: FC<SkeletonProps> = ({
    width = "100%",
    height = "1rem",
    className,
    variant = "rectangular",
}) => {
    const variantStyles = {
        text: "rounded",
        circular: "rounded-full",
        rectangular: "rounded-lg",
    };

    return (
        <div
            className={cn(
                "bg-gray-200 animate-pulse",
                variantStyles[variant],
                className
            )}
            style={{ width, height }}
        />
    );
};