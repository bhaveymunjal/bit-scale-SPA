import {Header} from "./header/Header.tsx";
import {DashboardWidgets} from "./dashboard/DashboardWidgets.tsx";
import {GridTable} from "./dashboard/GridTable.tsx";

export const Home = () => {
    return (
        <main className="flex-1 overflow-y-auto h-full p-3 sm:p-5">
            {/* Header Section */}
            <Header />

            {/* Widgets Row */}
            <DashboardWidgets />

            {/* Table Section */}
            <GridTable />
        </main>
    );
};
