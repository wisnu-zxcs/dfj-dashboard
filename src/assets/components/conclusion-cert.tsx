import type { FC } from "react";
import { TrendingUp, Award } from "lucide-react";
import { AnalysisBlock } from "./block-analysis";

export const Conclusion: FC = () => {
    return (
        <div className="bg-linear-to-r from-orange-50 to-red-50 rounded-lg shadow-lg p-8 border-2 border-orange-300">
            <h2 className="text-2xl font-bold text-orange-800 mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 mr-3" />
                Kesimpulan & Analisis Relevansi
            </h2>
            <div className="space-y-6">
                <AnalysisBlock title="1. Relevansi dengan Kebutuhan Industri">
                    Skema sertifikasi <strong>“Pengembang Web Pratama”</strong> sangat relevan
                    dengan kebutuhan industri saat ini. Berdasarkan analisis 11 lowongan kerja
                    Fullstack Developer pada Tugas 5, <strong>100% perusahaan</strong> membutuhkan
                    kemampuan yang tercakup dalam 6 unit kompetensi ini — terutama implementasi UI
                    (React, HTML/CSS), pemrograman terstruktur (JavaScript), dan penggunaan library
                    modern. Unit kompetensi ini sejalan dengan tech stack paling populer:
                    <strong> React.js (82%)</strong>, <strong>Node.js (73%)</strong>, dan best
                    practices coding (100%).
                </AnalysisBlock>
                <AnalysisBlock title="2. Pentingnya bagi Lulusan TI">
                    Sertifikasi BNSP ini <strong>sangat penting dan strategis</strong> bagi lulusan
                    TI yang ingin berkarier sebagai Web Developer karena tiga alasan utama:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>
                            Memberikan pengakuan formal kompetensi yang diakui nasional dan dapat
                            diverifikasi secara online
                        </li>
                        <li>
                            Meningkatkan daya saing di pasar kerja karena 64% lowongan entry-level
                            menyebutkan sertifikasi sebagai nilai tambah
                        </li>
                        <li>
                            Memvalidasi kemampuan praktis melalui uji demonstrasi sesuai kebutuhan
                            industri nyata
                        </li>
                    </ul>
                </AnalysisBlock>
                <AnalysisBlock title="3. Gap Analysis: Kampus vs Sertifikasi">
                    <p className="mb-2">
                        <strong>Kekuatan Sertifikasi BNSP:</strong> Fokus pada skills praktis dan
                        employability (coding standards, best practices, library integration) yang
                        sering kurang ditekankan di kampus.
                    </p>
                    <p className="mb-2">
                        <strong>Komplementer dengan Pendidikan Formal:</strong> Kampus memberikan
                        foundation teoritis (algoritma, struktur data, software engineering), sementara
                        sertifikasi BNSP memvalidasi kemampuan implementasi praktis yang langsung
                        applicable di industri.
                    </p>
                    <p>
                        <strong>ROI (Return on Investment):</strong> Dengan biaya Rp 1–1.5 juta dan
                        masa berlaku 3 tahun, sertifikasi ini sangat cost-effective. Data menunjukkan
                        fresh graduate dengan sertifikasi BNSP memiliki starting salary{" "}
                        <strong>15–20% lebih tinggi</strong> dibanding non-certified.
                    </p>
                </AnalysisBlock>
                <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-3 flex items-center">
                        <Award className="w-6 h-6 mr-2" />
                        Rekomendasi Strategi
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                            <span className="font-bold">→</span>
                            <span>
                                Ambil sertifikasi ini di semester 6–7 setelah menguasai fundamental
                                programming
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="font-bold">→</span>
                            <span>Persiapkan portofolio 3–5 web projects untuk memperkuat asesmen</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="font-bold">→</span>
                            <span>
                                Kombinasikan dengan sertifikasi vendor (AWS, React) untuk memaksimalkan nilai di CV
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="font-bold">→</span>
                            <span>
                                Update sertifikat setiap 3 tahun untuk tetap relevan dengan perkembangan
                                teknologi
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}