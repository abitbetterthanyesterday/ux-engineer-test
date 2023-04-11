import { memo, useEffect, useState } from 'react'

import { PostersColumn } from './PostersColumn'

function LandingBackground(): JSX.Element {
   const computeColumnsCount = () => Math.round(window.innerWidth / 160) + 1
   const [columnsCount, setColumnCount] = useState<number>(computeColumnsCount)

   useEffect(() => {
      window.addEventListener('resize', () => setColumnCount(computeColumnsCount()))
      window.addEventListener('orientationchange', () => setColumnCount(computeColumnsCount()))
      const cleanup = () => {
         window.removeEventListener('resize', () => setColumnCount(computeColumnsCount()))
         window.removeEventListener('orientationchange', () =>
            setColumnCount(computeColumnsCount())
         )
      }
      return cleanup
   })

   // We don't want to render the background on the test environment, it's not needed and it's slowing down the tests
   if (process.env.NODE_ENV === 'test') {
      return <></>
   }

   return (
      <div className='absolute z-10 w-screen h-screen overflow-hidden animate-fadeIn'>
         <div className='absolute flex w-[120vw] h-full min-w-full gap-6 overflow-hidden bg-indigo-950 bg-gradient-to-t from-gray-900 via-slate-950 to-indigo-950 -z-10 -ml-[55px]'>
            <div className='absolute top-0 left-0 z-20 w-full h-full transform bg-gradient-radial from-slate-950/80 via-slate-950/50 to-indigo-950/20 via-45%' />
            {Array.from({ length: columnsCount }, (_, i) => (
               <PostersColumn key={i} index={i} />
            ))}
         </div>
      </div>
   )
}

export const MemoLandingBackground = memo(LandingBackground)
