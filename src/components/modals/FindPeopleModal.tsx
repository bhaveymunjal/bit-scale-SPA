import type { FC } from "react";
import { useEffect } from "react";
import { MaterialSymbolIcon } from "../ui/MaterialSymbolIcon/MaterialSymbolIcon";
import { Text } from "../ui/Text/Text";
import { Button } from "../ui/Button";
import { FilterAccordion } from "./FilterAccordion";
import { CircularButton } from "../ui/Button/CircularButton.tsx";
import { Table } from "../ui/Table";
import { peopleTableColumns } from "../../data/peopleTableColumns";
import { PeopleSearchEmptyState } from "../ui/EmptyState";

interface FindPeopleModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const FindPeopleModal: FC<FindPeopleModalProps> = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 animate-in fade-in duration-200 p-2 sm:p-4"
            onClick={handleBackdropClick}
        >
            <div className="bg-white w-full h-full sm:w-[95%] sm:h-[90vh] lg:w-5/6 lg:h-[85vh] rounded-lg sm:rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col">

                <div className='flex justify-between items-center pt-2 px-2 pb-2 sm:pt-3 sm:px-3 shrink-0'>
                    <div />
                    {/* Close Button */}
                    <CircularButton iconName='close' iconStyle={{fontSize: "12px"}} onClick={onClose} buttonClassName='bg-gray-200 shadow-none border-none' />
                </div>
                <div className="flex flex-col lg:flex-row flex-1 overflow-hidden min-h-0">
                    {/* Left Sidebar - Filters */}
                    <div className="w-full lg:w-80 flex flex-col shrink-0 max-h-[50vh] lg:max-h-none lg:h-full border-b lg:border-b-0 lg:border-r border-gray-200">
                        <div className="px-3 sm:pl-5 sm:pr-3 py-2 shrink-0">
                            <div className="flex items-center justify-between mb-3 sm:mb-4 text-gray-900">
                                <Text content="Find People" className="text-base sm:text-lg font-extrabold" as="p" />
                                <span className="bg-gray-100 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md text-[10px] sm:text-xs font-medium cursor-pointer hover:bg-gray-200 transition-colors flex items-center gap-1">
                                    Saved Search
                                    <MaterialSymbolIcon iconName="expand_more" className="!text-sm" />
                                </span>
                            </div>

                            {/* People Keyword Input */}
                            <div className="mb-3">
                                <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                                    <MaterialSymbolIcon iconName="person_search" className="text-gray-900 !text-lg" />
                                    <Text content="People Keyword" className="text-xs sm:text-sm font-medium text-gray-900" as="span" />
                                </div>
                                <div className="relative">
                                    <MaterialSymbolIcon iconName="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 !text-lg" />
                                    <input
                                        type="text"
                                        placeholder="Enter single keyword here..."
                                        className="w-full pl-8 sm:pl-9 pr-2 sm:pr-3 placeholder:text-gray-500 py-2 sm:py-2.5 border-b border-gray-200 text-xs sm:text-sm focus:border-blue-500 outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Scrollable Filter List */}
                        <div className="flex-1 overflow-y-auto px-3 sm:px-5 scrollbar-hide min-h-0 pb-2">
                            <FilterAccordion icon="work" label="Job Title" placeholder="E.g: Manager, Software Engineer" />
                            <FilterAccordion icon="language" label="Company Website" placeholder="Eg: Google.com, LinkedIn.com" />
                            <FilterAccordion icon="person_pin_circle" label="Person Location" placeholder="Eg: London, Great New York City" />
                            <FilterAccordion icon="location_on" label="Company Location" placeholder="E.g: United States, UAE" />
                            <FilterAccordion icon="groups" label="Company Headcount" placeholder="E.g: 11-50 , 10000+" />
                            <FilterAccordion icon="manage_accounts" label="Management Level" placeholder="E.g: Owner, Founder" />
                        </div>

                        {/* Sidebar Footer */}
                        <div className="p-2 sm:p-4 border-t border-gray-200 flex flex-wrap gap-2 sm:gap-3 bg-white mt-auto shrink-0">
                            <Button
                                label="Save Search"
                                leadingIconName="save"
                                variant="outlined"
                                onClick={() => {}}
                            />
                            <Button
                                label="Preview Result"
                                leadingIconName="visibility"
                                variant="filled"
                                onClick={() =>{}}
                            />
                        </div>
                    </div>

                    {/* Right Panel - Results/Empty State */}
                    <div className="flex-1 flex flex-col overflow-hidden px-2 sm:pr-8 min-h-0">
                        {/* Top Bar */}
                        <div className='flex justify-between mb-1 items-center shrink-0'>
                            <div />
                            <div className="flex items-center gap-1.5 sm:gap-2 bg-bit-light-orange text-bit-dark-orange px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full">
                                <MaterialSymbolIcon iconName="search" className="!text-sm" />
                                <span className='text-xs sm:text-sm font-medium'>8000/50000</span>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between shrink-0 mb-2 gap-1 sm:gap-0">
                            <Text 
                                content={"Found 0 people. Click preview to view results"}
                                className="text-[10px] sm:text-xs font-medium text-gray-600" 
                                as="p" 
                            />
                            <div className="flex items-center gap-0.5 sm:gap-1 text-bit-dark-orange text-[10px] sm:text-xs font-semibold">
                                <MaterialSymbolIcon iconName="lock_open" className="!text-sm" />
                                <span>Unlock 100,000 leads with Enterprise Plan*</span>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="flex-1 overflow-x-auto overflow-y-auto scrollbar-hide">
                            <Table
                                columns={peopleTableColumns}
                                data={[]}
                                emptyState={<PeopleSearchEmptyState />}
                                gridCols="grid-cols-6"
                                containerClassName="h-full min-w-[800px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
