import { useRef } from "react";
import { useSearchShow } from "../../hooks";
import { IShow } from "../../types/shared";

export interface Props {
    show: IShow
}

export function ShowListCard({ show }: Props) {
    const ref = useRef<HTMLDivElement>(null)
    const { onSelectShow } = useSearchShow()

    return (<li
        className="flex flex-col items-center justify-start flex-grow-0 flex-shrink-0 gap-2 cursor-pointer group max-w-[200px] lg:max-w-[400px]"
        onClick={() => { onSelectShow(show) }}
        tabIndex={0}
        onKeyDown={(e) => {
            if (e.key === 'Enter') {
                onSelectShow(show)
            }
        }}
    >
        <div
            className="flex flex-wrap items-center justify-center flex-grow overflow-hidden transition border rounded shadow-lg cursor-pointer bg-gradient-to-t from-slate-950 to-slate-900 w-52 h-72 border-slate-900 group-hover:ring-4 group-hover:ring-offset-4 ring-offset-indigo-950 ring-indigo-500"
            ref={ref}
        >
            {show.image ? <img src={show.image.medium} alt="" className={`h-full transition duration-1000 rounded-lg group-hover:scale-105`} /> : <p className="text-sm tracking-wider uppercase text-indigo-50/50 group-hover:scale-105">No preview available</p>}
        </div>
        <h3 className="max-w-full pt-4 font-semibold text-center uppercase transition group-hover:underline group-hover:text-indigo-500 overflow-ellipsis">{show.name}</h3>
    </li >)
}