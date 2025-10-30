/**
 * Gets first N items from array safely
 */
export function takeFirst<T>(array: T[], count: number): T[] {
    return array.slice(0, Math.max(0, count));
}

/**
 * Removes duplicates from array
 */
export function unique<T>(array: T[]): T[] {
    return [...new Set(array)];
}

/**
 * Groups array by key
 */
export function groupBy<T>(
    array: T[],
    key: keyof T
): Record<string, T[]> {
    return array.reduce((result, item) => {
        const groupKey = String(item[key]);
        if (!result[groupKey]) {
            result[groupKey] = [];
        }
        result[groupKey].push(item);
        return result;
    }, {} as Record<string, T[]>);
}

/**
 * Safely gets item by index with fallback
 */
export function getItemAt<T>(
    array: T[],
    index: number,
    fallback: T
): T {
    return array[index] ?? fallback;
}