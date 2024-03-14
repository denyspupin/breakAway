import Column from "@/components/Column";
import Header from "@/components/Header";
import { client } from "@/sanityClient";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Site from "@/types/site";

export const getServerSideProps = (async () => {
  const sites: Site[] = await client.fetch('*[_type == "site"]{_id, name}');
  return { props: { sites } };
}) satisfies GetServerSideProps<{sites: Site[]}>;

export default function Home({
  sites,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="flex flex-col flex-1 h-[100dvh]">
      <Header />
      <main className="flex flex-1">
        <Column sites={sites}/>
        <Column />
        <Column />
      </main>
    </div>

  );
}
