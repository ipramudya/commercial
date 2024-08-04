"use client";

import { WorksIconImg } from "@/assets/images";
import { WorksDetailContents } from "@/static/contents";
import Image from "next/image";
import { useState } from "react";
import PopupCarousel from "./PopupCarousel";

export default function OurWorks() {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <PopupCarousel open={opened} onOpenChange={setOpened} images={WorksDetailContents} />

            <section className="flex flex-col px-6 py-[3rem] xl:mx-auto xl:w-full xl:max-w-screen-xl xl:p-0 xl:py-[6rem]">
                <div className="flex items-center justify-center space-x-1">
                    <p className="text-xl font-medium text-neutral-700">
                        Our
                        <span className="font-bold"> Works</span>
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

                <div className="mt-[3rem] xl:flex xl:items-center xl:justify-center">
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 xl:w-full xl:max-w-screen-xl">
                        {WorksDetailContents.map((work) => (
                            <div key={`material-${work.id}`} className="flex flex-col space-y-3">
                                <div
                                    role="button"
                                    onClick={() => setOpened(true)}
                                    className="aspect-square w-full overflow-hidden rounded-2xl bg-neutral-100"
                                >
                                    <Image
                                        src={work.src}
                                        alt="work"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
