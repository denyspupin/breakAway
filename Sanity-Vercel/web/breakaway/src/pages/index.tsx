import Column from "@/components/Column";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 h-[100dvh]">
      <Header />
      <main className="flex flex-1">
        <Column />
        <Column />
        <Column />
      </main>
    </div>

  );
}
