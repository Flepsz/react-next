import TabelaSerieA from "@/components/listas/TabelaSerieA"
import { IconBallFootball } from "@tabler/icons-react"

export default function PaginaListaBasica() {
    const times =[
    'Botafogo',
    'Flamengo',
    'Grêmio',
    'São Paulo',
    'Fluminense',
    'Palmeiras',
    'Bragantino',
    'Athletico-PR',
    'Fortaleza',
    'Cruzeiro',
    'Internacional',
    'Atlético-MG',
    'Cuiabá',
    'Santos',
    'Corinthians',
    'Bahia',
    'Goiás',
    'Coritiba',
    'Vasco',
    'América-MG'
    ]

    
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="flex items-center gap-2 text-5xl font-black">
                <IconBallFootball size={50} stroke={1} className="text-green-700" />
                Tabela Série A
            </h1>
            <TabelaSerieA times={times}/>
        </div>
    )
}