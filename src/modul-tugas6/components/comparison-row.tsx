import type { FC } from "react";

export type MatchColor = "green" | "yellow" | "red";

export interface ComparisonRowProps {
    skkni: string;
    industry: string;
    match: string;
    matchColor: MatchColor;
}

export const ComparisonRow: FC<ComparisonRowProps> = ({
    skkni,
    industry,
    match,
    matchColor,
}) => {
    const colorMap: Record<MatchColor, string> = {
        green: "bg-green-100 text-green-800",
        yellow: "bg-yellow-100 text-yellow-800",
        red: "bg-red-100 text-red-800",
    }

    return (
        <tr className="border-b hover:bg-gray-50 transition-colors">
            <td className="p-4 text-gray-700">{skkni}</td>
            <td className="p-4 text-gray-700">{industry}</td>
            <td className="p-4 text-center">
                <span className={`px-3 py-1 rounded-full font-bold text-sm ${colorMap[matchColor]}`}>
                    {match}
                </span>
            </td>
        </tr>
    )
}