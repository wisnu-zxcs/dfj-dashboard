import { Award, Briefcase, Code, DollarSign, FileText, Globe, GraduationCap, MapPin, TrendingUp, Users } from "lucide-react";

export const ICON_MAP = {
    location: MapPin,
    briefcase: Briefcase,
    experience: TrendingUp,
    salary: DollarSign,
    education: GraduationCap,
    hardSkills: Code,
    softSkills: Users,
    certification: Award,
    document: FileText,
    globe: Globe,
} as const;