import { cn } from "../../utils/styles";
import { useState, type FC, type ReactNode } from "react";

interface TooltipProps {
    content: string;
    children: ReactNode;
    position?: "top" | "bottom" | "left" | "right";
}

export const Tooltip: FC<TooltipProps> = ({
    content,
    children,
    position = "top",
}) => {
    const [isVisible, setIsVisible] = useState(false);

    const positionStyles = {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2",
    };

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            {isVisible && (
                <div
                    className={cn(
                        "absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg whitespace-nowrap",
                        positionStyles[position]
                    )}
                >
                    {content}
                </div>
            )}
        </div>
    )
}