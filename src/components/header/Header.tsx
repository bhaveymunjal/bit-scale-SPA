import {Text} from "../ui/Text/Text.tsx";
import {Button} from "../ui/Button";

export const Header = () => {
    return (
        <div className="flex items-start justify-between mb-5 flex-wrap gap-5">
            <div>
                <Text content="Welcome back, Tim!" className="text-lg font-semibold text-gray-800 mb-1" as="p" />
                <Text content="Here's your daily scoop on Bitscale!" className="text-sm text-gray-500" as="p" />
            </div>
            {/* Actions Bar */}
            <div className="flex justify-end gap-3">
                <Button label="Find Companies" leadingIconName="apartment" variant="outlined" onClick={() => {}} />
                <Button label="Find People" leadingIconName="person_search" variant="outlined" onClick={() => {}} />
                <Button label="New Grid" leadingIconName="add" variant="filled" onClick={() => {}} />
            </div>
        </div>
    );
};
