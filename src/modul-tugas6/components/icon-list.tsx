import type { FC, ReactNode } from "react";

export interface IconListItem {
    icon: ReactNode;
    content: ReactNode;
}

export interface IconListProps {
    title: string;
    titleClass?: string;
    itemBgClass?: string;
    items: readonly IconListItem[];
}

export const IconList: FC<IconListProps> = ({ title, items }) => {
    return (
        <div>
            <h3 className="font-bold mb-4 text-gray-800">{title}</h3>
            <ul className="space-y-3">
                {items.map((item, idx) => (
                    <li
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-lg bg-gray-50"
                    >
                        {item.icon}
                        <span className="text-gray-700 text-sm">{item.content}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}