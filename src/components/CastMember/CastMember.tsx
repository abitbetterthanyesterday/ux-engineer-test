import { ICastMember } from '../../types/shared'

export interface Props {
   member: ICastMember
}

export function CastMember({ member }: Props): JSX.Element {
   return (
      <div>
         <div className='flex items-center justify-center overflow-hidden rounded-lg shadow-lg w-42 md:w-52 aspect-square bg-gradient-to-b from-slate-900 to-indigo-950/50'>
            {member.person.image ? (
               <img
                  src={member.person.image.medium}
                  alt=''
                  className='object-cover w-42 aspect-square'
               />
            ) : (
               <p className='px-4 text-sm text-center uppercase text-indigo-50/50 tracking-loose'>
                  No preview available
               </p>
            )}
         </div>
         <p data-testid='cast-name' className='flex flex-col items-center justify-center py-2'>
            <strong className='text-center'>{member.person.name}</strong>
            <em className='text-center'>{member.character.name}</em>
         </p>
      </div>
   )
}
