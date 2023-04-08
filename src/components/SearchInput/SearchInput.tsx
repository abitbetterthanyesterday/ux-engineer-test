import { useSearchShow } from "../../hooks";

export function SearchInput(){

    const {
        query,
        isLoading,
        onQueryChange,
        onSearch,
     } = useSearchShow();

return(           <form className="flex flex-wrap gap-4" onSubmit={(e) => e.preventDefault()}>
               <input
                  className="flex-grow px-6 py-3 border-indigo-800 border-2 rounded-md shadow-inner bg-slate-900 focus:border-indigo-400 focus:border-2 focus:shadow-outline focus:ring-indigo-50 focus:ring-4 focus:outline-none min-w-[30ch] box-border text-indigo-50 sm:text-lg placeholder:text-indigo-50/30"
                  autoFocus
                  value={query}
                  onKeyUp={(e) => {
                     if (e.key === "Enter") {
                        onSearch();
                     }
                  }}
                  onChange={(e) => 
                     onQueryChange(e.target.value)}
                  placeholder="Breaking Bad, The Office, etc."
               />
               <button
                  type="button"
                  onClick={onSearch}
                  disabled={isLoading}
                  className="flex-grow px-4 py-2 text-sm font-bold tracking-wide uppercase transition bg-indigo-800 border-t-2 border-b rounded-md shadow-lg text-slate-50 shadow-indigo-950/10 animation-pulse border-b-indigo-950 border-t-indigo-50/10 active:border-t-0 active:bg-indigo-800/50 active:border-b active:border-b-indigo-700 active:text-slate-50/80 group active:shadow-inner hover:bg-indigo-700 hover:scale-[1.02] focus:outline-none focus:ring-4 ring-indigo-50"
                  title="search"
               >
                  <span className="inline-block transition transform group:active:translate-y-12">
                  Search
            </span>
               </button>
            </form>
)}