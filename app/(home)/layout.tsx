import { ReactNode } from "react";
import type { Metadata } from "next";

interface LocalProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Movie Database Search",
};
export default function HomeLayout({ children }: LocalProps) {
  return <>{children}</>;
}
