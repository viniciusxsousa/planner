import { useState } from "react";

import { FiMapPin, FiPlus } from "react-icons/fi";
import { IoMdSwitch, IoIosCheckmarkCircleOutline} from "react-icons/io";
import { CiCalendar } from "react-icons/ci";

import { CreateActiveModal } from "./create-active-modal";
import { ImportLinks } from "./import-links";
import { Guests } from "./guests";
import { Actives } from "./actives";


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

                   <Actives/>
                </div>

                <div className="w-80 space-y-6">
                    <ImportLinks />

                    <div className="w-full h-px bg-zinc-800"></div>

                    <Guests/>
                </div>

            </main>

            {isCreateActiveModalOpen && (
                <CreateActiveModal closeCreateActiveModal={closeCreateActiveModal} />
            )}
        </div>
    )
}