import { SiteStaticDataHandler } from '@/handlers/SiteStaticDataHandler';
import Site from '@/types/site';
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import React from 'react';


export const getServerSideProps = (async (context: GetServerSidePropsContext) => {
  const { slug } = context.query;
  const site = await SiteStaticDataHandler.GetSite(slug as string);
  return { props: { site }};
}) satisfies GetServerSideProps<{site: Site}>;

export default function Index(
  {site} : InferGetServerSidePropsType<typeof getServerSideProps>
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