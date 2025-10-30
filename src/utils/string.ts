/**
 * Truncates text to specified length with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength)}...`;
}

/**
 * Capitalizes first letter of each word
 */
export function capitalizeWords(text: string): string {
    return text.replace(/\b\w/g, (char) => char.toUpperCase());
}

/**
 * Converts string to kebab-case
 */
export function toKebabCase(text: string): string {
    return text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
}

/**
 * Generates initials from name (e.g., "John Doe" -> "JD")
 */
export function getInitials(name: string, maxLength = 2): string {
    return name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()
        .slice(0, maxLength);
}