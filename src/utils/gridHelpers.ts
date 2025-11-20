import type { GridItem } from "../data/Dashboard/GridTableData";

/**
 * Filters grid items by starred status
 */
export const filterByStarred = (data: GridItem[]): GridItem[] => {
    return data.filter(item => item.isStarred);
};

/**
 * Toggles the starred status of a grid item by ID
 */
export const toggleItemStar = (data: GridItem[], id: number): GridItem[] => {
    return data.map(item =>
        item.id === id ? { ...item, isStarred: !item.isStarred } : item
    );
};

/**
 * Generates avatar URL for a given name
 */
export const getAvatarUrl = (name: string): string => {
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`;
};
