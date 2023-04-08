import { useRef, useState } from "react";

import { IShow } from "../../types/shared";

export interface Props {
   shows: Array<IShow>;
   onSelectShow: (show: IShow) => void;
}

export function ShowList({ shows, onSelectShow }: Props): JSX.Element {
   // Get position of element in the viewport
   const getOffset = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return {
         left: rect.left + window.scrollX,
         top: rect.top + window.scrollY,
      };
   };

   const ref = useRef<HTMLDivElement>(null)

   function getTranslateValues(div: HTMLDivElement) {
      if (!div) {
         return {
            top: 0,
            left: 0
         }
      }

      const offset = getOffset(div)
      return {
         top: `${offset.top - 100}px`,
         left: `${offset.left}px`
      }
   }

   const [translate, setTranslate] = useState(false)

   return (
      <div className="flex flex-grow">
         <ul className={`flex items-start flex-grow gap-8 px-24 pt-4 -mx-12 overflow-x-scroll cursor-pointer md:grid-cols-3 md:grid scroll-smooth ${shows.length === 1 && 'justify-center'}`}>
            {shows.map((show, i) => {
               return (
                  <li
                     className="flex-col items-center justify-start flex-grow-0 flex-shrink-0 gap-2 cursor-pointer group max-w-[200px]"
                     key={show.id}
                     onClick={() => { i === 0 && ref.current && setTranslate(true) }
                     }
                  >
                     <div
                        className="flex flex-wrap items-center justify-center flex-grow transition border rounded shadow-lg cursor-pointer bg-gradient-to-t from-slate-950 to-slate-900 w-52 h-72 border-slate-900 group-hover:ring-4 group-hover:ring-offset-4 ring-offset-indigo-950 ring-indigo-500"
                        ref={i === 0 ? ref : null}
                     >

                        <div
                           style={translate ? {
                              // translateX(-${getTranslateValues(ref.current as HTMLDivElement).left}) 
                              transform: `
                              translateX(19px) 
                           translateY(-${getTranslateValues(ref.current as HTMLDivElement)?.top})`
                           } : {}}
                           className={`
${translate ? `w-[100vw]
absolute duration-1000
` : 'w-52'}
                        transition rounded-lg`}
                        >
                           {show.image ? <img src={show.image.medium} alt="" className={`w-full transition duration-1000 rounded-lg`} /> : <p className="text-sm tracking-wider uppercase text-indigo-50/50">No preview available</p>}

                        </div>

                     </div>
                     <h3 className="max-w-full pt-4 font-semibold text-center uppercase transition group-hover:underline group-hover:text-indigo-500 overflow-ellipsis">{show.name}</h3>
                  </li>
               );
            })}
         </ul>
         {
            translate &&
            <div className="absolute top-0 left-0 w-screen h-screen bg-gradient-to-t from-slate-950 via-slate-950 to-slate-950/50 via-65% flex flex-col p-4 animate-fadeIn duration-1000 transition" onClick={() => setTranslate(false)}>
               <div className="h-1/2"></div>
               <h1>All the information</h1>
               <h2>{translate}</h2>
            </div>
         }
      </div >
   );
}
