import type { FC } from "react";
import { MaterialSymbolIcon } from "../ui/MaterialSymbolIcon/MaterialSymbolIcon";
import { Text } from "../ui/Text/Text";
import { Badge } from "../ui/Badge";
import type { NavigationItemType } from "./types";
import {twMerge} from "tailwind-merge";

interface NavigationItemProps {
    item: NavigationItemType;
    onClick?: (href: string) => void;
}

export const NavigationItem: FC<NavigationItemProps> = ({ item, onClick }) => {
    const { label, icon, href, active, disabled, badge } = item;

    const baseClasses = "flex items-center justify-between w-full px-3 py-2 rounded-lg cursor-pointer";
    const stateClasses = disabled
        ? "cursor-not-allowed"
        : active
        ? "bg-gray-100"
        : "text-[#4B5563] hover:bg-gray-100";

    const handleClick = () => {
        if (!disabled && onClick) {
            onClick(href);
        }
    };

    return (
        <button
            onClick={handleClick}
            disabled={disabled}
            className={twMerge(baseClasses, stateClasses)}
        >
            <div className="flex items-center gap-2">
                <MaterialSymbolIcon
                    iconName={icon}
                    className={`!text-base ${active ? "text-blue-700" : "text-gray-500"} ${disabled ? "opacity-50" : ""}`}
                />
                <Text content={label} className={`text-sm ${active ? "text-blue-700 font-medium" : "text-gray-800"} ${disabled ? "opacity-50" : ""}`} as="span" />
            </div>
            {badge && <Badge icon={badge.icon} label={badge.label} variant={badge.variant} />}
        </button>
    );
};
