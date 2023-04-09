import { LandingPage } from "./LandingPage"
import { ResultsPage } from "./ResultsPage"
import { useSearchShow } from "../hooks"

export function Router() {

    const { hasInitialSearched } = useSearchShow()
    if (!hasInitialSearched) {
        return <LandingPage />
    }
    else { return <ResultsPage /> }
}