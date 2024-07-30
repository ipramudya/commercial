import CenterContentsBanner from "@/components/CenterContentsBanner";
import { CarouselImages } from "@/static/carousels";
import { Fragment } from "react";
import Products from "./Products";

export default function Page() {
    return (
        <Fragment>
            <CenterContentsBanner
                title="Products"
                description="We will provide your needs"
                data={CarouselImages}
            />
            <Products />
        </Fragment>
    );
}
