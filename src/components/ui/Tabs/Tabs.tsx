import type { FC } from "react";
import { twMerge } from "tailwind-merge";

export interface Tab {
    id: string;
    label: string;
    disabled?: boolean;
}

interface TabsProps {
    tabs: Tab[];
    activeTab: string;
    onTabChange: (tabId: string) => void;
    className?: string;
    tabClassName?: string;
    activeTabClassName?: string;
    inactiveTabClassName?: string;
    variant?: "underline";
}

export const Tabs: FC<TabsProps> = ({
    tabs,
    activeTab,
    onTabChange,
    className,
    tabClassName,
    activeTabClassName,
    inactiveTabClassName,
}) => {
    const getVariantClasses = () => {
        return {
            container: "flex items-center gap-6 border-b border-gray-200",
            tab: "pb-3 border-b-2 font-medium text-sm transition-colors -mb-[2px] cursor-pointer",
            active: "border-blue-700 text-blue-700",
            inactive: "border-transparent text-gray-500",
            textWrapper: "px-4",
        };
    };

    const variantClasses = getVariantClasses();

    return (
        <div className={twMerge(variantClasses.container, className)}>
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => !tab.disabled && onTabChange(tab.id)}
                    disabled={tab.disabled}
                    className={twMerge(
                        variantClasses.tab,
                        activeTab === tab.id
                            ? twMerge(variantClasses.active, activeTabClassName)
                            : twMerge(variantClasses.inactive, inactiveTabClassName),
                        tab.disabled && "opacity-50 cursor-not-allowed",
                        tabClassName,
                    )}
                    aria-selected={activeTab === tab.id}
                    role="tab"
                >
                    <span className={variantClasses.textWrapper}>
                        {tab.label}
                    </span>
                </button>
            ))}
        </div>
    );
};
