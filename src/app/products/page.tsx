import CenterContentsBanner from "@/components/CenterContentsBanner";
import { Fragment } from "react";
import Products from "./Products";

export default function Page() {
    return (
        <Fragment>
            <CenterContentsBanner title="Products" description="We will provide your needs" />
            <Products />
        </Fragment>
    );
}
