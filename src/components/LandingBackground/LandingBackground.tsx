import { memo } from "react";
import { PostersColumn } from "./PostersColumn";


function LandingBackground(): JSX.Element {
    const numbersOfColumns = Math.round(window.innerWidth / 160)
         return (
            <>
         <div className="absolute flex h-full min-w-full gap-6 overflow-hidden bg-indigo-950 bg-gradient-to-t from-gray-900 via-slate-950 to-indigo-950 -z-10">
         <div className="absolute top-0 left-0 z-20 w-full h-full transform bg-gradient-radial from-slate-950/80 via-slate-950/40 to-indigo-500/20 via-35%"/>
            {Array.from({length:numbersOfColumns}, (_, i) => <PostersColumn key={i} index={i}/> )}
         </div>
</>
         )
}

export const MemoLandingBackground = memo(LandingBackground)