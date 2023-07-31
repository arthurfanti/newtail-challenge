"use client";

import useMovie from "@/api/movie";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import PageSkeleton from "./components/Skeleton";
import useLocalStorage from "@/hooks/useLocalStorage";
import { BookmarkIcon as BookmarkIconOutline } from "@heroicons/react/24/outline";
import { BookmarkIcon as BookmarkIconSolid } from "@heroicons/react/24/solid";

export default function Page({ params }: { params: { slug: string } }) {
  const { scrollYProgress } = useScroll();
  const { data, isLoading } = useMovie(params.slug);
  const [bookmarks, setBookmarks] = useLocalStorage<string[]>(
    "bookmarks",
    [],
  );

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 400]);

  if (isLoading || !data) {
    return <PageSkeleton />;
  }

  const handleToggleBookmarks = () => {
    // convert to Set so its easier to work with
    const _bookmarks = new Set(bookmarks);
    _bookmarks.has(data?.imdbID)
      ? _bookmarks.delete(data?.imdbID)
      : _bookmarks.add(data?.imdbID);

    // store as Array to be stringified
    setBookmarks(Array.from(_bookmarks));
  };

  console.log(bookmarks);
  return (
    <main>
      <section
        role="heading"
        className="flex flex-wrap flex-col justify-center content-center my-4 md:mt-40 md:mb-6 lg:mt-80 lg:mb-10 mx-1 md:mx-8 lg:mx-40"
      >
        <Link className="w-min" href="/">←</Link>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3, ease: "easeInOut" }}
          className="flex items-center gap-2 font-light text-slate-400"
        >
          {data?.Runtime} · {data?.Year} ·{" "}
          <strong className="py-1 px-2 rounded bg-slate-300 text-slate-600 text-xs font-semibold">
            {data?.Type}
          </strong>
        </motion.div>
        <motion.h1
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 200, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-xl md:text-5xl lg:text-8xl font-extrabold"
        >
          {data?.Title}
        </motion.h1>
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.3, ease: "easeInOut" }}
          onClick={handleToggleBookmarks}
          className="appearance-none w-min z-10 text-xs cursor-pointer text-slate-400 font-light"
        >
          {bookmarks.indexOf(data.imdbID) !== -1
            ? (
              <span className="flex items-center flex-nowrap whitespace-nowrap">
                <BookmarkIconSolid className="w-6 h-6 text-pink-300" />
                remove from bookmarks{" "}
              </span>
            )
            : (
              <span className="flex items-center flex-nowrap whitespace-nowrap">
                <BookmarkIconOutline className="w-6 h-6 text-slate-600" />
                add to bookmarks{" "}
              </span>
            )}
        </motion.button>
      </section>
      <div className="relative w-full h-max md:h-[420px] overflow-hidden">
        <motion.img
          initial={{ y: 400, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 400, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
          src={data?.Poster}
          style={window.innerWidth > 640 ? { y: imageY } : {}}
          className="relative md:blur-sm md:top-[-400px] lg:top-[-400px] lg:min-w-full opacity-70"
        />
        <div className="absolute hidden md:block top-4 left-10">
          <span className="rounded-s p-2 backdrop-blur-sm bg-white/30 text-xs font-semibold text-neutral-900">
            {data?.Genre}
          </span>
          <span className="rounded-e p-2 backdrop-blur-sm bg-orange-300/60 text-xs font-semibold text-neutral-100">
            IMDb {data?.imdbRating}
          </span>
        </div>
        <img
          src={data?.Poster}
          alt={data?.Title}
          className="absolute hidden md:block top-4 right-10 w-[240px] rounded drop-shadow-sm ring-2 ring-slate-800"
        />
      </div>
      <div className="flex flex-wrap flex-col justify-center content-center gap-2 lg:gap-12 mx-1 md:mx-8 lg:mx-40 my-1 md:my-3 lg:my-6">
        <div className="md:hidden flex flex-auto flex-wrap flex-col font-light">
          <span className="text-slate-400 font-semibold">
            IMDb: {data?.imdbRating}
            <small className="font-light ml-1">({data?.imdbVotes} votos)</small>
          </span>
          <span className="text-slate-400 font-semibold">Genre:</span>
          {data?.Genre}
        </div>
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
