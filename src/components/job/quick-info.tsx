import { IconText } from "../ui/icon-text";
import { ICON_MAP } from "../../config/icon-mpping";
import type { Job } from "../../types/job";
import type { FC } from "react";

interface JobQuickInfoProps {
    job: Job;
}

export const JobQuickInfo: FC<JobQuickInfoProps> = ({ job }) => {
    const LocationIcon = ICON_MAP.location;
    const BriefcaseIcon = ICON_MAP.briefcase;
    const ExperienceIcon = ICON_MAP.experience;
    const SalaryIcon = ICON_MAP.salary;

    return (
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <IconText
                icon={LocationIcon}
                text={job.location}
                iconColor="text-blue-500"
            />
            <IconText
                icon={BriefcaseIcon}
                text={job.status}
                iconColor="text-orange-500"
            />
            <IconText
                icon={ExperienceIcon}
                text={job.experience}
                iconColor="text-purple-500"
            />
            <IconText
                icon={SalaryIcon}
                text={job.salary}
                iconColor="text-green-600"
            />
        </div>
    )
}