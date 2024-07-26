"use client";

import { WhatsappIconImg } from "@/assets/images";
import Image from "next/image";
import { useState } from "react";

export default function ProductPopupOrder() {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="flex items-center space-x-6">
            <div className="flex h-[40px] min-w-[40px] items-center justify-center overflow-hidden rounded-md border border-neutral-200 p-2">
                <input
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="h-full max-w-[40px] outline-none"
                />
            </div>
            <button className="grow rounded-full bg-emerald-600 px-4 py-2">
                <span className="flex items-center justify-center">
                    <span className="size-6">
                        <Image src={WhatsappIconImg} alt="wa-icon" className="h-auto w-full" />
                    </span>
                    <span className="flex pl-2 pt-1 text-white">
                        Order <strong className="pl-1 text-inherit">by Whatsapp</strong>
                    </span>
                </span>
            </button>
        </div>
    );
}
