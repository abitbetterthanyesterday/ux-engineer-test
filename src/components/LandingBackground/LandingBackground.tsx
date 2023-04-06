import { PostersColumn } from "./PostersColumn";

export function LandingBackground(): JSX.Element {
    const numbersOfColumns = Math.round(window.innerWidth / 160)

         return (<div className="absolute flex h-full min-w-full gap-6 overflow-hidden bg-indigo-950 bg-gradient-to-t from-gray-900 via-slate-950 to-indigo-950 -z-10">
            {Array.from({length:numbersOfColumns}, (_, i) => <PostersColumn key={i} index={i}/> )}
         </div>)
}