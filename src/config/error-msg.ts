export const ERROR_MESSAGES = {
    INVALID_JOB: "Invalid job data provided",
    MISSING_FIELD: (field: string) => `Required field missing: ${field}`,
    NETWORK_ERROR: "Failed to fetch data. Please try again.",
    NO_RESULTS: "No jobs found matching your criteria",
} as const;