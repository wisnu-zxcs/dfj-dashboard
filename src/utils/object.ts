/**
 * Deep clones an object
 */
export function deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * Safely gets nested object property
 */
export function getNestedValue<T>(
    obj: any,
    path: string,
    defaultValue?: T
): T | undefined {
    const keys = path.split(".");
    let result = obj;

    for (const key of keys) {
        if (result?.[key] === undefined) {
            return defaultValue;
        }
        result = result[key];
    }

    return result as T;
}

/**
 * Omits specified keys from object
 */
export function omit<T extends object, K extends keyof T>(
    obj: T,
    keys: K[]
): Omit<T, K> {
    const result = { ...obj };
    keys.forEach((key) => delete result[key]);
    return result;
}

/**
 * Picks specified keys from object
 */
export function pick<T extends object, K extends keyof T>(
    obj: T,
    keys: K[]
): Pick<T, K> {
    return keys.reduce((acc, key) => {
        if (key in obj) {
            acc[key] = obj[key];
        }
        return acc;
    }, {} as Pick<T, K>);
}