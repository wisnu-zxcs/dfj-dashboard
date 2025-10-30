import type { FC } from "react";
import { Users, CheckCircle, GraduationCap } from "lucide-react";
import { certificationData } from "../data/cert-schema-data";
import { IconList } from "./icon-list";

export const AssessmentMethod: FC = () => {
    const metodeAsesmenItems = certificationData.metodePenilaian.map((metode) => ({
        icon: <CheckCircle className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />,
        content: metode,
    }))

    const persyaratanItems = certificationData.persyaratan.map((syarat) => ({
        icon: <GraduationCap className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />,
        content: syarat,
    }))

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-purple-600" />
                Metode Penilaian & Persyaratan
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
                <IconList
                    title="Metode Asesmen"
                    titleClass="text-purple-700"
                    itemBgClass="bg-purple-50"
                    items={metodeAsesmenItems}
                />
                <IconList
                    title="Persyaratan Peserta"
                    titleClass="text-blue-700"
                    itemBgClass="bg-blue-50"
                    items={persyaratanItems}
                />
            </div>
        </div>
    )
}