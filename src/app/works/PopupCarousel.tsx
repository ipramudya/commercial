"use client";

import { ChevLeftIcon, ChevRightIcon, CloseIcon } from "@/components/Icon";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import useEmblaCarousel from "embla-carousel-react";
import Image, { StaticImageData } from "next/image";

interface Props {
    open: boolean;
    onOpenChange: any;
    images: {
        id: number;
        src: StaticImageData;
    }[];
}

export default function PopupCarousel({ images, onOpenChange, open }: Props) {
    const [emblaRef, emblaAPI] = useEmblaCarousel();

    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-40 bg-black/40 data-[state=open]:animate-overlayShow" />

                <Dialog.Content className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg focus:outline-none data-[state=open]:animate-contentShow">
                    <VisuallyHidden.Root>
                        <Dialog.Title>
                            <p>images popup</p>
                        </Dialog.Title>
                    </VisuallyHidden.Root>

                    <section className="relative aspect-[16/9] w-[95dvw] overflow-hidden bg-neutral-100 xl:h-[95vh] xl:w-auto">
                        <button
                            type="button"
                            className="absolute right-[1.5rem] top-[1.5rem] z-50 flex size-[32px] items-center justify-center rounded-full bg-white"
                            onClick={() => onOpenChange(false)}
                        >
                            <CloseIcon width={28} height={28} className="stroke-red-600" />
                        </button>

                        <button
                            type="button"
                            className="absolute left-2 top-1/2 z-50 flex size-[32px] -translate-y-1/2 items-center justify-center rounded-full bg-white md:left-[2%]"
                            onClick={() => {
                                if (emblaAPI) emblaAPI.scrollPrev();
                            }}
                        >
                            <ChevLeftIcon width={28} height={28} className="stroke-neutral-400" />
                        </button>

                        <div ref={emblaRef} className="overflow-hidden">
                            <div className="flex">
                                {images.map((image) => (
                                    <div
                                        key={`product-${image.id}`}
                                        className="min-w-0 shrink-0 grow-0 basis-full"
                                    >
                                        <div className="w-full overflow-hidden">
                                            <Image
                                                src={image.src}
                                                className="h-auto w-full object-cover"
                                                alt="product"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            type="button"
                            className="absolute right-2 top-1/2 z-50 flex size-[32px] -translate-y-1/2 items-center justify-center rounded-full bg-white md:right-[2%]"
                            onClick={() => {
                                if (emblaAPI) emblaAPI.scrollNext();
                            }}
                        >
                            <ChevRightIcon width={28} height={28} className="stroke-neutral-400" />
                        </button>
                    </section>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
