"use client";

import { WhatsappIconImg } from "@/assets/images";
import { WhatsappNumTeks } from "@/static/contents";
import Image from "next/image";

export default function WhatsappButton() {
    const openWhatsapp = () => {
        window.open(`https://wa.me/${WhatsappNumTeks}`, "_blank")?.focus();
    };

    return (
        <div className="fixed bottom-3 right-3 z-[19] md:bottom-[1.5rem] md:right-[1.5rem]">
            <button
                onClick={openWhatsapp}
                className="flex size-12 items-center justify-center overflow-hidden rounded-full bg-emerald-600 p-1 transition-all duration-300 hover:bg-emerald-600/90"
            >
                <Image src={WhatsappIconImg} alt="whatsapp button" className="h-auto w-full" />
            </button>
        </div>
    );
}
