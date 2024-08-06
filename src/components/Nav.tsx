"use client";

import { WideLogo } from "@/assets/images";
import { cn } from "@/functions/cn";
import { LinksData } from "@/static/links";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HamburgerMenu } from "./HamburgerMenu";

export default function Nav() {
    const path = usePathname();
    const isContactPage = path.includes("contact");

    return (
        <nav
            className={cn(
                "relative flex items-center justify-center overflow-hidden bg-white px-6",
                isContactPage && "border-b border-neutral-100",
            )}
        >
            <div
                className={
                    "flex h-[100px] w-full max-w-screen-lg items-center justify-between lg:h-[120px] xl:max-w-screen-xl"
                }
            >
                <div className="relative w-[160px] lg:w-[220px]">
                    <Image
                        src={WideLogo}
                        alt="wide-logo-commercial"
                        className="h-auto w-full"
                        quality={100}
                    />
                </div>

                {/* display -- desktop */}
                <ul className="relative z-20 hidden items-center space-x-2 lg:flex">
                    {LinksData.map((link) => (
                        <li
                            key={`link-${link.id}`}
                            className={cn(
                                "flex items-center justify-center rounded-full px-4 py-2 text-neutral-700 transition-colors duration-300 ease-in-out",
                                isContactPage ? "hover:bg-white" : "hover:bg-neutral-100",
                            )}
                        >
                            {link.id === 4 ? (
                                <a
                                    href={link.path}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-1"
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link prefetch href={link.path} className="mt-1">
                                    {link.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                {/* display -- mobile */}
                <HamburgerMenu />
            </div>
        </nav>
    );
}
