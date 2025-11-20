export type ButtonVariant = "filled" | "outlined";

export const buttonVariantClasses: Record<ButtonVariant, string> = {
    filled: "bg-gray-800 text-white hover:bg-[#161B23]",
    outlined: "border border-gray-200 text-gray-800 bg-white hover:bg-[#F8F9FB]"
};

export const iconColorByVariant: Record<ButtonVariant, string> = {
    filled: "text-white",
    outlined: "text-[#7B61FF]"
};