import { CiCalendar } from "react-icons/ci";
import { IoMdLink } from "react-icons/io";
import { Button } from "../../components/button";

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

            <Button variant="secondary" size="full" >
                <CiCalendar className="size-5" />
                Alterar local/data
            </Button>
        </div>
    )
}