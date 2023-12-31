interface Botoesprops {
    inc: (valor: number) => void
    dec: (valor: number) => void
}

export default function Botoes(props: Botoesprops) {
    return (
        <div className="flex justify-between pt-2 gap-2">
            <button className="botao flex-1" onClick={() => props.dec(10)}>
                -10
            </button>
            <button className="botao flex-1" onClick={() => props.inc(5)}>
                +5
            </button>
        </div>
    )
}