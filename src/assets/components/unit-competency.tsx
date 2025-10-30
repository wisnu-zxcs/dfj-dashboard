import { useState, type FC } from "react";
import { CheckCircle, Target } from "lucide-react";
import type { UnitKompetensi } from "../types/cert-schema-types";
import { certificationData } from "../data/cert-schema-data";
import { UnitDetail } from "./unit-detail";

export const UnitKompetensiSection: FC = () => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const priorityUnits: readonly UnitKompetensi[] = certificationData.unitKompetensi
        .filter((unit) => unit.priority <= 3)
        .sort((a, b) => a.priority - b.priority);

    const handleSelect = (index: number): void => {
        setSelectedIndex(index);
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Target className="w-6 h-6 mr-3 text-green-600" />
                3 Unit Kompetensi Inti (Paling Penting)
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
                {priorityUnits.map((unit, index) => {
                    const isActive = selectedIndex === index;

                    return (
                        <button
                            key={unit.kode}
                            type="button"
                            onClick={() => handleSelect(index)}
                            className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${isActive
                                ? "border-blue-600 bg-blue-50 shadow-md"
                                : "border-gray-200 hover:border-blue-300"
                                }`}
                        >
                            <div className="flex items-start justify-between mb-2">
                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-bold ${isActive
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 text-gray-700"
                                        }`}
                                >
                                    Unit {index + 1}
                                </span>
                                <CheckCircle
                                    className={`w-5 h-5 ${isActive ? "text-blue-600" : "text-gray-400"
                                        }`}
                                />
                            </div>
                            <h3 className="font-bold text-sm text-gray-800 mb-1">
                                {unit.judul}
                            </h3>
                            <p className="text-xs text-gray-600">{unit.kode}</p>
                            <div className="mt-2">
                                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                                    {unit.kategori}
                                </span>
                            </div>
                        </button>
                    )
                })}
            </div>
            <UnitDetail unit={priorityUnits[selectedIndex]} />
        </div>
    )
}