export default function PageSkeleton() {
  return (
    <main>
      <section
        role="heading"
        className="flex flex-wrap flex-col justify-center content-center my-4 md:mt-40 md:mb-6 lg:mt-80 lg:mb-10 mx-1 md:mx-8 lg:mx-40"
      >
        <div className="flex items-center gap-2 mb-6">
          <div className="flex w-20 h-4 rounded-2xl bg-slate-600 animate-pulse">
          </div>
          <div className="flex w-20 h-4 rounded-2xl bg-slate-600 animate-pulse">
          </div>
          <div className="flex w-20 h-4 rounded-2xl bg-slate-600 animate-pulse">
          </div>
        </div>
        <div className="flex w-full h-96 lg:h-40 rounded-3xl bg-slate-600 animate-pulse">
        </div>
      </section>
      <div className="flex flex-wrap flex-col justify-center content-center gap-2 lg:gap-12 mx-1 md:mx-8 lg:mx-40 my-1 md:my-3 lg:my-6">
        <div className="flex flex-auto w-full h-4 rounded-2xl bg-slate-600 animate-pulse">
        </div>
        <div className="flex flex-auto w-full h-4 rounded-2xl bg-slate-600 animate-pulse">
        </div>
      </div>
    </main>
  );
}
