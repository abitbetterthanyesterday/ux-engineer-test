import { Poster } from "./Poster";

export function PostersColumn({index}:{index:number}): JSX.Element {
   const translate = `0 -${index*12*Math.random()*10}px`
   return (
      <div className="grid gap-6 transform column-1 translate" style={{translate}}>
         {[...Array(10)].map((_, i) => (
            <Poster key={i} />
         ))}
      </div>
   );
}