import { cn } from "../utils/styles";
import type { FC, ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
    maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
    className?: string;
}

export const Container: FC<ContainerProps> = ({
    children,
    maxWidth = "xl",
    className,
}) => {
    const maxWidthClasses = {
        sm: "max-w-screen-sm",
        md: "max-w-screen-md",
        lg: "max-w-screen-lg",
        xl: "max-w-screen-xl",
        "2xl": "max-w-screen-2xl",
        full: "max-w-full",
    };

    return (
        <div className={cn("container mx-auto px-4 py-8", maxWidthClasses[maxWidth], className)}>
            {children}
        </div>
    )
}