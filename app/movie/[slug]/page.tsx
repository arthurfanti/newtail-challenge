"use client";

import useMovie from "@/api/movie";
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
  const { data, isLoading } = useMovie(params.slug);

  if (isLoading) {
    return <h1 className="text-9xl">carregando</h1>;
  }
  return (
    <main>
      <section
        role="heading"
        className="flex flex-wrap flex-col justify-center content-center my-4 md:mt-40 md:mb-6 lg:mt-80 lg:mb-10 mx-1 md:mx-8 lg:mx-40"
      >
        <Link href="/">←</Link>
        <span className="flex items-center gap-2 font-light text-slate-400">
          {data?.Runtime} · {data?.Year} ·{" "}
          <strong className="py-1 px-2 rounded bg-slate-300 text-slate-600 text-xs font-semibold">
            {data?.Type}
          </strong>
        </span>
        <h1 className="text-xl md:text-5xl lg:text-8xl font-extrabold">
          {data?.Title}
        </h1>
      </section>
      <div className="relative w-full h-max md:h-[420px] overflow-hidden">
        <img
          src={data?.Poster}
          className="relative md:top-[-220px] lg:top-[-280px] lg:min-w-full opacity-70"
        />
        <div className="absolute top-4 left-10">
          <span className="rounded-s p-2 backdrop-blur-sm bg-white/20 text-xs font-semibold text-neutral-900">
            {data?.Genre}
          </span>
          <span className="rounded-e p-2 backdrop-blur-sm bg-orange-400/30 text-xs font-semibold text-neutral-100">
            IMDb {data?.imdbRating}
          </span>
        </div>
      </div>
      <div className="flex flex-wrap flex-col justify-center content-center gap-2 lg:gap-12 mx-1 md:mx-8 lg:mx-40 my-1 md:my-3 lg:my-6">
        <div className="flex flex-auto flex-wrap flex-col font-light">
          <span className="text-slate-400 font-semibold">Plot:</span>
          {data?.Plot}
        </div>
        <div className="flex flex-auto flex-wrap flex-col font-light">
          <span className="text-slate-400 font-semibold">Actors:</span>
          {data?.Actors.map((actor) => <span key={actor}>{actor}</span>)}
        </div>
      </div>
    </main>
  );
}
