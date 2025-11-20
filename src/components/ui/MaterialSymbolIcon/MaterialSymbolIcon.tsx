import type {CSSProperties, FC} from 'react';
import { twMerge } from 'tailwind-merge';

interface MaterialSymbolIconProps {
    iconName?: string;
    className?: string;
    style?: CSSProperties;
}

const defaultClasses = 'material-symbols-outlined';

export const MaterialSymbolIcon: FC<MaterialSymbolIconProps> = ({ iconName, className, style }) => {
    if (!iconName) return null;
    const mergedClassName = twMerge(defaultClasses, className);
    return <span className={mergedClassName} style={style}>{iconName}</span>;
};
