import Botoes from "./Botoes";
import Display from "./Display";

export default function Contador() {
    return (
        <div className="flex flex-col p-2 border border-zinc-400 rounded-lg">
            <Display valor={100} />
            <Botoes />
        </div>
    )
}