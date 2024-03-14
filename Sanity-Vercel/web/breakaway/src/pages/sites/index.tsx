import { SiteStaticDataHandler } from '@/handlers/SiteStaticDataHandler';
import Site from '@/types/site';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import React from 'react';

export const getServerSideProps = (async () => {
  const sites = await SiteStaticDataHandler.GetSites();
  return {props: {sites}};
}) satisfies GetServerSideProps<{sites: Site[]}>;

export default function Index({
  sites
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <ul>
        {
          sites!.map((site, index) => (
            <li key={index} className='underline blue'>
              <Link 
                href={{
                  pathname: '/sites/[slug]',
                  query: { slug: site.slug }
                }}>
                  {site.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}