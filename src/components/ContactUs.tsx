"use client";

import { OfficeIconImg, WhatsappIconImg, WorkshopIconImg } from "@/assets";
import { OfficeTeks, WhatsappTeks, WorkshopTeks } from "@/static/contents";
import Image from "next/image";
import ContactUsForm from "./ContactUsForm";

export default function ContactUs() {
    return (
        <section className="flex flex-col px-6 py-[3rem] lg:items-center">
            <p className="w-full text-center text-xl font-medium text-neutral-700">
                <span className="font-bold">Contact</span> Us
            </p>

            <div className="flex flex-col items-center md:flex-row md:items-end md:justify-between md:gap-[6rem] lg:w-full lg:max-w-screen-lg">
                <ContactUsForm />
                <div className="mt-[3rem] w-full max-w-[500px] lg:max-w-[650px]">
                    <div className="flex flex-col space-y-6">
                        <div className="flex flex-col space-y-3">
                            <div className="flex items-center space-x-2">
                                <div className="relative size-7">
                                    <Image
                                        src={OfficeIconImg}
                                        alt="office-icon"
                                        className="h-auto w-full"
                                        quality={100}
                                    />
                                </div>
                                <p className="text-sm font-semibold">Office</p>
                            </div>

                            <div className="flex min-h-[42px] items-center justify-center rounded-3xl bg-neutral-100 p-6">
                                <p className="text-sm leading-normal">{OfficeTeks}</p>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-3">
                            <div className="flex items-center space-x-2">
                                <div className="relative size-7">
                                    <Image
                                        src={WorkshopIconImg}
                                        alt="office-icon"
                                        className="h-auto w-full"
                                        quality={100}
                                    />
                                </div>
                                <p className="text-sm font-semibold">Workshop</p>
                            </div>

                            <div className="flex min-h-[42px] items-center justify-center rounded-3xl bg-neutral-100 p-6">
                                <p className="text-sm leading-normal">{WorkshopTeks}</p>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-3">
                            <div className="flex items-center space-x-2">
                                <div className="relative size-7">
                                    <Image
                                        src={WhatsappIconImg}
                                        alt="office-icon"
                                        className="h-auto w-full"
                                        quality={100}
                                    />
                                </div>
                                <p className="text-sm">
                                    <span className="font-semibold">Free Consultation </span>By
                                    Whatsapp
                                </p>
                            </div>
                            <div className="flex min-h-[42px] items-center justify-center rounded-3xl bg-neutral-100 p-6">
                                <p className="font-semibold">{WhatsappTeks}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
