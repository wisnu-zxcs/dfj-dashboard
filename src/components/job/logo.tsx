import type { FC } from "react";

interface JobLogoProps {
    logoUrl: string;
    company: string;
}

export const JobLogo: FC<JobLogoProps> = ({ logoUrl, company }) => (
    <div className="w-16 h-16 rounded-lg overflow-hidden bg-white flex items-center justify-center shrink-0">
        <img
            src={logoUrl || "/vite.svg"}
            alt={`${company} logo`}
            className="w-full h-full object-cover"
            onError={(e) => {
                e.currentTarget.src = "/vite.svg";
            }}
        />
    </div>
)