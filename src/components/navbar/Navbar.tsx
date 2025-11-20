import type { FC } from "react";
import {MaterialSymbolIcon} from "../ui/MaterialSymbolIcon/MaterialSymbolIcon.tsx";
import {Text} from "../ui/Text/Text.tsx";
import {Badge} from "../ui/Badge";
import {ImageWrapper} from "../ui/ImageWrapper/ImageWrapper.tsx";

interface NavbarProps {
    onMenuClick?: () => void;
}

export const Navbar: FC<NavbarProps> = ({ onMenuClick }) => {
    return (
        <div className='flex justify-between items-center h-16 border-b border-gray-200 px-5'>
            {/* Mobile menu button */}
            <button
                onClick={onMenuClick}
                className="lg:hidden flex items-center justify-center"
                aria-label="Toggle menu"
            >
                <MaterialSymbolIcon iconName="menu" className="text-gray-700" />
            </button>
            
            {/* Desktop spacer */}
            <div className="hidden lg:block" />
            
            <div className="flex items-center gap-2 sm:gap-4">
                {/* Credit Usage Pill - Hidden on small mobile */}
                <div className="hidden sm:flex bg-bit-light-green border border-green-100 pl-3 pr-2 py-1.5 rounded-xl items-center gap-3">
                    <MaterialSymbolIcon iconName="database" className="text-bit-dark-green !text-lg" />
                    <Text content="450000/550000" className="text-sm text-medium text-bit-dark-green" />
                    <Badge label="Booster Plan" variant="success" />
                </div>

                {/* Avatar */}
                <ImageWrapper
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Tim"
                    alt="Tim"
                    fallbackType="initials"
                    fallbackText="Tim"
                    className="w-8 h-8 rounded-full text-xs"
                />
            </div>
        </div>
    );
};
