import type { FC } from "react";
import { FileText, AlertCircle } from "lucide-react";
import { certificationData } from "../data/cert-schema-data";
import { InfoCard } from "./card-info";

export const SchemeInfo: FC = () => {
    const infoList = [
        { label: "Nama Skema", value: certificationData.namaSkema, highlight: true },
        { label: "Kode Skema", value: certificationData.kodeSkema },
        { label: "Jenis Skema", value: certificationData.jenisSkema },
        { label: "Lembaga Pelaksana Uji (LSP)", value: certificationData.lsp },
        { label: "Status Lisensi", value: certificationData.lisensiLSP },
        { label: "Rujukan SKKNI", value: certificationData.rujukanSKKNI },
        { label: "Level KKNI", value: certificationData.levelKKNI },
        { label: "Masa Berlaku Sertifikat", value: certificationData.masaBerlaku },
        { label: "Estimasi Biaya", value: certificationData.biayaEstimasi, highlight: true },
        {
            label: "Jumlah Unit Kompetensi",
            value: `${certificationData.unitKompetensi.length} Unit`,
        },
    ] as const;

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-blue-600" />
                Informasi Skema Sertifikasi
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
                {infoList.map((info, index) => (
                    <InfoCard key={index} {...info} />
                ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-2 flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    Tentang LSP Teknologi Digital
                </h3>
                <p className="text-sm text-gray-700">
                    LSP Teknologi Digital adalah Lembaga Sertifikasi Profesi yang telah terlisensi BNSP untuk menyelenggarakan Uji Kompetensi di bidang Teknologi Informasi dan Komunikasi (TIK). LSP ini berwenang menerbitkan sertifikat kompetensi yang diakui secara nasional berdasarkan Standar Kompetensi Kerja Nasional Indonesia (SKKNI).
                </p>
            </div>
        </div>
    )
}