import { COLOR_SCHEMES, type ColorScheme } from "../config/color-schemes";

/**
 * Combines multiple CSS class names
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(" ");
}

/**
 * Gets color classes from color scheme
 */
export function getColorClasses(color: ColorScheme) {
    return COLOR_SCHEMES[color];
}

/**
 * Generates gradient background class
 */
export function getGradient(from: string, to: string): string {
    return `bg-gradient-to-r from-${from} to-${to}`;
}