import type { FC, ReactNode } from "react";

export interface AnalysisBlockProps {
    title: string;
    children: ReactNode;
    color?: "orange" | "blue" | "purple" | "red";
}

export const AnalysisBlock: FC<AnalysisBlockProps> = ({
    title,
    children,
    color = "orange",
}) => {
    const colorMap = {
        orange: "border-orange-200 text-orange-700",
        blue: "border-blue-200 text-blue-700",
        purple: "border-purple-200 text-purple-700",
        red: "border-red-200 text-red-700",
    } as const;

    const colorClass = colorMap[color];

    return (
        <div className={`bg-white p-6 rounded-lg border ${colorClass}`}>
            <h3 className={`font-bold mb-3`}>{title}</h3>
            <div className="text-gray-700 leading-relaxed text-sm">{children}</div>
        </div>
    )
}