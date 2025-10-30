import type { FC } from "react";
import { CheckCircle } from "lucide-react";
import type { UnitKompetensi } from "../types/cert-schema-types";

interface UnitDetailProps {
    unit: UnitKompetensi;
}

export const UnitDetail: FC<UnitDetailProps> = ({ unit }) => {
    return (
        <div className="border-t-2 border-gray-200 pt-6">
            <div className="bg-linear-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{unit.judul}</h3>
                <p className="text-sm text-gray-600 mb-3">
                    Kode Unit:{" "}
                    <span className="font-semibold text-gray-800">{unit.kode}</span>
                </p>
                <p className="text-gray-700 mb-4">{unit.deskripsi}</p>
                <div className="flex flex-wrap gap-2">
                    {unit.teknologi.map((tech) => (
                        <span
                            key={tech}
                            className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 border border-gray-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            <div className="bg-white border-2 border-green-200 rounded-lg p-6">
                <h4 className="font-bold text-green-800 text-lg mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Kriteria Unjuk Kerja (KUK)
                </h4>
                <p className="text-sm text-gray-600 mb-4 italic">
                    Berikut adalah bukti/hasil kerja yang dapat diukur untuk membuktikan kompetensi dalam unit ini:
                </p>
                <ol className="space-y-3">
                    {unit.kuk.map((kriteria, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <span className="bg-green-600 text-white font-bold px-3 py-1 rounded-full text-sm min-w-10 text-center">
                                {idx + 1}
                            </span>
                            <span className="text-gray-700 flex-1 pt-1">{kriteria}</span>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}