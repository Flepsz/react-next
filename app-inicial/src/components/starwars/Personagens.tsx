interface PersonagemProps {
    personagens: any[];
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
        <div>{renderPersonagens()}</div>
    )
}