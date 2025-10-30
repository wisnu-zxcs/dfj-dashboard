import { useMemo } from "react";
import type { Job } from "../types/job";

export type SortOption = "company" | "salary" | "experience" | "location";
export type SortOrder = "asc" | "desc";

export function useJobSort(
    jobs: Job[],
    sortBy: SortOption,
    sortOrder: SortOrder = "asc"
): Job[] {
    return useMemo(() => {
        const sorted = [...jobs].sort((a, b) => {
            let comparison = 0;

            switch (sortBy) {
                case "company":
                    comparison = a.company.localeCompare(b.company);
                    break;
                case "salary":
                    // Extract numeric value from salary string for comparison
                    const salaryA = parseFloat(a.salary.match(/[\d.]+/)?.[0] || "0");
                    const salaryB = parseFloat(b.salary.match(/[\d.]+/)?.[0] || "0");
                    comparison = salaryA - salaryB;
                    break;
                case "experience":
                    comparison = a.experience.localeCompare(b.experience);
                    break;
                case "location":
                    comparison = a.location.localeCompare(b.location);
                    break;
            }

            return sortOrder === "asc" ? comparison : -comparison;
        });

        return sorted;
    }, [jobs, sortBy, sortOrder]);
}