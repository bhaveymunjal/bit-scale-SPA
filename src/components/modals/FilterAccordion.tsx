import { useState, type FC, type ReactNode } from "react";
import { MaterialSymbolIcon } from "../ui/MaterialSymbolIcon/MaterialSymbolIcon";
import { Text } from "../ui/Text/Text";

interface FilterAccordionProps {
    icon: string;
    label: string;
    placeholder?: string;
    children?: ReactNode;
}

export const FilterAccordion: FC<FilterAccordionProps> = ({ icon, label, placeholder, children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="border-b border-gray-100 last:border-0 py-3">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between cursor-pointer"
            >
                <div>
                    <div className="flex items-center gap-2 text-gray-900">
                        <MaterialSymbolIcon iconName={icon} className="!text-lg" />
                        <Text content={label} className="text-sm font-medium " as="span" />
                    </div>
                    {!isOpen && placeholder && (
                        <div className="mt-1">
                            <Text content={placeholder} className="text-xs text-gray-500 truncate" as="p" />
                        </div>
                    )}
                </div>
                <MaterialSymbolIcon
                    iconName="expand_more"
                    className={`text-gray-900 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>

            {isOpen && (
                <div className="mt-2">
                    {children || (
                        <input
                            type="text"
                            placeholder={placeholder}
                            className="w-full text-sm p-2 border border-gray-200 rounded-lg focus:border-blue-500 outline-none"
                        />
                    )}
                </div>
            )}
        </div>
    );
};
