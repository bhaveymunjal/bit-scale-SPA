import type { ImgHTMLAttributes, FC } from "react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type FallbackType = "placeholder" | "initials";

interface ImageWrapperProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
    src?: string;
    fallbackType?: FallbackType;
    fallbackText?: string;
    fallbackPlaceholder?: string;
    fallbackClassName?: string;
    containerClassName?: string;
}

export const ImageWrapper: FC<ImageWrapperProps> = ({
    src,
    alt = "",
    fallbackType = "initials",
    fallbackText,
    fallbackPlaceholder = "/placeholder-avatar.png",
    fallbackClassName,
    containerClassName,
    className,
    ...imgProps
}) => {
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const handleError = () => {
        setHasError(true);
        setIsLoading(false);
    };

    const handleLoad = () => {
        setIsLoading(false);
    };

    // Get initials from fallbackText (first character or first letter of each word)
    const getInitials = (text?: string): string => {
        if (!text) return "?";
        
        const words = text.trim().split(/\s+/);
        if (words.length === 1) {
            return text.charAt(0).toUpperCase();
        }
        
        return words
            .slice(0, 2)
            .map(word => word.charAt(0).toUpperCase())
            .join("");
    };

    // Generate a consistent background color based on the text
    const getBackgroundColor = (text?: string): string => {
        if (!text) return "bg-gray-300";
        
        const colors = [
            "bg-blue-500",
            "bg-green-500",
            "bg-yellow-500",
            "bg-red-500",
            "bg-purple-500",
            "bg-pink-500",
            "bg-indigo-500",
            "bg-cyan-500",
            "bg-orange-500",
            "bg-teal-500",
        ];
        
        // Generate a hash from the text to consistently pick a color
        let hash = 0;
        for (let i = 0; i < text.length; i++) {
            hash = text.charCodeAt(i) + ((hash << 5) - hash);
        }
        
        return colors[Math.abs(hash) % colors.length];
    };

    // If there's an error or no src, show fallback
    if (!src || hasError) {
        if (fallbackType === "placeholder") {
            return (
                <div className={twMerge("relative overflow-hidden", containerClassName)}>
                    <img
                        src={fallbackPlaceholder}
                        alt={alt}
                        className={twMerge(className, fallbackClassName)}
                        {...imgProps}
                    />
                </div>
            );
        }

        // Initials fallback
        const initials = getInitials(fallbackText || alt);
        const bgColor = getBackgroundColor(fallbackText || alt);
        
        return (
            <div
                className={twMerge(
                    "flex items-center justify-center text-white font-semibold select-none",
                    bgColor,
                    className,
                    fallbackClassName
                )}
                aria-label={alt}
            >
                {initials}
            </div>
        );
    }

    // Show the image
    return (
        <div className={twMerge("relative overflow-hidden", containerClassName)}>
            {isLoading && (
                <div
                    className={twMerge(
                        "absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse",
                        className
                    )}
                />
            )}
            <img
                src={src}
                alt={alt}
                className={twMerge(className, isLoading && "opacity-0")}
                onError={handleError}
                onLoad={handleLoad}
                {...imgProps}
            />
        </div>
    );
};
