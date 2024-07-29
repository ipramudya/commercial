import { Fragment } from "react";
import ContactUs from "../(landing)/ContactUs";
import Maps from "./Maps";

export default function Page() {
    return (
        <Fragment>
            <Maps />
            <ContactUs />
        </Fragment>
    );
}
