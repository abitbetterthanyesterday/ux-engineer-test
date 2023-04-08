import { ICastMember, IShow } from "../../types/shared";

import { CastMember } from "../CastMember";
import { useRef } from "react";
import { useSearchShow } from "../../hooks";

export interface Props {
    show: IShow
}

export function ShowListCard({ show }: Props) {
    const ref = useRef<HTMLDivElement>(null)

    const {
        isLoading,
        onSelectShow,
        selectedShow,
        unSelectShow,
    } = useSearchShow()
    const isSelected = selectedShow?.id === show.id


    return (<li
        className="flex-col items-center justify-start flex-grow-0 flex-shrink-0 gap-2 cursor-pointer group max-w-[200px]"
        onClick={() => { onSelectShow(show) }}
    >
        <div
            className="flex flex-wrap items-center justify-center flex-grow transition border rounded shadow-lg cursor-pointer bg-gradient-to-t from-slate-950 to-slate-900 w-52 h-72 border-slate-900 group-hover:ring-4 group-hover:ring-offset-4 ring-offset-indigo-950 ring-indigo-500"
            ref={ref}
        >
            <div
                className={`w-52 transition rounded-lg origin-top-left`}>
                {show.image ? <img src={show.image.medium} alt="" className={`w-full transition duration-1000 rounded-lg`} /> : <p className="text-sm tracking-wider uppercase text-indigo-50/50">No preview available</p>}
            </div>
        </div>
        <h3 className="max-w-full pt-4 font-semibold text-center uppercase transition group-hover:underline group-hover:text-indigo-500 overflow-ellipsis">{show.name}</h3>

        {isSelected &&
            <>
                <div className="absolute top-0 left-0 w-screen">
                    {selectedShow.image && <img src={show.image.original} alt="" />}
                </div>
                <div className="absolute top-0 left-0 w-screen h-screen overflow-y-scroll bg-gradient-to-t from-slate-950 via-slate-950 to-slate-950/50 via-65% flex flex-col p-4 transition py-4">
                    {isLoading ? <h1>Loading</h1> : (
                        <>
                            <button
                                className="sticky top-0 self-start py-4"
                                onClick={(e) => { unSelectShow(); e.stopPropagation() }}>Back to list</button>
                            <div className="flex flex-col text-indigo-50">
                                <div className="self-center mx-auto overflow-hidden text-center duration-300 border rounded-lg md:w-72 w-52 animate-fadeIn border-slate-800 min-h-[72]">
                                    {selectedShow.image && <img src={show.image.original} alt="" />}
                                </div>
                                <div className="mx-auto">
                                    <h2 className="pt-2 text-2xl font-bold tracking-wider text-center uppercase duration-300 delay-500 animate-fadeIn">{show.name}</h2>
                                    <div className="py-2 text-sm text-center text-indigo-50/70">
                                        ({selectedShow.premiered
                                            ? "Premiered " + show.premiered
                                            : "Yet to premiere"})
                                    </div>
                                    <div className="py-4 max-w-[65ch] duration-300 delay-[10000] animate-fadeIn leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: show.summary }} />
                                    <ul className="grid grid-cols-2 pt-8 justify-items-center md:grid-cols-3 gap-x-8 gap-y-8">
                                        {selectedShow._embedded.cast.map((member: ICastMember) => (
                                            <li key={member.character.name}>
                                                <CastMember member={member} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </>
                    )}
                </div>
                A

            </>

        }

    </li >)
}