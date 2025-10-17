'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";
import Image from "next/image";
import {NavItem} from "@/lib/types/navbar.type";

export const DEFAULT_NAV_ITEMS: NavItem[] = [
    {label: "Home", href: "/"},
    {label: "All Publications", href: "/publications"},
    {label: "Team Members", href: "/team"},
    {label: "Contact", href: "/contact"},
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className={"flex flex-col items-start justify-start gap-6 pt-6"}>
            <Link href="/" className={"w-full"}>
                <Image alt="RIML Logo" width={250} height={100} className={"w-full"} src="/images/logo.svg"/>
            </Link>

            <ul className={"w-full overflow-y-hidden"}>
                {DEFAULT_NAV_ITEMS.map(
                    (item, index) => <li key={`${index}-${item.label}`}
                                         className="border-gray-300 border-b-1 mx-8 py-4">
                        <Link
                            className={`p-4 w-full text-black ${item.href === pathname ? "font-bold" : "font-normal"}`}
                            href={item.href}>
                            {item.label}
                        </Link>
                    </li>
                )}
            </ul>
        </header>
    );
}
