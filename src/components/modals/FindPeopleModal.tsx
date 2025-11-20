import type { FC } from "react";
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
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 animate-in fade-in duration-200">
            <div className="bg-white w-5/6 h-[85vh] rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">

                <div className='flex justify-between items-center pt-3 px-3 pb-2'>
                    <div />
                    {/* Close Button */}
                    <CircularButton iconName='close' iconStyle={{fontSize: "12px"}} onClick={onClose} buttonClassName='bg-gray-200 shadow-none border-none' />
                </div>
                <div className="flex h-full">
                    {/* Left Sidebar - Filters */}
                    <div className="w-80 flex flex-col shrink-0 h-full">
                        <div className="pl-5 pr-3">
                            <div className="flex items-center justify-between mb-6 text-gray-900">
                                <Text content="Find People" className="text-lg font-extrabold" as="p" />
                                <span className="bg-gray-100 px-2 py-1 rounded-md text-xs font-medium  cursor-pointer hover:bg-gray-200 transition-colors flex items-center gap-1">
                                    Saved Search
                                    <MaterialSymbolIcon iconName="expand_more" className="!text-sm" />
                                </span>
                            </div>

                            {/* People Keyword Input */}
                            <div className="mb-4">
                                <div className="flex items-center gap-2 mb-1">
                                    <MaterialSymbolIcon iconName="person_search" className="text-gray-900 !text-lg" />
                                    <Text content="People Keyword" className="text-sm font-medium text-gray-900" as="span" />
                                </div>
                                <div className="relative">
                                    <MaterialSymbolIcon iconName="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 !text-lg" />
                                    <input
                                        type="text"
                                        placeholder="Enter single keyword here..."
                                        className="w-full pl-9 pr-3 placeholder:text-gray-500 py-2.5 border-b border-gray-200 text-sm focus:border-blue-500 outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Scrollable Filter List */}
                        <div className="overflow-y-auto px-5 custom-scrollbar">
                            <FilterAccordion icon="work" label="Job Title" placeholder="E.g: Manager, Software Engineer" />
                            <FilterAccordion icon="language" label="Company Website" placeholder="Eg: Google.com, LinkedIn.com" />
                            <FilterAccordion icon="person_pin_circle" label="Person Location" placeholder="Eg: London, Great New York City" />
                            <FilterAccordion icon="location_on" label="Company Location" placeholder="E.g: United States, UAE" />
                            <FilterAccordion icon="groups" label="Company Headcount" placeholder="E.g: 11-50 , 10000+" />
                            <FilterAccordion icon="manage_accounts" label="Management Level" placeholder="E.g: Owner, Founder" />
                        </div>

                        {/* Sidebar Footer */}
                        <div className="p-4 border-t border-gray-200 flex gap-3 bg-white">
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
                    <div className="flex-1 flex flex-col h-full overflow-x-auto pr-8">
                        {/* Top Bar */}
                        <div className='flex justify-between mb-1'>
                            <div />
                            <div className="flex items-center gap-2 bg-bit-light-orange text-bit-dark-orange px-2.5 py-1 rounded-full">
                                <MaterialSymbolIcon iconName="search" className="!text-sm" />
                                <span className='text-sm font-medium'>8000/50000</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between shrink-0 mb-2">
                            <Text 
                                content={"Found 0 people. Click preview to view results"}
                                className="text-xs font-medium text-gray-600" 
                                as="p" 
                            />
                            <div className="flex items-center gap-1 text-bit-dark-orange text-xs font-semibold">
                                <MaterialSymbolIcon iconName="lock_open" className="!text-sm" />
                                <span>Unlock 100,000 leads with Enterprise Plan*</span>
                            </div>
                        </div>

                        {/* Table */}
                        <Table
                            columns={peopleTableColumns}
                            data={[]}
                            emptyState={<PeopleSearchEmptyState />}
                            gridCols="grid-cols-6"
                            containerClassName="flex-1"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
