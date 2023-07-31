"use client";

import PageSkeleton from "./components/Skeleton";
import Search from "./components/Search";
import Card from "./components/Card";

import useAppContext from "@/providers/App/context";

export default function Home() {
  const { data } = useAppContext();

  if (data.isLoading) {
    return <PageSkeleton />;
  }

  return (
    <main className="flex flex-nowrap flex-col min-h-screen p-2 md:py-6 md:px-12">
      <section className="flex flex-auto" role="search">
        <Search />
      </section>
      <div className="grid grid-cols-1 auto-rows-auto my-4 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-8">
        {data?.movies?.map((movie) => <Card movie={movie} />)}
      </div>
    </main>
  );
}
