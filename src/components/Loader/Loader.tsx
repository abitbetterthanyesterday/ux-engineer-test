export interface Props {
   isLoading: boolean;
   children: React.ReactChild;
}

export function Loader({ isLoading, children }: Props): JSX.Element {
   return isLoading ? <div>Loading...</div> : <>{children}</>;
}
