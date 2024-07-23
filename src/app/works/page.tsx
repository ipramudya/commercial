import { Fragment } from "react";
import OurClients from "./OurClients";
import OurWorks from "./OurWorks";
import WorksBanner from "./WorksBanner";

export default function Page() {
    return (
        <Fragment>
            <WorksBanner />

            <OurWorks />

            <div className="border-b border-neutral-200 xl:mx-auto xl:w-full xl:max-w-screen-xl" />

            <OurClients />
        </Fragment>
    );
}
