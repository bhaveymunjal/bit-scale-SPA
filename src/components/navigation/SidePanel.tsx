import type { FC } from "react";
import { Text } from "../ui/Text/Text";
import { NavigationItem } from "./NavigationItem";
import { MaterialSymbolIcon } from "../ui/MaterialSymbolIcon/MaterialSymbolIcon";
import { ImageWrapper } from "../ui/ImageWrapper/ImageWrapper";
import type { NavigationData } from "./types";

interface SidePanelProps {
    navigationData: NavigationData;
    onNavigate?: (href: string) => void;
}

export const SidePanel: FC<SidePanelProps> = ({ navigationData, onNavigate }) => {
    return (
        <aside className="w-60 h-screen bg-white border-r border-border-light flex flex-col shrink-0 font-sans">
            {/* Header: Logo & Workspace Selector */}
            <div>
                <div className="px-5 h-16 border-b border-border-light flex items-center">
                    <ImageWrapper
                        src="/logo.svg"
                        alt="Bitscale"
                        fallbackType="initials"
                        fallbackText="Bitscale"
                        className="h-6 w-auto"
                    />
                </div>

                <button className="w-full flex items-center justify-between px-5 py-4 border-b border-border-light hover:bg-gray-50 transition-colors text-left group">
                    <div className="flex items-center gap-2 overflow-hidden">
                        <ImageWrapper
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=GTM"
                            alt="GTM Spaces"
                            fallbackType="initials"
                            fallbackText="GTM Spaces"
                            className="w-6 h-6 rounded-full text-xs shrink-0"
                        />
                        <Text content="GTM Spaces" className="text-sm font-medium text-gray-700 truncate" as="span" />
                    </div>
                    <MaterialSymbolIcon iconName="unfold_more" className="text-gray-400 !text-lg group-hover:text-gray-600" />
                </button>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 overflow-y-auto py-2 px-4 flex flex-col gap-6">
                {navigationData.map((section, index) => (
                    <nav key={index} className="flex flex-col gap-1">
                        {section.section && (
                            <Text
                                content={section.section}
                                className="text-xs font-medium text-gray-400 px-3 mb-2 uppercase tracking-wider"
                                as="span"
                            />
                        )}
                        <div className="flex flex-col gap-0.5">
                            {section.items.map((item) => (
                                <NavigationItem
                                    key={item.id}
                                    item={item}
                                    onClick={onNavigate}
                                />
                            ))}
                        </div>
                    </nav>
                ))}
            </div>

            {/* Footer: Support */}
            <div className="p-2 border-t border-gray-100">
                <button className="flex items-start gap-3 w-full px-3 py-4 text-gray-600 bg-gray-100  text-left">
                    <div className="flex flex-col gap-1">
                        <ImageWrapper
                            src="/logo.svg"
                            alt="Bitscale"
                            fallbackType="initials"
                            fallbackText="Bitscale"
                            className="h-4"
                        />
                        <Text content="Get Support at Bitscale" className="text-xs text-gray-600" as="span" />
                    </div>
                    <MaterialSymbolIcon iconName="expand_less" style={{fontSize: "16px"}} className="text-gray-800 ml-auto" />
                </button>
            </div>
        </aside>
    );
};
