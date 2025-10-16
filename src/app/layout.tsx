import type {Metadata} from "next";
import "./globals.css";
import localFont from "next/font/local";

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
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={libreFranklin.className}>
        <body>
        {children}
        </body>
        </html>
    );
}
