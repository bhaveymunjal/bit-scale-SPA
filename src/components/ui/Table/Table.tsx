import type { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface TableColumn<T = any> {
    key: string;
    header: string;
    render?: (row: T) => ReactNode;
    className?: string;
    headerClassName?: string;
}

export interface TableProps<T = any> {
    columns: TableColumn<T>[];
    data: T[];
    emptyState?: ReactNode;
    headerClassName?: string;
    rowClassName?: string | ((row: T, index: number) => string);
    containerClassName?: string;
    gridCols?: string; // e.g., "grid-cols-6"
}

export const Table: FC<TableProps> = ({
    columns,
    data,
    emptyState,
    headerClassName,
    rowClassName,
    containerClassName,
    gridCols = `grid-cols-${columns.length}`,
}) => {
    const getRowClassName = (row: any, index: number): string => {
        if (typeof rowClassName === "function") {
            return rowClassName(row, index);
        }
        return rowClassName || "";
    };

    return (
        <div className={twMerge("flex flex-col h-full", containerClassName)}>
            {/* Table Header */}
            <div
                className={twMerge(
                    "bg-gray-50 px-6 py-3 grid gap-4 text-xs font-semibold text-gray-500 uppercase tracking-wide shrink-0",
                    gridCols,
                    headerClassName
                )}
            >
                {columns.map((column) => (
                    <div
                        key={column.key}
                        className={twMerge("col-span-1", column.headerClassName)}
                    >
                        {column.header}
                    </div>
                ))}
            </div>

            {/* Table Body */}
            {data.length === 0 ? (
                <div className="flex-1 overflow-y-auto">
                    {emptyState || (
                        <div className="flex items-center justify-center h-full text-gray-500 text-sm">
                            No data available
                        </div>
                    )}
                </div>
            ) : (
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {data.map((row, index) => (
                        <div
                            key={index}
                            className={twMerge(
                                "px-6 py-4 grid gap-4 border-b border-gray-100 hover:bg-gray-50 transition-colors",
                                gridCols,
                                getRowClassName(row, index)
                            )}
                        >
                            {columns.map((column) => (
                                <div
                                    key={column.key}
                                    className={twMerge(
                                        "col-span-1 text-sm text-gray-700 flex items-center",
                                        column.className
                                    )}
                                >
                                    {column.render
                                        ? column.render(row)
                                        : row[column.key]}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
