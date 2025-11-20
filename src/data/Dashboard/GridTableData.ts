export interface GridItem {
    id: number;
    name: string;
    owner: string;
    date: string;
    type: string;
    isStarred: boolean;
}

export const gridTableData: GridItem[] = [
    { id: 1, name: "Workbook - Testing design Ideas for grid and workbook", owner: "Sam Taylor", date: "06 Aug, 2025", type: "folder_group", isStarred: false },
    { id: 2, name: "LinkedIn", owner: "Chris Parker", date: "06 Aug, 2025", type: "linkedin", isStarred: false },
    { id: 3, name: "Sales nav", owner: "Jone Doe", date: "06 Aug, 2025", type: "sales_nav", isStarred: false },
    { id: 4, name: "find company", owner: "Alex Morgan", date: "06 Aug, 2025", type: "company", isStarred: true },
    { id: 5, name: "import csv", owner: "Drew Wilson", date: "06 Aug, 2025", type: "csv", isStarred: true },
    { id: 6, name: "Find people", owner: "Jone Doe", date: "06 Aug, 2025", type: "people", isStarred: true },
    { id: 7, name: "Google maps", owner: "Jone Doe", date: "06 Aug, 2025", type: "maps", isStarred: false },
    { id: 8, name: "google search results", owner: "Jone Doe", date: "06 Aug, 2025", type: "search", isStarred: false },
    { id: 9, name: "factors", owner: "Jone Doe", date: "06 Aug, 2025", type: "factors", isStarred: false },
    { id: 10, name: "Hubspot List - 10 (05 Aug 25)", owner: "Jone Doe", date: "06 Aug, 2025", type: "hubspot", isStarred: true },
];
