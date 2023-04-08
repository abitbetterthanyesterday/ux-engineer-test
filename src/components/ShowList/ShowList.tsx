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
         {/* {
            translate &&
            <div className="absolute top-0 left-0 w-screen h-screen bg-gradient-to-t from-slate-950 via-slate-950 to-slate-950/50 via-65% flex flex-col p-4 animate-fadeIn duration-1000 transition" onClick={() => setTranslate(false)}>
               <div className="h-1/2"></div>
               <h1>All the information</h1>
               <h2>{translate}</h2>
            </div>
         } */}
      </div >
   );
}
