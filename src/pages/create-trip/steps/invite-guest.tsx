import { FiUserPlus } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";

interface InviteGuestProps {
    openGuestsModal: () => void,
    emailsToGuest: string[],
    openConfirmTravelModal: () => void,
}

export function InviteGuest({
    openGuestsModal,
    emailsToGuest,
    openConfirmTravelModal
}: InviteGuestProps) {
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-4">

        <button onClick={openGuestsModal} className="flex items-center gap-3 flex-1" >
          <FiUserPlus className="size-5 text-zinc-400" />
          { 
            emailsToGuest.length > 0 ? (
              <span className="bg-transparent text-lg placeholder-zinc-400 outline-none" >{emailsToGuest.length} pessoa(s) convidada(s)</span>
            ) : (
              <span className="bg-transparent text-lg placeholder-zinc-400 outline-none" >Quem estará na viagem?</span>
            ) 
          }
        </button>

        <button onClick={openConfirmTravelModal} className="bg-lime-300 text-lime-950 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-lime-400">
          Confirmar viagem
          <GoArrowRight className="size-5" />
        </button>
      </div>
    )
}