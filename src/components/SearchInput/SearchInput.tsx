import { Loader, Search, X } from 'react-feather';

import { useSearchShow } from "../../hooks";

export function SearchInput() {

   const {
      query,
      isLoading,
      onQueryChange,
      onSearch,
      resetQuery,
   } = useSearchShow();

   return (<form className="flex flex-wrap gap-4" onSubmit={(e) => e.preventDefault()} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault() } }}>
      <div className="relative flex-grow">
         <input
            className="box-border w-full px-6 py-3 pr-12 border-2 border-indigo-800 rounded-md shadow-inner bg-slate-900 focus:border-indigo-400 focus:border-2 focus:shadow-outline focus:ring-indigo-50 focus:ring-4 focus:outline-none text-indigo-50 sm:text-lg placeholder:text-indigo-50/30 sm:min-w-[40ch]"
            autoFocus
            value={query}
            onKeyUp={(e) => {
               if (e.key === "Enter") {
                  onSearch();
                  e.stopPropagation()
               }
            }}
            onChange={(e) =>
               onQueryChange(e.target.value)}
            placeholder="Try 'Star Trek'"
         />
         {query && (
            <button
               title={`Clear search query`}
               onClick={
                  resetQuery
               }
               className="absolute right-2 top-1/4 flex-grow h-1/2 text-sm font-bold tracking-wide uppercase transition bg-transparent shadow-lg text-slate-50 shadow-indigo-950/10 border-indigo-50/50 active:border-t-0 active:bg-indigo-800/50 active:border-b active:border-b-indigo-700 active:text-slate-50/80 group active:shadow-inner hover:bg-indigo-700 hover:scale-[1.02] focus:outline-none focus:ring-4 ring-indigo-50 pr-4">
               <X className="text-indigo-100" />
            </button>)}
      </div>
      <button
         type="button"
         onClick={onSearch}
         disabled={!!isLoading}
         className="flex-grow px-4 py-3 text-sm font-bold tracking-wide uppercase transition bg-indigo-800 border-t-2 border-b rounded-md shadow-lg text-slate-50 shadow-indigo-950/10 animation-pulse border-b-indigo-950 border-t-indigo-50/10 active:border-t-0 active:bg-indigo-800 active:border-b active:border-b-indigo-700 active:text-slate-50/80 group active:shadow-inner hover:bg-indigo-700 hover:scale-[1.02] focus:outline-none focus:ring-4 ring-indigo-50 disabled:bg-indigo-950 disabled:border-t-indigo-950 max-w-sm"
         title="search"
      >
         <div className="flex items-center justify-center transition transform group:active:translate-y-12">

            {isLoading ?
               <>
                  <span className="inline-block animate-spin"><Loader className='h-4' /></span>
                  <span>
                     Loading
                  </span>
               </> : <>
                  <span className="mk-1"><Search className='h-4' /></span>
                  <span>
                     Search
                  </span>
               </>}
         </div>
      </button>
   </form>
   )
}