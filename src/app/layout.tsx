import type { Metadata } from "next";

import Font from "@/assets/fonts";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import WhatsappButton from "@/components/WhatsappButton";
import { PropsWithChildren } from "react";
import "./globals.css";

export const metadata: Metadata = {
    title: "Ween Indokraft",
    description:
        "Perusahaan supplier furnitur berpengalaman dalam menyediakan berbagai jenis produk termasuk meja, kursi, lemari, dll.",
};

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="id" className={Font.className}>
            <body>
                <main className="flex w-full flex-col">
                    <Nav />
                    {children}
                    <Footer />

                    <WhatsappButton />
                </main>
            </body>
        </html>
    );
}
