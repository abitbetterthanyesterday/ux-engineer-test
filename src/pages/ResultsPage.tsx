import {
   ErrorMessage,
   LandingBackground,
   Logo,
   LogoSmall,
   SearchInput,
   ShowList
} from '@/components'
import { HelpCircle } from 'react-feather'

import { useSearchShow } from '@/hooks'

export function ResultsPage() {
   const { shows, query, selectedShow, isLoading, hasSearched, error } = useSearchShow()

   const hasNotSearched = !hasSearched && !isLoading && !error
   const hasSearchResults = shows.length > 0 && hasSearched && !isLoading && !error
   const hasNoSearchResults = shows.length === 0 && hasSearched && !isLoading && !error

   return (
      <>
         <div className='sticky top-0'>
            <LandingBackground />
         </div>
         <div className='relative z-20 flex flex-col w-screen h-screen px-4 py-4 overflow-hidden sm:pb-12 sm:h-auto sm:min-h-screen bg-gradient-to-t from-slate-950/90 to-slate-900/90 text-slate-50'>
            <div className='sm:container'>
               <div className='self-start block pb-4 pl-4 sm:hidden'>
                  <LogoSmall />
               </div>
               <div className='self-start hidden pb-8 pl-4 sm:block'>
                  <Logo />
               </div>
               <SearchInput />

               {error && <ErrorMessage />}

               {isLoading && !error && (
                  <p className='block pt-12 text-sm font-semibold tracking-wide text-center uppercase delay-1000 text-slate-50/50 animate-fadeIn'>
                     {isLoading === 'show' && selectedShow
                        ? `Fetching information about "${selectedShow.name}"`
                        : `Fetching results for "${query}"`}
                  </p>
               )}

               {hasNotSearched && (
                  <p className='flex items-center justify-center gap-2 pt-12 my-auto overflow-hidden text-sm font-semibold tracking-wide text-center uppercase align-middle text-slate-50/50 m-w-3/4 text-ellipsis'>
                     <HelpCircle /> Hit search to get started
                  </p>
               )}

               {hasSearchResults && (
                  <>
                     <p className='block pt-12 my-auto overflow-hidden text-sm font-semibold tracking-wide text-center uppercase align-middle sm:pb-8 sm:text-md text-slate-50/50 m-w-3/4 text-ellipsis'>
                        {shows.length === 1
                           ? `Found 1 result for "${query}"`
                           : `Found ${shows.length} results for "${query}"`}
                     </p>
                     <div className='flex-grow'>
                        <ShowList shows={shows} />
                     </div>
                  </>
               )}

               {hasNoSearchResults && (
                  <p className='block pt-12 my-auto overflow-hidden text-sm font-semibold tracking-wide text-center uppercase align-middle text-slate-50/50 m-w-3/4 text-ellipsis'>
                     No results for "{query}"
                  </p>
               )}
            </div>
         </div>
      </>
   )
}
