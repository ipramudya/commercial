import { CompatLogo } from "@/assets/images";
import { OfficeTeks1, OfficeTeks2, WorkshopTeks } from "@/static/contents";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex items-center justify-center bg-[#CAB097] px-6 py-[3rem] xl:py-[6rem]">
            <div className="xl:mx-auto xl:w-full xl:max-w-screen-xl">
                <section className="flex flex-col items-center space-y-6 lg:flex-row lg:items-center lg:justify-between">
                    <div className="relative size-[56px] md:size-[72px] lg:order-2 lg:size-[96px]">
                        <Image
                            src={CompatLogo}
                            alt="wide-logo-commercial"
                            quality={100}
                            className="h-auto w-full"
                        />
                    </div>

                    <div className="flex flex-col items-center gap-6 sm:flex-row">
                        <div className="flex w-full flex-col space-y-2 sm:max-w-[300px]">
                            <p className="text-sm font-semibold text-[#2D2324]">Office 1</p>
                            <p className="text-sm text-[#2D2324]">{OfficeTeks1}</p>
                        </div>
                        <div className="flex w-full flex-col space-y-2 sm:max-w-[300px]">
                            <p className="text-sm font-semibold text-[#2D2324]">Office 2</p>
                            <p className="text-sm text-[#2D2324]">{OfficeTeks2}</p>
                        </div>
                        <div className="flex w-full flex-col space-y-2 sm:max-w-[300px]">
                            <p className="text-sm font-semibold text-[#2D2324]">Workshop</p>
                            <p className="text-sm text-[#2D2324]">{WorkshopTeks}</p>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    );
}
