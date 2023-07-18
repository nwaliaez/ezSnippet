import './globals.css';
import type { Metadata } from 'next';
import SideBar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import { ContactFormProvider, MenuProvider } from '@/components/Provider';

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
                <MenuProvider>
                    <ContactFormProvider>
                        <ContactForm />
                        <div className="flex">
                            <SideBar />
                            <main className="flex-1 md:m-5 mt-0 pl-0 lg:pl-[300px]">
                                <Navbar />
                                {children}
                            </main>
                        </div>
                    </ContactFormProvider>
                </MenuProvider>
            </body>
        </html>
    );
}
