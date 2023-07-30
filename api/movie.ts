"use client";

import useSWR from "swr";
import C from "./constants";
import fetcher from "@/services/fetcher";
import { Movie } from "@/types";

function useMovie(id: string) {
  return useSWR<Movie, string>(
    id.length ? [C.GET_MOVIE, id] : null,
    ([url, id]: [string, string]) => fetcher(url, { id }),
  );
}

export default useMovie;
