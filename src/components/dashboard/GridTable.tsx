import { useState } from "react";
import { MaterialSymbolIcon } from "../ui/MaterialSymbolIcon/MaterialSymbolIcon";
import { Text } from "../ui/Text/Text";
import { CircularButton } from "../ui/Button/CircularButton";
import { ImageWrapper } from "../ui/ImageWrapper/ImageWrapper";
import { Tabs, type Tab } from "../ui/Tabs/Tabs";
import { getGridIconConfig } from "../../utils/gridIcon";
import { gridTableData } from "../../data/Dashboard/GridTableData";
import { sortData, toggleSortDirection, type SortConfig } from "../../utils/sorting";
import { filterByStarred, toggleItemStar, getAvatarUrl } from "../../utils/gridHelpers";

const tabs: Tab[] = [
    { id: "grids", label: "My Grids" },
    { id: "starred", label: "Starred" },
];

export const GridTable = () => {
    const [gridData, setGridData] = useState(gridTableData); // State for data
    const [activeTab, setActiveTab] = useState<string>("grids");
    const [sortConfig, setSortConfig] = useState<SortConfig | null>({ key: 'name', direction: 'asc' });

    // Toggle Star Functionality
    const toggleStar = (id: number) => {
        setGridData(prevData => toggleItemStar(prevData, id));
    };

    // Filtering logic based on tab
    const filteredData = activeTab === "starred"
        ? filterByStarred(gridData)
        : gridData;

    // Sorting logic
    const sortedData = sortData(filteredData, sortConfig);

    const handleSort = (key: string) => {
        setSortConfig(toggleSortDirection(sortConfig, key));
    };

    const renderIcon = (type: string) => {
        const iconConfig = getGridIconConfig(type);
        return (
            <CircularButton
                buttonClassName='rounded-lg'
                iconName={iconConfig.iconName}
                iconClassName={iconConfig.className}
                iconStyle={{ fontSize: "16px" }}
            />
        );
    };

    return (
        <div className="flex flex-col gap-4 bg-white rounded-lg">
            {/* Controls */}
            <div className="flex items-center justify-between flex-wrap gap-4">
                <Tabs
                    tabs={tabs}
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    variant="underline"
                    className="w-full md:w-auto"
                />

                <div className="flex items-center gap-2 ml-auto">
                    <div className="relative">
                        <MaterialSymbolIcon iconName="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 !text-lg" />
                        <input
                            type="text"
                            placeholder="Search grids and workbooks..."
                            className="pl-9 pr-4 py-2 bg-gray-100 border border-transparent focus:bg-white focus:border-gray-200 rounded-xl text-sm w-64 outline-none transition-all"
                        />
                    </div>
                    <CircularButton
                        iconName="format_list_bulleted"
                        iconClassName="text-gray-700"
                        iconStyle={{ fontSize: "18px" }}
                        buttonClassName="bg-gray-100 hover:bg-gray-200 border-none cursor-pointer p-2"
                    />
                </div>
            </div>

            {/* Table */}
            <div className="w-full overflow-x-auto">
                <div className="min-w-[700px]">
                {/* Header */}
                <div className="grid grid-cols-[1fr_150px_150px_50px] px-4 py-2 border-b border-gray-100 bg-white">
                    <button
                        onClick={() => handleSort('name')}
                        className="flex items-center gap-1 cursor-pointer group hover:bg-gray-50 rounded py-1 -ml-1 px-1 w-fit"
                    >
                        <Text content="Name" className="text-xs font-medium text-gray-500" as="span" />
                        <MaterialSymbolIcon
                            iconName="arrow_upward"
                            className={`!text-xs text-gray-400 transition-transform duration-200 ${
                                sortConfig?.key === 'name'
                                    ? (sortConfig.direction === 'asc' ? 'opacity-100' : 'opacity-100 rotate-180')
                                    : 'opacity-0 group-hover:opacity-100'
                            }`}
                        />
                    </button>
                    <Text content="Edited by" className="text-xs font-medium text-gray-500 py-1" as="p" />
                    <Text content="Last edited" className="text-xs font-medium text-gray-500 py-1" as="p" />
                    <Text content="Actions" className="text-xs font-medium text-gray-500 text-center py-1" as="p" />
                </div>

                {/* Rows */}
                <div className="flex flex-col">
                    {sortedData.length > 0 ? sortedData.map((row) => (
                        <div key={row.id} className="grid grid-cols-[1fr_150px_150px_50px] px-4 py-3 hover:bg-gray-50 items-center border-b border-gray-50 last:border-0 group transition-colors cursor-default">
                            <div className="flex items-center gap-3 min-w-0 overflow-hidden">
                                {/* Chevron */}
                                {row.type === 'folder_group' ? (
                                    <button className="text-gray-400 hover:text-gray-600">
                                        <MaterialSymbolIcon iconName="expand_more" className="!text-lg" />
                                    </button>
                                ) : (
                                    <div className="w-[18px]" />
                                )}

                                {/* Star Icon - Now Interactive */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation(); // Prevent row click event
                                        toggleStar(row.id);
                                    }}
                                    className={`hover:scale-110 transition-transform ${row.isStarred ? "text-yellow-400" : "text-gray-300 hover:text-gray-400"}`}
                                >
                                    <MaterialSymbolIcon
                                        iconName={row.isStarred ? "star" : "star"}
                                        className={`!text-lg ${!row.isStarred && "material-symbols-outlined"}`}
                                    />
                                </button>

                                {/* File Icon */}
                                <div className="shrink-0">
                                    {renderIcon(row.type)}
                                </div>

                                <Text content={row.name} className="text-sm text-gray-700 font-medium truncate min-w-0" as="span" />
                            </div>

                            <div className="flex items-center gap-2 min-w-0">
                                <ImageWrapper
                                    src={getAvatarUrl(row.owner)}
                                    alt={row.owner}
                                    fallbackType="initials"
                                    fallbackText={row.owner}
                                    className="w-6 h-6 rounded-full text-[10px] shrink-0"
                                />
                                <Text content={row.owner} className="text-sm text-gray-600 truncate" as="span" />
                            </div>

                            <Text content={row.date} className="text-sm text-gray-500" as="div" />

                            <div className="text-center">
                                <button className="rounded-md text-gray-500 transition-colors cursor-pointer">
                                    <MaterialSymbolIcon iconName="more_horiz" />
                                </button>
                            </div>
                        </div>
                    )) : (
                        <div className="py-8 text-center text-gray-500 text-sm">
                            No items found in {activeTab === 'grids' ? 'My Grids' : 'Starred'}.
                        </div>
                    )}
                </div>
                </div>
            </div>
        </div>
    );
};
