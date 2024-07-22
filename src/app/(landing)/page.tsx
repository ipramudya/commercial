import { WideLogo } from "@/assets";
import Image from "next/image";
import { Banner } from "./Banner";
import { PartnersImg } from "./partners";

export default function Home() {
    return (
        <section className="flex min-h-[100dvh] w-full flex-col">
            <nav className="flex items-center justify-center bg-white">
                <div className="flex h-[140px] w-full max-w-screen-xl items-center justify-between">
                    <div className="relative">
                        <Image
                            src={WideLogo}
                            alt="wide-logo-commercial"
                            height={90}
                            quality={100}
                        />
                    </div>

                    {/* links */}
                    <ul className="flex space-x-[3rem]">
                        <li>Home</li>
                        <li>Products</li>
                        <li>Our Services</li>
                        <li>Portfolio</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </nav>

            <Banner />

            <div className="flex min-h-[200px] w-full items-center justify-center bg-slate-50 py-[2rem]">
                <div className="flex w-full max-w-screen-xl flex-col items-center space-y-[1rem]">
                    <p className="text-xl font-medium text-neutral-700">
                        Our <span className="font-bold">Clients</span>
                    </p>
                    <div className="flex items-center justify-center space-x-[3rem]">
                        {PartnersImg.map((img) => (
                            <Image
                                key={`partners-${img.id}`}
                                src={img.src}
                                alt="partner-logo"
                                width={160}
                                quality={100}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="min-h-screen" />
        </section>
    );
}
