"use client";

import { CompatLogo } from "@/assets/images";
import { cn } from "@/functions/cn";
import { LinksData } from "@/static/links";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MenuIcon } from "./Icon";

export function HamburgerMenu() {
    const [active, setActive] = useState(false);

    return (
        <>
            <button className="size-8 lg:hidden" onClick={() => setActive(true)}>
                <MenuIcon width={28} height={28} className="stroke-neutral-500" />
            </button>

            <div
                className={cn(
                    "fixed h-dvh w-full bg-white transition-transform duration-700 ease-in-out",
                    active ? "left-0 top-0 z-20" : "-translate-y-full",
                )}
            >
                <div className="flex min-h-full flex-col items-center justify-between p-8">
                    <div className="relative aspect-square w-[86px]">
                        <Image src={CompatLogo} alt="wide-logo-commercial" quality={100} fill />
                    </div>

                    <ul className="flex w-full flex-grow flex-col items-center justify-center space-y-8">
                        {LinksData.map((link) => (
                            <li key={`link-${link.id}`} className="text-lg text-neutral-700">
                                {link.download ? (
                                    <a href={link.download} download>
                                        {link.name}
                                    </a>
                                ) : (
                                    <Link
                                        prefetch
                                        href={link.path}
                                        onClick={() => setActive(false)}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    <button type="button" onClick={() => setActive(false)}>
                        <span className="text-lg text-red-600">Tutup</span>
                    </button>
                </div>
            </div>
        </>
    );
}
