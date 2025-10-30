import type { TabConfig } from "../types/ui.tabs";
import { cn } from "../utils/styles";
import type { FC, ReactNode } from "react";

interface TabNavigationProps {
    tabs: TabConfig[];
    activeTab: string;
    onChange: (tabKey: string) => void;
    className?: string;
}

interface TabButtonProps {
    label: string;
    icon?: ReactNode;
    isActive: boolean;
    onClick: () => void;
}

const TabButton: FC<TabButtonProps> = ({
    label,
    icon,
    isActive,
    onClick,
}) => (
    <button
        onClick={onClick}
        className={cn(
            "px-6 py-3 rounded-md font-medium transition-all duration-200 inline-flex items-center gap-2",
            isActive
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
        )}
    >
        {icon}
        <span>{label}</span>
    </button>
)

export const TabNavigation: FC<TabNavigationProps> = ({
    tabs,
    activeTab,
    onChange,
    className,
}) => (
    <nav className={cn("flex justify-center mb-8", className)}>
        <div className="bg-white rounded-lg shadow-md p-1 inline-flex">
            {tabs.map(({ key, label, icon: Icon }) => (
                <TabButton
                    key={key}
                    label={label}
                    icon={Icon}
                    isActive={activeTab === key}
                    onClick={() => onChange(key)}
                />
            ))}
        </div>
    </nav>
)