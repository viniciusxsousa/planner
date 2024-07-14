import { CiCalendar } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import { IoMdSwitch } from "react-icons/io";

import { Button } from "../../components/button";
import { format } from "date-fns";

interface Trip {
    id: string
    destination: string,
    ends_at: string,
    starts_at: string,
    is_confirmed: boolean
}

interface HeaderLocalProps {
    trip: Trip | undefined
}

export function HeaderLocal({trip}: HeaderLocalProps) {
    
    const displayDate = trip ? format(trip?.starts_at, "d 'de' LLL").concat(' até ').concat(format(trip?.ends_at, "d 'de' LLL")) : null

    
    return (
        <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">

            <div className="flex items-center gap-2">
                <FiMapPin className="size-5 text-zinc-400" />
                <span className="text-lg text-zinc-100">{trip?.destination}</span>
            </div>

            <div className="flex items-center gap-2">
                <CiCalendar className="size-5 text-zinc-400" />
                <span className="text-lg text-zinc-100">{displayDate}</span>

                <div className="w-px h-6 bg-zinc-800" />

                <Button variant="secondary">
                    Alterar local/data
                    <IoMdSwitch className="size-5" />
                </Button>
            </div>
        </div>
    )
}