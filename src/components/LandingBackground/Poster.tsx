import { getRandomShowImageUrl } from "./showsList";

export function Poster(): JSX.Element {
   const url = getRandomShowImageUrl()
   return (
      <div className={`w-40 rounded-md shadow-sm bg-slate-950 h-52 relative shadow-slate-900/10`}>
         <div className="absolute z-10 w-full h-full bg-slate-950/50"></div>
         <img src={url} alt="poster" className="object-cover w-full h-full rounded-md" />
      </div>
   );
}