import type { Job } from "../types/job";
import { unique } from "./array";

/**
 * Filters jobs by experience level
 */
export function filterByExperience(
    jobs: Job[],
    level: string
): Job[] {
    return jobs.filter((job) => job.experience.includes(level));
}

/**
 * Sorts jobs by salary (descending)
 */
export function sortBySalary(jobs: Job[]): Job[] {
    return [...jobs].sort((a, b) => {
        const salaryA = extractSalaryNumber(a.salary);
        const salaryB = extractSalaryNumber(b.salary);
        return salaryB - salaryA;
    });
}

/**
 * Extracts numeric value from salary string
 */
export function extractSalaryNumber(salary: string): number {
    const match = salary.match(/[\d.,]+/);
    if (!match) return 0;
    return parseFloat(match[0].replace(/[.,]/g, ""));
}

/**
 * Gets all unique skills from jobs
 */
export function getAllSkills(
    jobs: Job[],
    type: "hardSkills" | "softSkills"
): string[] {
    const allSkills = jobs.flatMap((job) => job[type]);
    return unique(allSkills);
}

/**
 * Counts skill frequency across jobs
 */
export function countSkillFrequency(
    jobs: Job[],
    type: "hardSkills" | "softSkills"
): Record<string, number> {
    const skills = getAllSkills(jobs, type);

    return skills.reduce((acc, skill) => {
        acc[skill] = jobs.filter((job) =>
            job[type].includes(skill)
        ).length;
        return acc;
    }, {} as Record<string, number>);
}

/**
 * Gets top N most frequent skills
 */
export function getTopSkills(
    jobs: Job[],
    type: "hardSkills" | "softSkills",
    count: number
): Array<{ skill: string; frequency: number }> {
    const frequency = countSkillFrequency(jobs, type);

    return Object.entries(frequency)
        .map(([skill, freq]) => ({ skill, frequency: freq }))
        .sort((a, b) => b.frequency - a.frequency)
        .slice(0, count);
}