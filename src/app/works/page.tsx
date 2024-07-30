import CenterContentsBanner from "@/components/CenterContentsBanner";
import { CarouselOurWorksData } from "@/static/carousels";
import { Fragment } from "react";
import OurWorks from "./OurWorks";

export default function Page() {
    return (
        <Fragment>
            <CenterContentsBanner
                title="Works"
                description="Our latest projects"
                disabled
                data={CarouselOurWorksData}
            />

            <OurWorks />
        </Fragment>
    );
}
