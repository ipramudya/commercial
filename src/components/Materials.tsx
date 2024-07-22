import { MaterialIconImg } from "@/assets";
import Image from "next/image";

export default function Materials() {
    return (
        <section className="flex flex-col bg-neutral-100 px-6 py-[3rem] xl:py-[6rem]">
            <div className="flex flex-col space-y-3">
                <div className="flex items-center justify-center space-x-1">
                    <p className="text-xl font-medium text-neutral-700">
                        <span className="font-bold">Materials </span>
                        we use
                    </p>
                    <div className="relative size-7">
                        <Image
                            src={MaterialIconImg}
                            className="h-auto w-full"
                            alt="works-icon"
                            quality={100}
                        />
                    </div>
                </div>
                <p className="w-full text-center text-xs xl:text-sm">
                    Berikut adalah bahan bahan material yang kami sediakan untuk <br /> menunjang
                    kebutuhan produksi.
                </p>
            </div>

            <div className="mt-[3rem] xl:flex xl:items-center xl:justify-center">
                <div className="grid grid-cols-2 gap-6 md:grid-cols-3 xl:w-full xl:max-w-screen-xl">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div
                            key={`material-${index}`}
                            className="relative aspect-square w-full rounded-2xl bg-white"
                        >
                            <div className="absolute bottom-4 left-4">
                                <p className="font-semibold text-neutral-700">
                                    Material {index + 1}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
