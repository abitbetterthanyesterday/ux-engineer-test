import { ICastMember } from "../../types/shared";

export interface Props {
   member: ICastMember;
}

export function CastMember({ member }: Props): JSX.Element {
   return (
      <div>
         <div className="w-24 overflow-hidden rounded-lg shadow md:w-48">
            {member.person.image && (
               <img src={member.person.image.medium} alt="" />
            )}
         </div>
         <p data-testid="cast-name" className="flex flex-col items-center justify-center py-2">
            <strong className="text-center">{member.person.name}</strong>
            <em className="text-center">{member.character.name}</em>
         </p>
      </div>
   );
}
