import { SiteStaticDataHandler } from '@/handlers/SiteStaticDataHandler';
import Site from '@/types/site';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import React from 'react';

export const getStaticProps = (async () => {
  const sites = await SiteStaticDataHandler.GetSites();
  return {props: {sites}};
}) satisfies GetStaticProps<{sites: Site[]}>;

export default function Index({
  sites
}: InferGetStaticPropsType<typeof getStaticProps>) {
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