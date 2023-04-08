import { IShow } from "../../types/shared";
import { useRef } from "react";
import { useSearchShow } from "../../hooks";

export interface Props {
    show: IShow
}

export function ShowListCard({ show }: Props) {
    const ref = useRef<HTMLDivElement>(null)

    const {
        onSelectShow,
        selectedShow,
    } = useSearchShow()
    const isSelected = selectedShow?.id === show.id

    function getTranslateValues(div: HTMLDivElement) {
        if (!div) {
            return;
        }
        const offset = div.getBoundingClientRect()
        return {
            top: `${offset.top}px`,
            left: `${offset.left}px`
        }
    }

    return (<li
        className="flex-col items-center justify-start flex-grow-0 flex-shrink-0 gap-2 cursor-pointer group max-w-[200px]"
        onClick={() => { onSelectShow(show) }}
    >
        <div
            className="flex flex-wrap items-center justify-center flex-grow transition border rounded shadow-lg cursor-pointer bg-gradient-to-t from-slate-950 to-slate-900 w-52 h-72 border-slate-900 group-hover:ring-4 group-hover:ring-offset-4 ring-offset-indigo-950 ring-indigo-500"
            ref={ref}
        >
            <div
                style={isSelected ? {
                    transform: `
                            translateX(-${getTranslateValues(ref.current as HTMLDivElement)} -${getTranslateValues(ref.current as HTMLDivElement)?.top})`
                } : {}}
                className={`${isSelected ? `w-[100vw] absolute duration-1000` : 'w-52'} transition rounded-lg`}>
                {show.image ? <img src={show.image.medium} alt="" className={`w-full transition duration-1000 rounded-lg`} /> : <p className="text-sm tracking-wider uppercase text-indigo-50/50">No preview available</p>}
            </div>
        </div>
        <h3 className="max-w-full pt-4 font-semibold text-center uppercase transition group-hover:underline group-hover:text-indigo-500 overflow-ellipsis">{show.name}</h3>
    </li>)
}