import type { FC } from "react";
import { MaterialSymbolIcon } from "../MaterialSymbolIcon/MaterialSymbolIcon";
import { Text } from "../Text/Text";

interface BadgeProps {
    label?: string;
    icon?: string;
    variant?: "soft" | "success"; // Added success
}

export const Badge: FC<BadgeProps> = ({ label, icon, variant = "soft" }) => {
    const variantClasses = {
        soft: "bg-bit-light-yellow text-bit-dark-yellow",
        success: "bg-bit-dark-green text-white",
    }[variant];

    return (
        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-xl text-xs font-medium ${variantClasses}`}>
            {icon && <MaterialSymbolIcon iconName={icon} className="!text-xs" />}
            <Text content={label} as="span" />
        </span>
    );
};