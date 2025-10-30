import { cn } from "../../utils/styles";
import type { LucideIcon } from "lucide-react";
import type { FC, ReactNode } from "react";

interface SectionHeaderProps {
    title: string;
    icon?: LucideIcon;
    subtitle?: string;
    actions?: ReactNode;
    className?: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({
    title,
    icon: Icon,
    subtitle,
    actions,
    className,
}) => (
    <div className={cn("flex items-center justify-between mb-6", className)}>
        <div>
            <div className="flex items-center gap-3">
                {Icon && <Icon className="text-blue-600" size={24} />}
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            </div>
            {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
        </div>
        {actions && <div className="flex gap-2">{actions}</div>}
    </div>
);