import type { TabConfig } from "../types/ui.tabs";

export const TAB_KEYS = {
    CARDS: "cards",
    TABLE: "table",
    CONCLUSION: "conclusion",
} as const;

export type TabKey = typeof TAB_KEYS[keyof typeof TAB_KEYS];

export const NAVIGATION_TABS: TabConfig[] = [
    {
        key: TAB_KEYS.CARDS,
        label: "Detail Lowongan",
    },
    {
        key: TAB_KEYS.TABLE,
        label: "Tabel Perbandingan",
    },
    {
        key: TAB_KEYS.CONCLUSION,
        label: "Kesimpulan",
    },
];