import { useSearchShow } from '../hooks'
import { LandingPage } from './LandingPage'
import { ResultsPage } from './ResultsPage'
import { ShowDetailPage } from './ShowDetailPage'

export function Router() {
   const { hasInitialSearched, isLoading, selectedShow } = useSearchShow()

   if (!hasInitialSearched) {
      return <LandingPage />
   } else if (!isLoading && selectedShow?.id) {
      return <ShowDetailPage />
   } else {
      return <ResultsPage />
   }
}
