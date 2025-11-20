import type { FC } from "react";
import {MaterialSymbolIcon} from "../MaterialSymbolIcon/MaterialSymbolIcon.tsx";
import {Text} from "../Text/Text.tsx";
import {
    type ButtonVariant,
    buttonVariantClasses,
    iconColorByVariant
} from "./buttonVariants";

interface ButtonProps {
    label: string;
    onClick: () => void;
    leadingIconName?: string;
    variant?: ButtonVariant;
}

export const Button: FC<ButtonProps> = ({
    label,
    onClick,
    leadingIconName,
    variant = 'outlined',
}) => {
    const baseClasses =
        "inline-flex items-center gap-2 rounded-lg px-3 py-2 cursor-pointer ";

    return (
        <button
            onClick={onClick}
            className={`${baseClasses} ${buttonVariantClasses[variant]}`}
        >
            <MaterialSymbolIcon
                iconName={leadingIconName}
                className={`${iconColorByVariant[variant]} !text-base`}
            />

            <Text content={label} className="font-medium text-xs" />
        </button>
    );
};