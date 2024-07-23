import { PartnersImg } from "@/static/partners";
import Image from "next/image";

export default function OurClients() {
    return (
        <section className="flex min-h-[200px] w-full items-center justify-center bg-slate-50 px-6 py-[3rem]">
            <div className="flex w-full max-w-screen-xl flex-col items-center space-y-[1rem]">
                <p className="text-xl font-medium text-neutral-700">
                    Our <span className="font-bold">Clients</span>
                </p>
                <div className="grid grid-cols-2 sm:flex sm:flex-row sm:items-center sm:justify-center sm:space-x-[3rem]">
                    {PartnersImg.map((img) => (
                        <div key={`partners-${img.id}`} className="size-[120px] md:size-[140px]">
                            <Image src={img.src} alt="partner-logo" className="h-auto w-full" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
