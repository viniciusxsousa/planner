import { useState } from "react";

import { Button } from "../../../components/button";
import { DateRange, DayPicker } from "react-day-picker"; 
import { format } from "date-fns/format";

import "react-day-picker/dist/style.css";

import { FiMapPin } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { IoMdClose, IoMdSwitch } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";

interface DestinationAndDateProps {
  isGuestsInputOpen: boolean
  eventStartAndEnd: DateRange | undefined
  closeGuestInput: () => void
  openGuestsInput: () => void
  setDestination: (destination: string) => void
  setEventStartAndEnd: (date: DateRange | undefined) => void
}



export function DestinationAndDate({
  isGuestsInputOpen,
  closeGuestInput,
  openGuestsInput,
  setDestination,
  setEventStartAndEnd,
  eventStartAndEnd
}: DestinationAndDateProps) {

  const [isDateSelectedOpen, setIsDateSelectedOpen] = useState(false);

  const displayDate = eventStartAndEnd && eventStartAndEnd.from && eventStartAndEnd.to
  ? format(eventStartAndEnd.from, "d 'de' LLL").concat(' até ').concat(format(eventStartAndEnd.to, "d 'de' LLL")) : null

  function openDataSelected() {
    setIsDateSelectedOpen(true);
  }

  function closeDataSelected() {
    setIsDateSelectedOpen(false);
  }

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-4">
      <div className="flex items-center gap-2 flex-1" >
        <FiMapPin className="size-5 text-zinc-400" />
        <input 
          disabled={isGuestsInputOpen} 
          type="text" 
          placeholder="para onde você vai?" 
          className="bg-transparent text-lg placeholder-zinc-400 outline-none"
          onChange={event => setDestination(event.target.value)}
          />
      </div>

      <button onClick={openDataSelected} disabled={isGuestsInputOpen} className="flex gap-2 items-center w-[250px]" >
        <CiCalendar className="size-5 text-zinc-400" />
        <span className="text-lg text-zinc-400 w-40 text-left flex-1">
          { displayDate || 'Quando ?' }
        </span>
      </button>

      {/* Modal para selecionar data */}
      {
        isDateSelectedOpen && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center" >
            <div className="bg-zinc-900 rounded-xl py-5 px-6 shadow-shape space-y-5">

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold" >Selecione a data</p>
                  <button onClick={closeDataSelected} ><IoMdClose className="size-6" /></button>
                </div>
              </div>

              <DayPicker mode="range" selected={eventStartAndEnd}  onSelect={setEventStartAndEnd}/>

            </div>
          </div>
        )
      }

      <div className="w-px h-6 bg-zinc-800" />

      {isGuestsInputOpen ? (
        <Button onClick={closeGuestInput} variant="secondary">
          Alterar local/data
          <IoMdSwitch className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestsInput}>
          Continuar
          <GoArrowRight className="size-5" />
        </Button>
      )}
    </div>
  )
}