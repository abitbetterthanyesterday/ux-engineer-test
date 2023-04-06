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
      <div className="app">
         <h1 className="text-3xl font-bold text-red-500 underline">
            TV Database
         </h1>
         <form className="search">
            <input
               autoFocus
               value={query}
               onChange={(e) => onQueryChange(e.target.value)}
               placeholder="Enter the name of a TV show..."
            />
            <button type="button" onClick={onSearch}>
               Search
            </button>
         </form>

         {error && <div>{error}</div>}

         <div>
            <Loader isLoading={isLoading}>
               {show ? (
                  <Show show={show} onCancel={unSelectShow} />
               ) : (
                  <>
                     {hasSearched && query && (
                        <div className="results-meta">
                           {shows.length} results for "{query}"
                        </div>
                     )}
                     <ShowList shows={shows} onSelectShow={onSelectShow} />
                  </>
               )}
            </Loader>
         </div>
      </div>
   );
}
