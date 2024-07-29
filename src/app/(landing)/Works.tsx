import { WorksIconImg } from "@/assets/images";
import { WorksContents } from "@/static/contents";
import Image from "next/image";
import Link from "next/link";

export default function Works() {
    return (
        <section className="relative flex flex-col bg-neutral-100 pt-[3rem] xl:pt-[6rem]">
            <div className="flex items-center justify-center space-x-1">
                <p className="text-xl font-medium text-neutral-700">
                    Our <span className="font-bold"> Works</span>
                </p>
                <div className="relative size-7">
                    <Image
                        src={WorksIconImg}
                        className="h-auto w-full"
                        alt="works-icon"
                        quality={100}
                    />
                </div>
            </div>

            <div className="relative mt-[3rem]">
                <div className="overflow-hidden">
                    <div className="flex">
                        {WorksContents.filter((_, index) => index < 4).map((work) => (
                            <div
                                key={"works-" + work.id}
                                className={
                                    "group relative flex-shrink-0 flex-grow-0 basis-1/2 md:basis-1/3 lg:basis-1/4"
                                }
                            >
                                {/* overlay - show on hover */}
                                <div className="absolute inset-0 h-full w-full bg-black/20 opacity-0 duration-300 group-hover:opacity-100" />

                                <div className="h-[500px] lg:h-[700px]">
                                    <Image
                                        src={work.src}
                                        alt="works"
                                        className="h-full w-full object-cover"
                                        quality={100}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-[-20px] right-[2%] md:right-[4%]">
                    <Link
                        href="works"
                        className="flex min-h-[2.5rem] items-center justify-center rounded-full bg-neutral-400 px-4 transition-all duration-300 hover:bg-neutral-500"
                    >
                        <span className="mt-1 block h-fit font-medium text-white">
                            Lihat lainnya
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
