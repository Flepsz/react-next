import Caixa from "@/components/basicos/Caixa";

export default function PaginaCaixa() {
    return (
        <div className="flex gap-7 p-7">
            <Caixa>Caixa</Caixa>
            <Caixa>Caixa</Caixa>
            <Caixa>
                <ul>
                    <li>#1</li>
                    <li>#2</li>
                    <li>#3</li>
                </ul>
            </Caixa>
        </div>
    )
}