export const REGEX_PATTERNS = {
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    URL: /^https?:\/\/.+/,
    PHONE: /^(\+62|62|0)[0-9]{9,12}$/,
    SALARY: /Rp\s?[\d.,]+/,
} as const;