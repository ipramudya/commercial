"use client";

import { CustomImg } from "@/assets/images";
import ProductPopup from "@/components/ProductPopup";
import Image from "next/image";
import { useCallback, useState } from "react";

export default function ProductItem() {
    const [open, setOpen] = useState(false);

    const onOpenChange = useCallback((open: boolean) => {
        setOpen(open);
    }, []);

    return (
        <>
            <ProductPopup open={open} onOpenChange={onOpenChange} />

            <div
                className="flex cursor-pointer flex-col space-y-3"
                role="button"
                onClick={() => onOpenChange(true)}
            >
                <div className="aspect-square w-full overflow-hidden rounded-2xl">
                    <Image src={CustomImg} alt="products" className="h-auto w-full" />
                </div>
                <p className="text-center font-semibold">Modern Chair</p>
            </div>
        </>
    );
}
