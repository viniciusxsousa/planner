import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { api } from "../../api/api";

import { FiPlus } from "react-icons/fi";

import { CreateActiveModal } from "./create-active-modal";
import { ImportLinks } from "./import-links";
import { Guests } from "./guests";
import { Actives } from "./actives";
import { HeaderLocal } from "./header-local";

interface Trip {
    id: string
    destination: string,
    ends_at: string,
    starts_at: string,
    is_confirmed: boolean
}


export function TripDatailsPage() {
    const [isCreateActiveModalOpen, setIsCreateActiveModalOpen] = useState(false);
    const [trip, setTrip] = useState<Trip>();

    const {idTrip} = useParams();

    async function getTrip() {
        const response = await api.get(`/trips/${idTrip}`);
        console.log(response.data.trip);
        setTrip(response.data.trip);
    }

    useEffect(() => {

        getTrip();

    }, [])

    function openCreateActiveModal() {
        setIsCreateActiveModalOpen(true);
    }

    function closeCreateActiveModal() {
        setIsCreateActiveModalOpen(false);
    }

    return (
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
            <HeaderLocal />

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