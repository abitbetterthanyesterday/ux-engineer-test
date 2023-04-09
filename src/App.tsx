import "./App.css";

import { ErrorBoundary } from "./components";
import { AppProvider } from "./contexts/AppContext";
import { Router } from "./pages/router";

export default function App(): JSX.Element {
   return (
      <div className="overscroll-none">
         <ErrorBoundary>
            <AppProvider>
               <Router />
            </AppProvider>
         </ErrorBoundary>
      </div >
   )
}
