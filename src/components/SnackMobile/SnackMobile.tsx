import { Info, X } from 'react-feather'
import { useEffect, useState } from 'react'

const SNACK_DURATION_IN_MS = 5000

export function SnackMobile() {
   const isMobile = window.innerWidth < 768
   const [shouldShow, setShouldShow] = useState(!isMobile)

   useEffect(() => {
      const timeout = setTimeout(() => {
         if (shouldShow) {
            setShouldShow(false)
         }
      }, SNACK_DURATION_IN_MS)

      return () => clearTimeout(timeout)
   })

   if (isMobile) return null

   return (
      <div className='absolute z-50 overflow-hidden top-4 right-4'>
         <div
            className={`flex flex-col gap-4  py-4 px-4 ml-4 text-indigo-100 border border-indigo-500 rounded-lg bg-indigo-800/95 transition ${
               !shouldShow && 'animate-snack'
            }`}
         >
            <p className='flex items-center gap-2'>
               <Info className='text-indigo-300' />
               Visit TV Database on mobile devices for a better experience.
               <X
                  className='ml-4 transition text-indigo-50/50 hover:text-indigo-100'
                  onClick={() => setShouldShow(false)}
               />
            </p>
         </div>
      </div>
   )
}
