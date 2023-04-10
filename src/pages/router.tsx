import { useSearchShow } from '@/hooks'
import { LandingPage } from './LandingPage'
import { ResultsPage } from './ResultsPage'
import { ShowDetailPage } from './ShowDetailPage'

export function Router() {
   const { hasInitialSearched, isLoading, selectedShow } = useSearchShow()
   const hasSelectedShow = selectedShow?.id !== undefined && !isLoading

   if (!hasInitialSearched) {
      return <LandingPage />
   } else if (hasSelectedShow) {
      return <ShowDetailPage />
   } else {
      return <ResultsPage />
   }
}
