"runtimeuse client";

import useSWR from "swr";
import C from "./constants";
import fetcher from "@/services/fetcher";
import { Movie } from "@/types";

function useMovies(title: string) {
  return useSWR<Partial<Movie>[], string>(
    title.length ? [C.GET_MOVIES, title] : null,
    ([url, title]: [string, string]) => fetcher(url, { title }),
    { suspense: false },
  );
}

export default useMovies;
