import './globals.css';
import type { Metadata } from 'next';
import SideBar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
    title: 'Ez Snippet',
    description: 'Learning made EZ',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <div className="flex w-screen">
                    <SideBar />
                    <main className="flex-1 m-5 mt-0 pl-[300px]">
                        <Navbar />
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
