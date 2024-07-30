import CenterContentsBanner from "@/components/CenterContentsBanner";
import { Fragment } from "react";
import OurWorks from "./OurWorks";

export default function Page() {
    return (
        <Fragment>
            <CenterContentsBanner title="Projects" description="Our latest projects" disabled />

            <OurWorks />
        </Fragment>
    );
}
