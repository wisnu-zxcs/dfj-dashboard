import type { BaseEntity } from "./core.entity";
import type { ExperienceLevel, JobSource, JobStatus } from "./job.enums";

export interface Job extends BaseEntity {
    company: string;
    role: string;
    status: JobStatus;
    experience: ExperienceLevel;
    salary: string;
    hardSkills: string[];
    softSkills: string[];
    education: string;
    certification: string;
    location: string;
    source: JobSource;
    logoUrl: string;
    qrUrl: string;
    siteUrl: string;
}