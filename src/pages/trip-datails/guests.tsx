import { FaRegCheckCircle, FaUserCog } from "react-icons/fa";
import { Button } from "../../components/button";

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

            <Button variant="secondary" size="full" >
                <FaUserCog className="size-5" />
                Gerenciar convidados
            </Button>
        </div>
    )
}