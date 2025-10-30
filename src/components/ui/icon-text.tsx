import { cn } from "../../utils/styles";
import type { LucideIcon } from "lucide-react";
import type { FC } from "react";

interface IconTextProps {
    icon: LucideIcon;
    text: string;
    iconColor?: string;
    iconSize?: number;
    className?: string;
}

export const IconText: FC<IconTextProps> = ({
    icon: Icon,
    text,
    iconColor = "text-blue-500",
    iconSize = 16,
    className,
}) => (
    <div className={cn("flex items-center gap-2", className)}>
        <Icon className={iconColor} size={iconSize} />
        <span>{text}</span>
    </div>
)