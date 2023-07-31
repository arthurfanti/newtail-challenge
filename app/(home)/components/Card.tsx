import Link from "next/link";
import { motion } from "framer-motion";
import { Movie } from "@/types";

interface LocalProps {
  movie: Partial<Movie>;
}

export default function Card({ movie }: LocalProps) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      key={movie.imdbID}
      className="rounded drop-shadow-sm overflow-hidden"
    >
      <Link
        href={`/movie/${movie.imdbID}`}
      >
        <motion.img
          whileHover={{ scale: 1.04 }}
          transition={{ ease: "easeInOut", duration: 0.2 }}
          className="w-max h-[100%]"
          src={movie.Poster}
          alt={movie.Title}
        />
      </Link>
    </motion.div>
  );
}
