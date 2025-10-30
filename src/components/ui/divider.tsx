import { cn } from "../../utils/styles";
import type { FC } from "react";

interface DividerProps {
    orientation?: "horizontal" | "vertical";
    className?: string;
    label?: string;
}

export const Divider: FC<DividerProps> = ({
    orientation = "horizontal",
    className,
    label,
}) => {
    if (orientation === "vertical") {
        return <div className={cn("w-px bg-gray-200", className)} />;
    }

    if (label) {
        return (
            <div className={cn("flex items-center gap-4 my-4", className)}>
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-sm text-gray-500 font-medium">{label}</span>
                <div className="flex-1 h-px bg-gray-200" />
            </div>
        );
    }

    return <div className={cn("h-px bg-gray-200 my-4", className)} />;
}