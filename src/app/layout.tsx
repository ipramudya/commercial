import type { Metadata } from "next";

import Font from "@/assets/fonts";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import WhatsappButton from "@/components/WhatsappButton";
import { PropsWithChildren } from "react";
import "./globals.css";

export const metadata: Metadata = {
    title: "Commercial App",
    description: "description of commercial app",
};

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en" className={Font.className}>
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
