import { MaterialIconImg } from "@/assets/images";
import { MaterialsContents } from "@/static/contents";
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
                    {MaterialsContents.map((mat) => (
                        <div
                            key={`material-${mat.id}`}
                            className="relative aspect-square w-full overflow-hidden rounded-2xl border border-transparent transition-all duration-300 hover:border-sky-400"
                        >
                            <Image
                                src={mat.src}
                                alt="material"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
