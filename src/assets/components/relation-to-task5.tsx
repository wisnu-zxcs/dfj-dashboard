import type { FC } from "react";
import { ExternalLink } from "lucide-react";
import { SectionCard } from "./card-section";

export const ConnectionToTask5: FC = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-2 border-indigo-300">
            <h2 className="text-2xl font-bold text-indigo-800 mb-6 flex items-center">
                <ExternalLink className="w-6 h-6 mr-3" />
                Hubungan dengan Analisis Lowongan Kerja (Tugas 5)
            </h2>
            <div className="space-y-4">
                <SectionCard
                    title="Keselarasan Kompetensi dengan Kebutuhan Industri"
                    color="indigo"
                >
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <p className="font-semibold text-gray-800 mb-2">
                                Unit Kompetensi SKKNI:
                            </p>
                            <ul className="space-y-1 text-gray-700">
                                <li>• Implementasi UI (HTML/CSS/JS)</li>
                                <li>• Pemrograman Terstruktur</li>
                                <li>• Code Best Practices</li>
                                <li>• Library Integration</li>
                                <li>• Code Organization</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800 mb-2">
                                Hard Skills dari 11 Lowongan:
                            </p>
                            <ul className="space-y-1 text-gray-700">
                                <li>• React.js, HTML5, CSS3 (82%)</li>
                                <li>• JavaScript ES6+ (100%)</li>
                                <li>• Git, Testing, Clean Code (73%)</li>
                                <li>• NPM, Bootstrap, Frameworks (64%)</li>
                                <li>• Project Structure, MVC (55%)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-4 p-3 bg-green-100 border border-green-300 rounded">
                        <p className="text-sm text-green-800 font-semibold">
                            ✓ Coverage Rate: 85–90% dari hard skills yang dibutuhkan industri
                            tercakup dalam sertifikasi ini!
                        </p>
                    </div>
                </SectionCard>
                <SectionCard title="Gap yang Perlu Diisi Sendiri" color="yellow">
                    <p className="text-sm text-gray-700 mb-2">
                        Sertifikasi BNSP Junior Web Developer fokus pada fundamental. Untuk
                        posisi entry-level yang kompetitif, tambahkan:
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>• Backend framework (Node.js + Express, atau Laravel)</li>
                        <li>• Database (PostgreSQL/MySQL) dan query optimization</li>
                        <li>• RESTful API development dan integration</li>
                        <li>• Version control workflow (Git branching, PR, code review)</li>
                        <li>• Basic DevOps (deployment ke cloud, CI/CD basics)</li>
                    </ul>
                </SectionCard>
                <SectionCard title="Roadmap: Dari Sertifikasi ke Job-Ready" color="blue">
                    <div className="space-y-3 text-sm text-gray-700">
                        {[
                            {
                                step: "STEP 1",
                                text: "Dapatkan sertifikasi BNSP Junior Web Developer (foundation)",
                            },
                            {
                                step: "STEP 2",
                                text: "Bangun 3–5 portfolio projects yang mencakup full-stack (frontend + backend + database)",
                            },
                            {
                                step: "STEP 3",
                                text: "Tambahkan skills backend (Node.js/Laravel) dan database melalui online courses atau bootcamp",
                            },
                            {
                                step: "STEP 4",
                                text: "Praktikkan Git workflow dan deployment ke cloud (Netlify, Vercel, Heroku)",
                            },
                            {
                                step: "STEP 5",
                                text: "Apply ke posisi Junior Web Developer dengan confidence!",
                            },
                        ].map(({ step, text }) => (
                            <div key={step} className="flex items-start gap-3">
                                <span className="bg-blue-600 text-white px-2 py-1 rounded font-bold text-xs">
                                    {step}
                                </span>
                                <span>{text}</span>
                            </div>
                        ))}
                    </div>
                </SectionCard>
            </div>
        </div>
    )
}