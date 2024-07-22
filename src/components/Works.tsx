"use client";

import { WorksIconImg } from "@/assets";
import { cn } from "@/functions/cn";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export default function Works() {
    const [emblaRef] = useEmblaCarousel({
        dragFree: true,
    });

    return (
        <section className="relative flex flex-col bg-neutral-100 pt-[3rem] xl:pt-[6rem]">
            <div className="flex items-center justify-center space-x-1">
                <p className="text-xl font-medium text-neutral-700">
                    Our <span className="font-bold"> Works</span>
                </p>
                <div className="relative size-7">
                    <Image
                        src={WorksIconImg}
                        className="h-auto w-full"
                        alt="works-icon"
                        quality={100}
                    />
                </div>
            </div>

            <div className="relative mt-[3rem]">
                <div ref={emblaRef} className="overflow-hidden">
                    <div className="flex">
                        {Array.from({ length: 8 }).map((_, index) => (
                            <div
                                key={"works-" + index}
                                className={cn(
                                    "flex-shrink-0 flex-grow-0 basis-1/2 md:basis-1/3 lg:basis-1/4",
                                    index % 2 === 0 ? "bg-neutral-300" : "bg-neutral-200",
                                )}
                            >
                                <div className="h-[500px] lg:h-[700px]" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-[-20px] right-[2%] md:right-[4%]">
                    <button className="min-h-[2.5rem] rounded-full bg-neutral-400 px-4">
                        <span className="font-medium text-white">Lihat lainnya</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
