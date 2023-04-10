import { ShowListCard } from '@/components'
import { IShow } from '@/types/shared'

export interface Props {
   shows: Array<IShow>
}

export function ShowList({ shows }: Props): JSX.Element {
   return (
      <div className='flex flex-grow'>
         <ul
            className={`flex items-start flex-grow gap-8 px-24 pt-4 -mx-12 sm:overflow-y-scroll overflow-x-scroll cursor-pointer md:gap-y-16 md:grid md:grid-cols-3 scroll-smooth ${
               shows.length === 1 && 'justify-center'
            } pb-6`}
         >
            {shows.map((show, idx) => (
               <div className={`animate-fadeIn delay-${idx * 75}`} key={show.id}>
                  <ShowListCard show={show} />
               </div>
            ))}
         </ul>
      </div>
   )
}
