import { SiteStaticDataHandler } from '@/handlers/SiteStaticDataHandler';
import Site from '@/types/site';
import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext, GetStaticPropsResult, InferGetStaticPropsType } from 'next';
import React from 'react';


export const getStaticPaths = (async () => {
  const sites = await SiteStaticDataHandler.GetSites();
  const paths = sites!.map((site) => {
    return {
      params: {
        slug: site.slug
      }
    }
  })
  return {
    paths,
    fallback: 'blocking'
  }
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({params}: GetStaticPropsContext) => {
  const slug = params!['slug'];
  const site = await SiteStaticDataHandler.GetSite(slug as string);
  return { props: { site }};
}) satisfies GetStaticProps<{site: Site}>;

export default function Index(
  {site} : InferGetStaticPropsType<typeof getStaticProps>
) {

  return (
    <div>
      <header>
        <p className='font-bold' style={{backgroundColor: site.primaryColor}}>{site.slogan}</p>
        {site.name}
      </header>
    </div>
  )
}