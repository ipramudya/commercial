import type { Metadata } from "next";

import Font from "@/assets/fonts";
import "./globals.css";

export const metadata: Metadata = {
    title: "Commercial App",
    description: "description of commercial app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={Font.className}>
            <body>{children}</body>
        </html>
    );
}
