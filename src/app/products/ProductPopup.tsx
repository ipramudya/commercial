import { WhatsappIconImg } from "@/assets/images";
import { CloseIcon } from "@/components/Icon";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import Image from "next/image";
import ProductPopupCarousel from "./ProductPopupCarousel";

interface Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function ProductPopup({ open, onOpenChange }: Props) {
    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-40 bg-black/40 data-[state=open]:animate-overlayShow" />
                <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-[600px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg border border-neutral-200 shadow-md focus:outline-none data-[state=open]:animate-contentShow lg:max-w-[900px]">
                    <VisuallyHidden.Root>
                        <Dialog.Title>
                            <p>Product Detail</p>
                        </Dialog.Title>
                    </VisuallyHidden.Root>

                    {/* contents */}
                    <section className="relative grid grid-cols-1 lg:grid-cols-2">
                        {/* left */}
                        <ProductPopupCarousel />

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
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col space-y-2">
                                    <h4 className="text-xl font-bold uppercase">arita silver</h4>
                                    <p className="uppercase tracking-wider">free cup</p>
                                </div>
                                <h4 className="text-3xl font-medium text-emerald-600">$20</h4>
                            </div>

                            {/* desc */}
                            <p className="max-w-[400px] text-sm leading-relaxed">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dolor
                                illo nihil facere? Velit, numquam et ad similique blanditiis
                                voluptatem.
                            </p>

                            {/* order section */}
                            <div className="flex items-center space-x-6">
                                <div className="flex h-[40px] min-w-[40px] items-center justify-center overflow-hidden rounded-md border border-neutral-200 p-2">
                                    <input
                                        type="number"
                                        min={0}
                                        className="h-full max-w-[40px] outline-none"
                                    />
                                </div>
                                <button className="grow rounded-full bg-emerald-600 px-4 py-2">
                                    <span className="flex items-center justify-center">
                                        <span className="size-6">
                                            <Image
                                                src={WhatsappIconImg}
                                                alt="wa-icon"
                                                className="h-auto w-full"
                                            />
                                        </span>
                                        <span className="flex pl-2 pt-1 text-white">
                                            Order{" "}
                                            <strong className="pl-1 text-inherit">
                                                by Whatsapp
                                            </strong>
                                        </span>
                                    </span>
                                </button>
                            </div>

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
                                    2345-45
                                </p>
                                <p className="text-sm uppercase">
                                    <span className="font-medium">category: </span>
                                    2345-45
                                </p>
                            </div>
                        </div>
                    </section>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
