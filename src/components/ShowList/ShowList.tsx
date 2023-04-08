import { IShow } from "../../types/shared";
import { ShowListCard } from "../ShowListCard";

export interface Props {
   shows: Array<IShow>;
   onSelectShow: (show: IShow) => void;
}

export function ShowList({ shows, onSelectShow }: Props): JSX.Element {



   return (
      <div className="flex flex-grow">
         <ul className={`flex items-start flex-grow gap-8 px-24 pt-4 -mx-12 overflow-x-scroll cursor-pointer md:grid-cols-3 md:grid scroll-smooth ${shows.length === 1 && 'justify-center'}`}>
            {shows.map((show) => <ShowListCard key={show.id} show={show} />)}
         </ul>

      </div >
   );
}
