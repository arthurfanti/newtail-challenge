"use client";

import useAppContext from "@/providers/App/context";
import Link from "next/link";
import { FormEvent } from "react";
import PageSkeleton from "./components/Skeleton";

export default function Home() {
  const { setQuery, data } = useAppContext();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const search = formData.get("search") as string;

    setQuery(search);
  };

  if (data.isLoading) {
    return <PageSkeleton />;
  }

  return (
    <main className="flex flex-nowrap flex-col p-2 md:py-6 md:px-12">
      <section className="flex flex-auto" role="search">
        <form className="flex flex-auto" onSubmit={handleSearch}>
          <input
            name="search"
            type="search"
            className="flex flex-auto p-2 outline-none rounded h-[32px] font-light text-slate-400 placeholder:text-slate-300"
            placeholder="search movies..."
          />
        </form>
      </section>
      <div className="grid grid-cols-1 auto-rows-auto my-4 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-8">
        {data?.movies?.map((movie) => (
          <div
            key={movie.imdbID}
            className="rounded drop-shadow-sm overflow-hidden"
          >
            <Link href={`/movie/${movie.imdbID}`}>
              <img
                className="w-max h-[100%]"
                src={movie.Poster}
                alt={movie.Title}
              />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
