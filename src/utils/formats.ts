/**
 * Formats salary with Indonesian Rupiah format
 */
export function formatSalary(amount: number): string {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}

/**
 * Formats date to Indonesian locale
 */
export function formatDate(date: Date | string): string {
    const dateObj = typeof date === "string" ? new Date(date) : date;

    return new Intl.DateTimeFormat("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(dateObj);
}

/**
 * Formats number with thousands separator
 */
export function formatNumber(num: number): string {
    return new Intl.NumberFormat("id-ID").format(num);
}