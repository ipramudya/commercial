import {
    CustomImg,
    Hero1,
    Hero2,
    Hero3,
    Meja1ProductImg,
    Meja2ProductImg,
    Meja3ProductImg,
    Meja4ProductImg,
    Meja5ProductImg,
    OurWorksImg,
    SupplyImg,
} from "@/assets/images";

export const CarouselOurWorksData = [{ id: 1, src: OurWorksImg }];

export const CarouselImages = [
    { id: 1, src: Hero1 },
    { id: 2, src: Hero2 },
    { id: 3, src: Hero3 },
];

export const ProductCarousel = [
    { id: 1, src: CustomImg },
    { id: 2, src: SupplyImg },
];

export const ProductData = [
    {
        previewSrc: Meja1ProductImg,
        name: "Meja Staff",
        subName: "uk. 120 x 60 x 75",
        sku: "2345-45",
        category: "2345-45",
        description:
            "Material: multiplek lapis HPL, accesories knockers, dekorasi metal gold stainless",
        images: [
            { id: 1, src: Meja1ProductImg },
            { id: 2, src: Meja2ProductImg },
            { id: 3, src: Meja3ProductImg },
            { id: 4, src: Meja4ProductImg },
            { id: 5, src: Meja5ProductImg },
        ],
    },
];
