import useAppContext from "@/providers/App/context";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Empty() {
  const { setQuery } = useAppContext();

  const handleClick = () => {
    setQuery("game of thrones");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex flex-1 flex-col flex-wrap items-center justify-center gap-2"
    >
      <Image
        src="/suggestion@2x.png"
        width="275"
        height="112"
        alt="don;t know what to search?"
        className="h-fit"
      />
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3, ease: "easeInOut" }}
        className="text-xl md:text-2xl"
      >
        Don't know what to search?
      </motion.h2>
      <motion.button
        onClick={handleClick}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.3, ease: "easeInOut" }}
        className="appearance-none text-slate-400 font-light"
      >
        Here's an offer you can't refuse
      </motion.button>
    </motion.div>
  );
}
