import { WideLogo } from "@/assets/images";
import { LinksData } from "@/static/links";
import Image from "next/image";
import Link from "next/link";
import { HamburgerMenu } from "./HamburgerMenu";

export default function Nav() {
    return (
        <nav className="flex items-center justify-center bg-white px-6">
            <div className="flex h-[100px] w-full max-w-screen-lg items-center justify-between border-b lg:h-[120px] xl:max-w-screen-xl">
                <div className="relative w-[160px] lg:w-[220px]">
                    <Image
                        src={WideLogo}
                        alt="wide-logo-commercial"
                        className="h-auto w-full"
                        quality={100}
                    />
                </div>

                {/* display -- desktop */}
                <ul className="hidden items-center space-x-2 lg:flex">
                    {LinksData.map((link) => (
                        <li
                            key={`link-${link.id}`}
                            className="flex items-center justify-center rounded-full px-4 py-2 text-neutral-700 hover:bg-neutral-100"
                        >
                            <Link prefetch href={link.path} className="mt-1">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* display -- mobile */}
                <HamburgerMenu />
            </div>
        </nav>
    );
}
