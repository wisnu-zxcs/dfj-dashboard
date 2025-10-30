import { Card } from "../ui/card";
import { SectionHeader } from "../ui/section-header";
import { UI_CONSTANTS } from "../../config/ui";
import type { Job } from "../../types/job";
import { takeFirst } from "../../utils/array";
import { FileText } from "lucide-react";
import type { FC } from "react";

interface ComparisonTableProps {
    jobs: Job[];
    className?: string;
}

interface TableHeaderRowProps {
    jobs: Job[];
}

interface TableBodyProps {
    jobs: Job[];
}

interface StandardRowProps {
    label: string;
    values: string[];
    valueClassName?: string;
    bgClassName?: string;
}

interface SkillRowProps {
    label: string;
    note?: string;
    jobs: Job[];
    skillType: "hardSkills" | "softSkills";
    maxSkills: number;
    bgClassName?: string;
}

interface SkillListProps {
    skills: string[];
}

const StandardRow: FC<StandardRowProps> = ({
    label,
    values,
    valueClassName = "text-gray-700",
    bgClassName,
}) => (
    <tr className={`hover:bg-gray-50 ${bgClassName ?? ""}`}>
        <td className="px-6 py-4 font-semibold text-gray-800 sticky left-0 bg-white z-10">
            {label}
        </td>
        {values.map((value, idx) => (
            <td key={idx} className={`px-6 py-4 ${valueClassName}`}>
                {value}
            </td>
        ))}
    </tr>
)

const SkillList: React.FC<SkillListProps> = ({ skills }) => (
    <ol className="list-decimal list-inside space-y-1 text-gray-700 text-sm">
        {skills.map((skill, idx) => (
            <li key={idx} className="leading-relaxed">
                {skill}
            </li>
        ))}
    </ol>
)

const SkillRow: FC<SkillRowProps> = ({
    label,
    note,
    jobs,
    skillType,
    maxSkills,
    bgClassName,
}) => (
    <tr className={`hover:bg-gray-50 ${bgClassName ?? ""}`}>
        <td className="px-6 py-4 font-semibold text-gray-800 sticky left-0 bg-white z-10">
            <div>
                {label}
                {note && (
                    <div className="text-sm font-normal text-gray-600 mt-1">
                        {note}
                    </div>
                )}
            </div>
        </td>
        {jobs.map((job, idx) => (
            <td key={idx} className="px-6 py-4">
                <SkillList
                    skills={takeFirst(job[skillType], maxSkills)}
                />
            </td>
        ))}
    </tr>
)

const TableHeader: FC = () => (
    <div className="bg-linear-to-r from-indigo-600 to-blue-600 p-6 text-white">
        <SectionHeader
            title="Tabel Perbandingan Lowongan Kerja"
            icon={FileText}
            className="mb-0 text-white [&_h2]:text-white [&_svg]:text-white"
        />
    </div>
)

const TableHeaderRow: FC<TableHeaderRowProps> = ({ jobs }) => (
    <thead className="bg-gray-50">
        <tr>
            <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 border-b-2 border-gray-200 sticky left-0 bg-gray-50 z-10">
                Kriteria
            </th>
            {jobs.map((_, idx) => (
                <th
                    key={idx}
                    className="px-6 py-4 text-left text-sm font-bold text-gray-700 border-b-2 border-gray-200 whitespace-nowrap"
                >
                    Lowongan {idx + 1}
                </th>
            ))}
        </tr>
    </thead>
)

const TableBody: FC<TableBodyProps> = ({ jobs }) => {
    return (
        <tbody className="divide-y divide-gray-200">
            <StandardRow
                label="Nama Perusahaan"
                values={jobs.map((j) => j.company)}
            />

            <StandardRow
                label="Job Role"
                values={jobs.map((j) => j.role)}
            />

            <StandardRow
                label="Pengalaman Minimum"
                values={jobs.map((j) => j.experience)}
            />

            <StandardRow
                label="Gaji"
                values={jobs.map((j) => j.salary)}
                valueClassName="text-green-600 font-semibold"
            />

            <StandardRow
                label="Gelar Pendidikan Minimum"
                values={jobs.map((j) => j.education)}
            />

            <SkillRow
                label="Keterampilan Teknis (Hard Skills)"
                note="3 Teratas"
                jobs={jobs}
                skillType="hardSkills"
                maxSkills={UI_CONSTANTS.MAX_DISPLAY.HARD_SKILLS}
                bgClassName="bg-blue-50"
            />

            <SkillRow
                label="Keterampilan Non-Teknis (Soft Skills)"
                note="1–2 Teratas"
                jobs={jobs}
                skillType="softSkills"
                maxSkills={UI_CONSTANTS.MAX_DISPLAY.SOFT_SKILLS}
                bgClassName="bg-purple-50"
            />

            <StandardRow
                label="Sertifikasi yang Diminta"
                values={jobs.map((j) => j.certification)}
            />

            <StandardRow
                label="Lokasi"
                values={jobs.map((j) => j.location)}
            />
        </tbody>
    )
}

export const ComparisonTable: FC<ComparisonTableProps> = ({
    jobs,
    className
}) => {
    return (
        <Card padding="none" className={className}>
            <TableHeader />
            <div className="overflow-x-auto">
                <table className="w-full">
                    <TableHeaderRow jobs={jobs} />
                    <TableBody jobs={jobs} />
                </table>
            </div>
        </Card>
    )
}