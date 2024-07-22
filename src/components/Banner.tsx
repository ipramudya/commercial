"use client";

import { ChevLeftIcon, ChevRightIcon } from "@/components/Icon";
import { CarouselImages } from "@/static/carousels";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export function Banner() {
    const [emblaRef, emblaAPI] = useEmblaCarousel();

    return (
        <div className="relative flex h-[calc(80dvh-100px)] w-full items-center justify-center overflow-hidden lg:h-[calc(100dvh-120px)]">
            <div className="z-[1] h-full" ref={emblaRef}>
                <div className="flex h-full">
                    {CarouselImages.map((image) => (
                        <div
                            key={`carousel-image-${image.id}`}
                            className="min-w-0 flex-shrink-0 flex-grow-0 basis-full"
                        >
                            <Image
                                src={image.src}
                                alt="hero-banner"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute left-0 top-0 z-10 h-full w-full">
                <div className="relative flex h-full items-center justify-center">
                    <button
                        type="button"
                        className="absolute left-2 top-1/2 -translate-y-1/2 md:left-[2%]"
                        onClick={() => {
                            if (emblaAPI) emblaAPI.scrollPrev();
                        }}
                    >
                        <ChevLeftIcon width={38} height={38} className="stroke-white" />
                    </button>

                    <div className="flex w-full max-w-screen-lg flex-col space-y-2 px-[3rem] text-white md:px-[5rem] xl:max-w-screen-xl xl:space-y-4 2xl:px-0">
                        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                            Memenuhi setiap <br /> sudut rumah anda.
                        </h2>
                        <p className="font-semibold lg:text-lg">Lihat lebih lanjut</p>
                    </div>

                    <button
                        type="button"
                        className="absolute right-2 top-1/2 -translate-y-1/2 md:right-[2%]"
                        onClick={() => {
                            if (emblaAPI) emblaAPI.scrollNext();
                        }}
                    >
                        <ChevRightIcon width={38} height={38} className="stroke-white" />
                    </button>
                </div>
            </div>
        </div>
    );
}
