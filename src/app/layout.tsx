import type {Metadata} from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/ui/components/navbar/navbar.component";
import NavbarMobile from "@/ui/components/navbar/navbar-mobile.component";
import QueryProvider from "@/lib/providers/react-query.provider";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
    title: "Robust and Interpretable Machine Learning",
    description: "Robust and Interpretable Machine Learning Laboratory Website.",
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
        <NextTopLoader showSpinner={false} color={"var(--color-secondary)"}/>
        <QueryProvider>
            <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] lg:grid-cols-[320px_1fr]">
                <div className="hidden md:block sticky top-0 h-screen bg-gray-100">
                    <Navbar/>
                </div>
                <div>
                    <NavbarMobile/>
                    <main className={"container"}>
                        {children}
                    </main>
                </div>
            </div>
        </QueryProvider>
        </body>
        </html>
    );
}

