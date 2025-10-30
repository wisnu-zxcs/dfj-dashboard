import { cn } from "../../utils/styles";
import type { FC } from "react";

interface ListProps {
    items: string[];
    ordered?: boolean;
    icon?: "check" | "bullet" | "number";
    iconColor?: string;
    className?: string;
}

export const List: FC<ListProps> = ({
    items,
    ordered = false,
    icon = "bullet",
    iconColor = "text-green-500",
    className,
}) => {
    const IconMap = {
        check: "✓",
        bullet: "•",
        number: null,
    };

    const ListTag = ordered ? "ol" : "ul";

    return (
        <ListTag className={cn("space-y-2", className)}>
            {items.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                    {icon === "number" ? (
                        <span className="font-semibold min-w-5">{index + 1}.</span>
                    ) : (
                        <span className={cn("mt-0.5", iconColor)}>{IconMap[icon]}</span>
                    )}
                    <span>{item}</span>
                </li>
            ))}
        </ListTag>
    )
}