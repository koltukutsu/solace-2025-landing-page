import React from 'react';

const Badge = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
    return (
        <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors ${className}`}>
            {children}
        </span>
    );
};

export { Badge }; 