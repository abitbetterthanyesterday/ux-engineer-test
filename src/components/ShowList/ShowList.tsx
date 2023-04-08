import { IShow } from "../../types/shared";

export interface Props {
   shows: Array<IShow>;
   onSelectShow: (show: IShow) => void;
}

export function ShowList({ shows, onSelectShow }: Props): JSX.Element {
   return (
      <>
      <ul className="flex items-start flex-grow gap-8 px-12 pt-4 -mx-12 overflow-x-scroll overflow-y-hidden cursor-pointer scroll-smooth">
         {shows.map((show) => {
            return (
               <li
               className="flex flex-col items-center justify-start flex-grow-0 flex-shrink-0 gap-2 group"
                  key={show.id}
                  onClick={() => onSelectShow(show)}
               >
                  <div 
className="flex-grow-0 overflow-hidden transition border rounded shadow-lg border-indigo-950 group-hover:ring-4 group-hover:ring-offset-4 ring-offset-indigo-950 ring-indigo-500"
                  >
                  {show.image && <img src={show.image.medium} alt="" className="transition duration-1000 group-hover:scale-105" />}
</div>
                  <h3 className="max-w-full pt-2 font-semibold text-center uppercase transition group-hover:underline group-hover:text-indigo-500 overflow-ellipsis">{show.name}</h3>
               </li>
            );
         })}
      </ul>
</>
   );
}
