import "./App.css";

import { Loader, Show, ShowList } from "./components";
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
      <main className="container flex flex-col items-center justify-center min-h-screen bg-indigo-950 bg-gradient-to-t from-gray-900 via-slate-950 to-indigo-950 ">
         <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-1">
               <h1 className="flex-grow text-3xl font-bold text-indigo-50">
                  TV Database
               </h1>
               <h2 className="text-sm text-indigo-500">
                  Search for your favorite TV shows
               </h2>
            </div>
            <form className="flex gap-2">
               <input
                  className="px-4 py-2 rounded-md shadow-inner"
                  autoFocus
                  value={query}
                  onChange={(e) => onQueryChange(e.target.value)}
                  placeholder="Breaking Bad"
               />
               <button
                  type="button"
                  onClick={onSearch}
                  className="px-4 py-2 text-sm font-bold tracking-wide uppercase bg-indigo-800 rounded-md text-slate-50"
               >
                  Search
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
