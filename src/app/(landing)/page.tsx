import About from "@/components/About";
import Banner from "@/components/Banner";
import ContactUs from "@/components/ContactUs";
import Materials from "@/components/Materials";
import Nav from "@/components/Nav";
import OurClients from "@/components/OurClients";
import Services from "@/components/Services";
import Works from "@/components/Works";

export default function Home() {
    return (
        <section className="flex min-h-[100dvh] w-full flex-col">
            <Nav />

            <Banner />

            <OurClients />

            <About />

            <Services />

            <Materials />

            <Works />

            <ContactUs />
        </section>
    );
}
