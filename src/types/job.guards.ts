import type { Job } from "./job";

/**
 * Type guard for Job object
 */
export function isJob(value: unknown): value is Job {
    if (typeof value !== 'object' || value === null) return false;

    const job = value as Record<string, unknown>;

    return (
        typeof job.id === 'number' &&
        typeof job.company === 'string' &&
        typeof job.role === 'string' &&
        Array.isArray(job.hardSkills) &&
        Array.isArray(job.softSkills)
    );
}

/**
 * Type guard for array of Jobs
 */
export function isJobArray(value: unknown): value is Job[] {
    return Array.isArray(value) && value.every(isJob);
}