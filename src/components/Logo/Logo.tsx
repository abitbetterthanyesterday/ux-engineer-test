import { useSearchShow } from '@/hooks'

export function Logo() {
   const { reset } = useSearchShow()

   return (
      <div
         className='flex flex-col items-center gap-1 transition cursor-pointer hover:scale-[1.02]'
         onClick={reset}
      >
         <h1 className='flex-grow py-2 pr-3 font-sans text-3xl font-bold tracking-wide border-indigo-800 rounded-lg sm:text-3xl lg:text-4xl text-indigo-50 box-sizing'>
            <span className='relative z-10 inline-block px-3 py-2 mr-3 tracking-wider transform translate-y-px bg-indigo-800 rounded-lg shadow-xl ring-2 ring-offset-4 ring-indigo-400 -rotate-6 ring-offset-slate-950 shadow-indigo-500/10 font-display top-1'>
               TV
            </span>{' '}
            Database
         </h1>
      </div>
   )
}

export function LogoSmall() {
   const { reset } = useSearchShow()
   return (
      <div
         className='flex flex-col items-center gap-1 cursor-pointer transition hover:scale-[1.02]'
         onClick={reset}
      >
         <h1 className='flex-grow py-2 pr-3 font-bold border-indigo-800 rounded-lg text-md text-indigo-50 box-sizing '>
            <span className='relative inline-block px-2 py-1 mr-2 tracking-wider transform translate-y-px bg-indigo-800 rounded-lg shadow-xl text-md ring-2 ring-offset-4 ring-indigo-400 -rotate-6 ring-offset-slate-950 shadow-indigo-500/10 font-display top-px'>
               TV
            </span>{' '}
            Database
         </h1>
      </div>
   )
}
