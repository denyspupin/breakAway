import { createClient } from "@sanity/client";

export const client  = createClient({
    projectId: 'qe2eg6my',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-03-14'
});