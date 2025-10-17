'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";
import Image from "next/image";
import {useState} from "react";
import {DEFAULT_NAV_ITEMS} from "@/ui/components/navbar/navbar.component";
import MaterialSymbolsLightMenuOpenRounded from "@/ui/icons/MaterialSymbolsLightMenuOpenRounded";
import MaterialSymbolsLightMenuRounded from "@/ui/icons/MaterialSymbolsLightMenuRounded";

export default function NavbarMobile() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="md:hidden w-full bg-white shadow-md top-0 left-0 z-50">
            <div className="flex items-center justify-between px-4 py-3">
                <Link href="/" className="flex items-center">
                    <Image
                        alt="RIML Logo"
                        width={120}
                        height={50}
                        src="/images/logo.svg"
                        className="h-auto w-auto"
                    />
                </Link>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-gray-700 focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <MaterialSymbolsLightMenuOpenRounded className={"text-3xl text-black"}/> :
                        <MaterialSymbolsLightMenuRounded className={"text-3xl text-black"}/>}
                </button>
            </div>

            <div
                className={`flex flex-col bg-white transition-all duration-300 ease-in-out overflow-hidden ${
                    menuOpen ? "max-h-96 border-t border-gray-200" : "max-h-0"
                }`}
            >
                <ul className="flex flex-col">
                    {DEFAULT_NAV_ITEMS.map((item, index) => (
                        <li
                            key={`${index}-${item.label}`}
                            className="border-b border-gray-200"
                            onClick={() => setMenuOpen(false)}
                        >
                            <Link
                                className={`block px-6 py-4 text-black ${
                                    item.href === pathname ? "font-bold" : "font-normal"
                                }`}
                                href={item.href}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
