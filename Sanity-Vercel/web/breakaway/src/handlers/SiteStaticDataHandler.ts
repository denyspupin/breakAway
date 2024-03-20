import { client } from "@/sanityClient";
import Product from "@/types/product";
import Site from "@/types/site";

export class SiteStaticDataHandler {
    static async GetSites() {
      return await client.fetch<Site[]>('*[_type == "site"]{slug, name}');
    }

    static async GetSite(slug: string) {
      return await client.fetch<Site>(`*[_type == "site" && slug == "${slug}"][0]{_id, slug, name, slogan, primaryColor, "products": *[_type == 'product' && references(^._id)]{name, _id} }`);
    }

    static async GetProducts() {
      return await client.fetch<Product[]>('*[_type == "product"]{_id}');
    }

    static async GetProductById(id: string) {
      return await client.fetch<Product>(`*[_type == "product" && _id == "${id}"][0]{_id, name, price, description}`);
    }
}