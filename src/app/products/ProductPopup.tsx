import { CloseIcon } from "@/components/Icon";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { StaticImageData } from "next/image";
import ProductPopupCarousel from "./ProductPopupCarousel";
import ProductPopupOrder from "./ProductPopupOrder";

interface Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    data: {
        previewSrc: StaticImageData;
        name: string;
        subName: string;
        sku: string;
        category: string;
        description: string;
        images: {
            id: number;
            src: StaticImageData;
        }[];
    };
}

export default function ProductPopup({ open, onOpenChange, data }: Props) {
    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-40 bg-black/40 data-[state=open]:animate-overlayShow" />
                <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-[600px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg border border-neutral-200 shadow-md focus:outline-none data-[state=open]:animate-contentShow lg:max-w-[900px]">
                    <VisuallyHidden.Root>
                        <Dialog.Title>
                            <p>{data.name}</p>
                        </Dialog.Title>
                    </VisuallyHidden.Root>

                    {/* contents */}
                    <section className="relative grid grid-cols-1 lg:grid-cols-2">
                        {/* left */}
                        <ProductPopupCarousel images={data.images} />

                        {/* right */}
                        <div className="flex flex-col space-y-6 bg-white px-6 py-[3rem] lg:relative">
                            {/* close button */}
                            <div className="absolute right-3 top-3">
                                <button
                                    className="group flex size-8 items-center justify-center rounded-md bg-white"
                                    onClick={() => onOpenChange(false)}
                                >
                                    <CloseIcon className="stroke-neutral-400 transition-all duration-300 group-hover:stroke-red-500" />
                                </button>
                            </div>

                            {/* header */}
                            <div className="flex flex-col space-y-2">
                                <h4 className="text-xl font-bold uppercase">{data.name}</h4>
                                <p className="uppercase tracking-wider">{data.subName}</p>
                            </div>

                            {/* desc */}
                            <p className="max-w-[400px] text-sm leading-relaxed">
                                {data.description}
                            </p>

                            {/* order section */}
                            <ProductPopupOrder />

                            {/* divider */}
                            <div className="w-full border-b bg-neutral-100" />

                            {/* medsos */}
                            <div className="flex items-center space-x-3">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <div
                                        key={`medsos-${index}`}
                                        className="size-6 rounded-md bg-neutral-200"
                                    />
                                ))}
                            </div>

                            {/* detail */}
                            <div className="flex flex-col space-y-2">
                                <p className="text-sm uppercase">
                                    <span className="font-medium">sku: </span>
                                    {data.sku}
                                </p>
                                <p className="text-sm uppercase">
                                    <span className="font-medium">category: </span>
                                    {data.category}
                                </p>
                            </div>
                        </div>
                    </section>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
