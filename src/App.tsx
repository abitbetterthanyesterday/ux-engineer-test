import "./App.css";

import { LandingBackground, Logo, SearchInput, ShowList } from "./components";

import { useSearchShow } from "./hooks";

export default function App(): JSX.Element {
   const {
      query,
      error,
      hasSearched,
      shows,
      onSelectShow,
      backToSearch,
   } = useSearchShow();


   if (!hasSearched) {

      return (
         <>
            <LandingBackground />
            <main className="relative flex flex-col items-center justify-center w-screen min-h-screen px-8 overflow-hidden font-sans transition-all">
               <div className="flex flex-col items-center w-screen h-screen overflow-x-hidden">
                  <div className="flex flex-col items-center justify-center w-screen h-screen gap-4 p-16 mb-12">
                     <Logo />
                     <SearchInput />
                  </div>
               </div>
               {error && <div>{error}</div>}
            </main>
         </>
      )
   }




   return (<div className={`w-screen top-full h-[100vh]  text-slate-50 shadow-lg duration-500`}>
      <div className={`bg-gradient-to-t from-slate-950 to-indigo-950 w-screen top-full h-screen z-20 transition-transform duration-1000 text-slate-50 shadow-xl border-t border-indigo-800 flex flex-col py-12`}>
         <SearchInput />
         <div className="flex-col items-start px-12">
            <button
               onClick={backToSearch}
               className="px-4 py-2 text-sm font-bold tracking-wide uppercase transition bg-indigo-800 border-t-2 border-b rounded-md shadow-lg text-slate-50 shadow-indigo-950/10 animation-pulse border-b-indigo-950 border-t-indigo-50/10 active:border-t-0 active:bg-indigo-800/50 active:border-b active:border-b-indigo-700 active:text-slate-50/80 group active:shadow-inner hover:bg-indigo-700 hover:scale-[1.02] focus:outline-none focus:ring-4 ring-indigo-50 flex-grow-0"

            >Back to Search</button>
            <div className="pt-4 -mb-2">
               {shows.length === 0 ? (<h1>Oops no results</h1>) : (
                  <>
                     <span className="py-4 text-sm font-semibold tracking-wide uppercase text-slate-50/80">
                        {shows.length} results for "{query}"
                     </span>
                  </>
               )}
            </div>

            <ShowList shows={shows} onSelectShow={onSelectShow} />
         </div>
      </div>
   </div>
   )
}
