import { SyntheticEvent } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Movie } from "@/types";
import { handleToggleBookmarks } from "@/utils";
import useLocalStorage from "@/hooks/useLocalStorage";
import { BookmarkIcon as BookmarkIconOutline } from "@heroicons/react/24/outline";
import { BookmarkIcon as BookmarkIconSolid } from "@heroicons/react/24/solid";

interface LocalProps {
  movie: Partial<Movie>;
}

export default function Card({ movie }: LocalProps) {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useLocalStorage<string[]>("bookmarks", []);

  const handleClick = (e: SyntheticEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!movie.imdbID) return;

    const data = handleToggleBookmarks(bookmarks, movie.imdbID);
    setBookmarks(data);
  };

  if (!movie) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      whileHover={{ backgroundSize: "204px 315px" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      key={movie.imdbID}
      className="relative min-h-[300px] rounded drop-shadow-sm overflow-hidden group/Card bg-center bg-[length:194px_300px]"
      style={{ backgroundImage: `url(${movie.Poster})` }}
    >
      <div
        role="button"
        onClick={() => router.push(`/movie/${movie.imdbID}`)}
        className="absolute flex flex-wrap flex-col content-end items-end justify-between top-0 left-0 bottom-0 right-0 p-4 bg-slate-800/80 opacity-0 group-hover/Card:opacity-100 transition-opacity cursor-pointer"
      >
        {bookmarks.indexOf(movie.imdbID) !== -1
          ? (
            <BookmarkIconSolid
              onClick={handleClick}
              className="w-6 h-6 text-pink-300 opacity-0 group-hover/Card:opacity-100 transition-opacity delay-100"
            />
          )
          : (
            <BookmarkIconOutline
              onClick={handleClick}
              className="w-6 h-6 text-slate-400 opacity-0 group-hover/Card:opacity-100 transition-opacity delay-100"
            />
          )}
        <small className="text-right text-slate-400 opacity-0 group-hover/Card:opacity-100 transition-opacity delay-100">
          {movie.Title}
        </small>
      </div>
    </motion.div>
  );
}
