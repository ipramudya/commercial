import { CustomImg } from "@/assets/images";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/Icon";
import Image from "next/image";

export default function Products() {
    return (
        <section className="flex flex-col px-6 py-[3rem] xl:mx-auto xl:w-full xl:max-w-screen-xl xl:p-0 xl:py-[6rem]">
            <div className="mt-[3rem] xl:flex xl:items-center xl:justify-center">
                <div className="grid grid-cols-2 gap-[3rem] md:grid-cols-3 lg:grid-cols-4 xl:w-full xl:max-w-screen-xl">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div key={`material-${index}`} className="flex flex-col space-y-3">
                            <div className="aspect-square w-full overflow-hidden rounded-2xl">
                                <Image src={CustomImg} alt="products" className="h-auto w-full" />
                            </div>
                            <p className="text-center font-semibold">Modern Chair</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-[3rem] flex items-center justify-center">
                <div className="flex rounded-md border border-neutral-200 shadow-md">
                    <button className="flex size-10 items-center justify-center">
                        <ArrowLeftIcon className="stroke-neutral-400" />
                    </button>

                    {Array.from({ length: 5 }).map((_, index) => (
                        <button
                            key={`material-${index}`}
                            className="flex size-10 items-center justify-center text-neutral-400 transition-colors duration-300 hover:text-emerald-600"
                        >
                            <span className="font-semibold text-inherit">{index + 1}</span>
                        </button>
                    ))}

                    <button className="flex size-10 items-center justify-center">
                        <ArrowRightIcon className="stroke-neutral-400" />
                    </button>
                </div>
            </div>
        </section>
    );
}
