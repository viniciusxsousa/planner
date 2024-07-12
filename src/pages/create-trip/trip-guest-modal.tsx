import { FormEvent } from "react";

import { IoMdClose } from "react-icons/io";
import { FiAtSign } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { Button } from "../../components/button";

interface TripGuestModalProps {
    closeGuestsModal: () => void,
    emailsToGuest: string[],
    removeGuestEmail: (email: string) => void,
    addNewEmailToEnvite: (event: FormEvent<HTMLFormElement>) => void

}

export function TripGuestModal(props: TripGuestModalProps) {
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center" >
            <div className="bg-zinc-900 w-[640px] rounded-xl py-5 px-6 shadow-shape space-y-5">

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold" >Selecionar convidados</p>
                  <button onClick={props.closeGuestsModal} ><IoMdClose className="size-6" /></button>
                </div>
                <p className="text-sm text-zinc-400" >Os convidados irão receber e-mails para confirmar a participação na viagem.</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {
                  props.emailsToGuest.map(email => (
                    <div key={email} className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
                      <span>{email}</span>
                      <button onClick={() => props.removeGuestEmail(email)}  ><IoMdClose className="size-4 text-zinc-400" /></button>
                    </div>
                  ))
                }
              </div>

              <div className="w-full h-px bg-zinc-800"></div>

              <form onSubmit={props.addNewEmailToEnvite} className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2" >

                <FiAtSign className="size-4 text-zinc-400" />
                <input type="email" name='email' placeholder="Digite o e-mail do convidado" className="w-full bg-transparent text-lg placeholder-zinc-400 w-40 outline-none" />

                <Button>
                  <span className="w-[90px]">Convidar</span>
                  <GoPlus className="size-6 text-lime-950" />
                </Button>

              </form>
            </div>
          </div>
    )
}