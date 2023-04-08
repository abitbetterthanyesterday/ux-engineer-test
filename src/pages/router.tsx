import { LandingPage } from "./LandingPage"
import { ResultsPage } from "./ResultsPage"
import { useSearchShow } from "../hooks"

export function Router() {

    const {hasSearched} = useSearchShow()
       if(!hasSearched) {
       return <LandingPage/> }
       else { return <ResultsPage/>}
}