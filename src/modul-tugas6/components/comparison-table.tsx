import type { FC } from "react";
import { FileText } from "lucide-react";
import { ComparisonRow } from "./comparison-row";

export const ComparisonTable: FC = () => {
    const rows = [
        {
            skkni: "Mengimplementasikan User Interface",
            industry: "React.js, HTML5, CSS3, Responsive Design (82% lowongan)",
            match: "95%",
            matchColor: "green",
        },
        {
            skkni: "Menerapkan bahasa pemrograman",
            industry: "JavaScript ES6+, TypeScript (100% lowongan)",
            match: "90%",
            matchColor: "green",
        },
        {
            skkni: "Menulis kode sesuai guidelines",
            industry: "ESLint, Prettier, Code Review, Best Practices (73% lowongan)",
            match: "100%",
            matchColor: "green",
        },
        {
            skkni: "Pemrograman terstruktur",
            industry: "Algorithms, Control Flow, Problem Solving (100% lowongan)",
            match: "85%",
            matchColor: "green",
        },
        {
            skkni: "Mengorganisir kode dengan rapi",
            industry: "MVC, Modular Architecture, Documentation (55% lowongan)",
            match: "80%",
            matchColor: "yellow",
        },
        {
            skkni: "Menggunakan library pre-existing",
            industry: "NPM, Bootstrap, React Libraries (64% lowongan)",
            match: "90%",
            matchColor: "green",
        },
        {
            skkni: "[Belum dicakup SKKNI]",
            industry: "Backend: Node.js, Express.js, Laravel (73% lowongan)",
            match: "0%",
            matchColor: "red",
        },
        {
            skkni: "[Belum dicakup SKKNI]",
            industry: "Database: PostgreSQL, MySQL, MongoDB (91% lowongan)",
            match: "0%",
            matchColor: "red",
        },
        {
            skkni: "[Belum dicakup SKKNI]",
            industry: "RESTful API Development (100% lowongan)",
            match: "0%",
            matchColor: "red",
        },
        {
            skkni: "[Belum dicakup SKKNI]",
            industry: "Git & Version Control (100% lowongan)",
            match: "0%",
            matchColor: "red",
        },
        {
            skkni: "[Belum dicakup SKKNI]",
            industry: "CI/CD, Cloud Deployment (73% lowongan)",
            match: "0%",
            matchColor: "red",
        },
    ] as const;

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-purple-600" />
                Perbandingan: SKKNI vs Kebutuhan Industri (Tugas 5)
            </h2>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-linear-to-r from-purple-600 to-blue-600 text-white">
                            <th className="p-4 text-left border-b-2 border-white">
                                Unit Kompetensi SKKNI
                            </th>
                            <th className="p-4 text-left border-b-2 border-white">
                                Skills dari Lowongan Kerja
                            </th>
                            <th className="p-4 text-center border-b-2 border-white">Match</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {rows.map((row, i) => (
                            <ComparisonRow key={i} {...row} />
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Statistik coverage */}
            <div className="mt-6 grid md:grid-cols-3 gap-4">
                {[
                    { label: "Coverage untuk Frontend Skills", value: "87%", color: "green" },
                    { label: "Coverage Total (Frontend + Backend)", value: "45%", color: "yellow" },
                    { label: "Coverage untuk DevOps & Cloud", value: "0%", color: "red" },
                ].map(({ label, value, color }) => (
                    <div
                        key={label}
                        className={`p-4 rounded-lg border ${color === "green"
                            ? "bg-green-50 border-green-300"
                            : color === "yellow"
                                ? "bg-yellow-50 border-yellow-300"
                                : "bg-red-50 border-red-300"
                            }`}
                    >
                        <p
                            className={`font-bold text-center text-2xl mb-2 ${color === "green"
                                ? "text-green-800"
                                : color === "yellow"
                                    ? "text-yellow-800"
                                    : "text-red-800"
                                }`}
                        >
                            {value}
                        </p>
                        <p className="text-sm text-gray-700 text-center">{label}</p>
                    </div>
                ))}
            </div>

            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-gray-700">
                    <strong>Kesimpulan:</strong> Sertifikasi BNSP Junior Web Developer
                    sangat kuat untuk{" "}
                    <span className="font-semibold text-blue-700">
                        frontend development
                    </span>
                    , tetapi perlu dilengkapi dengan pembelajaran mandiri untuk backend,
                    database, dan DevOps agar menjadi Full Stack Developer yang job-ready.
                </p>
            </div>
        </div>
    )
}