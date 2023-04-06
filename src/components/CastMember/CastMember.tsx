import { ICastMember } from "../../types/shared";

export interface Props {
   member: ICastMember;
}

export function CastMember({ member }: Props): JSX.Element {
   return (
      <div className="cast-member">
         <div className="cast-member-image">
            {member.person.image && (
               <img src={member.person.image.medium} alt="" />
            )}
         </div>
         <p data-testid="cast-name">
            <strong>{member.person.name}</strong>
            as {member.character.name}
         </p>
      </div>
   );
}
