import { Hero, WideLogo } from "@/assets";
import Image from "next/image";
import { PartnersImg } from "./partners";

export default function Home() {
    return (
        <section className="flex min-h-[100dvh] w-full flex-col overflow-hidden">
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

            <div className="relative flex h-[calc(100dvh-140px-200px)] w-full items-center justify-center bg-yellow-200">
                <div className="absolute left-0 top-0 z-[1] h-full w-full">
                    <Image src={Hero} alt="hero-banner" fill />
                </div>
                <div className="relative z-10 flex h-full w-full max-w-screen-xl flex-col justify-center space-y-4 text-white">
                    <h2 className="text-5xl font-bold">
                        Memenuhi setiap <br /> sudut rumah anda.
                    </h2>
                    <p className="text-lg font-semibold">Lihat lebih lanjut</p>
                </div>
            </div>

            <div className="flex h-[200px] w-full items-center justify-center">
                <div className="flex w-full max-w-screen-xl items-center justify-between">
                    <p className="font-semibold">Our Partner</p>
                    <div className="flex items-center space-x-[3rem]">
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
        </section>
    );
}
