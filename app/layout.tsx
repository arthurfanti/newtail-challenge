"use client";

import "@/app/globals.css";

import AppContextProvider from "@/providers/App";
import { ReactNode } from "react";

interface LocalProps {
  children: ReactNode;
}
import { Roboto_Slab } from "next/font/google";
import { AnimatePresence } from "framer-motion";

const rslab = Roboto_Slab({ subsets: ["latin"] });

export default function HomeLayout({ children }: LocalProps) {
  return (
    <html lang="en">
      <body className={rslab.className}>
        <AnimatePresence mode="popLayout" initial={false}>
          <AppContextProvider>{children}</AppContextProvider>
        </AnimatePresence>
      </body>
    </html>
  );
}
