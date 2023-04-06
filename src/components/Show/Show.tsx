import { ICastMember, IShow } from "../../types/shared";
import { CastMember } from "../CastMember";

export interface Props {
   show: IShow;
   onCancel: () => void;
}

export function Show({ show, onCancel }: Props): JSX.Element {
   const cast = show._embedded.cast;

   return (
      <>
         <div className="show-back">
            <button onClick={onCancel}>Back to list</button>
         </div>
         <div className="show">
            <div className="show-image">
               {show.image && <img src={show.image.original} alt="" />}
            </div>
            <div className="show-details">
               <h2>{show.name}</h2>
               <div className="show-meta">
                  {show.premiered
                     ? "Premiered " + show.premiered
                     : "Yet to premiere"}
               </div>
               <div dangerouslySetInnerHTML={{ __html: show.summary }} />
               <h3>Cast</h3>
               <ul className="cast">
                  {cast.map((member: ICastMember) => (
                     <li key={member.character.name}>
                        <CastMember member={member} />
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </>
   );
}
