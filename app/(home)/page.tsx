"use client";

import PageSkeleton from "./components/Skeleton";
import Empty from "./components/Empty";
import Search from "./components/Search";
import Card from "./components/Card";

import useAppContext from "@/providers/App/context";

export default function Home() {
  const { data } = useAppContext();

  if (data.isLoading) {
    return <PageSkeleton />;
  }

  if (data.error) {
    return (
      <span>
        Ops! Something went wrong. Try another search or maybe refreshing the
        page!
      </span>
    );
  }

  return (
    <main className="flex flex-nowrap flex-col gap-2 md:gap-6 min-h-screen p-2 md:py-6 md:px-12">
      <section className="flex" role="search">
        <Search />
      </section>
      {!data.movies && <Empty />}
      <div className="grid grid-cols-1 auto-rows-auto my-4 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-8">
        {data?.movies?.map((movie) => <Card
          key={movie.imdbID}
          movie={movie}
        />)}
      </div>
    </main>
  );
}
