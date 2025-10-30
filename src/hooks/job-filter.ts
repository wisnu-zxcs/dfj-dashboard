import { useMemo } from "react";
import type { Job } from "../types/job";

export interface JobFilters {
    search: string;
    experienceLevel: string;
    location: string;
    source: string;
}

export function useJobFilters(jobs: Job[], filters: JobFilters): Job[] {
    return useMemo(() => {
        return jobs.filter((job) => {
            // Search filter (company name or role)
            if (filters.search) {
                const searchLower = filters.search.toLowerCase();
                const matchesSearch =
                    job.company.toLowerCase().includes(searchLower) ||
                    job.role.toLowerCase().includes(searchLower);
                if (!matchesSearch) return false;
            }

            // Experience level filter
            if (filters.experienceLevel && filters.experienceLevel !== "all") {
                if (!job.experience.includes(filters.experienceLevel)) return false;
            }

            // Location filter
            if (filters.location && filters.location !== "all") {
                if (!job.location.includes(filters.location)) return false;
            }

            // Source filter
            if (filters.source && filters.source !== "all") {
                if (job.source !== filters.source) return false;
            }

            return true;
        });
    }, [jobs, filters]);
}