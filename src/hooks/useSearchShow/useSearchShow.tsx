import { AppContext } from '@/contexts/AppContext'
import { IShow } from '@/types/shared'
import { useContext } from 'react'

export function useSearchShow() {
   const {
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
      setSelectedShow,
      setHasInitialSearched,
      hasInitialSearched
   } = useContext(AppContext)

   function onQueryChange(nextQuery: string): void {
      setHasSearched(false)
      setQuery(nextQuery)
      setShows([])
      setSelectedShow(null)
      setError('')
   }

   function onSearch(): void {
      if (!query) return

      setHasInitialSearched(true)
      setHasSearched(false)
      setIsLoading('query')
      setShows([])
      setSelectedShow(null)
      setError('')

      fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
         .then((r: Response) => r.json())
         .then((json: Array<{ show: IShow }>) => {
            setHasSearched(true)
            setIsLoading(false)
            setShows(json.map((r) => r.show))
         })
         .catch(() => {
            setIsLoading(false)
            setError('Could not load shows.')
         })
   }

   function onSelectShow(show: IShow): void {
      setIsLoading('show')
      setError('')
      setSelectedShow({ name: show.name } as IShow)

      fetch(`https://api.tvmaze.com/shows/${show.id}?embed=cast`)
         .then((r: Response) => r.json())
         .then((json: IShow) => {
            setSelectedShow(json)
            setIsLoading(false)
         })
         .catch(() => {
            setIsLoading(false)
            setError('Could not load show details.')
         })
   }

   return {
      query,
      isLoading,
      error,
      hasSearched,
      shows,
      selectedShow,
      onQueryChange,
      resetQuery: () => onQueryChange(''),
      onSearch,
      onSelectShow,
      unSelectShow: () => setSelectedShow(null),
      hasInitialSearched,
      reset: () => {
         setHasInitialSearched(false)
         setHasSearched(false)
         setQuery('')
         setShows([])
         setSelectedShow(null)
         setError('')
         setIsLoading(false)
      }
   }
}
