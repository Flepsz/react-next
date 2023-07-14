import Image from "next/image"

export default function ImagemAleatoria() {
    let pesquisa: string = ""
    const url = "https://source.unsplash.com/featured/300x300?"

    function urlImagem() {
        return `${url}${pesquisa}`
    }

    function renderizarBotao(valor: string) {
        return (
            <button className={`
                bg-blue-800 px-5 py-2 rounded-md
            `} onClick={() => {
                pesquisa = valor
                console.log(urlImagem());
                
            }}>
                {valor}
            </button>
        )
    }

    return ( 
        <div className="flex flex-col gap-3 border border-zinc-700 p-7 rounded-md">
            <Image src={urlImagem()} height={200} width={200} alt="Image" />
            <div className="flex gap-5">
                {renderizarBotao("abstract")}
                {renderizarBotao("city")}
                {renderizarBotao("person")}
            </div>
        </div>
    )
}