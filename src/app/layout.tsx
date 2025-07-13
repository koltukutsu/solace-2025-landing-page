import type { ReactNode } from 'react';
import '@/app/globals.css';

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <html>
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
