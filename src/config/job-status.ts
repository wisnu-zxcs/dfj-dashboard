import type { ColorScheme } from "./color-schemes";
import { Briefcase, FileText, Globe, GraduationCap } from "lucide-react";

export const STATUS_CONFIG = {
    "Full Time": {
        color: "success" as ColorScheme,
        icon: Briefcase,
    },
    "Part Time": {
        color: "warning" as ColorScheme,
        icon: Briefcase,
    },
    "Contract": {
        color: "primary" as ColorScheme,
        icon: FileText,
    },
    "Internship": {
        color: "secondary" as ColorScheme,
        icon: GraduationCap,
    },
    "Freelance": {
        color: "gray" as ColorScheme,
        icon: Globe,
    },
} as const;