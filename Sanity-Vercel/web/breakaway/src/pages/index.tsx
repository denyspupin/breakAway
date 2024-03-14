import Column from "@/components/Column";
import Header from "@/components/Header";
import { client } from "@/sanityClient";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [sites, setSites] = useState();

  useEffect(() => {
    (async function() {
      const sites = await client.fetch('*[_type == "site"]{name, _id}');
      if (sites) setSites(sites);
    })();
  }, []);

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
