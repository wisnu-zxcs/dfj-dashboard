import React, { useState } from "react";
import { Briefcase, GraduationCap, Code, Users, Award, MapPin, TrendingUp, FileText, Link, DollarSign } from "lucide-react";
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
                <div className="flex items-center gap-4">
                    <div className="avatar">
                        <div className="w-16 rounded-lg">
                            <img src={job.logoUrl || "/vite.svg"} alt={`${job.company} logo`} />
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1 line-clamp-2">{job.role}</h3>
                        <p className="text-blue-100 font-medium line-clamp-2">{job.company}</p>
                    </div>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                        Lowongan {index + 1}
                    </span>
                </div>
            </header>

            <section className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                    <InfoItem icon={<MapPin className="w-4 h-4 text-blue-500" />} text={job.location} />
                    <InfoItem icon={<Briefcase className="w-4 h-4 text-orange-500" />} text={job.status} />
                    <InfoItem icon={<TrendingUp className="w-4 h-4 text-purple-500" />} text={job.experience} />
                    <InfoItem icon={<DollarSign className="w-4 h-4 text-green-600" />} text={job.salary} />
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
    <div className="grid md:flex gap-6 animate-fadeIn">
        <div className="flex-1 mt-6 space-y-4">
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
        <div className="mt-6 md:my-auto md:mx-16">
            <div className="flex md:grid gap-4">
                <div className="flex-1 avatar">
                    <div className="size-full md:size-80 ring rounded-lg">
                        <img src={job.qrUrl || "/vite.svg"} alt={`${job.company} QR`} />
                    </div>
                </div>
                <div className="flex-1 flex flex-col md:grid md:grid-cols-2 justify-end gap-4">
                    <a href={job.siteUrl || "#"} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        <FileText size={16} />
                        Baca Detail
                    </a>
                    <a href={job.siteUrl || "#"} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        <Link size={16} />
                        Kunjungi Situs
                    </a>
                </div>
            </div>
        </div>
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