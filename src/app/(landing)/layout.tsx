import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <main>
            <div className="flex w-full flex-col">
                <Nav />
                {children}
                <Footer />
            </div>
        </main>
    );
}
