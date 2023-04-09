import { useSearchShow } from "../../hooks";
import { ICastMember } from "../../types/shared";
import { CastMember } from "../CastMember";

export type Props = Pick<ReturnType<typeof useSearchShow>, "selectedShow" | "unSelectShow">

export function Show({ selectedShow, unSelectShow }: Props): JSX.Element {
   if (!selectedShow) {
      throw new Error("Show component should not be rendered without a selected show")
   }

   function convertDateToHumanReadableFormat(dateString: string) {
      const date = new Date(dateString);
      const options = { year: "numeric", month: "long", day: "numeric" } as const;
      const formattedDate = new Intl.DateTimeFormat("en-AU", options).format(date);
      return formattedDate
   }


   return (
      <>
         <div className="absolute top-0 left-0 w-screen bg-indigo-950">
            {selectedShow.image && <img src={selectedShow.image.original} alt="" />}
         </div>
         <div className="absolute top-0 left-0 w-screen h-screen overflow-y-scroll bg-gradient-to-t from-slate-950 via-slate-950 to-slate-950/50 via-65% flex flex-col p-4 transition pt-12 pb-4">
            <div className="flex flex-col text-indigo-50">
               <div className="self-center mx-auto overflow-hidden text-center duration-300 rounded-lg w-52 animate-fadeIn border-slate-800 h-72">
                  {selectedShow.image && <img src={selectedShow.image.original} alt={`cover poster for ${selectedShow.name}`} className="object-cover w-full h-full" />}
               </div>
               <div className="mx-auto">
                  <h2 className="pt-2 text-2xl font-bold tracking-wider text-center uppercase duration-300 delay-500 animate-fadeIn">{selectedShow.name}</h2>
                  <div className="py-2 text-sm text-center text-indigo-50/70">
                     ({selectedShow.premiered
                        ? `Premiered ${convertDateToHumanReadableFormat(selectedShow.premiered)}`
                        : "Yet to premiere"})
                  </div>
                  <div className="py-4 max-w-[65ch] duration-300 delay-[10000] animate-fadeIn leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: selectedShow.summary }} />
                  <ul className="grid grid-cols-2 pt-8 justify-items-center md:grid-cols-3 gap-x-8 gap-y-8">
                     {selectedShow._embedded.cast.map((member: ICastMember) => (
                        <li key={member.character.name}>
                           <CastMember member={member} />
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            <button
               className="sticky bottom-0 px-8 py-2 my-2 text-sm font-bold uppercase bg-indigo-800 border-t rounded-lg shadow-md text-indigo-50 hover:bg-indigo-900 tracking-loose border-t-indigo-500"
               onClick={(e) => { unSelectShow(); e.stopPropagation() }}>Back to list</button>
         </div >
      </>)
}
