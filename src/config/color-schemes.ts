export const COLOR_SCHEMES = {
    primary: {
        bg: "bg-blue-600",
        text: "text-blue-600",
        border: "border-blue-600",
        hover: "hover:bg-blue-700",
        light: "bg-blue-50",
    },
    secondary: {
        bg: "bg-purple-600",
        text: "text-purple-600",
        border: "border-purple-600",
        hover: "hover:bg-purple-700",
        light: "bg-purple-50",
    },
    success: {
        bg: "bg-green-600",
        text: "text-green-600",
        border: "border-green-600",
        hover: "hover:bg-green-700",
        light: "bg-green-50",
    },
    warning: {
        bg: "bg-orange-600",
        text: "text-orange-600",
        border: "border-orange-600",
        hover: "hover:bg-orange-700",
        light: "bg-orange-50",
    },
    danger: {
        bg: "bg-red-600",
        text: "text-red-600",
        border: "border-red-600",
        hover: "hover:bg-red-700",
        light: "bg-red-50",
    },
    gray: {
        bg: "bg-gray-600",
        text: "text-gray-600",
        border: "border-gray-600",
        hover: "hover:bg-gray-700",
        light: "bg-gray-50",
    },
} as const;

export type ColorScheme = keyof typeof COLOR_SCHEMES;