"use client";

import { ChevLeftIcon, ChevRightIcon } from "@/components/Icon";
import useEmblaCarousel from "embla-carousel-react";

export default function Banner() {
    const [emblaRef, emblaAPI] = useEmblaCarousel();

    return (
        <div className="relative flex h-[calc(80dvh-100px)] w-full items-center justify-center overflow-hidden lg:h-[calc(100dvh-120px)]">
            <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/30" />

            <div className="z-[1] h-full" ref={emblaRef}>
                <div className="flex h-full">
                    <div className="min-w-0 flex-shrink-0 flex-grow-0 basis-full">
                        <video
                            preload="none"
                            autoPlay
                            loop
                            muted
                            playsInline
                            crossOrigin="anonymous"
                            className="h-full w-full object-cover"
                        >
                            <source src="/videos/WEEN_INDOKRAFT.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>

            <div className="absolute left-0 top-0 z-10 h-full w-full">
                <div className="relative z-10 flex h-full items-center justify-center">
                    <button
                        type="button"
                        className="absolute left-2 top-1/2 -translate-y-1/2 md:left-[2%]"
                        onClick={() => {
                            if (emblaAPI) emblaAPI.scrollPrev();
                        }}
                    >
                        <ChevLeftIcon width={38} height={38} className="stroke-white" />
                    </button>

                    <div className="flex w-full max-w-screen-lg flex-col space-y-2 px-[3rem] md:px-[5rem] xl:max-w-screen-xl xl:space-y-4 2xl:px-0">
                        <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                            Memenuhi setiap <br /> sudut rumah anda.
                        </h2>
                        <p className="font-semibold text-white lg:text-lg">Lihat lebih lanjut</p>
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
