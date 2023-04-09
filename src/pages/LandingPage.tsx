import { LandingBackground, Logo, SearchInput } from "../components";
import { useSearchShow } from "../hooks";

export function LandingPage() {
   const {
      error,
   } = useSearchShow();

   return (<>
      <LandingBackground />
      <main className="relative flex flex-col items-center justify-center w-screen min-h-screen overflow-hidden font-sans transition-all">
         <div className="flex flex-col items-center w-screen h-screen overflow-x-hidden">
            <div className="flex flex-col items-center justify-center w-screen h-screen gap-4 p-4 px-8 mb-12">
               <Logo />
               <SearchInput />
            </div>
         </div>
         {error && <div>{error}</div>}
      </main>
   </>)

}