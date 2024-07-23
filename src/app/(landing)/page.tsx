import { Fragment } from "react";
import About from "./About";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Materials from "./Materials";
import OurClients from "./OurClients";
import Services from "./Services";
import Works from "./Works";

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
