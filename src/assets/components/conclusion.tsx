import React from "react";

export const Conclusion: React.FC = () => (
    <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 border-l-4 border-l-blue-600">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">📝 Kesimpulan Analisis</h2>

        <div className="space-y-6 text-gray-700">
            {/* Ringkasan Temuan */}
            <ExecutiveSummary />

            {/* Perbedaan Teori vs Industri */}
            <Section
                title="1. Perbedaan antara Teori yang Dipelajari di Kampus dengan Tuntutan Industri"
                color="text-blue-600"
                description="Berdasarkan analisis 10 lowongan kerja Fullstack Developer dari berbagai perusahaan (JobStreet, Glints, LinkedIn), ditemukan beberapa kesenjangan signifikan antara kurikulum akademis dan kebutuhan industri:"
            >
                <div className="space-y-4">
                    <SubSection
                        title="A. Teknologi yang Digunakan"
                        items={[
                            {
                                label: "Di Kampus",
                                value: "Fokus pada konsep dasar algoritma, struktur data, dan bahasa pemrograman fundamental (C++, Java, Python)"
                            },
                            {
                                label: "Di Industri",
                                value: "Menuntut penguasaan ekosistem lengkap: React.js/Vue.js (frontend), Node.js/Laravel/Express.js (backend), PostgreSQL/MySQL/MongoDB (database), plus DevOps tools (CI/CD, AWS, Azure, Docker)"
                            }
                        ]}
                    />

                    <SubSection
                        title="B. Arsitektur dan Skalabilitas"
                        items={[
                            {
                                label: "Di Kampus",
                                value: "Project biasanya monolithic, fokus pada fungsionalitas dasar CRUD"
                            },
                            {
                                label: "Di Industri",
                                value: "Memerlukan pemahaman microservices, scalable architecture, query optimization, API-first design, dan distributed systems (terlihat di The Flex, Weshine, Goodeva)"
                            }
                        ]}
                    />

                    <SubSection
                        title="C. Praktik Profesional"
                        items={[
                            {
                                label: "Di Kampus",
                                value: "Testing dan dokumentasi sering diabaikan atau minimal"
                            },
                            {
                                label: "Di Industri",
                                value: "TDD (Test Driven Development), unit testing, integration testing, code review, dan Git workflow (branching, PR) adalah standar wajib (PT Higo, PT Eksa, Goodeva)"
                            }
                        ]}
                    />

                    <SubSection
                        title="D. Cloud & DevOps"
                        items={[
                            {
                                label: "Di Kampus",
                                value: "Deployment biasanya lokal atau hosting sederhana"
                            },
                            {
                                label: "Di Industri",
                                value: "Wajib menguasai cloud platforms (AWS, Azure, GCP), CI/CD pipelines, containerization, dan automation (disebutkan di 8 dari 10 lowongan)"
                            }
                        ]}
                    />

                    <SubSection
                        title="E. Soft Skills dan Kolaborasi"
                        items={[
                            {
                                label: "Di Kampus",
                                value: "Project individu atau tim kecil dengan komunikasi terbatas"
                            },
                            {
                                label: "Di Industri",
                                value: "Kolaborasi lintas tim (Product, QA, DevOps, Marketing), komunikasi bahasa Inggris, mentoring junior, dan presentation skills sangat ditekankan (terutama untuk posisi senior)"
                            }
                        ]}
                    />
                </div>
            </Section>

            {/* Kesamaan yang Ditemukan */}
            <Section
                title="2. Kesamaan dan Pola yang Konsisten di Semua Lowongan"
                color="text-green-600"
                description="Meskipun ada variasi dalam teknologi spesifik, terdapat kesamaan fundamental yang muncul di hampir semua lowongan:"
            >
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <ComparisonCard
                        title="Hard Skills Universal"
                        color="green"
                        items={[
                            "JavaScript/TypeScript - Muncul di 100% lowongan",
                            "React.js - Framework frontend paling dominan (9/10)",
                            "Node.js - Backend JavaScript stack (8/10)",
                            "RESTful API - Standar komunikasi client-server (10/10)",
                            "Database SQL & NoSQL - PostgreSQL, MySQL, MongoDB",
                            "Git Version Control - Wajib untuk semua posisi",
                            "HTML5, CSS3 - Foundation web development"
                        ]}
                    />
                    <ComparisonCard
                        title="Soft Skills Universal"
                        color="blue"
                        items={[
                            "Problem solving & analytical thinking (10/10)",
                            "Komunikasi yang baik (10/10)",
                            "Teamwork & kolaborasi (10/10)",
                            "Adaptabilitas terhadap teknologi baru (9/10)",
                            "Inisiatif tinggi & mandiri (8/10)",
                            "Bahasa Inggris (7/10, terutama perusahaan besar)",
                            "Attention to detail & tanggung jawab (7/10)"
                        ]}
                    />
                </div>

                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-2">📊 Pola Berdasarkan Level Pengalaman:</h4>
                    <ul className="list-disc ml-6 space-y-2 text-sm">
                        <li><strong>Fresh Graduate - Entry-Level (0-3 tahun):</strong> Fokus pada fundamental (React, Node.js, database dasar), testing, dan Git. Gaji: Rp 2.5-9 juta/bulan</li>
                        <li><strong>Senior (3+ tahun):</strong> Ditambah scalability, microservices, mentoring, leadership, cloud architecture, dan A/B testing. Gaji: Rp 16-24 juta/bulan (bahkan lebih untuk remote international)</li>
                    </ul>
                </div>
            </Section>

            {/* Keterampilan yang Harus Difokuskan */}
            <Section
                title="3. Keterampilan yang Harus Difokuskan Mahasiswa agar Siap Bersaing"
                color="text-purple-600"
                description="Berdasarkan analisis mendalam terhadap 10 lowongan, berikut prioritas keterampilan yang harus dikuasai mahasiswa untuk meningkatkan daya saing di industri:"
            >
                <SkillsPriority />
            </Section>

            {/* Rekomendasi Aksi */}
            <ActionPlan />

            {/* Insight Tambahan */}
            <AdditionalInsights />

            {/* Catatan Penutup */}
            <FinalNote />
        </div>
    </div>
);

/* ========== SUB-COMPONENTS ========== */

// Executive Summary
const ExecutiveSummary: React.FC = () => (
    <div className="bg-linear-to-r from-blue-50 to-indigo-50 border-l-4 border-indigo-600 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-indigo-800 mb-3">📋 Ringkasan Eksekutif</h3>
        <div className="space-y-2 text-gray-700">
            <p><strong>Total Lowongan Dianalisis:</strong> 10 posisi Fullstack Developer</p>
            <p><strong>Sumber Data:</strong> JobStreet (4), Glints (3), LinkedIn (3)</p>
            <p><strong>Lokasi:</strong> Jakarta (6), Surabaya (2), Bali (1), Yogyakarta (1)</p>
            <p><strong>Level Pengalaman:</strong> Intern (1), Junior / Entry-level (6), Senior (3)</p>
            <p><strong>Range Gaji Entry:</strong> Rp 2.5 - 9 juta/bulan</p>
            <p><strong>Range Gaji Senior:</strong> Rp 16 - 24 juta/bulan+</p>
            <p className="pt-2 text-sm italic text-gray-600">
                Analisis ini memberikan gambaran komprehensif tentang gap antara pendidikan formal
                dan ekspektasi industri, serta roadmap konkret untuk mempersiapkan diri.
            </p>
        </div>
    </div>
);

// Section dengan children custom
interface SectionProps {
    title: string;
    color: string;
    description?: string;
    children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, color, description, children }) => (
    <div className="border-t-2 border-gray-200 pt-6">
        <h3 className={`text-xl font-bold ${color} mb-3`}>{title}</h3>
        {description && <p className="leading-relaxed mb-4 text-gray-600">{description}</p>}
        {children}
    </div>
);

// SubSection untuk perbandingan kampus vs industri
interface SubSectionProps {
    title: string;
    items: { label: string; value: string }[];
}

const SubSection: React.FC<SubSectionProps> = ({ title, items }) => (
    <div className="ml-4">
        <h4 className="font-bold text-gray-800 mb-2">{title}</h4>
        <div className="space-y-2">
            {items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                    <span className="font-semibold text-blue-600 min-w-[100px]">{item.label}:</span>
                    <span className="text-gray-700">{item.value}</span>
                </div>
            ))}
        </div>
    </div>
);

// Comparison Card untuk kesamaan
interface ComparisonCardProps {
    title: string;
    color: "green" | "blue";
    items: string[];
}

const ComparisonCard: React.FC<ComparisonCardProps> = ({ title, color, items }) => {
    const colors = color === "green"
        ? "bg-green-50 border-green-200 text-green-800"
        : "bg-blue-50 border-blue-200 text-blue-800";

    return (
        <div className={`border rounded-lg p-4 ${colors}`}>
            <h4 className="font-bold mb-3">{title}</h4>
            <ul className="space-y-2 text-sm">
                {items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                        <span className="text-lg">✓</span>
                        <span className="text-gray-700">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Skills Priority - Komponen besar untuk bagian 3
const SkillsPriority: React.FC = () => (
    <div className="space-y-6 mt-4">
        {/* Hard Skills dengan Prioritas */}
        <div>
            <h4 className="font-bold text-purple-700 text-lg mb-4">A. Hard Skills (Urutan Prioritas)</h4>
            <div className="space-y-3">
                <PrioritySkill
                    priority="P0 - WAJIB DIKUASAI"
                    color="red"
                    skills={[
                        "JavaScript Modern (ES6+) - Fundamental untuk frontend & backend (100% lowongan)",
                        "React.js - Framework frontend paling dicari (80% lowongan)",
                        "Node.js + Express.js - Backend JavaScript stack (70% lowongan)",
                        "RESTful API - Design, implementation, dan best practices (100% lowongan)",
                        "Git & GitHub/GitLab - Version control, branching, PR, code review (100% lowongan)",
                        "Database SQL - PostgreSQL/MySQL dengan query optimization (90% lowongan)"
                    ]}
                />

                <PrioritySkill
                    priority="P1 - SANGAT PENTING"
                    color="orange"
                    skills={[
                        "TypeScript - Type safety untuk project skala besar (60% lowongan)",
                        "Database NoSQL - MongoDB untuk data non-relasional (40% lowongan)",
                        "Testing - Unit testing (Jest), Integration testing (70% lowongan)",
                        "HTML5 & CSS3 - Semantic markup, responsive design, Flexbox/Grid",
                        "PHP & Laravel - Masih populer di perusahaan Indonesia (20% lowongan)",
                        "CI/CD - Jenkins, GitHub Actions, deployment automation (70% lowongan)"
                    ]}
                />

                <PrioritySkill
                    priority="P2 - NILAI TAMBAH BESAR"
                    color="yellow"
                    skills={[
                        "Cloud Platform - AWS (Lambda, S3, EC2), Azure, atau GCP basics (50% lowongan)",
                        "Microservices Architecture - Design pattern untuk scalability (30% lowongan)",
                        "Docker & Kubernetes - Containerization untuk deployment konsisten",
                        "Redux/Context API - State management untuk aplikasi kompleks",
                        "Vue.js/Angular - Alternatif framework frontend (20% lowongan)",
                        "Python/Go - Backend tambahan untuk automation & high-performance (20% lowongan)"
                    ]}
                />

                <PrioritySkill
                    priority="P3 - OPSIONAL (Spesialisasi)"
                    color="green"
                    skills={[
                        "GraphQL - Alternative to REST API",
                        "Next.js/Nest.js - Framework tingkat lanjut dengan SSR/SSG",
                        "WebSocket - Real-time communication",
                        "Data Visualization - D3.js, Chart.js untuk analytics",
                        "Mobile Development - Flutter, React Native (cross-platform)",
                        "AI/ML Integration - TensorFlow.js, model deployment"
                    ]}
                />
            </div>
        </div>

        {/* Soft Skills dengan Prioritas */}
        <div>
            <h4 className="font-bold text-purple-700 text-lg mb-4">B. Soft Skills (Urutan Prioritas)</h4>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h5 className="font-bold text-purple-800 mb-3">🎯 Critical Skills</h5>
                    <ol className="list-decimal ml-6 space-y-2 text-sm">
                        <li><strong>Problem Solving & Analytical Thinking</strong> - Disebutkan di 100% lowongan, kemampuan mengurai masalah kompleks jadi solusi sederhana</li>
                        <li><strong>Komunikasi Efektif</strong> - Verbal & written, explain technical concepts to non-technical stakeholders (100% lowongan)</li>
                        <li><strong>Teamwork & Collaboration</strong> - Lintas fungsi (Product, QA, DevOps, Marketing) - 100% lowongan</li>
                        <li><strong>Bahasa Inggris</strong> - Minimal passive (reading docs), aktif lebih baik untuk komunikasi tim internasional (60% lowongan, wajib untuk remote)</li>
                    </ol>
                </div>

                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                    <h5 className="font-bold text-indigo-800 mb-3">💡 Important Skills</h5>
                    <ol className="list-decimal ml-6 space-y-2 text-sm">
                        <li><strong>Adaptability & Learning Agility</strong> - Tech stack berubah cepat, harus bisa self-learn (80% lowongan)</li>
                        <li><strong>Initiative & Ownership</strong> - Proactive dalam mencari solusi, tidak menunggu instruksi (70% lowongan)</li>
                        <li><strong>Attention to Detail</strong> - Code quality, testing, documentation (60% lowongan)</li>
                        <li><strong>Time Management</strong> - Handle multiple tasks, meet deadlines (50% lowongan)</li>
                        <li><strong>Mentoring & Leadership</strong> - Untuk senior role, guide junior developers (30% lowongan senior)</li>
                    </ol>
                </div>
            </div>
        </div>

        {/* Sertifikasi */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-gray-800 mb-3">C. Tentang Sertifikasi</h4>
            <p className="text-gray-700 mb-2">
                <strong>Temuan:</strong> Hanya 1 dari 10 lowongan (10%) yang menyebutkan sertifikasi sebagai nilai tambah,
                bukan requirement wajib.
            </p>
            <p className="text-gray-700">
                <strong>Kesimpulan:</strong> Untuk Fullstack Developer, <span className="text-orange-600 font-semibold">portfolio project yang kuat
                    jauh lebih penting daripada sertifikasi</span>. Fokuskan waktu dan resources untuk membangun real-world projects
                yang mendemonstrasikan kemampuan teknis.
            </p>
        </div>
    </div>
);

// Priority Skill Item
interface PrioritySkillProps {
    priority: string;
    color: "red" | "orange" | "yellow" | "green";
    skills: string[];
}

const PrioritySkill: React.FC<PrioritySkillProps> = ({ priority, color, skills }) => {
    const colorMap = {
        red: "bg-red-50 border-red-300 text-red-800",
        orange: "bg-orange-50 border-orange-300 text-orange-800",
        yellow: "bg-yellow-50 border-yellow-300 text-yellow-800",
        green: "bg-green-50 border-green-300 text-green-800"
    };

    return (
        <div className={`border-l-4 ${colorMap[color]} rounded-r-lg p-4`}>
            <h5 className="font-bold mb-2">{priority}</h5>
            <ul className="space-y-1 text-sm">
                {skills.map((skill, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1">•</span>
                        <span>{skill}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Action Plan - Rekomendasi Praktis
const ActionPlan: React.FC = () => (
    <div className="bg-linear-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-orange-700 mb-4">💡 Rencana Aksi Konkret untuk Mahasiswa</h3>

        <div className="space-y-4">
            <ActionPhase
                phase="Phase 1: Foundation (3-6 bulan)"
                items={[
                    "Master JavaScript ES6+: arrow functions, destructuring, async/await, promises",
                    "Bangun 3-5 project React.js: Todo app, Weather app, E-commerce product catalog",
                    "Learn Node.js + Express.js: Build REST API dengan CRUD operations",
                    "Database fundamentals: PostgreSQL schema design, basic queries, joins",
                    "Git mastery: Branching strategy, commit best practices, PR workflow",
                    "Praktik bahasa Inggris: Baca dokumentasi, tulis README yang baik"
                ]}
            />

            <ActionPhase
                phase="Phase 2: Intermediate (6-12 bulan)"
                items={[
                    "Full-stack project: Connect React frontend dengan Node.js backend + database",
                    "Implement authentication: JWT, OAuth, session management",
                    "Testing: Jest untuk unit testing, Supertest untuk API testing",
                    "Deploy ke cloud: Heroku (free tier), Vercel, atau Netlify",
                    "Learn TypeScript: Migrate salah satu project JavaScript ke TypeScript",
                    "Contribute to open source: Fix bugs, improve documentation",
                    "Build portfolio website: Showcase projects dengan case studies"
                ]}
            />

            <ActionPhase
                phase="Phase 3: Advanced (12+ bulan, preparing for job)"
                items={[
                    "Scalable architecture: Microservices, API gateway, caching strategies",
                    "CI/CD pipeline: GitHub Actions, automated testing & deployment",
                    "Cloud services: AWS S3 untuk storage, EC2 untuk hosting",
                    "Performance optimization: Query optimization, lazy loading, code splitting",
                    "Team collaboration: Join atau buat study group, code review sessions",
                    "Interview preparation: LeetCode (easy-medium), system design basics",
                    "Networking: LinkedIn optimization, attend tech meetups/webinars"
                ]}
            />
        </div>

        <div className="mt-6 p-4 bg-white rounded-lg border border-orange-200">
            <h4 className="font-bold text-orange-800 mb-2">📚 Recommended Learning Resources:</h4>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-700">
                <li>• FreeCodeCamp - Full Stack curriculum (free)</li>
                <li>• The Odin Project - Comprehensive roadmap (free)</li>
                <li>• Frontend Mentor - Real-world projects (free)</li>
                <li>• Roadmap.sh - Visual learning paths (free)</li>
                <li>• YouTube: Traversy Media, Net Ninja, Web Dev Simplified</li>
                <li>• Practice: LeetCode, HackerRank, Codewars</li>
            </ul>
        </div>
    </div>
);

// Action Phase Item
interface ActionPhaseProps {
    phase: string;
    items: string[];
}

const ActionPhase: React.FC<ActionPhaseProps> = ({ phase, items }) => (
    <div>
        <h4 className="font-bold text-orange-800 mb-2">{phase}</h4>
        <ul className="ml-6 space-y-1 text-sm text-gray-700">
            {items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">→</span>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

// Additional Insights
const AdditionalInsights: React.FC = () => (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-blue-800 mb-4">🔍 Insight Tambahan dari Analisis</h3>

        <div className="space-y-4 text-gray-700">
            <InsightItem
                title="1. Perbedaan Regional"
                content="Lowongan di Jakarta (60%) menawarkan gaji lebih tinggi dan tech stack lebih modern (React, AWS, microservices). Lowongan di daerah (Surabaya, Yogyakarta) lebih fokus pada PHP/Laravel dengan gaji lebih rendah namun entry barrier lebih rendah."
            />

            <InsightItem
                title="2. Remote Work Trends"
                content="3 dari 10 lowongan (30%) menawarkan remote/hybrid work, terutama untuk perusahaan startup dan international. Ini membuka peluang kandidat di luar Jakarta untuk berkompetisi dengan standar yang sama."
            />

            <InsightItem
                title="3. Pengalaman vs Gaji"
                content={
                    <ul className="list-disc ml-6 space-y-1 mt-2">
                        <li>Fresh Graduate (0-1 tahun): Rp 2.5-4 juta/bulan (Jogja Tama, PT Eksa)</li>
                        <li>Junior (1-3 tahun): Rp 6-9 juta/bulan (PT Higo, CBN, Goodeva)</li>
                        <li>Senior (3+ tahun): Rp 16-24 juta/bulan (Semaphore, Prestia, The Flex)</li>
                        <li>ROI: Dengan fokus belajar yang tepat, gaji bisa naik 3-4x dalam 3 tahun</li>
                    </ul>
                }
            />

            <InsightItem
                title="4. Company Culture Matters"
                content="Startup (Laku6, The Flex, Weshine) lebih menekankan ownership, adaptability, dan growth mindset. Corporate (Japfa, CBN) lebih structured, dengan clear requirements dan process-oriented."
            />

            <InsightItem
                title="5. Tech Stack Trends 2025"
                content={
                    <div className="mt-2">
                        <p className="mb-2">Berdasarkan frekuensi kemunculan:</p>
                        <div className="grid md:grid-cols-3 gap-2 text-sm">
                            <div className="bg-white p-2 rounded border">
                                <strong>Naik:</strong> TypeScript, Next.js, AWS, Microservices
                            </div>
                            <div className="bg-white p-2 rounded border">
                                <strong>Stabil:</strong> React, Node.js, PostgreSQL, Git
                            </div>
                            <div className="bg-white p-2 rounded border">
                                <strong>Turun:</strong> jQuery, PHP tanpa framework, Monolithic
                            </div>
                        </div>
                    </div>
                }
            />
        </div>
    </div>
);

// Insight Item
interface InsightItemProps {
    title: string;
    content: React.ReactNode;
}

const InsightItem: React.FC<InsightItemProps> = ({ title, content }) => (
    <div>
        <h4 className="font-bold text-blue-700 mb-1">{title}</h4>
        {typeof content === 'string' ? <p className="text-sm">{content}</p> : content}
    </div>
);

// Final Note
const FinalNote: React.FC = () => (
    <div className="mt-8 p-6 bg-linear-to-r from-gray-50 to-gray-100 rounded-lg border-2 border-gray-300">
        <h3 className="text-xl font-bold text-gray-800 mb-3">🎯 Kesimpulan Akhir</h3>
        <div className="space-y-3 text-gray-700">
            <p>
                <strong>Gap terbesar</strong> antara kampus dan industri terletak pada <span className="text-blue-600 font-semibold">praktik
                    profesional</span> (testing, CI/CD, cloud deployment, code review) dan <span className="text-blue-600 font-semibold">soft
                        skills</span> (komunikasi Inggris, kolaborasi lintas tim, ownership).
            </p>

            <p>
                <strong>Untuk sukses</strong> sebagai Fullstack Developer, mahasiswa perlu:
            </p>
            <ol className="list-decimal ml-6 space-y-1">
                <li>70% waktu fokus membangun <strong>portfolio project berkualitas</strong> dengan tech stack yang relevan</li>
                <li>20% waktu untuk <strong>mempelajari tools profesional</strong> (Git workflow, testing, deployment)</li>
                <li>10% waktu untuk <strong>networking dan soft skills</strong> (Inggris, komunikasi, personal branding)</li>
            </ol>

            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-300 rounded">
                <p className="text-sm italic">
                    <strong>💡 Pro Tip:</strong> Jangan menunggu sampai sempurna menguasai semua teknologi.
                    Mulai apply ke posisi junior ketika sudah bisa membangun full-stack application sederhana
                    (frontend + backend + database + deploy). Learning on the job adalah bagian dari journey
                    Fullstack Developer. Yang penting adalah demonstrasikan <strong>kemampuan belajar cepat</strong> dan
                    <strong>problem-solving mindset</strong> melalui portfolio.
                </p>
            </div>

            <p className="text-sm text-gray-600 mt-4">
                <strong>Catatan:</strong> Analisis ini berdasarkan 10 lowongan aktif per Oktober 2025 dari
                JobStreet, Glints, dan LinkedIn Indonesia. Landscape tech terus berkembang, jadi penting
                untuk terus update dengan trends terbaru melalui tech communities dan developer forums.
            </p>
        </div>
    </div>
);