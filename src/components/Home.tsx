import {Header} from "./header/Header.tsx";
import {DashboardWidgets} from "./dashboard/DashboardWidgets.tsx";
import {GridTable} from "./dashboard/GridTable.tsx";
import {FindPeopleModal} from "./modals/FindPeopleModal.tsx";
import {useState} from "react";

export const Home = () => {
    const [isPeopleModalOpen, setIsPeopleModalOpen] = useState<boolean>(false);
    return (
        <main className="flex-1 overflow-y-auto h-full p-3 sm:p-5">
            {/* Header Section */}
            <Header onButtonClick={() => setIsPeopleModalOpen(true)} />

            {/* Widgets Row */}
            <DashboardWidgets />

            {/* Table Section */}
            <GridTable />

            <FindPeopleModal
                isOpen={isPeopleModalOpen}
                onClose={() => setIsPeopleModalOpen(false)}
            />
        </main>
    );
};
