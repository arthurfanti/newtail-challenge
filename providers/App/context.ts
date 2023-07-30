"use client";

import { Movie } from "@/types";
import { createContext, useContext } from "react";

interface LocalContext {
  query: string;
  setQuery: (query: string) => void;
  data: {
    movies?: Partial<Movie>[];
    error?: string;
    isLoading: boolean;
  };
}

export const AppContext = createContext<LocalContext | undefined>(undefined);

export default function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used whithin AppContextProvider");
  }

  return context;
}
