import type { FC, ReactNode } from "react";

export interface SectionCardProps {
    title: string;
    color?: "indigo" | "yellow" | "blue" | "green" | "red";
    children: ReactNode;
    className?: string;
}

export const SectionCard: FC<SectionCardProps> = ({
    title,
    color = "indigo",
    children,
    className = "",
}) => {
    const colorMap = {
        indigo: {
            bg: "bg-indigo-50",
            border: "border-indigo-200",
            title: "text-indigo-700",
        },
        yellow: {
            bg: "bg-yellow-50",
            border: "border-yellow-200",
            title: "text-yellow-700",
        },
        blue: {
            bg: "bg-blue-50",
            border: "border-blue-200",
            title: "text-blue-700",
        },
        green: {
            bg: "bg-green-50",
            border: "border-green-200",
            title: "text-green-700",
        },
        red: {
            bg: "bg-red-50",
            border: "border-red-200",
            title: "text-red-700",
        },
    } as const;

    const theme = colorMap[color];

    return (
        <div
            className={`${theme.bg} ${theme.border} border rounded-lg p-4 ${className}`}
        >
            <h3 className={`font-bold mb-2 ${theme.title}`}>{title}</h3>
            <div className="text-sm text-gray-700">{children}</div>
        </div>
    )
}