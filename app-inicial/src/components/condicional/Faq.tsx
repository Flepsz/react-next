import { useState } from "react";
import Pergunta from "./Pergunta";

export default function Faq() {
    const [ativo, setAtivo] = useState<number>(0)

    function alternarVisibilidade(indice: number) {
        if (indice === ativo) {
            setAtivo(-1)
        } else {
            setAtivo(indice)
        }
    }

    return (
        <div className="flex flex-col gap-2 md:w-3/4">
            <Pergunta
                indice={0}
                aberta={ativo === 0}
                texto="Quem foi Roger?"
                resposta="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                alternarVisibilidade={alternarVisibilidade}
            />
            <Pergunta
                indice={1}
                aberta={ativo === 1}
                texto="Timas é paterno?"
                resposta="Sim, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                alternarVisibilidade={alternarVisibilidade}
            />
            <Pergunta
                indice={2}
                aberta={ativo === 2}
                texto="Python na minha aula?"
                resposta="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                alternarVisibilidade={alternarVisibilidade}
            />
        </div>
    )
}