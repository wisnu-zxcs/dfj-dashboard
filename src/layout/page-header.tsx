import { APP_CONFIG } from "../config/app";
import { cn } from "../utils/styles";
import type { FC } from "react";

interface PageHeaderProps {
    title?: string;
    subtitle?: string;
    profession?: string;
    className?: string;
}

export const PageHeader: FC<PageHeaderProps> = ({
    title = APP_CONFIG.title,
    subtitle = APP_CONFIG.subtitle,
    profession = APP_CONFIG.profession,
    className,
}) => (
    <header className={cn("text-center mb-12", className)}>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {title}
        </h1>
        <p className="text-lg text-gray-600 mb-2">
            {subtitle}
        </p>
        <p className="text-md text-gray-500">
            Profesi yang Dipilih:{" "}
            <span className="font-semibold text-blue-600">{profession}</span>
        </p>
    </header>
)