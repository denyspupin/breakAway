import { client } from "@/sanityClient";
import Site from "@/types/site";

export class SiteStaticDataHandler {
    static async GetSites() {
      return await client.fetch<Site[]>('*[_type == "site"]{slug, name}');
    }

    static async GetSite(slug: string) {
      return await client.fetch<Site>(`*[_type == "site" && slug == "${slug}"][0]{slug, name, slogan, primaryColor}`);
    }
}