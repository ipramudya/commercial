import { CompatLogo } from "@/assets/images";
import { OfficeTeks, WorkshopTeks } from "@/static/contents";
import { PartnersImg } from "@/static/partners";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex items-center justify-center bg-[#CAB097] px-6 py-[3rem] xl:py-[6rem]">
            <div className="xl:mx-auto xl:w-full xl:max-w-screen-xl">
                <section className="flex flex-col items-center space-y-[1rem]">
                    <p className="w-full text-center text-xl font-medium text-neutral-700">
                        Our <span className="font-bold">Clients</span>
                    </p>
                    <div className="grid grid-cols-2 sm:flex sm:flex-row sm:items-center sm:justify-center sm:space-x-[3rem]">
                        {PartnersImg.map((img) => (
                            <div
                                key={`partners-${img.id}`}
                                className="size-[120px] md:size-[140px]"
                            >
                                <Image src={img.src} alt="partner-logo" className="h-auto w-full" />
                            </div>
                        ))}
                    </div>
                </section>

                <div className="my-[3rem] w-full border-b border-neutral-200" />

                <section className="flex flex-col items-center space-y-6 lg:flex-row lg:items-center lg:justify-between">
                    <div className="relative size-[56px] md:size-[72px] lg:order-2 lg:size-[96px]">
                        <Image
                            src={CompatLogo}
                            alt="wide-logo-commercial"
                            quality={100}
                            className="h-auto w-full"
                        />
                    </div>

                    <div className="flex items-center space-x-6">
                        <div className="flex flex-col space-y-2">
                            <p className="text-sm font-semibold text-[#2D2324]">Office</p>
                            <p className="max-w-[300px] text-sm text-[#2D2324]">{OfficeTeks}</p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <p className="text-sm font-semibold text-[#2D2324]">Workshop</p>
                            <p className="max-w-[300px] text-sm text-[#2D2324]">{WorkshopTeks}</p>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    );
}
