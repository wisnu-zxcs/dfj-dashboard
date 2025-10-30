import type { ColorScheme } from "../../config/color-schemes";
import { cn, getColorClasses } from "../../utils/styles";
import type { FC, ReactNode } from "react";

interface BadgeProps {
    children: ReactNode;
    color?: ColorScheme;
    size?: "sm" | "md" | "lg";
    rounded?: boolean;
    className?: string;
}

export const Badge: FC<BadgeProps> = ({
    children,
    color = "primary",
    size = "md",
    rounded = true,
    className,
}) => {
    const colors = getColorClasses(color);

    const sizeStyles = {
        sm: "px-2 py-0.5 text-xs",
        md: "px-3 py-1 text-sm",
        lg: "px-4 py-1.5 text-base",
    };

    return (
        <span
            className={cn(
                "inline-flex items-center font-semibold",
                colors.bg,
                "text-white",
                rounded ? "rounded-full" : "rounded",
                sizeStyles[size],
                className
            )}
        >
            {children}
        </span>
    );
};