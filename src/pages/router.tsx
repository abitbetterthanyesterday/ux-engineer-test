import { Show } from "../components"
import { useSearchShow } from "../hooks"
import { LandingPage } from "./LandingPage"
import { ResultsPage } from "./ResultsPage"

export function Router() {
    const { hasInitialSearched, isLoading, selectedShow } = useSearchShow()

    if (!hasInitialSearched) {
        return <LandingPage />
    } else if (!isLoading && selectedShow?.id) {
        return <Show />
    } else {
        return <ResultsPage />
    }
}