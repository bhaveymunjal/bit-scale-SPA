export type SortDirection = 'asc' | 'desc';

export interface SortConfig {
    key: string;
    direction: SortDirection;
}

/**
 * Normalizes a value for comparison (converts strings to lowercase)
 */
const normalizeValue = (value: any): any => {
    if (typeof value === 'string') {
        return value.toLowerCase();
    }
    return value;
};

/**
 * Generic sort function that handles case-insensitive string comparison
 */
export const sortData = <T extends Record<string, any>>(
    data: T[],
    sortConfig: SortConfig | null
): T[] => {
    if (!sortConfig) return data;

    return [...data].sort((a, b) => {
        const { key, direction } = sortConfig;

        const aValue = normalizeValue(a[key]);
        const bValue = normalizeValue(b[key]);

        if (aValue < bValue) return direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return direction === 'asc' ? 1 : -1;
        return 0;
    });
};

/**
 * Toggles sort direction or sets a new sort key
 */
export const toggleSortDirection = (
    currentConfig: SortConfig | null,
    key: string
): SortConfig => {
    let direction: SortDirection = 'asc';
    
    if (currentConfig && currentConfig.key === key && currentConfig.direction === 'asc') {
        direction = 'desc';
    }
    
    return { key, direction };
};
