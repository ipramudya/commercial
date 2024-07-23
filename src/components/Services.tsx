import { CustomImg, SupplyImg } from "@/assets/images";
import { CustomTeks, SupplyTeks } from "@/static/contents";
import Image from "next/image";

export default function Services() {
    return (
        <section className="flex flex-col space-y-[3rem] px-6 py-[3rem] xl:mx-auto xl:w-full xl:max-w-screen-xl xl:space-y-[6rem] xl:p-0 xl:py-[6rem]">
            <p className="w-full text-center text-xl font-medium text-neutral-700">
                Our <span className="font-bold">Services</span>
            </p>
            <div className="grid grid-cols-1 gap-[3rem] md:grid-cols-2">
                <div className="flex flex-col items-center justify-center space-y-6 lg:flex-row lg:space-x-6 xl:justify-start">
                    <div className="relative w-[140px] flex-shrink-0">
                        <Image
                            src={SupplyImg}
                            alt="service-supply"
                            className="h-auto w-full"
                            quality={100}
                        />
                    </div>
                    <div className="flex flex-col space-y-3">
                        <h3 className="text-lg font-semibold text-neutral-700">Supply</h3>
                        <p className="max-w-[500px] text-sm leading-normal text-neutral-700 lg:max-w-[380px]">
                            {SupplyTeks}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-6 lg:flex-row lg:space-x-6 xl:justify-end">
                    <div className="relative w-[140px] flex-shrink-0">
                        <Image
                            src={CustomImg}
                            alt="service-supply"
                            className="h-auto w-full"
                            quality={100}
                        />
                    </div>
                    <div className="flex flex-col space-y-3">
                        <h3 className="text-lg font-semibold text-neutral-700">Custom</h3>
                        <p className="max-w-[500px] text-sm leading-normal text-neutral-700 lg:max-w-[380px]">
                            {CustomTeks}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
