import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
   children: ReactNode
}

interface State {
   hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
   public state: State = {
      hasError: false
   }

   public static getDerivedStateFromError(_: Error): State {
      // Update state so the next render will show the fallback UI.
      return { hasError: true }
   }

   public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      console.error('Uncaught error:', error, errorInfo)
   }

   public render() {
      if (this.state.hasError) {
         return (
            <main className='flex flex-col items-center justify-center p-8 bg-gradient-to-t from-slate-950 to-indigo-950 text-indigo'>
               <h1>Sorry, there was an error. </h1>;
            </main>
         )
      }

      return this.props.children
   }
}
