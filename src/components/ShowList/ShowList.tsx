import { IShow } from "../../types/shared";

export interface Props {
   shows: Array<IShow>;
   onSelectShow: (show: IShow) => void;
}

export function ShowList({ shows, onSelectShow }: Props): JSX.Element {
   return (
      <ul className="show-list">
         {shows.map((show) => {
            return (
               <li
                  key={show.id}
                  className="show-preview"
                  onClick={() => onSelectShow(show)}
               >
                  {show.image && <img src={show.image.medium} alt="" />}
                  <span>{show.name}</span>
               </li>
            );
         })}
      </ul>
   );
}
