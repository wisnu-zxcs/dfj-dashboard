import React from "react";
import { FileText } from "lucide-react";
import type { Job } from "../types/job-types";

interface ComparisonTableProps {
    jobs: Job[];
}

/**
 * Komponen: ComparisonTable
 * Menampilkan tabel perbandingan antar lowongan kerja secara terstruktur dan responsif.
 */
export const ComparisonTable: React.FC<ComparisonTableProps> = ({ jobs }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <Header />
            <div className="overflow-x-auto">
                <table className="w-full">
                    <TableHeader jobs={jobs} />
                    <TableBody jobs={jobs} />
                </table>
            </div>
        </div>
    );
};

// 🧩 Subcomponent: Header
const Header: React.FC = () => (
    <div className="bg-linear-to-r from-indigo-600 to-blue-600 p-6 text-white">
        <h2 className="text-2xl font-bold flex items-center">
            <FileText className="w-6 h-6 mr-3" />
            Tabel Perbandingan Lowongan Kerja
        </h2>
    </div>
);

// 🧩 Subcomponent: Table Header
const TableHeader: React.FC<{ jobs: Job[] }> = ({ jobs }) => (
    <thead className="bg-gray-50">
        <tr>
            <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 border-b-2 border-gray-200">
                Kriteria
            </th>
            {jobs.map((_, idx) => (
                <th
                    key={idx}
                    className="px-6 py-4 text-left text-sm font-bold text-gray-700 border-b-2 border-gray-200"
                >
                    Lowongan {idx + 1}
                </th>
            ))}
        </tr>
    </thead>
);

// 🧩 Subcomponent: Table Body
const TableBody: React.FC<{ jobs: Job[] }> = ({ jobs }) => {
    const getTopSkills = (skills: string[], count = 3) => skills.slice(0, count);

    return (
        <tbody className="divide-y divide-gray-200">
            <TableRow label="Nama Perusahaan" values={jobs.map((j) => j.company)} />
            <TableRow label="Job Role" values={jobs.map((j) => j.role)} />
            <TableRow label="Pengalaman Minimum" values={jobs.map((j) => j.experience)} />
            <TableRow label="Gaji" values={jobs.map((j) => j.salary)} valueClass="text-green-600 font-semibold" />
            <TableRow label="Gelar Pendidikan Minimum" values={jobs.map((j) => j.education)} />

            <SkillRow
                label="Keterampilan Teknis (Hard Skills)"
                jobs={jobs}
                getSkills={(job) => getTopSkills(job.hardSkills, 3)}
                bgClass="bg-blue-50"
                note="3 Teratas"
            />

            <SkillRow
                label="Keterampilan Non-Teknis (Soft Skills)"
                jobs={jobs}
                getSkills={(job) => getTopSkills(job.softSkills, 2)}
                bgClass="bg-purple-50"
                note="1–2 Teratas"
            />

            <TableRow label="Sertifikasi yang Diminta" values={jobs.map((j) => j.certification)} />
            <TableRow label="Lokasi" values={jobs.map((j) => j.location)} />
        </tbody>
    );
};

// 🧩 Subcomponent: Baris umum
const TableRow: React.FC<{
    label: string;
    values: string[];
    valueClass?: string;
    bgClass?: string;
}> = ({ label, values, valueClass = "text-gray-700", bgClass }) => (
    <tr className={`hover:bg-gray-50 ${bgClass ?? ""}`}>
        <td className="px-6 py-4 font-semibold text-gray-800">{label}</td>
        {values.map((v, i) => (
            <td key={i} className={`px-6 py-4 ${valueClass}`}>
                {v}
            </td>
        ))}
    </tr>
);

// 🧩 Subcomponent: Baris skill (lebih kompleks tapi reusable)
const SkillRow: React.FC<{
    label: string;
    jobs: Job[];
    getSkills: (job: Job) => string[];
    bgClass?: string;
    note?: string;
}> = ({ label, jobs, getSkills, bgClass, note }) => (
    <tr className={`hover:bg-gray-50 ${bgClass ?? ""}`}>
        <td className="px-6 py-4 font-semibold text-gray-800">
            {label}
            {note && <div className="text-sm font-normal text-gray-600">{note}</div>}
        </td>
        {jobs.map((job, idx) => (
            <td key={idx} className="px-6 py-4">
                <ol className="list-decimal list-inside space-y-1 text-gray-700 text-sm">
                    {getSkills(job).map((skill, i) => (
                        <li key={i}>{skill}</li>
                    ))}
                </ol>
            </td>
        ))}
    </tr>
);