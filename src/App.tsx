import "./App.css";

import { LandingBackground, Loader, Show, ShowList } from "./components";
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

         <div className="flex flex-col items-center gap-8 p-16 px-20 mb-12">
            <div className="flex flex-col items-center gap-1">
               <h1 className="flex-grow py-2 pr-3 text-xl font-bold border-indigo-800 rounded-lg sm:text-3xl lg:text-4xl text-indigo-50 box-sizing ">
                  <span className="relative z-10 inline-block px-3 py-2 mr-3 tracking-wider transform translate-y-px bg-indigo-800 rounded-lg shadow-xl ring-2 ring-offset-4 ring-indigo-400 -rotate-6 ring-offset-slate-950 shadow-indigo-500/10">
                     TV</span> Database
               </h1>
               <h2 className="pt-2 font-bold tracking-wide text-slate-800 text-md">
               </h2>
            </div>

            <form className="flex flex-wrap gap-4">
               <input
                  className="flex-grow px-6 py-3 text-sm border-indigo-800 border-2 rounded-md shadow-inner bg-slate-900 focus:border-indigo-400 focus:border-2 focus:shadow-outline focus:ring-indigo-50 focus:ring-4 focus:outline-none min-w-[30ch] box-border text-indigo-50 sm:text-lg placeholder:text-indigo-50/30"
                  autoFocus
                  value={query}
                  onChange={(e) => onQueryChange(e.target.value)}
                  placeholder="Breaking Bad, The Office, etc."
               />
               <button
                  type="button"
                  onClick={onSearch}
                  className="flex-grow px-4 py-2 text-sm font-bold tracking-wide uppercase transition bg-indigo-800 border-t-2 border-b rounded-md shadow-lg text-slate-50 shadow-indigo-950/10 animation-pulse border-b-indigo-950 border-t-indigo-50/10 active:border-t-0 active:bg-indigo-800/50 active:border-b active:border-b-indigo-700 active:text-slate-50/80 group active:shadow-inner hover:bg-indigo-700 hover:scale-[1.02] focus:outline-none focus:ring-4 ring-indigo-50"
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
