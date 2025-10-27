import React from "react";

export const Conclusion: React.FC = () => (
    <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
        <div className="border-l-4 border-blue-600 pl-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Kesimpulan Analisis</h2>

            <div className="space-y-6 text-gray-700">
                <Section
                    title="1. Perbedaan Teori dan Praktik Industri"
                    color="text-blue-600"
                    items={[
                        "Industri menuntut penguasaan framework spesifik (Laravel, React, Node.js) yang mendalam, bukan hanya pemahaman konsep umum.",
                        "Kemampuan DevOps, CI/CD, dan cloud services (AWS, Azure) menjadi penting, namun sering kurang ditekankan di perkuliahan.",
                        "Optimasi database dan scalable architecture lebih diprioritaskan dibanding CRUD dasar.",
                        "Soft skills seperti komunikasi, kolaborasi, dan kepemimpinan setara pentingnya dengan kemampuan teknis.",
                    ]}
                    description="Dari analisis tiga lowongan Fullstack Developer, terlihat perbedaan signifikan antara teori kampus dan kebutuhan industri:"
                />

                <Section
                    title="2. Kesamaan yang Ditemukan"
                    color="text-green-600"
                    items={[
                        "Semua posisi menuntut pemahaman frontend (HTML, CSS, JavaScript/TypeScript).",
                        "Backend development dengan PHP, JavaScript (Node.js), atau C#.",
                        "Database management (SQL Server, MySQL, PostgreSQL).",
                        "RESTful API development.",
                        "Version control menggunakan Git.",
                    ]}
                />

                <SkillsFocus />

                <Recommendations />

                <Note />
            </div>
        </div>
    </div>
);

interface SectionProps {
    title: string;
    color: string;
    description?: string;
    items: string[];
}

// 🧩 Section umum untuk daftar bullet
const Section: React.FC<SectionProps> = ({ title, color, description, items }) => (
    <div>
        <h3 className={`text-lg font-bold ${color} mb-3`}>{title}</h3>
        {description && <p className="leading-relaxed mb-2">{description}</p>}
        <ul className="list-disc ml-6 space-y-2">
            {items.map((item, idx) => (
                <li key={idx}>{item}</li>
            ))}
        </ul>
    </div>
);

// 🧩 Komponen fokus keterampilan (hard + soft)
const SkillsFocus: React.FC = () => (
    <div>
        <h3 className="text-lg font-bold text-purple-600 mb-3">3. Keterampilan yang Harus Difokuskan Mahasiswa</h3>

        <div className="grid md:grid-cols-2 gap-4">
            <SkillCard
                title="Hard Skills Prioritas"
                color="blue"
                skills={[
                    "JavaScript Modern (ES6+) untuk frontend & backend.",
                    "React.js/Next.js untuk frontend, Laravel/Node.js untuk backend.",
                    "Database PostgreSQL/MySQL dengan fokus query optimization.",
                    "RESTful API Design & Implementation.",
                    "Git & Version Control.",
                    "CI/CD & Cloud Services (AWS/Azure basics).",
                    "Testing: unit & integration testing.",
                ]}
            />
            <SkillCard
                title="Soft Skills Prioritas"
                color="purple"
                skills={[
                    "Komunikasi Bahasa Inggris (lisan dan tulisan).",
                    "Problem Solving & Analytical Thinking.",
                    "Kolaborasi Tim lintas divisi (Product, QA, DevOps).",
                    "Kemampuan belajar mandiri dan adaptif.",
                    "Time Management & bekerja di bawah tekanan.",
                ]}
            />
        </div>
    </div>
);

// 🧩 Kartu keterampilan (reusable)
const SkillCard: React.FC<{ title: string; color: "blue" | "purple"; skills: string[] }> = ({
    title,
    color,
    skills,
}) => {
    const colors =
        color === "blue"
            ? "bg-blue-50 border-blue-200 text-blue-800"
            : "bg-purple-50 border-purple-200 text-purple-800";

    return (
        <div className={`border rounded-lg p-4 ${colors}`}>
            <h4 className="font-bold mb-2">{title}</h4>
            <ol className="list-decimal ml-6 space-y-1 text-sm">
                {skills.map((s, i) => (
                    <li key={i}>{s}</li>
                ))}
            </ol>
        </div>
    );
};

// 🧩 Rekomendasi praktis
const Recommendations: React.FC = () => (
    <div className="bg-linear-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-4 rounded">
        <h3 className="text-lg font-bold text-orange-700 mb-2">💡 Rekomendasi Praktis</h3>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Bangun <strong>portfolio project</strong> dengan teknologi yang relevan industri.</li>
            <li>Kontribusi ke <strong>open source projects</strong> untuk pengalaman kolaborasi nyata.</li>
            <li>Ikuti <strong>online courses</strong> framework populer seperti React, Laravel, dsb.</li>
            <li>Latih <strong>bahasa Inggris teknis</strong> lewat dokumentasi & technical writing.</li>
            <li>Pahami <strong>best practices</strong> seperti clean code, design patterns, dan testing.</li>
            <li>Sertifikasi bersifat opsional untuk entry-level — fokus pada portfolio kuat.</li>
        </ul>
    </div>
);

// 🧩 Catatan akhir (footer)
const Note: React.FC = () => (
    <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <p className="text-sm text-gray-600 italic">
            <strong>Catatan:</strong> Untuk posisi entry-level (1–3 tahun), gaji berkisar 8–9 juta per bulan,
            sedangkan posisi senior (3+ tahun) dapat mencapai 16–24 juta per bulan. Investasi dalam pembelajaran
            dan pengalaman akan memberikan return signifikan bagi karier Fullstack Developer.
        </p>
    </div>
);