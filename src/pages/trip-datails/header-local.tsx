import { CiCalendar } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import { IoMdSwitch } from "react-icons/io";

export function HeaderLocal() {
    return (
        <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">

            <div className="flex items-center gap-2">
                <FiMapPin className="size-5 text-zinc-400" />
                <span className="text-lg text-zinc-100">Teresina, Brasil</span>
            </div>

            <div className="flex items-center gap-2">
                <CiCalendar className="size-5 text-zinc-400" />
                <span className="text-lg text-zinc-100">Teresina, Brasil</span>

                <div className="w-px h-6 bg-zinc-800" />

                <button className="bg-zinc-800 text-zinc-200 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-zinc-700">
                    Alterar local/data
                    <IoMdSwitch className="size-5" />
                </button>
            </div>
        </div>
    )
}