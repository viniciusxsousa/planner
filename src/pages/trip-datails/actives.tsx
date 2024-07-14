import { api } from "../../api/api";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { IoIosCheckmarkCircleOutline } from "react-icons/io";

interface Actives {
    date: string
    activities: {
        id: string
        title: string
        occurs_at: string
    }[]
}


export function Actives() {
    const [ actives, setActives ] = useState< Actives[] | undefined >();

    const {idTrip} = useParams();

    async function getActives() {
        const response = await api.get(`/trips/${idTrip}/activities`);

        setActives(response.data.activities);
    }

    useEffect(() => {
        getActives();
    }, []);

    return (
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
    )
}