import { FiTag } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { Button } from "../../components/button";

interface CreateActiveModalProps {
    closeCreateActiveModal: () => void,
}

export function CreateActiveModal({
    closeCreateActiveModal
}: CreateActiveModalProps) {
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center" >
            <div className="bg-zinc-900 w-[640px] rounded-xl py-5 px-6 shadow-shape space-y-5">

                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <p className="text-lg font-semibold" >Cadastrar atividade</p>
                        <button onClick={closeCreateActiveModal} ><IoMdClose className="size-6" /></button>
                    </div>
                    <p className="text-sm text-zinc-400" >Todos convidados podem visualizar as atividades.</p>
                </div>

                <form className="space-y-2">

                    <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                        <FiTag className="size-6 text-zinc-400" />
                        <input type="text" name='title' placeholder="Qual a atividade?" className="w-full bg-transparent text-lg placeholder-zinc-400 w-40 outline-none" />
                    </div>

                    <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                        <CiCalendar className="size-6 text-zinc-400" />
                        <input type="datetime-local" name='time' placeholder="Qual a atividade?" className="w-full bg-transparent text-lg placeholder-zinc-400 w-40 outline-none" />
                    </div>

                    <Button size="full" >
                        <span>Salvar atividade</span>
                    </Button>

                </form>
            </div>
        </div>
    )
}