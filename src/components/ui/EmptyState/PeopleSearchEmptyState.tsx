import type { FC } from "react";
import { MaterialSymbolIcon } from "../MaterialSymbolIcon/MaterialSymbolIcon";
import { Text } from "../Text/Text";

export const PeopleSearchEmptyState: FC = () => {
    return (
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-48 h-48 mb-6 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                    <MaterialSymbolIcon iconName="checklist" className="!text-9xl text-blue-100" />
                </div>
            </div>

            <div className="max-w-md text-xs text-gray-400 font-medium">
                <Text
                    content="Start your Company search , preview, and import companies for enrichment by applying any filter in the left panel."
                    as="p"
                />
                <Text content="OR" as="span" />
                <Text
                    content="Import companies from saved Search."
                    as="p"
                />
            </div>
        </div>
    );
};
