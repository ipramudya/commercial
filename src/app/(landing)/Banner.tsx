"use client";

import { useRouter } from "next/navigation";
import { Link } from "react-scroll";

export default function Banner() {
    const router = useRouter();

    return (
        <div className="relative flex h-[calc(80dvh-100px)] w-full items-center justify-center overflow-hidden lg:h-[calc(100dvh-120px)]">
            <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/30" />

            <div className="z-[1] h-full w-full">
                <div className="flex h-full">
                    <div className="min-w-0 flex-shrink-0 flex-grow-0 basis-full">
                        <video
                            preload="none"
                            autoPlay
                            loop
                            muted
                            playsInline
                            crossOrigin="anonymous"
                            className="h-full w-full object-cover"
                        >
                            <source
                                src="https://res.cloudinary.com/dn4pc5cov/video/upload/v1721923570/app/jzmfosqkuf7kjigwh0s0.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </div>
                </div>
            </div>

            <div className="absolute left-0 top-0 z-10 h-full w-full">
                <div className="relative z-10 flex h-full items-center justify-center">
                    <div className="flex w-full max-w-screen-lg flex-col items-center space-y-2 px-[3rem] md:px-[5rem] xl:max-w-screen-xl xl:space-y-4 2xl:px-0">
                        <h2 className="text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                            Memenuhi setiap <br /> sudut rumah anda.
                        </h2>
                        <Link to="ween" smooth duration={500}>
                            <span className="cursor-pointer font-semibold text-white lg:text-lg">
                                Lihat lebih lanjut
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
