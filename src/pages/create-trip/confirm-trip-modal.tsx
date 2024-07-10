import { IoMdClose } from "react-icons/io";
import { CiUser, CiMail } from "react-icons/ci";

interface ConfirmTripModal {
    closeConfirmTravelModal: () => void,
    createTrip: () => void
}

export function ConfirmTripModal(props: ConfirmTripModal) {
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center" >
            <div className="bg-zinc-900 w-[640px] rounded-xl py-5 px-6 shadow-shape space-y-5">

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold" >Confirmar criação da viagem</p>
                  <button onClick={props.closeConfirmTravelModal} ><IoMdClose className="size-6" /></button>
                </div>
                <p className="text-sm text-zinc-400" >Para concluir a criação da viagem para <span className="font-semibold text-zinc-100" >Florianópolis, Brasil</span> nas datas de <span className="font-semibold text-zinc-100">16 a 27 de Agosto de 2024</span>, preencha seus dados abaixo:</p>
              </div>

              <form className="space-y-3">

                <div className="py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">

                  <CiUser className="size-5 text-zinc-100" />
                  <input type="text" name='name' placeholder="Seu nome completo" className="w-full bg-transparent text-lg placeholder-zinc-400 w-40 outline-none" />

                </div>

                <div className="py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">

                  <CiMail className="size-5 text-zinc-100" />
                  <input type="email" name='email' placeholder="Seu e-mail pessoal" className="w-full bg-transparent text-lg placeholder-zinc-400 w-40 outline-none" />

                </div>

                <button onClick={props.createTrip} className="w-full bg-lime-300 text-lime-950 rounded-lg py-1.5 h-11 flex items-center justify-center hover:bg-lime-400">
                  <span>Confirmar criação da viagem</span>
                </button>

              </form>
            </div>
          </div>
    )
}