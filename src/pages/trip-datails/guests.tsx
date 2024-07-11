import { FaRegCheckCircle, FaUserCog } from "react-icons/fa";

export function Guests() {
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl" >Convidados</h2>

            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block flex-1 font-medium text-zinc-100">Jessica White</span>
                        <span className="block truncate text-sm text-zinc-400">jessica.white44@yahoo.com</span>
                    </div>
                    <FaRegCheckCircle className="size-5 text-zinc-400" />
                </div>
            </div>

            <button className="w-full bg-zinc-800 text-zinc-200 rounded-lg py-2 px-5 font-medium flex items-center gap-2 justify-center hover:bg-zinc-700">
                <FaUserCog className="size-5" />
                Gerenciar convidados
            </button>
        </div>
    )
}