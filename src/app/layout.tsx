import type {Metadata} from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/ui/components/navbar/navbar.component";
import NavbarMobile from "@/ui/components/navbar/navbar-mobile.component";

export const metadata: Metadata = {
    title: "RIML Lab Website",
    description: "Robust and Interpretable Machine Learning",
};

const libreFranklin = localFont({
    display: 'swap',
    src: [
        {
            path: '../../public/fonts/LibreFranklin-Thin-Regular.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../../public/fonts/LibreFranklin-Thin-Medium.woff2',
            weight: '500',
            style: 'normal'
        },
        {
            path: '../../public/fonts/LibreFranklin-Thin-Bold.woff2',
            weight: '700',
            style: 'normal'
        }
    ],
    variable: "--font-libreFranklin",
})


export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={libreFranklin.className}>
        <body className="min-h-dvh">
        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] lg:grid-cols-[320px_1fr]">
            <aside className="hidden md:block sticky top-0 h-screen border-r bg-gray-100">
                <Navbar/>
            </aside>
            <main className="h-300">
                <NavbarMobile/>
                {children}
            </main>
        </div>
        </body>
        </html>
    );
}

