"use client";

import { Hero1, Hero2, Hero3 } from "@/assets";
import { ChevLeft, ChevRight } from "@/components/Icon";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const CarouselImages = [
    { id: 1, src: Hero1 },
    { id: 2, src: Hero2 },
    { id: 3, src: Hero3 },
];

export function Banner() {
    const [emblaRef, emblaAPI] = useEmblaCarousel();

    return (
        <div className="relative flex h-[calc(100dvh-140px-200px)] w-full items-center justify-center overflow-hidden">
            <div className="z-[1]" ref={emblaRef}>
                <div className="flex">
                    {CarouselImages.map((image) => (
                        <div
                            key={`carousel-image-${image.id}`}
                            className="min-w-0 flex-shrink-0 flex-grow-0 basis-full"
                        >
                            <Image src={image.src} alt="hero-banner" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute left-0 top-0 z-10 h-full w-full">
                <div className="relative flex h-full items-center justify-center">
                    <button
                        type="button"
                        className="absolute left-[5%] top-1/2 -translate-y-1/2"
                        onClick={() => {
                            if (emblaAPI) emblaAPI.scrollPrev();
                        }}
                    >
                        <ChevLeft width={38} height={38} className="stroke-white" />
                    </button>

                    <div className="flex w-full max-w-screen-xl flex-col space-y-4 text-white">
                        <h2 className="text-5xl font-bold">
                            Memenuhi setiap <br /> sudut rumah anda.
                        </h2>
                        <p className="text-lg font-semibold">Lihat lebih lanjut</p>
                    </div>

                    <button
                        type="button"
                        className="absolute right-[5%] top-1/2 -translate-y-1/2"
                        onClick={() => {
                            if (emblaAPI) emblaAPI.scrollNext();
                        }}
                    >
                        <ChevRight width={38} height={38} className="stroke-white" />
                    </button>
                </div>
            </div>
        </div>
    );
}
