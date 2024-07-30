"use client";

import { ChevLeftIcon, ChevRightIcon } from "@/components/Icon";
import useEmblaCarousel from "embla-carousel-react";
import Image, { StaticImageData } from "next/image";

interface Props {
    images: {
        id: number;
        src: StaticImageData;
    }[];
}

export default function ProductPopupCarousel({ images }: Props) {
    const [emblaRef, emblaAPI] = useEmblaCarousel();

    return (
        <div className="relative flex items-center justify-center bg-neutral-100 py-[3rem] lg:py-0">
            <button
                type="button"
                className="absolute left-2 top-1/2 z-50 -translate-y-1/2 md:left-[2%]"
                onClick={() => {
                    if (emblaAPI) emblaAPI.scrollPrev();
                }}
            >
                <ChevLeftIcon width={28} height={28} className="stroke-neutral-400" />
            </button>

            <div ref={emblaRef} className="overflow-hidden">
                <div className="flex">
                    {images.map((image) => (
                        <div key={`product-${image.id}`} className="shrink-0 grow-0 basis-full">
                            <div className="relative mx-auto w-full max-w-[250px] overflow-hidden rounded-xl">
                                <Image src={image.src} className="h-auto w-full" alt="product" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                type="button"
                className="absolute right-2 top-1/2 z-50 -translate-y-1/2 md:right-[2%]"
                onClick={() => {
                    if (emblaAPI) emblaAPI.scrollNext();
                }}
            >
                <ChevRightIcon width={28} height={28} className="stroke-neutral-400" />
            </button>
        </div>
    );
}
