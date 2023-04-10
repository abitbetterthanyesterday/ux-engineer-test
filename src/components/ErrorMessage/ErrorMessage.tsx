import { AlertTriangle } from 'react-feather'

export function ErrorMessage() {
   return (
      <div className='flex items-center flex-grow my-4' role='alert'>
         <div className='flex flex-col gap-2 p-8 text-red-400 border border-red-500 rounded bg-red-900/30 text-red'>
            <h2 className='flex items-center gap-2 pb-2 text-xl font-bold'>
               <AlertTriangle className='text-red-400' />
               An error has occured
            </h2>
            <p>This is an an issue on our end. Please try again later.</p>
            <p>If the problem persists, please report the issue to support@tvdatabase.com</p>
         </div>
      </div>
   )
}
