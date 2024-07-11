import { CiCalendar } from "react-icons/ci";
import { IoMdLink } from "react-icons/io";

export function ImportLinks() {
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl" >Links importantes</h2>

            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block flex-1 font-medium text-zinc-100">Reserva do AirBnB</span>
                        <a href="#" className="block truncate text-xs text-zinc-400">https://www.airbnb.com.br/rooms/104700011</a>
                    </div>
                    <IoMdLink className="size-6 text-zinc-400" />
                </div>
            </div>

            <button className="w-full bg-zinc-800 text-zinc-200 rounded-lg py-2 px-5 font-medium flex items-center gap-2 justify-center hover:bg-zinc-700">
                <CiCalendar className="size-5" />
                Alterar local/data
            </button>
        </div>
    )
}