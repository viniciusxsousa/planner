import { FiMapPin } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";

export function App() {

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape">
          <div className="flex items-center gap-2 flex-1" >
            <FiMapPin className="size-5 text-zinc-400"/>
            <input type="text" placeholder="para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400"/>
          </div>

          <div className="flex gap-2 items-center">
            <CiCalendar className="size-5 text-zinc-400"/>
            <input type="text" placeholder="quando?" className="bg-transparent text-lg placeholder-zinc-400"/>
          </div>
          <button className="bg-lime-300 text-lime-950 rounded-lg py-2 px-5">Continuar</button>
        </div>

        <p className="text-sm text-zinc-500">Ao planejar sua viagem pela plann.er você automaticamente concorda <br/>
        com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade</a>.</p>
      </div>
    </div>
  )
}