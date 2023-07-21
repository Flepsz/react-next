import { useState } from "react"

/* eslint-disable @next/next/no-img-element */
export default function ImagemAleatoria() {
    const [pesquisa, setPesquisa] = useState<string>('abstract')
    const [tamanho, setTamanho] = useState<number>(300)
    const url = "https://source.unsplash.com/featured/200x200?"

    function renderizarBotao(valor: string) {
        return (
            <button className={`
                bg-blue-800 px-5 py-2 rounded-md
            `} onClick={() => {
                setPesquisa(valor)
            }}>
                {valor}
            </button>
        )
    }

    return ( 
        <div className="flex flex-col gap-3 border border-zinc-700 p-7 rounded-md">
            <div className="flex justify-center gap-7 mb-5">
                <span>{pesquisa}</span>
                <span>{tamanho}x{tamanho}</span>
            </div>
            <img className="rounded-md" src={`${url}${tamanho}x${tamanho}?${pesquisa}`}  alt="Image" />
            <div className="flex justify-between gap-5">
                {renderizarBotao("abstract")}
                {renderizarBotao("city")}
                {renderizarBotao("person")}
            </div>
            <div className="m-auto m-">
                <input 
                type="number" value={tamanho} 
                className="bg-zinc-800 p-2 rounded-md outline-none"
                onChange={e => {
                    setTamanho(+e.target.value)   
                }}
                />
            </div>
        </div>
    )
}