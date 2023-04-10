export interface Props {
   isLoading: boolean
   children: React.ReactChild
}

export function Loader({ isLoading, children }: Props): JSX.Element {
   return isLoading ? <div className='flex-grow'>Loading...</div> : <>{children}</>
}
