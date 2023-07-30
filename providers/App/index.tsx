"use client";

import { ReactNode, useMemo, useState } from "react";
import { AppContext } from "./context";
import useMovies from "@/api/movies";

interface LocalProps {
  children: ReactNode;
}

export default function AppContextProvider({ children }: LocalProps) {
  const [query, setQuery] = useState("");
  const { data: movies, isLoading, error } = useMovies(query);

  const ContextValue = useMemo(() => ({
    query,
    setQuery,
    data: {
      movies,
      error,
      isLoading,
    },
  }), [query, isLoading]);

  return (
    <AppContext.Provider value={ContextValue}>{children}</AppContext.Provider>
  );
}
