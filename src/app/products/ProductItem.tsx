"use client";

import ProductPopup from "@/app/products/ProductPopup";
import Image, { StaticImageData } from "next/image";
import { useCallback, useState } from "react";

interface Props {
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
}

export default function ProductItem(data: Props) {
    const [open, setOpen] = useState(false);

    const onOpenChange = useCallback((open: boolean) => {
        setOpen(open);
    }, []);

    return (
        <>
            <ProductPopup data={data} open={open} onOpenChange={onOpenChange} />

            <div
                className="flex cursor-pointer flex-col space-y-3"
                role="button"
                onClick={() => onOpenChange(true)}
            >
                <div className="aspect-square w-full overflow-hidden rounded-2xl">
                    <Image
                        src={data.previewSrc}
                        alt="products"
                        className="h-auto w-full transition-all duration-300 hover:scale-105"
                    />
                </div>
                <p className="text-center font-semibold">{data.name}</p>
            </div>
        </>
    );
}
