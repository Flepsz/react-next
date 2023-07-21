import { IconCheck } from "@tabler/icons-react";

interface PersonagemProps {
    personagens: any[];
    selecionar(personagem: any): void
}

export default function Personagens(props: PersonagemProps) {
    function renderPersonagens() {
        return (
        <ul>
            {props.personagens.map((p: any) => (
                <li key={p.name}>{p.name}</li>
            ))}
        </ul>
        )
    }

    return (
        <table className="w-3/5 text-xl opacity-70 rounded-lg overflow-hidden">
            <thead>
                <tr className="bg-zinc-900">
                    <th className="p-x font-black">Nome</th>
                    <th className="p-x font-black">Altura</th>
                    <th className="p-x font-black">Peso</th>
                    <th className="p-x font-black">Ações</th>
                </tr>
            </thead>
            <tbody>
                {props.personagens.map((p: any, indice: number) => (
                    <tr 
                        key={p.name}
                        className={`
                            text-center
                            ${indice % 2 === 0 ? 'bg-zinc-700' : 'bg-zinc-900'}
                        `}
                    >
                        <td className="p-2">{p.name}</td>
                        <td className="p-2">{p.height}</td>
                        <td className="p-2">{p.mass}</td>
                        <td className="p-2">
                            <button className="botao" onClick={() => props.selecionar(p)}>
                                <IconCheck size={20} />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}