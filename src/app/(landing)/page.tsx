import { Banner } from "@/components/Banner";
import { Nav } from "@/components/Nav";
import { OurClients } from "@/components/OurClients";

export default function Home() {
    return (
        <section className="flex min-h-[100dvh] w-full flex-col">
            <Nav />

            <Banner />

            <OurClients />

            <div className="min-h-screen" />
        </section>
    );
}
