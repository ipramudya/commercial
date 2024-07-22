import About from "@/components/About";
import { Banner } from "@/components/Banner";
import { Nav } from "@/components/Nav";
import { OurClients } from "@/components/OurClients";
import Services from "@/components/Services";

export default function Home() {
    return (
        <section className="flex min-h-[100dvh] w-full flex-col">
            <Nav />

            <Banner />

            <OurClients />

            <About />

            <Services />
        </section>
    );
}
