import { useState } from "react";

import { FiMapPin, FiPlus } from "react-icons/fi";
import { IoMdSwitch, IoIosCheckmarkCircleOutline, IoMdLink } from "react-icons/io";
import { FaRegCheckCircle, FaUserCog } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";

import { CreateActiveModal } from "./create-active-modal";
import { ImportLinks } from "./import-links";


export function TripDatailsPage() {
    const [isCreateActiveModalOpen, setIsCreateActiveModalOpen] = useState(false);

    function openCreateActiveModal() {
        setIsCreateActiveModalOpen(true);
    }

    function closeCreateActiveModal() {
        setIsCreateActiveModalOpen(false);
    }

    return (
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
            <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">

                <div className="flex items-center gap-2">
                    <FiMapPin className="size-5 text-zinc-400" />
                    <span className="text-lg text-zinc-100">Teresina, Brasil</span>
                </div>

                <div className="flex items-center gap-2">
                    <CiCalendar className="size-5 text-zinc-400" />
                    <span className="text-lg text-zinc-100">Teresina, Brasil</span>

                    <div className="w-px h-6 bg-zinc-800" />

                    <button className="bg-zinc-800 text-zinc-200 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-zinc-700">
                        Alterar local/data
                        <IoMdSwitch className="size-5" />
                    </button>
                </div>
            </div>

            <main className="flex gap-16">

                <div className="flex-1 space-y-6">
                    <div className="flex justify-between">
                        <h2 className="text-3xl font-semibold" >Atividades</h2>
                        <button onClick={openCreateActiveModal} className="bg-lime-300 text-lime-950 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-lime-400">
                            <FiPlus className="size-5" />
                            Continuar
                        </button>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-2.5" >
                            <div className="flex gap-2 items-baseline">
                                <span className="text-xl text-zinc-300 font-semibold" >Dia 17</span>
                                <span className="text-xs text-zinc-500">Sábado</span>
                            </div>

                            <p className="text-zinc-500 text-sm" >Nenhuma atividade cadastrada nessa data.</p>
                        </div>

                        <div className="space-y-2.5" >
                            <div className="flex gap-2 items-baseline">
                                <span className="text-xl text-zinc-300 font-semibold" >Dia 18</span>
                                <span className="text-xs text-zinc-500">Domingo</span>
                            </div>

                            <div className="space-y-2.5">
                                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex justify-between">
                                    <div className="flex items-center gap-2">
                                        <IoIosCheckmarkCircleOutline className="size-5 text-lime-300" />
                                        <span className="text-zinc-100">Corrida de kart</span>
                                    </div>
                                    <span className="text-sm text-zinc-400" >18:00h</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-80 space-y-6">
                    <ImportLinks />

                    <div className="w-full h-px bg-zinc-800"></div>

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
                </div>

            </main>

            {isCreateActiveModalOpen && (
                <CreateActiveModal closeCreateActiveModal={closeCreateActiveModal} />
            )}
        </div>
    )
}