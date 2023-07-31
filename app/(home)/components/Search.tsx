import useAppContext from "@/providers/App/context";
import { FormEvent } from "react";

export default function Search() {
  const { setQuery } = useAppContext();
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const search = formData.get("search") as string;

    setQuery(search);
  };

  return (
    <form className="flex flex-auto" onSubmit={handleSearch}>
      <input
        name="search"
        type="search"
        className="flex flex-auto p-2 outline-none rounded h-8 md:h-12 bg-slate-50 font-light text-slate-400 placeholder:text-slate-300"
        placeholder="search movies..."
      />
    </form>
  );
}
