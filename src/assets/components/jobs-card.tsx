import React, { useState } from "react";
import { Briefcase, GraduationCap, Code, Users, Award, MapPin, TrendingUp } from "lucide-react";
import type { Job } from "../types/job-types";

interface JobCardProps {
    job: Job;
    index: number;
}

export const JobCard: React.FC<JobCardProps> = ({ job, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200">
            <header className="bg-linear-to-r from-blue-600 to-purple-600 p-4 text-white">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-xl font-bold mb-1">{job.role}</h3>
                        <p className="text-blue-100 font-medium">{job.company}</p>
                    </div>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                        Lowongan {index + 1}
                    </span>
                </div>
            </header>

            <section className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                    <InfoItem icon={<MapPin className="w-4 h-4 text-blue-500" />} text={job.location} />
                    <InfoItem icon={<Briefcase className="w-4 h-4 text-green-500" />} text={job.status} />
                    <InfoItem icon={<TrendingUp className="w-4 h-4 text-purple-500" />} text={job.experience} />
                    <span className="font-medium text-green-600">
                        <InfoItem icon={<Award className="w-4 h-4 text-orange-500" />} text={job.salary} />
                    </span>
                </div>

                <button
                    onClick={() => setIsExpanded((prev) => !prev)}
                    className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium transition"
                >
                    {isExpanded ? "Sembunyikan Detail" : "Lihat Detail Lengkap"}
                </button>

                {isExpanded && <JobDetails job={job} />}
            </section>
        </div>
    );
};

// Sub-component kecil dan reusable (DRY)
const InfoItem: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
    <div className="flex items-center space-x-2">
        {icon}
        <span>{text}</span>
    </div>
);

const JobDetails: React.FC<{ job: Job }> = ({ job }) => (
    <div className="mt-6 space-y-4 animate-fadeIn">
        <DetailSection title="Pendidikan Minimum" icon={<GraduationCap className="w-5 h-5 text-blue-600" />}>
            <p>{job.education}</p>
        </DetailSection>

        <DetailSection title="Keterampilan Teknis (Hard Skills)" icon={<Code className="w-5 h-5 text-green-600" />}>
            <ul className="space-y-2 list-inside">
                {job.hardSkills.map((skill, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                        <span className="text-green-500 mr-2">✓</span> {skill}
                    </li>
                ))}
            </ul>
        </DetailSection>

        <DetailSection title="Keterampilan Non-Teknis (Soft Skills)" icon={<Users className="w-5 h-5 text-purple-600" />}>
            <ul className="space-y-2 list-inside">
                {job.softSkills.map((skill, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                        <span className="text-purple-500 mr-2">✓</span> {skill}
                    </li>
                ))}
            </ul>
        </DetailSection>

        <DetailSection title="Sertifikasi" icon={<Award className="w-5 h-5 text-orange-600" />}>
            <p>{job.certification}</p>
        </DetailSection>
    </div>
);

const DetailSection: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({
    title,
    icon,
    children,
}) => (
    <div className="border-t border-t-gray-200 pt-4">
        <div className="flex items-center mb-3">
            {icon}
            <h4 className="ml-2 font-bold text-gray-800">{title}</h4>
        </div>
        <div className="ml-7 text-gray-700">{children}</div>
    </div>
)