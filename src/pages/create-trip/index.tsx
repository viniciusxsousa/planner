import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../api/api";

import { TripGuestModal } from "./trip-guest-modal";
import { ConfirmTripModal } from "./confirm-trip-modal";
import { DestinationAndDate } from "./steps/destination-and-date";
import { InviteGuest } from "./steps/invite-guest";
import { DateRange } from "react-day-picker";

export function CreateTripPage() {
  const [isGuestsInputOpen, setIsGuestInputopen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isConfirmTravelModalOpen, setIsconfirmTravelModalOpen] = useState(false);
  const [emailsToGuest, setEmailsToGuest] = useState([])

  const [destination, setDestination] = useState('');
  const [owenerName, setOwenerName] = useState('');
  const [owenerEmail, setOwenerEmail] = useState('');
  const [eventStartAndEnd, setEventStartAndEnd] = useState<DateRange | undefined>();

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

  async function createTrip() {

    if(!destination) {
      alert('O campo de destino deve ser informado.');
      return
    }

    if(!eventStartAndEnd?.from && !eventStartAndEnd?.to) {
      alert('A data inicial e final deve ser informada.');
    }

    if(!owenerEmail && !owenerName) {
      alert('Os seus dados devem ser preenchidos.')
      return
    }


     const response: any = await api.post('/trips', {
      destination,
      starts_at: eventStartAndEnd?.from,
      ends_at: eventStartAndEnd?.to,
      emails_to_invite: emailsToGuest,
      owner_name: owenerName,
      owner_email: owenerEmail
    }); 

    const { tripId } = response.data;

    navigate(`/details/${tripId}`); 
  }


  return (
    <div className="h-screen flex items-center justify-center bg-patterns bg-no-repeat bg-center">

      <div className="max-w-3xl w-full px-6 text-center space-y-10 ">
        <div className="flex flex-col items-center gap-3">
          <img src="/public/logo.svg" alt="logo do planner" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className="space-y-4">

          <DestinationAndDate
            closeGuestInput={closeGuestInput}
            isGuestsInputOpen={isGuestsInputOpen}
            openGuestsInput={openGuestsInput}
            setDestination={setDestination}
            setEventStartAndEnd={setEventStartAndEnd}
            eventStartAndEnd={eventStartAndEnd}
          />

          {isGuestsInputOpen && (
            <InviteGuest
              emailsToGuest={emailsToGuest}
              openConfirmTravelModal={openConfirmTravelModal}
              openGuestsModal={openGuestsModal}
            />
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
            setOwenerName={setOwenerName}
            setOwenerEmail={setOwenerEmail}
          />
        )

      }

    </div>
  )
}