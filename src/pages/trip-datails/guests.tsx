import { useParams } from "react-router-dom";

import { FaRegCheckCircle, FaUserCog } from "react-icons/fa";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";

import { Button } from "../../components/button";

import { api } from "../../api/api";
import { useEffect, useState } from "react";

interface Participants {
    email: string
    id: string
    isConfirmed: boolean
    name: string | null
}

export function Guests() {
    const [participants, setParticipants] = useState<Participants[]>()

    const { idTrip } = useParams();

    async function getParticipants() {
        const response = await api.get(`/trips/${idTrip}/participants`);
        setParticipants(response.data.participants);
    }

    useEffect(() => {
        getParticipants();
    }, [])

    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl" >Convidados</h2>

            <div className="space-y-5">

            </div>

            {participants?.map(participant => (
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block flex-1 font-medium text-zinc-100">{participant.name}</span>
                        <span className="block truncate text-sm text-zinc-400">{participant.email}</span>
                    </div>
                    {participant.isConfirmed ? (<FaRegCheckCircle className="size-5 text-lime-300" />) : (<MdOutlineRadioButtonUnchecked className="size-5 text-zinc-400" />)}
                </div>
            ))}

            <Button variant="secondary" size="full" >
                <FaUserCog className="size-5" />
                Gerenciar convidados
            </Button>
        </div>
    )
}