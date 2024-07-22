import About from "@/components/About";
import Banner from "@/components/Banner";
import ContactUs from "@/components/ContactUs";
import Materials from "@/components/Materials";
import OurClients from "@/components/OurClients";
import Services from "@/components/Services";
import Works from "@/components/Works";
import { Fragment } from "react";

export default function Home() {
    return (
        <Fragment>
            <Banner />

            <OurClients />

            <About />

            <Services />

            <Materials />

            <Works />

            <ContactUs />
        </Fragment>
    );
}
