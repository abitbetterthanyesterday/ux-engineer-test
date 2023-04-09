import { LandingBackground, Logo, LogoSmall, SearchInput, ShowList } from "../components";

import { useSearchShow } from "../hooks";

export function ResultsPage() {
   const {
      shows,
      query,
      selectedShow,
      isLoading,
      hasSearched,
      error
   } = useSearchShow();

   return (
      <>
         <div className="sticky top-0">
            <LandingBackground />
         </div>
         <div className="relative z-20 flex flex-col w-screen h-screen px-4 py-4 overflow-hidden sm:pb-12 sm:h-auto sm:min-h-screen bg-gradient-to-t from-slate-950/90 to-slate-900/90 text-slate-50">

            <div className="sm:container">
               <div className="self-start block pb-4 pl-4 sm:hidden">
                  <LogoSmall />
               </div>
               <div className="self-start hidden pb-8 pl-4 sm:block">
                  <Logo />
               </div>
               <SearchInput />

               {error && (
                  <div className="flex items-center flex-grow">
                     <div className="flex flex-col gap-2 p-8 text-red-400 border border-red-500 rounded bg-red-900/20 text-red">
                        <h2 className="pb-2 text-xl font-bold">
                           An error has occured
                        </h2>
                        <p>
                           This is an an issue on our end. Please try again later.
                        </p>
                        <p>
                           If the problem persists, please report the issue to support@tvdatabase.com
                        </p>
                     </div>

                  </div>
               )}

               {!hasSearched && !error && (
                  <p className="block pt-12 my-auto overflow-hidden text-sm font-semibold tracking-wide text-center uppercase align-middle text-slate-50/50 m-w-3/4 text-ellipsis">
                     'info' Hit search to get started
                  </p>
               )}

               {isLoading && !error && (
                  <p className="block pt-12 text-sm font-semibold tracking-wide text-center uppercase delay-1000 text-slate-50/50 animate-fadeIn">
                     {isLoading === 'show' ? `Fetching information about "${selectedShow!.name}"` : `Fetching results for "${query}"`}
                  </p>
               )}

               {!isLoading && shows.length > 0 && hasSearched && !error && (
                  <>
                     < p className="block pt-12 my-auto overflow-hidden text-sm font-semibold tracking-wide text-center uppercase align-middle sm:pb-8 sm:text-md text-slate-50/50 m-w-3/4 text-ellipsis">
                        {shows.length === 1 ? `Found 1 result for "${query}"` : `Found ${shows.length} results for "${query}"`}
                     </p>
                     <div className="flex-grow">
                        <ShowList shows={shows} />
                     </div>
                  </>
               )}

               {!isLoading && shows.length === 0 && hasSearched && !error && (
                  <p className="block pt-12 my-auto overflow-hidden text-sm font-semibold tracking-wide text-center uppercase align-middle text-slate-50/50 m-w-3/4 text-ellipsis">
                     No results for "{query}"
                  </p>
               )}

            </div>
         </div >
      </>
   )
}