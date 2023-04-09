import { useEffect, useState } from "react";
import { Info, X } from "react-feather";

export function SnackMobile() {
    const isMobile = window.innerWidth < 500
    const [shouldShow, setShouldShow] = useState(!isMobile)

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (shouldShow) {
                setShouldShow(false)
            }
        }, 5000);

        return () => clearTimeout(timeout)
    })

    if (isMobile) return null

    return (<div className={`absolute z-50 flex flex-col gap-4  py-4 px-4 ml-4 text-indigo-100 border border-indigo-500 rounded-lg bg-indigo-800/95 top-2 right-2 transition ${!shouldShow && 'animate-snack'}`}>
        <p className="flex items-center gap-2">
            <Info className="text-indigo-300" />
            For a better experience, visit the mobile version
            <X className="ml-4 transition text-indigo-50/50 hover:text-indigo-100" onClick={() => setShouldShow(false)} />
        </p>
    </div>)
}