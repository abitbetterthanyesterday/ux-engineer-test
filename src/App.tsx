import "./App.css";

import { Loader, Show, ShowList } from "./components";
import { LandingBackground } from "./components/LandingBackground/LandingBackground";
import { useSearchShow } from "./hooks";

export default function App(): JSX.Element {
   const {
      query,
      isLoading,
      error,
      hasSearched,
      shows,
      show,
      onQueryChange,
      onSearch,
      onSelectShow,
      unSelectShow,
   } = useSearchShow();

   return (
      <main className="relative flex flex-col items-center justify-center w-screen min-h-screen px-8 overflow-hidden font-sans transition-all">
         <LandingBackground/>
         <div className="flex flex-col items-center gap-8 p-16 px-20 mt-12 rounded-lg bg-indigo-950 bg-gradient-to-b from-gray-900/80 via-slate-900/80 to-slate-950/80 ring-indigo-950 ring-2 ring-offset-12">

            <div className="flex flex-col items-center gap-1">
               <h1 className="flex-grow py-2 pr-3 text-xl font-bold border-indigo-800 rounded-lg sm:text-3xl text-indigo-50 box-sizing bg-slate-900/90">
                  <span className="relative z-10 inline-block px-3 py-2 mr-3 tracking-wider transform bg-indigo-800 rounded-lg shadow-xl ring-2 ring-offset-4 ring-indigo-400 -rotate-6 ring-offset-slate-950 shadow-indigo-500/10">
                     TV</span> Database
               </h1>
               <h2 className="pt-2 font-bold tracking-wide text-slate-800 text-md">
               </h2>
            </div>

            <form className="flex flex-wrap gap-2">
               <input
                  className="flex-grow px-6 py-3 text-sm border border-indigo-900 rounded-md shadow-inner bg-indigo-50/10 focus:border-indigo-400 focus:border focus:shadow-outline focus:ring-indigo-500 focus:outline-none min-w-[30ch] box-border text-indigo-50 sm:text-lg"
                  autoFocus
                  value={query}
                  onChange={(e) => onQueryChange(e.target.value)}
                  placeholder="Breaking Bad"
               />
               <button
                  type="button"
                  onClick={onSearch}
                  className="flex-grow px-4 py-2 text-sm font-bold tracking-wide uppercase transition bg-indigo-800 border-t-2 border-b rounded-md shadow-lg text-slate-50 shadow-indigo-950/10 animation-pulse border-b-indigo-950 border-t-indigo-50/10 active:border-t-0 active:bg-indigo-800/50 active:border-b active:border-b-indigo-700 active:text-slate-50/80 group active:shadow-inner hover:bg-indigo-700 hover:scale-[1.02]"
               >
                  <span className="inline-block transition transform group:active:translate-y-12">
                  Search
</span>
               </button>
            </form>
         </div>

         {error && <div>{error}</div>}

         <Loader isLoading={isLoading}>
            {show ? (
               <Show show={show} onCancel={unSelectShow} />
            ) : (
               <>
                  {hasSearched && query && (
                     <div className="flex-grow">
                        {shows.length} results for "{query}"
                     </div>
                  )}
                  <ShowList shows={shows} onSelectShow={onSelectShow} />
               </>
            )}
         </Loader>
      </main>
   );
}
