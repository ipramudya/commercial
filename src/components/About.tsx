import { Hero2, WideLogo } from "@/assets";
import { WeenIndokraftMeaningTeks, WeenIndokraftTeks } from "@/static/contents";
import Image from "next/image";

export default function About() {
    return (
        <section className="my-[3rem] flex flex-col px-6 xl:mx-auto xl:my-[6rem] xl:w-full xl:max-w-screen-xl xl:p-0">
            <div className="grid grid-cols-1 gap-[3rem] md:grid-cols-2">
                <div className="flex flex-col space-y-6 xl:space-y-[3rem]">
                    <div className="relative w-[300px]">
                        <Image
                            src={WideLogo}
                            alt="ween-indokraft-about"
                            className="h-auto w-full"
                            quality={100}
                        />
                    </div>

                    <p className="max-w-[380px] text-sm leading-normal text-neutral-700">
                        <strong>{WeenIndokraftTeks}</strong> {WeenIndokraftMeaningTeks}
                    </p>
                </div>

                <div className="flex items-center justify-center">
                    <div className="flex h-full w-full items-center justify-center lg:max-w-[480px]">
                        <Image
                            src={Hero2}
                            alt="ween-indokraft-about-pic"
                            className="h-auto w-full"
                            quality={100}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
