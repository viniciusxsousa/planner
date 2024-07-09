import { FormEvent, useState } from "react";

import { FiMapPin, FiUserPlus, FiAtSign } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { GoArrowRight, GoPlus } from "react-icons/go";
import { IoMdSwitch, IoMdClose } from "react-icons/io";

export function App() {
  const [isGuestsInputOpen, setIsGuestInputopen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [emailsToGuest, setEmailsToGuest] = useState([
    'vinicius@mail.com'
  ])


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

  function addNewEmailToEnvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    const data = new FormData(event.currentTarget);
    const email: any = data.get('email');

    if(emailsToGuest.includes(email)) {
      return
    }

    setEmailsToGuest([...emailsToGuest, email]);

    event.currentTarget.reset();
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
                <span className="bg-transparent text-lg placeholder-zinc-400 outline-none" >Quem estará na viagem?</span>
              </button>

              <button className="bg-lime-300 text-lime-950 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-lime-400">
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
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center" >
            <div className="bg-zinc-900 w-[640px] rounded-xl py-5 px-6 shadow-shape space-y-5">

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold" >Selecionar convidados</p>
                  <button onClick={closeGuestsModal} ><IoMdClose className="size-6" /></button>
                </div>
                <p className="text-sm text-zinc-400" >Os convidados irão receber e-mails para confirmar a participação na viagem.</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {
                  emailsToGuest.map(email => (
                    <div key={email} className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
                      <span>{email}</span>
                      <button><IoMdClose className="size-4 text-zinc-400" /></button>
                    </div>
                  ))
                }
              </div>

              <div className="w-full h-px bg-zinc-800"></div>

              <form onSubmit={addNewEmailToEnvite} className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2" >

                <FiAtSign className="size-4 text-zinc-400" />
                <input type="email" name='email' placeholder="Digite o e-mail do convidado" className="w-full bg-transparent text-lg placeholder-zinc-400 w-40 outline-none" />

                <button className="w-[150px] bg-lime-300 text-lime-950 rounded-lg py-1.5 px-2 flex items-center justify-between hover:bg-lime-400">
                  <span>Convidar</span>
                  <GoPlus className="size-6 text-lime-950" />
                </button>

              </form>
            </div>
          </div>
        )
      }

    </div>
  )
}