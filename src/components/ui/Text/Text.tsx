import React from 'react';

interface TextProps {
    content?: string;
    className?: string;
    as?: 'p' | 'span' | 'div' | 'label';
}

export const Text: React.FC<TextProps> = ({ content, className, as: Component = 'p' }) => {
    if (!content) return null;
    return <Component className={className}>{content}</Component>;
};
