export function Poster(): JSX.Element {
   const url = "https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg"
   return (
      <div className={`w-40 rounded-md shadow-sm bg-slate-950 h-52 relative shadow-slate-900/10`}>
         <div className="absolute z-10 w-full h-full bg-slate-950/90"></div>
         <img src={url} alt="poster" className="object-cover w-full h-full rounded-md" />
      </div>
   );
}