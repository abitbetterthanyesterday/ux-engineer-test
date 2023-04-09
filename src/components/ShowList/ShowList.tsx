import { IShow } from "../../types/shared";
import { ShowListCard } from "../ShowListCard";

export interface Props {
   shows: Array<IShow>;
}

export function ShowList({ shows }: Props): JSX.Element {

   return (
      <div className="flex flex-grow">
         <ul className={`flex items-start flex-grow gap-8 px-24 pt-4 -mx-12 overflow-x-scroll cursor-pointer md:grid-cols-3 md:grid scroll-smooth ${shows.length === 1 && 'justify-center'}`}>
            {shows.map((show, idx) =>
               <div className={`animate-fadeIn delay-${idx * 75}`}>
                  <ShowListCard key={show.id} show={show} />
               </div>
            )
            }
         </ul >
      </div >
   );
}
