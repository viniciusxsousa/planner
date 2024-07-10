import { FiMapPin } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { IoMdSwitch } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";

interface DestinationAndDateProps {
    isGuestsInputOpen: boolean,
    closeGuestInput: () => void,
    openGuestsInput: () => void
}



export function DestinationAndDate({
    isGuestsInputOpen, 
    closeGuestInput,
    openGuestsInput 
    }: DestinationAndDateProps) {
        
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-4">
        <div className="flex items-center gap-2 flex-1" >
          <FiMapPin className="size-5 text-zinc-400" />
          <input disabled={isGuestsInputOpen} type="text" placeholder="para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none" />
        </div>

        <div className="flex gap-2 items-center">
          <CiCalendar className="size-5 text-zinc-400" />
          <input disabled={isGuestsInputOpen} type="text" placeholder="quando?" className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none" />
        </div>

        <div className="w-px h-6 bg-zinc-800" />

        {isGuestsInputOpen ? (
          <button onClick={closeGuestInput} className="bg-zinc-800 text-zinc-200 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-zinc-700">
            Alterar local/data
            <IoMdSwitch className="size-5" />
          </button>
        ) : (
          <button onClick={openGuestsInput} className="bg-lime-300 text-lime-950 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-lime-400">
            Continuar
            <GoArrowRight className="size-5" />
          </button>
        )}
      </div>
    )
}