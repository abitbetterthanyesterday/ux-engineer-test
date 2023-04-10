import { ErrorBoundary, SnackMobile } from './components'

import { AppProvider } from './contexts/AppContext'
import { Router } from './pages/router'

export default function App(): JSX.Element {
   return (
      <div className='overflow-x-hidden overscroll-none'>
         <ErrorBoundary>
            <SnackMobile />
            <AppProvider>
               <Router />
            </AppProvider>
         </ErrorBoundary>
      </div>
   )
}
