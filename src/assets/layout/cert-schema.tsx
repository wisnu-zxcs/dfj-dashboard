import type { FC } from "react";
import { BookOpen, Building2, CheckCircle, Award } from "lucide-react";
import { Header } from "../components/header";
import { SchemeInfo } from "../components/info-cert-schema";
import { UnitKompetensiSection } from "../components/unit-competency";
import { AssessmentMethod } from "../components/assessment-method";
import { ComparisonTable } from "../components/comparison-table";
import { ConnectionToTask5 } from "../components/relation-to-task5";
import { Conclusion } from "../components/conclusion-cert";

export const CertificateSchemaPage: FC = () => {
    const infoCards = [
        {
            icon: BookOpen,
            title: "Profesi Terpilih",
            value: "Junior Web Developer (Full Stack)",
        },
        {
            icon: Building2,
            title: "Lembaga Sertifikasi",
            value: "LSP Teknologi Digital",
        },
        {
            icon: CheckCircle,
            title: "Status Lisensi",
            value: "Terlisensi BNSP Resmi",
        },
    ] as const;

    return (
        <main className="max-w-5xl mx-auto py-12 px-4 md:px-8">
            <Header
                title="Tugas 6: Analisis Skema SKKNI & Sertifikasi BNSP"
                subtitle="Standardisasi Profesi di Bidang Teknologi Informasi"
                mainIcon={Award}
                gradientFrom="blue-600"
                gradientVia="indigo-600"
                gradientTo="purple-600"
                infoCards={infoCards}
            />
            <SchemeInfo />
            <UnitKompetensiSection />
            <AssessmentMethod />
            <ComparisonTable />
            <ConnectionToTask5 />
            <Conclusion />
        </main>
    )
}