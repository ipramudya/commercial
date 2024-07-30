import { WhatsappIconImg } from "@/assets/images";
import Image from "next/image";

export default function ProductPopupOrder() {
    return (
        <div className="flex items-center space-x-6">
            <button className="rounded-full bg-emerald-600 px-4 py-2">
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
