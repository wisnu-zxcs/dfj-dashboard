import { cn } from "../../utils/styles";
import type { LucideIcon } from "lucide-react";
import type { FC, ReactNode } from "react";

interface EmptyStateProps {
    icon?: LucideIcon;
    title: string;
    description?: string;
    action?: ReactNode;
    className?: string;
}

export const EmptyState: FC<EmptyStateProps> = ({
    icon: Icon,
    title,
    description,
    action,
    className,
}) => (
    <div className={cn("text-center py-12", className)}>
        {Icon && (
            <div className="flex justify-center mb-4">
                <Icon className="text-gray-400" size={48} />
            </div>
        )}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        {description && <p className="text-gray-600 mb-6 max-w-md mx-auto">{description}</p>}
        {action && <div>{action}</div>}
    </div>
)