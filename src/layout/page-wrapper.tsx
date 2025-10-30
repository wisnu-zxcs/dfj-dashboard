import { cn } from "../utils/styles";
import type { FC, ReactNode } from "react";

interface PageWrapperProps {
    children: ReactNode;
    className?: string;
}

export const PageWrapper: FC<PageWrapperProps> = ({
    children,
    className
}) => (
    <div className={cn(
        "min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50",
        className
    )}>
        {children}
    </div>
)