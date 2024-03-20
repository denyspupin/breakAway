import React from 'react'
import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { SiteStaticDataHandler } from '@/handlers/SiteStaticDataHandler';
import Product from '@/types/product';

export const getStaticPaths = (async () => {
  const products = await SiteStaticDataHandler.GetProducts();
  const paths = products!.map((product) => {
    return {
      params: {
        id: product._id
      }
    }
  });

  return {
    paths,
    fallback: 'blocking'
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({params}: GetStaticPropsContext) => {
  const id = params!['id'];
  const product = await SiteStaticDataHandler.GetProductById(id as string);
  return { props: { product }};
}) satisfies GetStaticProps<{product: Product}>;


export default function Index({ product }: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(product);
  return (
    <div>
      <h1 className='font-bold text-2xl'>{product.name}</h1>
      <h3 className='text-xl'>Price: {product.price}</h3>
      <p className='text-lg'>{product.description}</p>
    </div>
  )
}