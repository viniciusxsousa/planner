import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FiMapPin, FiUserPlus } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { GoArrowRight } from "react-icons/go";
import { IoMdSwitch } from "react-icons/io";
import { TripGuestModal } from "./trip-guest-modal";
import { ConfirmTripModal } from "./confirm-trip-modal";

export function CreateTripPage() {
  const [isGuestsInputOpen, setIsGuestInputopen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isConfirmTravelModalOpen, setIsconfirmTravelModalOpen] = useState(false);
  const [emailsToGuest, setEmailsToGuest] = useState([])

  const navigate = useNavigate();


  function openGuestsInput() {
    setIsGuestInputopen(true);
  }

  function closeGuestInput() {
    setIsGuestInputopen(false);
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true);
  }

  function closeGuestsModal() {
    setIsGuestsModalOpen(false);
  }

  function openConfirmTravelModal() {
    setIsconfirmTravelModalOpen(true);
  }

  function closeConfirmTravelModal() {
    setIsconfirmTravelModalOpen(false);
  }

  function addNewEmailToEnvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email: any = data.get('email');

    if (emailsToGuest.includes(email)) {
      return
    }

    setEmailsToGuest([...emailsToGuest, email]);

    event.currentTarget.reset();
  }

  function removeGuestEmail(email: string) {
    const listGuestUpdate = emailsToGuest.filter(guest => guest != email);

    setEmailsToGuest(listGuestUpdate);
  }

  function createTrip() {
    navigate('/details/123');
  }


  return (
    <div className="h-screen flex items-center justify-center bg-patterns bg-no-repeat bg-center">

      <div className="max-w-3xl w-full px-6 text-center space-y-10 ">
        <div className="flex flex-col items-center gap-3">
          <img src="/public/logo.svg" alt="logo do planner" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className="space-y-4">
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

          {isGuestsInputOpen && (
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
          )}
        </div>

        <p className="text-sm text-zinc-500">Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade</a>.</p>
      </div>

      {
        isGuestsModalOpen && (
          <TripGuestModal 
            closeGuestsModal={closeGuestsModal} 
            emailsToGuest={emailsToGuest}
            removeGuestEmail={removeGuestEmail}
            addNewEmailToEnvite={addNewEmailToEnvite}
            />
        )
      }

      {
        isConfirmTravelModalOpen && (
          <ConfirmTripModal 
            closeConfirmTravelModal={closeConfirmTravelModal}
            createTrip={createTrip}
          />
        )

      }

    </div>
  )
}