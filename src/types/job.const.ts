import type { ExperienceLevel, JobSource, JobStatus } from "./job.enums";

/**
 * Valid job statuses
 */
export const JOB_STATUSES: readonly JobStatus[] = [
    "Full Time",
    "Part Time",
    "Contract",
    "Internship",
    "Freelance"
] as const;

/**
 * Valid experience levels
 */
export const EXPERIENCE_LEVELS: readonly ExperienceLevel[] = [
    "Intern / Fresh Graduate (0-1 tahun)",
    "Junior / Entry-level (1-3 tahun)",
    "Mid-level (3-5 tahun)",
    "Senior (3+ tahun)",
    "Lead / Principal (5+ tahun)"
] as const;

/**
 * Valid job sources
 */
export const JOB_SOURCES: readonly JobSource[] = [
    "JobStreet",
    "Glints",
    "LinkedIn",
    "Indeed",
    "Kalibrr",
    "Other"
] as const;