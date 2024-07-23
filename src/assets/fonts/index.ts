import localFont from "next/font/local";

const Font = localFont({
    src: [
        {
            path: "./Poligon-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./Poligon-Medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./Poligon-Semi-Bold.otf",
            weight: "600",
            style: "normal",
        },
    ],
});

export default Font;
