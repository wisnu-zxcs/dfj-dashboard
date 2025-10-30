import type { FC, ReactNode } from "react";

export interface InfoCardProps {
    label: string;
    value: ReactNode;
    highlight?: boolean;
}

export const InfoCard: FC<InfoCardProps> = ({ label, value, highlight = false }) => {
    return (
        <div className={`p-3 rounded-lg ${highlight ? "bg-blue-50 border border-blue-200" : "bg-gray-50"}`}>
            <p className="text-sm text-gray-600 mb-1">{label}</p>
            <p className={`font-semibold ${highlight ? "text-blue-700" : "text-gray-800"}`}>
                {value}
            </p>
        </div>
    )
}