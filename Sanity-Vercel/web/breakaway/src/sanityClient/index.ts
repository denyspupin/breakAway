import { sanityConfig } from "@/utils/config";
import { createClient } from "@sanity/client";

export const client  = createClient({
    projectId: sanityConfig.projectId,
    dataset: sanityConfig.dataset,
    useCdn: true,
    apiVersion: sanityConfig.apiVersion
});