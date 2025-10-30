import type { FC, ElementType } from "react";

export interface HeaderInfoCard {
    icon: ElementType;
    title: string;
    value: string;
}

export interface HeaderProps {
    title: string;
    subtitle?: string;
    mainIcon?: ElementType;
    infoCards?: readonly HeaderInfoCard[];
    gradientFrom?: string;
    gradientVia?: string;
    gradientTo?: string;
}

export const Header: FC<HeaderProps> = ({
    title,
    subtitle,
    mainIcon: MainIcon,
    infoCards = []
}) => {
    return (
        <div className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-8 rounded-lg shadow-xl mb-8">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h1 className="text-4xl font-bold mb-2">{title}</h1>
                    {subtitle && <p className="text-xl text-blue-100">{subtitle}</p>}
                </div>
                {MainIcon && <MainIcon className="w-20 h-20 text-white opacity-80" />}
            </div>

            {infoCards.length > 0 && (
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                    {infoCards.map(({ icon: Icon, title, value }, index) => (
                        <div
                            key={index}
                            className="bg-white bg-opacity-20 p-4 rounded-lg transition-all"
                        >
                            <div className="flex items-center mb-2">
                                <Icon className="w-5 h-5 mr-2" />
                                <span className="font-semibold">{title}</span>
                            </div>
                            <p className="text-sm">{value}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}