import Product from "./product";

export default interface Site {
    _id: string;
    slug: string;
    name: string;
    slogan: string;
    primaryColor: string;
    products: Product[]
}