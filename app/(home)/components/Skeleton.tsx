import { useId } from "react";

export default function PageSkeleton() {
  return (
    <>
      <div className="w-full mx-1 md:mx-6 lg:mx-12 rounded h-6 md:h-12 bg-gray-200 mt-1 md:mt-8">
      </div>
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 lg:grid-cols-5 mx-1 md:mx-6 lg:mx-12">
        {Array.from({ length: 5 }).map(() => (
          <div key={useId()} className="w-full animate-pulse">
            <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600">
            </div>

            <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700">
            </h1>
            <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700">
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
