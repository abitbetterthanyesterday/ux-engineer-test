import { SearchInput, Show, ShowList } from "../components";

import { useSearchShow } from "../hooks";

export function ResultsPage() {
   const {
      shows,
      query,
      selectedShow,
      unSelectShow,
      isLoading
   } = useSearchShow();

   return (
      <div className="flex flex-col w-screen h-screen px-4 py-4 overflow-hidden bg-gradient-to-t from-slate-950 to-slate-900 text-slate-50">
         <div className="pt-12">
            <SearchInput />
         </div>

         {shows.length > 0 && (
            <>
               <p className="block pt-12 text-sm font-semibold tracking-wide text-center uppercase text-slate-50/50 animate-fadeIn">
                  {shows.length} results for "{query}"
               </p>
               <ShowList shows={shows} />
            </>
         )}

         {!isLoading && shows.length === 0 && (
            < p className="block pt-12 my-auto overflow-hidden text-sm font-semibold tracking-wide text-center uppercase align-middle text-slate-50/50 m-w-3/4 text-ellipsis">
               No results for "{query}"
            </p>
         )}

         {selectedShow && <Show selectedShow={selectedShow} unSelectShow={unSelectShow} />}
      </div >
   )
}