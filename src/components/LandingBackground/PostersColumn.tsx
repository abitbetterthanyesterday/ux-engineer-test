import { Poster } from './Poster'

export function PostersColumn({ index }: { index: number }): JSX.Element {
   const getTranslateY = () => {
      if (index % 3 === 0) {
         return '-translate-y-[1500px]'
      } else if (index % 3 === 1) {
         return '-translate-y-[3500px]'
      } else {
         return '-translate-y-[2500px]'
      }
   }

   return (
      <div
         className={`grid gap-6 column-1 ${getTranslateY()} even:animate-slideUp odd:animate-slideDown`}
      >
         {[...Array(25)].map((_, i) => (
            <Poster key={i} />
         ))}
      </div>
   )
}
