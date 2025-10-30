export const UI_CONSTANTS = {
    // Animation durations (ms)
    ANIMATION: {
        FAST: 150,
        NORMAL: 300,
        SLOW: 500,
    },

    // Breakpoints (following Tailwind defaults)
    BREAKPOINTS: {
        SM: 640,
        MD: 768,
        LG: 1024,
        XL: 1280,
        "2XL": 1536,
    },

    // Spacing scale
    SPACING: {
        XS: "0.5rem",
        SM: "1rem",
        MD: "1.5rem",
        LG: "2rem",
        XL: "3rem",
    },

    // Max items to display
    MAX_DISPLAY: {
        HARD_SKILLS: 3,
        SOFT_SKILLS: 2,
        RECENT_JOBS: 5,
    },
} as const;