import type {CSSProperties, FC} from "react";
import {twMerge} from "tailwind-merge";
import {MaterialSymbolIcon} from "../MaterialSymbolIcon/MaterialSymbolIcon.tsx";

interface CircularButtonProps {
    iconName: string;
    iconClassName?: string;
    iconStyle?: CSSProperties;
    buttonClassName?: string;
    onClick?: () => void
}

export const CircularButton: FC<CircularButtonProps> = ({iconName, iconClassName, iconStyle, buttonClassName, onClick}) => {
    const defaultClassName = 'p-1 border border-bit-light-gray shadow-[2px_2px_4px_0px_#0000000A] rounded-full flex justify-center items-center'
    return (
        <button onClick={onClick} className={twMerge(defaultClassName, buttonClassName)}>
            <MaterialSymbolIcon
                iconName={iconName}
                className={iconClassName}
                style={iconStyle}
            />
        </button>
    );
};
