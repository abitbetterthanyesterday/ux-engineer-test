import { IAppContext, IShow, LoadingState } from '@/types/shared'
// It's not a great idea to have a general state for performance reasons, but it's fine for this example
import { ReactNode, createContext, useState } from 'react'

export const initialContext: IAppContext = {
   isLoading: false,
   setIsLoading: () => {
      throw new Error('You forgot to wrap your component in <AppProvider>.')
   },
   query: '',
   setQuery: () => {
      throw new Error('You forgot to wrap your component in <AppProvider>.')
   },
   error: '',
   setError: () => {
      throw new Error('You forgot to wrap your component in <AppProvider>.')
   },
   hasSearched: false,
   setHasSearched: () => {
      throw new Error('You forgot to wrap your component in <AppProvider>.')
   },
   shows: [],
   setShows: () => {
      throw new Error('You forgot to wrap your component in <AppProvider>.')
   },
   selectedShow: null,
   setSelectedShow: () => {
      throw new Error('You forgot to wrap your component in <AppProvider>.')
   },
   hasInitialSearched: false,
   setHasInitialSearched: () => {
      throw new Error('You forgot to wrap your component in <AppProvider>.')
   }
}

export const AppContext = createContext<IAppContext>(initialContext)

export const AppProvider = ({ children }: { children: ReactNode }) => {
   const [query, setQuery] = useState('')
   const [error, setError] = useState('')
   const [isLoading, setIsLoading] = useState<LoadingState>(false)
   const [hasSearched, setHasSearched] = useState(false)
   const [shows, setShows] = useState<IShow[]>([])
   const [selectedShow, setSelectedShow] = useState<IShow | null>(null)
   const [hasInitialSearched, setHasInitialSearched] = useState(false)

   return (
      <AppContext.Provider
         value={{
            setHasInitialSearched,
            hasInitialSearched,
            isLoading,
            setIsLoading,
            query,
            setQuery,
            error,
            setError,
            hasSearched,
            setHasSearched,
            shows,
            setShows,
            selectedShow,
            setSelectedShow
         }}
      >
         {children}
      </AppContext.Provider>
   )
}
