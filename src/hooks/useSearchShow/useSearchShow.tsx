import { IShow } from "../../types/shared";
import { useState } from "react";

export function useSearchShow() {
   const [query, setQuery] = useState<string>("");
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [error, setError] = useState<string>("");
   const [hasSearched, setHasSearched] = useState<boolean>(false);
   const [shows, setShows] = useState<Array<IShow>>([]);
   const [show, setShow] = useState<IShow | null>(null);

   function onQueryChange(nextQuery: string): void {
      setHasSearched(false);
      setQuery(nextQuery);
      setShows([]);
      setShow(null);
      setError("");
   }

   function onSearch(): void {
      setHasSearched(false);
      setIsLoading(true);
      setShows([]);
      setShow(null);
      setError("");

      fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
         .then((r: Response) => r.json())
         .then((json: Array<{ show: IShow }>) => {
            setHasSearched(true);
            setIsLoading(false);
            setShows(json.map((r) => r.show));
         })
         .catch(() => {
            setIsLoading(false);
            setError("Could not load shows.");
         });
   }

   function onSelectShow(show: IShow): void {
      setIsLoading(true);
      setError("");

      fetch(`https://api.tvmaze.com/shows/${show.id}?embed=cast`)
         .then((r: Response) => r.json())
         .then((json: IShow) => {
            setIsLoading(false);
            setShow(json);
         })
         .catch(() => {
            setIsLoading(false);
            setError("Could not load show details.");
         });
   }

   return {
      query,
      isLoading,
      error,
      hasSearched,
      shows,
      show,
      onQueryChange,
      onSearch,
      onSelectShow,
      unSelectShow: () => setShow(null),
   };
}
