import type { Job } from "../../types/job";
import { JobLogo } from "./logo";
import { Badge } from "../ui/badge";
import { JobQuickInfo } from "./quick-info";
import { Button } from "../ui/button";
import { Divider } from "../ui/divider";
import { JobDetails } from "./details";
import { Card } from "../ui/card";
import { cn } from "../../utils/styles";
import { useState, type FC } from "react";

interface JobCardProps {
    job: Job;
    index: number;
    className?: string;
}

interface JobCardHeaderProps {
    job: Job;
    index: number;
}

interface JobCardBodyProps {
    job: Job;
    isExpanded: boolean;
    onToggle: () => void;
}

const JobCardHeader: FC<JobCardHeaderProps> = ({ job, index }) => (
    <header className="bg-linear-to-r from-blue-600 to-purple-600 p-4 text-white">
        <div className="flex items-center gap-4">
            <JobLogo logoUrl={job.logoUrl} company={job.company} />

            <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold mb-1 line-clamp-2">
                    {job.role}
                </h3>
                <p className="text-blue-100 font-medium line-clamp-1">
                    {job.company}
                </p>
            </div>

            <Badge color="gray" className="bg-white/20 shrink-0">
                Lowongan {index + 1}
            </Badge>
        </div>
    </header>
)

const JobCardBody: FC<JobCardBodyProps> = ({ job, isExpanded, onToggle }) => (
    <section className="p-6">
        <JobQuickInfo job={job} />

        <Button
            onClick={onToggle}
            fullWidth
            variant="primary"
            className="mt-4"
        >
            {isExpanded ? "Sembunyikan Detail" : "Lihat Detail Lengkap"}
        </Button>

        {isExpanded && (
            <div className="animate-fadeIn">
                <Divider className="my-6" />
                <JobDetails job={job} />
            </div>
        )}
    </section>
)

export const JobCard: FC<JobCardProps> = ({ job, index, className }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Card padding="none" hoverable className={cn("overflow-hidden", className)}>
            <JobCardHeader job={job} index={index} />
            <JobCardBody
                job={job}
                isExpanded={isExpanded}
                onToggle={() => setIsExpanded(!isExpanded)}
            />
        </Card>
    )
}