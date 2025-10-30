import { Button } from "../ui/button";
import { List } from "../ui/list";
import { ICON_MAP } from "../../config/icon-mpping";
import type { Job } from "../../types/job";
import { FileText, Globe, LinkIcon } from "lucide-react";
import type { FC } from "react";

export interface JobDetailsProps {
    job: Job;
}

interface DetailSectionProps {
    title: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    iconColor: string;
    children: React.ReactNode;
}

const DetailSection: FC<DetailSectionProps> = ({
    title,
    icon: Icon,
    iconColor,
    children,
}) => (
    <div className="border-t border-gray-200 pt-4 first:border-t-0 first:pt-0">
        <div className="flex items-center gap-2 mb-3">
            <Icon size={20} className={iconColor} />
            <h4 className="font-bold text-gray-800">{title}</h4>
        </div>
        <div className="ml-7">{children}</div>
    </div>
)

const JobDetailsContent: FC<JobDetailsProps> = ({ job }) => {
    const EducationIcon = ICON_MAP.education;
    const HardSkillsIcon = ICON_MAP.hardSkills;
    const SoftSkillsIcon = ICON_MAP.softSkills;
    const CertificationIcon = ICON_MAP.certification;

    return (
        <div className="space-y-6">
            <DetailSection
                title="Pendidikan Minimum"
                icon={EducationIcon}
                iconColor="text-blue-600"
            >
                <p className="text-gray-700">{job.education}</p>
            </DetailSection>

            <DetailSection
                title="Keterampilan Teknis (Hard Skills)"
                icon={HardSkillsIcon}
                iconColor="text-green-600"
            >
                <List items={job.hardSkills} icon="check" iconColor="text-green-500" />
            </DetailSection>

            <DetailSection
                title="Keterampilan Non-Teknis (Soft Skills)"
                icon={SoftSkillsIcon}
                iconColor="text-purple-600"
            >
                <List items={job.softSkills} icon="check" iconColor="text-purple-500" />
            </DetailSection>

            <DetailSection
                title="Sertifikasi"
                icon={CertificationIcon}
                iconColor="text-orange-600"
            >
                <p className="text-gray-700">{job.certification}</p>
            </DetailSection>
        </div>
    )
}

const JobDetailsActions: FC<JobDetailsProps> = ({ job }) => (
    <div className="md:w-80 shrink-0">
        <div className="sticky top-4 space-y-4">
            {/* Header */}
            <div className="flex items-center gap-2 font-bold text-gray-800 pb-4 border-b border-gray-200">
                <Globe className="w-5 h-5 text-blue-600" />
                <span>Kunjungi Sumber</span>
            </div>

            {/* QR Code */}
            <div className="flex justify-center">
                <div className="w-full max-w-xs aspect-square rounded-lg overflow-hidden ring-2 ring-gray-200">
                    <img
                        src={job.qrUrl || "/vite.svg"}
                        alt={`${job.company} QR Code`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.currentTarget.src = "/vite.svg";
                        }}
                    />
                </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
                <Button
                    as="a"
                    href={job.siteUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={Globe}
                    fullWidth
                    variant="primary"
                >
                    {job.source}
                </Button>

                <div className="grid grid-cols-2 gap-3">
                    <Button
                        as="a"
                        href={job.siteUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        icon={FileText}
                        variant="outline"
                        size="sm"
                    >
                        Detail
                    </Button>

                    <Button
                        as="a"
                        href={job.siteUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        icon={LinkIcon}
                        variant="outline"
                        size="sm"
                    >
                        Situs
                    </Button>
                </div>
            </div>
        </div>
    </div>
)

export const JobDetails: FC<JobDetailsProps> = ({ job }) => (
    <div className="grid md:grid-cols-[1fr_auto] gap-8">
        <JobDetailsContent job={job} />
        <JobDetailsActions job={job} />
    </div>
)